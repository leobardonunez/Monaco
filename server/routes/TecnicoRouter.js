import express from 'express';
import { getAll } from '../controllers/TecnicoController.js';



const router = express.Router()

router.get('/',getAll)

export default router;