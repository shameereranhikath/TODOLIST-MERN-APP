
const todolistReducer=(state={},action)=>{
switch (action.type)
{
    case 'ADD_TOLIST_REQUEST':
        return {
            loading:true
        }
    case 'ADD_TOLIST_SUCCESS':
        return{
        ...state,
        todo:action.payload,
        loading:false
        } 
    case 'ADD_TOLIST_RESET':
        return{  }
    case 'ADD_TOLIST_FAIL':
        return{ 
            loading:false,
            error:action.payload
         }
    default:
        return state
        
}

}


export default todolistReducer;