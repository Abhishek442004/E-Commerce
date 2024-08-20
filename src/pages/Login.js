import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../auth/Login.css';

const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', { email, password });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const success = await loginUser({ email, password });
    if (success) {
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <p className="title">Login Form</p>
      <form onSubmit={e => onSubmit(e)} className="form">
        
        <input
          placeholder="Write your email"
          type="email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
