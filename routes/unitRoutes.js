import express from 'express';
import {
  createUnit,
  getUnits,
  getUnit,
  updateUnit,
  deleteUnit
} from '../controllers/unitController.js';
import { protect } from '../controllers/authController.js';

const router = express.Router();

// Protect all routes after this middleware
router.use(protect);

router
  .route('/')
  .get(getUnits)
  .post(createUnit);

router
  .route('/:id')
  .get(getUnit)
  .put(updateUnit)
  .delete(deleteUnit);

export default router;