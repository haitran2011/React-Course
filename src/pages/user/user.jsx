import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function User(props) {
  // const access_token = window.sessionStorage.getItem('access_token');

  // if(!access_token) {
  //   return (
  //     <>please sign in</>
  //   )
  // }
  
  return (
    <>
      First Name: tony <br />
      Last Name: nguyen <br />

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <Link to="/user/profile">Profile</Link>
        </li>
        <li class="nav-item">
          <Link to="/user/account">Account</Link>
        </li>
      </ul>

      <Outlet />
    </>
  )
}

export default User