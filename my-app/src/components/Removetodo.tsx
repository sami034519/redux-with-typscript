import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { removetodo } from '../Slices/Counter'

const Listtodo:React.FC=() =>{
const todos=useSelector((state:any)=>state.todos.todos)
const username=useSelector((state:any)=>state.username.username);
const dispatch=useDispatch();
  return (
    <>
    <div className=' p-1 flex justify-center w-full'>
        <div className=' lg:w-[50%] w-full'>
       <ul className='space-y-2 bg-slate-500 w-full  p-5'>
        {todos.map((todo: any) => (
          <li className=' lg:p-3 p-1 flex gap-2 justify-between items-center bg-black text-white rounded-lg lg:text-lg text-sm ' key={todo.id}>
            {todo.text}
            <button
              onClick={() => dispatch(removetodo(todo.id))}
              className='bg-red-500 px-3 py-1 rounded text-white'
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
    <div className='w-full justify-center text-center lg:text-2xl text-sm text-black font-medium'> Last Updated:  {username}</div>
    </>
  )
}

export default Listtodo