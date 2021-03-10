import React from 'react'
import Task from './Task.component'

const Tasks = ({tasks,deleteTask}) => {
   
    return (
        <ul>
            {tasks.map(task=>(<Task key={task.id} task={task} deleteTask={deleteTask} />))}
        </ul>
    )
}

export default Tasks
