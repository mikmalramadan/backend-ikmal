import express from "express";
import {
  getCategory, 
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from "../controllers/Categories.js";

const router= express.Router();

router.get('/categories', getCategory);
router.get('/categories/:id', getCategoryById);
router.post('/categories', createCategory);
router.patch('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

export default router;