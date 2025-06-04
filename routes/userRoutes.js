import express from 'express';
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getMe,
  updateMe
} from '../controllers/userController.js';
import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router();

// Protect all routes after this middleware
router.use(protect);

// User routes
router.get('/:id', getMe, getUser);
router.put('/updateMe', updateMe);

// Admin only routes
router.use(restrictTo('admin'));

router
  .route('/')
  .get(getUsers);

router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;