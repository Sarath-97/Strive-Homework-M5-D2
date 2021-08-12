import express from 'express'
import fs from 'fs'
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'
import uniqid from "uniqid"
 
const booksJSONPath = join(dirname(fileURLToPath(import.meta.url)), "books.json")

const booksRouter = express.Router()

const getBooks = () => JSON.parse(fs.readFileSync(booksJSONPath))


const writeBooks = content => fs.writeFileSync(booksJSONPath, JSON.stringify(content))

booksRouter.get("/", (req, res) => {
  const books = getBooks()
  res.send(books)
})

booksRouter.get("/:id", (req, res) => {
  const books = getBooks()

  const book = books.find(b => b.id === req.params.id)
  res.send(book)
})

booksRouter.post("/", (req, res) => {

  const books = getBooks()
  const newBook = {...req.body, id: uniqid(), createdAt: new Date()}

  books.push(newBook)

  writeBooks(books)

  res.status(201).send(newBook)
})

booksRouter.put("/:id", (req, res) => {
  const books = getBooks()

  const remainingBooks = books.filter(b => b.id !== req.params.id)

  const modifiedBook = {...req.body, id: req.params.id}

  remainingBooks.push(modifiedBook) 

  writeBooks(remainingBooks)

  res.send(modifiedBook)

})

booksRouter.delete("/:id", (req, res) => {

  const books = getBooks()

  const remainingBooks = books.filter(b => b.id !== req.params.id)

  writeBooks(remainingBooks)

  res.status(204).send()
})

export default booksRouter

