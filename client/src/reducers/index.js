import {combineReducers} from 'redux'
import todolistReducer from './todolistReducer'
import fetchTodoListReducer from './fetchTodoListReducer';
import updateTodoListReducer from './updateTodoListReducer';
import deleteTodoListReducer from './deleteTodoListReducer';





const allReducers=combineReducers({
    todolistReducer,
    todo:fetchTodoListReducer,
    updatetodo:updateTodoListReducer,
    deletetodo:deleteTodoListReducer

})


export default allReducers;