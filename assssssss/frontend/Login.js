import React, { useState } from 'eact';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <br />
      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;