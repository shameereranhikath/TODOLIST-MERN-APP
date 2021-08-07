import React, { useEffect } from 'react';
import { PencilAltIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import  {getTodoItem} from '../../actions/todoActions';
import { useHistory } from "react-router-dom";



import EditTodo from '../Edit/EditTodo';


const TodoList = () => {
  let history=useHistory()
  const data=useSelector((state)=>state.todo)

  const {loading,todos,error}=data

 
  const dispatch=useDispatch();
  useEffect(() =>{
       dispatch(getTodoItem())
     
  },[dispatch])

  const onPencilClick=(id,title,description)=>{
    <EditTodo title={title} description={description}/>
 
  history.push(`/todo/${id}`,{id: 1, name: 'Ford', color: 'red'}
  )

  }
 
  return (
    <>
      <section className='py-8'>
        <div className='container px-4 mx-auto'>
          <div className='pt-4 bg-white shadow rounded'>
            <div className='flex px-6 pb-4 border-b'>
              <h3 className='text-xl font-bold'>List Of Todos</h3>
            </div>
            <div className='p-4'>
              <table className='table-auto w-full'>
                <thead>
                  <tr className='text-base bg-gray-600 text-gray-400 text-left'>
                    <th className='pb-3 font-medium'>Title</th>
                    <th className='pb-3 font-medium'>Description</th>
                    <th className='pb-3 font-medium'>Created At</th>
                    <th className='pb-3 font-medium'>Updated At</th>
                    <th className='pb-3 font-medium'>Status</th>
                    <th className='pb-3 font-medium'>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                todos.map((td,index)=>(
                  <tr key={td._id} className='text-base hover:bg-gray-300 cursor-pointer bg-gray-50'>
                  <td className='py-5 px-6 font-medium'>{td.title}</td>
                  <td className='font-medium'>{td.description}</td>
                  <td className='font-medium'>{td.createdAt}</td>
                  <td className='font-medium'>{td.updatedAt}</td>
                  <td>
                    <span className='inline-block py-1 px-2 text-white bg-red-500 rounded-full'>
                      not Completed
                    </span>
                  </td>
                  <Link>
                    <td className='font-medium'>
                      <PencilAltIcon className='h-5 w-5 text-blue-500' onClick={()=>onPencilClick(td._id,td.title,td.description)} />
                    </td>
                  </Link>
                </tr>
                ))
              }
                 
                </tbody>
              </table>

         
            </div>
          </div>
        </div>
      </section>
      <div>
      
      </div>
    </>
  );
};

export default TodoList;
