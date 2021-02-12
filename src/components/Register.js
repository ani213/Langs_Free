import React, { useState, useEffect } from 'react';
import '../Form.css';
import axios from 'axios';

const restUrl = "http://localhost/moglie-api/"

const Register = () => {

  const [error, setError] = useState({ error: [] });
  const [users, setUsers] = useState({ name: "", email: "", password: "", active: "" })

  const showValidationErr = (elm, msg) => {
    setError((prevState) => ({ error: [...prevState.error, { elm, msg }] }))

  }

  const clearValidationErr = (elm) => {
    setError((prevState) => {
      let newArr = [];
      for (let err of prevState.error) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return newArr;
    });
  }

  const onnameChange = (e) => {
    setUsers({ ...users, name: e.target.value })
    // clearValidationErr("name");
  }
  const onEmailChange = (e) => {
    setUsers({ ...users, email: e.target.value })
    // clearValidationErr("email");
  }
  const onPasswordChange = (e) => {
    setUsers({ ...users, password: e.target.value })
    // clearValidationErr("password");
  }


  const submitRegister = async (e) => {

    if (users.name === "") {
      showValidationErr("name", "name cannot be empty")
    } if (users.email === "") {
      showValidationErr("email", "Email cannot be empty")
    } if (users.password === "") {
      showValidationErr("password", "Password cannot be empty")
    }

    if (users.name !== "" && users.email !== "" && users.password !== "") {
      const { data, status } = await axios.post(restUrl + 'create-user-api.php', {
        name: users.name,
        email: users.email,
        password: users.password,
        active: 1
      })
      if (status === 200) {
        setUsers(data)
        // setUsers({ name: "", email: "", password: "" })
      }

    } else {
      setError("Fields are required");
      return;
    }
  }

  return (
    <div className="inner-container">
      <div className="header">
        Register
        </div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            method="POST"
            name="name"
            className="login-input"
            placeholder="name"
            onChange={onnameChange}
          />
          {/* <small className="danger-error">{nameErr ? nameErr : ""}</small> */}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text"
            method="POST"
            name="email"
            className="login-input"
            placeholder="Email"
            onChange={onEmailChange}
          />
          {/* <small className="danger-error">{emailErr ? emailErr : ""}</small> */}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            method="POST"
            name="password"
            className="login-input"
            placeholder="Password"
            onChange={onPasswordChange}
          />
          {/* <small className="danger-error">{passwordErr ? passwordErr : ""}</small> */}
        </div>
        <button
          type="button"
          className="login-btn"
          onClick={submitRegister
          }>Register
        </button>
      </div>
      {/* {error && (
        <Alert severity="error" onClick={() => setError(null)}>
          {props.error || error}
        </Alert>
      )} */}

    </div>
  );
}

export default Register;