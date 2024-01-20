import express from "express";
import {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/books.js";

const router = express.Router();

router.get('/books', getAllBook);
router.get('/books/:id', getBookById);
router.post('/', createBook);
router.patch('/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;