import React, { useState } from 'react'

interface Item{
    id:number;
    text:string;
    completed:boolean;
}

export const TodoList:React.FC = () => {
    const[todos,setTodos]=useState<Item[]>([
        {id:1,text:"Learn Typescript",completed:false},
        {id:2,text:"Build Todo using React+Typescript",completed:false},
    ]);
    const [input,setInput]=useState<string>("");

    const handleToggle=(id:number)=>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id===id){
                    return{...todo,completed:!todo.completed}
                }
                return todo
            })
        )
    }
  const handleClick=()=>{
    const newTodo:Item={id:Date.now(),text:input,completed:false}
    setTodos([...todos,newTodo])
  }
    
  return (
    <div className='main-container'>
        <h1>TodoList</h1>
        <br></br>
        <ul>
           {todos.map((todo)=>(
            <li key={todo.id} onClick={()=>handleToggle(todo.id)} style={{textDecoration:todo.completed ? "line-through" : "none"}}>{todo.text}</li>
           ))}
        </ul>
        <input type='text' placeholder='Add some content' onChange={(e)=>setInput(e.currentTarget.value)}/><br></br>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}
