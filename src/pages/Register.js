import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../auth/Login.css'

const registerUser = async ({ name, number, email, password }) => {
  // Implement your registration logic here
  // For now, return a dummy success
  return true;
};

const Register = () => {
  const [formData, setFormData] = useState({ name: '', number: '', email: '', password: '', confirmPassword: '' });
  const { name, number, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Assume you have a function for registration
    const success = await registerUser({ name, number, email, password });
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="container">
      <p className="title">Registration Form</p>
      <form onSubmit={e => onSubmit(e)} className="form">
        <input placeholder='Name' type="text" name="name" value={name} onChange={e => onChange(e)} required />
        <input placeholder='Mobile Number' type="number" name="number" value={number} onChange={e => onChange(e)} required />
        <input placeholder='Email' type="email" name="email" value={email} onChange={e => onChange(e)} required />
        <input placeholder='Password' type="password" name="password" value={password} onChange={e => onChange(e)} required />
        <input placeholder='Confirm Password' type="password" name="confirmPassword" value={confirmPassword} onChange={e => onChange(e)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
