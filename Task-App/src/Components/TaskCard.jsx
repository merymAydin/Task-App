import React from 'react'

function TaskCard({task}) {
  return (
    <div className="card-container">
        <div className="task-card">
        <div className="card-group">
            <h3 className="card-title">Title</h3>
            <p className="card-text">{task.title}</p>
        </div>
         <div className="card-group">
            <h3 className="card-title">Description</h3>
            <p className="card-text">{task.description}</p>
        </div>
         <div className="card-group">
            <h3 className="card-title">Important</h3>
            <p className="card-text">{task.important ? "Important" : "Not Important"}</p>
        </div>
        <div className="card-group">
            <button className='update-button'>Update</button>
            <button className=' delete-button'>Delete</button>
        </div>
    </div>
    </div>
    
  )
}

export default TaskCard
