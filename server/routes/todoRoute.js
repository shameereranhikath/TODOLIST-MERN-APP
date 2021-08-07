import express from 'express'
import { createTodo,fetchAllTodos,fetchAllTodo,updateTodo,deleteTodo} from '../controller/todoController.js';
// import cors from 'cors'
const todoRoute=express.Router();



// todoRoute.use(cors())

todoRoute.get('/todos',fetchAllTodos);

// todoRoute.get

todoRoute.post('/login',createTodo);

todoRoute.get('/todo/:id',fetchAllTodo);
todoRoute.put('/todo/:id',updateTodo);
todoRoute.delete('/remove/:id',deleteTodo)



export default todoRoute;