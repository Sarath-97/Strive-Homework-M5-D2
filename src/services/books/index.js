import express from 'express'
import fs from 'fs'
import { getBooks, writeBooks } from '../../lib/fs-tools'
import uniqid from "uniqid"


const booksRouter = express.Router()

booksRouter.get("/", async (req, res,next) => {

 try {

  const books = await getBooks()

  res.send(books)
   
 } catch (error) {
   next(error)
 }

})

booksRouter.get("/:id", async (req, res,next) => {
  const books = await getBooks()

  const book = books.find(b => b.id === req.params.id)
  res.send(book)
})

booksRouter.post("/", async (req, res,next) => {

  const books = await getBooks()
  const newBook = {...req.body, id: uniqid(), createdAt: new Date()}

  books.push(newBook)

  writeBooks(books)

  res.status(201).send(newBook)
})

booksRouter.put("/:id", async (req, res,next) => {
  const books = await getBooks()

  const remainingBooks = books.filter(b => b.id !== req.params.id)

  const modifiedBook = {...req.body, id: req.params.id}

  remainingBooks.push(modifiedBook) 

  writeBooks(remainingBooks)

  res.send(modifiedBook)

})

booksRouter.delete("/:id", async (req, res,next) => {

  const books = await getBooks()

  const remainingBooks = books.filter(b => b.id !== req.params.id)

  writeBooks(remainingBooks)

  res.status(204).send()
})

export default booksRouter

