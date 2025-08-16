import React from 'react'


function TaskList({tasks}) {
  return (
    <div className='task-list'>
      {
        tasks.map((task) => (
          <div key={task.id}>
            {task.title}
          </div>
        ))
      }
    </div>
  )
}

export default TaskList

