import express from 'express';
import { getAll } from '../controllers/EstadoController.js';



const router = express.Router()


router.get('/' , getAll)


export default router;