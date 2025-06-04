import express from 'express';
import multer from 'multer';
import storage from '../config/store.js';
import { protect } from '../controllers/authController.js';
import { uploadFile } from '../controllers/fileUploadController.js';

const router = express.Router();
const upload = multer({ storage });

router.post('/', protect , upload.single('image'), uploadFile);


export default router;