import express from "express";
import {
  getBook, 
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/books.js";

const router= express.Router();

router.get('/book', getBook);
router.get('/book/:id', getBookById);
router.post('/book', createBook);
router.patch('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

export default router;