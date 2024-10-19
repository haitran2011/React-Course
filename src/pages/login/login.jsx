import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function onSubmit() {
    const access_token = '123456789';
    window.sessionStorage.setItem('access_token', access_token);
    navigate('/state');
  }

  return (
    <div>
      <h2>Login</h2>

      <button type="button" onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Login