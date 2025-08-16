import React, { useState } from 'react'

function TaskForm({create}) {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[important, setImportant] = useState(false);
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        //console.log(title);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        //console.log(description);
    };
    const handleImportantChecked = (e) => {
        setImportant(e.target.checked);
        //console.log(important);
    };
    const handleSubmit = (e) => {
       e.preventDefault();
       create(title, description, important);
       setTitle("");
       setDescription("");
       setImportant(false);
    };
  return (
    <form id='task-form' onSubmit={handleSubmit}>
        <h2 className='form-title'>Create Task</h2>
        <div className="form-group">
            <label className='form-label' htmlFor="title">Title</label>
            <input className='form-control' value={title} type="text" id="title" onChange={handleTitleChange} />
        </div>
        <div className="form-group">
            <label className='form-label' htmlFor="description">Description</label>
            <textarea className='form-control' value={description} name="description" id="description" rows={5} onChange={handleDescriptionChange}></textarea>
        </div>
        <div className="form-group">
            <label className='form-label' htmlFor="important">Important
            <input className='form-check' type="checkbox" name='important' id="important" checked={important} onChange={handleImportantChecked} />
            </label>
        </div>
        <button id='form-button' className='create-button'>Create</button>
    </form>
  )
}

export default TaskForm
