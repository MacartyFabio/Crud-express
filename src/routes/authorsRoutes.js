import express  from "express"
import AuthorsController from "../controllers/authorsController.js"

const router = express.Router()

router
    .get("/authors", AuthorsController.getAuthors)
    .post("/authors", AuthorsController.insertAuthors)
    .put("/authors/:id", AuthorsController.updateAuthors)
    .get("/authors/:id", AuthorsController.getAuthorsById)
    .delete("/authors/:id", AuthorsController.deleteAuthors)
export default router