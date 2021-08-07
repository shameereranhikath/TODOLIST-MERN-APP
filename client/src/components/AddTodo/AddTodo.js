import React, { useState} from 'react';
import todoSVG from '../../img/book.svg';
import { useSelector,useDispatch } from 'react-redux';
import {AddTodoItem} from '../../actions/todoActions'
import {useHistory} from "react-router-dom";
const AddTodo = () => {
  let history=useHistory()
const[title,setTitle]=useState('');
const[description,setDescription]=useState('');

const data=useSelector((state)=>state.todolistReducer)
const dispatch = useDispatch();
 const onHandleClick=(event)=>{
   const todo={title,description}
    // event.preventDefault()
    // console.log("Submitted the form")
    // console.log(title)
   dispatch(AddTodoItem(todo));
   history.push(`/todos`)
 }
  return (
    <section className='relative min-h-screen py-20'>
      <div className='absolute top-0 left-0 lg:bottom-0 h-112 lg:h-auto w-full lg:w-8/12 bg-gray-500'></div>
      <div className='relative container px-4 mx-auto'>
        <div className='flex flex-wrap items-center -mx-4'>
          <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0'>
            <div className='max-w-md'>
              <img
                class='mx-auto lg:mx-0 lg:ml-auto w-full h-80 lg:h-112 object-cover rounded-lg'
                src={todoSVG}
                alt=''
              />
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4'>
            <div className='lg:max-w-md p-6 bg-gray-50 text-center rounded-lg'>
              <form onSubmit={onHandleClick}>
                <span className='text-sm text-gray-500 font-semibold uppercase'>
                  Add New Todo
                </span>
                <h3 className='mb-8 text-2xl font-bold font-heading'>
                  Create new account
                </h3>

                <input
                  className='w-full py-3 pl-3 mb-4 bg-white rounded-lg'
                  type='text'
                  placeholder='Title' value={title} onChange={(event)=>setTitle(event.target.value)}
                />

                <textarea
                  className='w-full border-1 py-3 pl-3 mb-4 bg-white rounded-lg'
                  type='text'
                  placeholder='Description' value={description} onChange={(event)=>setDescription(event.target.value)}></textarea>

                <label className='inline-block mb-4'>
                  <span className='text-sm text-gray-500'>
                    Develped by
                    {/* <a target='_blank'
                      to=''
                      className='font-bold hover:underline'
                      href='https://www.youtube.com/channel/UCvu6J9q1AM6q4xysGqAvVyw'>
                      iNovotek
                    </a> */}
                  </span>
                </label>
                <button
                  type='submit'
                  className='w-full inline-block px-6 py-3 mr-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200'>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTodo;
