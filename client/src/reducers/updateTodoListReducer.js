const initialState={todo:[],loading:true,error:null}
const updateTodoListReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case 'UPDATE_TODOLIST_REQUEST':
            return{
                ...state,loading:true
            } 
        case 'UPDATE_TODOLIST_SUCCESS':
            return{
                ...state,todo:action.payload
            }
        case 'UPDATE_TODOLIST_FAIL':
            return {...state,loading:false,error:action.payload }
        default:
            return state;

    }

}


export default updateTodoListReducer;