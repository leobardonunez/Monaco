import express from 'express'
import { create, deleteTask, getAll, getOne, update } from '../controllers/TaskController.js'


const router = express.Router()

router.get('/' , getAll)
router.get('/:id' , getOne)
router.post('/' , create)
router.put('/:id' , update)
router.delete('/:id' , deleteTask)

export default router;