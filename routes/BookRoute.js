import express from "express";
import {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/Books.js";

const router = express.Router();

router.get('/books', getAllBook);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;