import express from 'express';
import {
  register,
  login,
  protect,
  updatePassword
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected routes
router.use(protect);
router.put('/updatePassword', updatePassword);

export default router;