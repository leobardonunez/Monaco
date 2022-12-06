import express from 'express';
import { getAll } from '../controllers/EstadoController';



const router = express.Router()


router.get('/' , getAll)


export default router;