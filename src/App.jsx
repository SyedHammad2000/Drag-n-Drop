import React from "react";
import { closestCorners, DndContext } from "@dnd-kit/core";
import "./App.css";
import Column from "./component/Column";
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

const App = () => {
  const [tasks, settask] = useState([
    {
      id: 1,
      name: "Task 1",
      status: "active",
    },
    {
      id: 2,
      name: "Task 2",
      status: "active",
    },
    {
      id: 3,
      name: "Task 3",
      status: "active",
    },
    
  ]);
  const gettaskpos =(id)=>{
    return tasks.findIndex((task) => task.id === id);

  }

  const handledragend = (event) => {
    const { active, over } = event;

    if(active.id===over.id)return

    settask((task) => {
      const activeIndex = gettaskpos(active.id);
      const overIndex = gettaskpos(over.id);

      return arrayMove(task,activeIndex,overIndex)
      
    });
  }
  
  return (
    <div className="head">
      <h1>My Task</h1>
      <DndContext onDragEnd={handledragend} collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
};

export default App