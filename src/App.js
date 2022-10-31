import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
 // const [language, setlang] = useState("JavaScript");
  // Hook for todo list
  const [list, setTodo] = useState([]);
  // hook for saving the typed input
  const [newTask, setNewTask] = useState("");

  const inputHandler = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    const task ={
      id : list.length === 0 ? 1 : list[list.length-1].id +1,
      taskName: newTask,
      completed: false,
    }
    const newTodoList = [...list, task];
    setTodo(newTodoList);
  };

  // function for deleting a task
  const deleteTask = (id) =>{
 // we use filter, filter function will delete the task which matches the onclick
 const newTodo = list.filter((task) => {
  if(task.id === id ){
    return false;
  } else{
    return true;
  }
 })
 setTodo(newTodo);
  };

  //for complete task

  const completeTask = (id) =>{
   setTodo(
    list.map((task) =>{
      if(task.id === id){
        return {...task, completed:true};
      } else{
        return task;
      }
    })
   )
  }

  return (
    <div className="App">
      {/* <h1>My favourite language is {language}</h1> */}
      <h1>My Todo List</h1>
      <div className="addTask">
        <input onChange={inputHandler} />
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className="list">
        {list.map((task) => {
          return <Task 
          taskName={task.taskName} 
          id={task.id} 
          completed ={task.completed}
          deleteTask={deleteTask} 
          completeTask={completeTask}/>;
        })}
      </div>
      {/* {newTask} cool trick ;)*/}
    </div>
  );
}

export default App;
