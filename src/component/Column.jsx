import React from 'react'
import "./Column.css";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Task from './Task';

const Column = ({tasks}) => {
  return (
    <div className='column'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>

        {
            tasks.map((task)=>{
                return <Task id={task.id} name={task.name} key={task.id}/>
            })
        }
        </SortableContext>
      
    </div>
  )
}

export default Column
