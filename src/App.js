import { useState } from "react";
import AddTask from "./components/AddTask.component";
import Header from "./components/Header.component";
import Tasks from "./components/Tasks.component";

const tasksed= [
  {
    "id": 1,
    "text": "Doctors Appointment 1",
    "day": "Feb 5th at 2:30pm",
    "reminder": true
  },
  {
    "id": 2,
    "text": "Meeting at School 2",
    "day": "Feb 6th at 1:30pm",
    "reminder": true
  },
  {
      "id": 3,
      "text": "Doctors Appointment 3",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 4,
      "text": "Meeting at School 4",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
]
function App() {
  const [tasks,setTasks]=useState([...tasksed])
  const [addTask,setAddTask]=useState(false);
  const header=undefined;
  const deleteTask=(id)=>{
    const newTask=tasks.filter(task=>task.id!==id)
    setTasks([...newTask]);
  }
  const onAdd=(task={})=>{
    setTasks([...tasks,task]);
  }
  return (
   <div className="container">
     <Header header={header} showAdd={setAddTask} />
     {addTask&&<AddTask showAdd={setAddTask} onAdd={onAdd}/>}
     <Tasks tasks={tasks} deleteTask={deleteTask} />
   </div>
  );
}

export default App;
