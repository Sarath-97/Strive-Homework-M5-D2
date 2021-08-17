import express from "express";
import { getBooks, writeBooks } from "../../lib/fs-tools";
import uniqid from "uniqid";

const booksRouter = express.Router();

booksRouter.get("/", async (req, res, next) => {
  try {
    const books = await getBooks();
    console.log("Qurey params = ", req.query);
    if (req.query && req.query.title) {
      const filteredBooks = books.filter((b = b.title === req.params.title));
      res.send(filteredBooks);
    } else {
      res.send(books);
    }
  } catch (error) {
    next(error);
  }
});

booksRouter.get("/:id", async (req, res, next) => {
  try {

    const books = await getBooks();

    const book = books.find((b) => b.id === req.params.id);
    
    
    res.send(book);
  
  } catch (error) {
    next(error)
  }
});

booksRouter.post("/", async (req, res, next) => {

  try {
    
    const books = await getBooks();
  const newBook = {id: uniqid(), ...req.body, createdAt: new Date() };

  books.push(newBook);

  writeBooks(books);

  res.status(201).send(newBook);

  } catch (error) {
    next(error)
  }

});

booksRouter.put("/:id", async (req, res, next) => {
  const books = await getBooks();

  try {

    const remainingBooks = books.filter((b) => b.id !== req.params.id);

  const modifiedBook = { ...req.body, id: req.params.id };

  remainingBooks.push(modifiedBook);

  await writeBooks(remainingBooks);

  res.send(modifiedBook);
    
  } catch (error) {
    next(error)
  }


});

booksRouter.delete("/:id", async (req, res, next) => {

  try {
    const books = await getBooks();

  const remainingBooks = books.filter((b) => b.id !== req.params.id);

  writeBooks(remainingBooks);

  res.status(204).send();
    
  } catch (error) {
    next(error)
  }
  
});

export default booksRouter;
