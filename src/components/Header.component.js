import React from 'react'

const Header = ({header,showAdd}) => {
    return (
        <header className="header">
            <h1>{header?header:"Task Tracker"}</h1>
            <button className="btn" onClick={()=>showAdd(true)}>Add Task</button>
        </header>
    )
}

export default Header
