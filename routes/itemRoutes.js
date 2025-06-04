import express from 'express';
import {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} from '../controllers/itemController.js';
import { protect } from '../controllers/authController.js';

const router = express.Router();

// Protect all routes after this middleware
router.use(protect);

router
  .route('/')
  .get(getItems)
  .post(createItem);

router
  .route('/:id')
  .get(getItem)
  .put(updateItem)
  .delete(deleteItem);

export default router;