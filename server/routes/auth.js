// routes/auth.js
import express from 'express';
import login, { Users } from '../controllers/authController.js';


const router = express.Router();

router.post('/auth/login', login);
router.get('/auth/data', Users);


export default router;
