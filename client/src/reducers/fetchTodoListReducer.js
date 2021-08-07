

const initialState={todos:[],loading:true,error:null,
}

const fetchTodoListReducer=(state=initialState,action)=>{
    switch (action.type)
{
    case 'FETCH_TODO_REQUEST':
        return {
            ...state,
            loading:true
        }
    case 'FETCH_TODO_SUCCESS':
        return{
            ...state,
        todos:action.payload,
        loading:false
        } 
    case 'FETCH_TODO_FAIL':
        return{ 
            ...state,
            loading:false,
            error:action.payload
         }
    default:
        return state
        
}

}

export default fetchTodoListReducer;