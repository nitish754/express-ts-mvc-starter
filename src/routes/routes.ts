import {Router} from 'express'
import { addTask, getExample, getExample2 } from '../controllers/exampleController';
import { AddTaskValidation } from '../validations/TaskValidation/TaskValidation';

const router = Router();

router.get("/", getExample)
router.get("/example",getExample2)
router.post('/add-task',AddTaskValidation,addTask)

export default router;