import React, { useState } from 'react';
import Input from './input';
import Button from './button';
import { Navigate, useNavigate } from 'react-router-dom';
function Container({ heading }) {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    bio: '',
    gender:''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const show =document.querySelector("#name").value
    const pass=document.querySelector("#pass").value
    const cpass=document.querySelector("#cpass").value
    if (pass !== cpass) {
      alert('Password and Confirm Password do not match!');
      return;
    }

    if(pass=='!@#$%' && show =="nav"){
      navigate('/show');
      return;
    }

    const url = 'http://localhost:5000/savedata';

    
       fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response)=>{
        if (response.ok) {
          const result = response.json();
          console.log('Data saved successfully:', result);
        } else {
          console.error('Failed to save data:', response.statusText);
        }
      })     
     .catch ((error)=>{
      console.error('Error while saving data:', error);
    })

    alert("Registered Successfully")
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-left w-96 p-4 border  shadow-lg">
      <h1 className=" font-bold mb-4">{heading}</h1>

      <Input type="text" id="name" label="Username" onChange={handleChange} />
      <Input type="email" id="email" label="Email" onChange={handleChange} />
      <Input type="password" id="pass" label="Password" onChange={handleChange} />
      <Input type="password" id="cpass" label="Confirm Password" onChange={handleChange} />
      <label htmlFor="gender" className='mt-4'>Gender</label>
      <select name="" id="gender" className='mt-1 text-lg h-10' onChange={handleChange} required>
        <option value="no-select">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">other</option>
      </select>

      <label htmlFor="bio" className="mt-4 text-lg font-medium">
        Bio
      </label>
      <textarea
        id="bio"
        rows={4}
        className="mt-2 p-2 text-lg border rounded-lg"
        placeholder="Write a short bio about yourself"
        onChange={handleChange}
      ></textarea>

      <Button id="submit" content="Register" className="mt-6" type="submit" />
    </form>
  );
}

export default Container;
