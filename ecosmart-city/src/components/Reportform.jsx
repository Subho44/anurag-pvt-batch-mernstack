import React, { useState } from 'react';
import axios from 'axios';

const Reportform = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const hs = async(e)=>{
    e.preventDefault();
    if(!title||!description||!status) return alert("Enter title and description and status");
    await axios.post('http://localhost:5000/api/cards',{title,description,status});
    setTitle('');
    setDescription('');
    setStatus('');
    onAdd();
  }

  return <>
    <form onSubmit={hs}>
    <input 
    type='text'
    placeholder='city title'
    value={title}
    onChange={(e)=> setTitle(e.target.value)}
    required
   />
   <br/>
   <input 
    type='text'
    placeholder='city description'
    value={description}
    onChange={(e)=> setDescription(e.target.value)}
    required
   />
   <br/>
   <input 
    type='text'
    placeholder='city status'
    value={status}
    onChange={(e)=> setStatus(e.target.value)}
    required
   />
   <br/>
   <button type='submit'>Add</button>


    </form>
  </>
}

export default Reportform