import express  from "express"
import BooksController from "../controllers/booksController.js"

const router = express.Router()

router
    .get("/books", BooksController.getBooks)
    .get("/Books/search", BooksController.getBooksByPublishingCompany)
    .get("/books/:id", BooksController.getBooksById)
    .post("/books", BooksController.insertBooks)
    .put("/books/:id", BooksController.updateBooks)
    .delete("/books/:id", BooksController.deleteBooks)
export default router