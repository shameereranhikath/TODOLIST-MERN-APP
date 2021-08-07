import axios from 'axios'


export const AddTodoItem=(todoItem)=>async(dispatch,getState)=>{

try
{
dispatch({type:'ADD_TODO_REQUEST'})

const config={
    headers:{
        contentType:'application/json',
    },
}

const {data}=await axios.post('http://localhost:5000/api/login',todoItem,config)

dispatch({type:'ADD_TODO_SUCCESS',payload:data})
dispatch({type:'ADD_TODO_RESET'})

}
catch(error)
{
    dispatch({type:'ADD_TODO_FAIL',payload:error.message})
}
}

export const getTodoItem=()=>async(dispatch,getState)=>{

    try
    {
    dispatch({type:'FETCH_TODO_REQUEST'}) 
    const {data}=await axios.get('http://localhost:5000/api/todos')
    // console.log("ccccc"+ data);
    dispatch({type:'FETCH_TODO_SUCCESS',payload:data})
    // dispatch({type:'ADD_TODO_RESET'})
    //console.log('bbb'+getState.todos);
    
    }
    catch(error)
    {
        dispatch({type:'FETCH_TODO_FAIL',payload:error.message})
    }
    }

    export const updateTodoItem=(todoItemUpdate)=>async(dispatch,getState)=>{

        try
        {
        dispatch({type:'UPDATE_TODOLIST_REQUEST'})
        
        const config={
            headers:{
                contentType:'application/json',
            },
        }
        //console.log(`id from url:${todoItemUpdate._id}`)
        const {data}=await axios.put(`http://localhost:5000/api/todo/${todoItemUpdate._id}`,todoItemUpdate,config)
        
        dispatch({type:'UPDATE_TODOLIST_SUCCESS',payload:data})
        // dispatch({type:'UPDATE_TODOLIST_FAIL'})
        
        }
        catch(error)
        {
            dispatch({type:'UPDATE_TODOLIST_FAIL',payload:error.message})
        }
        }
        export const deleteTodoItem=(todoItemId)=>async(dispatch,getState)=>{

            try
            {
            dispatch({type:'DELETE_TODOLIST_REQUEST'})
            
            // const config={
            //     headers:{
            //         contentType:'application/json',
            //     },
            // }
           // console.log(`id from url:${todoItemId}`)
            const {data}=await axios.delete(`http://localhost:5000/api/remove/${todoItemId}`)
            
            dispatch({type:'DELETE_TODOLIST_SUCCESS',payload:data})
            // dispatch({type:'UPDATE_TODOLIST_FAIL'})
            
            }
            catch(error)
            {
                dispatch({type:'DELETE_TODOLIST_FAIL',payload:error.message})
            }
            }
        