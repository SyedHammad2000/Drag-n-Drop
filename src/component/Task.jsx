import React from 'react'
import "./Task.css"
import { useSortable } from '@dnd-kit/sortable'
const Task = ({id,name}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id})

    const style = {
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
        transition,
    }


  return (
    <div ref={setNodeRef} {...attributes} {...listeners}  style={style} className='task'>
        <input  type="checkbox" className='checkbox' />
        <label >{name}</label>

        
      
    </div>
  )
}

export default Task
