const initialState={todo:[],loading:true,error:null}
const deleteTodoListReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case 'DELETE_TODOLIST_REQUEST':
            return{
                ...state,loading:true
            } 
        case 'DELETE_TODOLIST_SUCCESS':
            return{
                ...state,todo:action.payload
            }
        case 'DELETE_TODOLIST_FAIL':
            return {...state,loading:false,error:action.payload }
        default:
            return state;

    }

}


export default deleteTodoListReducer;