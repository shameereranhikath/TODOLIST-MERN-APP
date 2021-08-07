import React, { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {updateTodoItem,deleteTodoItem} from '../../actions/todoActions'
import {useHistory} from "react-router-dom";

const EditTodo = (props) => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.todo)
  const editData=data.todos.find(x=>x._id===props.match.params.id)
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   let history=useHistory()
  useEffect(() => {
   setTitle(editData.title)
   setDescription(editData.description)
  }, [])
  const todolistItem={
    _id:props.match.params.id,
    title:title,
    description:description
  }

  // console.log(todolistItem._id)
   const onHandleSubmit=()=>{
     console.log("button clicked")
    dispatch(updateTodoItem(todolistItem));
    history.push(`/todos`)
      
   }


   const onHandleDelete=()=>{
dispatch(deleteTodoItem(props.match.params.id))
alert("Successfully Deleted")
 history.push(`/todos`)
   }

  return (

   
    <section className='flex flex-col min-h-screen items-center justify-center  ml-3 mr-3 flex-row py-20'>
      <form onSubmit={onHandleSubmit}>
        <span className='text-sm text-gray-500 font-semibold uppercase'>
          Hey Buddy your editing
        </span>
        <h3 className='mb-8 text-2xl text-green-600 text-red-500 font-bold font-heading'>
          Todo
        </h3>

        <input
          className='w-full py-3 pl-3 mb-4 bg-white border rounded-lg'
          type='text'
          placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea
          className='w-full py-3 pl-3 mb-4 bg-white border rounded-lg'
          type='password'
          placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                
        <button
          type='submit'
          className='w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-green-500 hover:bg-gray-600 rounded transition duration-200'>
          Update
        </button>
      </form>
      <button
        type='submit'
        className='w-1/3 inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-red-500 hover:bg-gray-600 rounded transition duration-200' onClick={onHandleDelete}>
        Delete
      </button>
    </section>
  );
};

export default EditTodo;
