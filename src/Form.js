import React, { useState } from 'react';
import './Form.css';
import Login from './components/Login';
import Register from './components/Register';


const Form = () => {
  const [users, setUsers] = useState({
    isLoginOpen: true,
    isRegisterOpen: false
  });


  const showLoginBox = () => {
    setUsers({ isLoginOpen: true, isRegisterOpen: false });
  }

  const showRegisterBox = () => {
    setUsers({ isRegisterOpen: true, isLoginOpen: false });
  }


  return (
    <div className="root-container">
      <div className="wrapper-class">
        <h3 className="login-header">OCEAN OF DIGITAL</h3>
        <div className="box-controller">
          <div
            className={"controller " + (users.isLoginOpen
              ? "selected-controller"
              : "")}
            onClick={showLoginBox}>
            Login
        </div>
          <div
            className={"controller " + (users.isRegisterOpen
              ? "selected-controller"
              : "")}
            onClick={showRegisterBox}>
            Register
        </div>
        </div>
        <div className="box-container">
          {users.isLoginOpen && <Login />}
          {users.isRegisterOpen && <Register />}
        </div>
        <small className="danger-error">
          <a
            className="visit-website"
            href="http://odbc.live"
            target="_blank"
            rel="noopener noreferrer"
          >
            GUEST
        </a>
        </small>
      </div>
    </div>


  );
}

export default Form;