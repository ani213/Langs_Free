import React, { useState } from 'react';
import '../Form.css';
import axios from 'axios';


const restUrl = "http://localhost/moglie-api/";

const Login = () => {
    const [home, setHome] = useState({ isLoginOpen: false });
    const [error, setError] = useState({ error: [] });
    const [users, setUsers] = useState({ email: "", password: "" })

    const showValidationErr = (elm, msg) => {
        setError((prevState) => ({ error: [...prevState.error, { elm, msg }] }))
    }

    const onEmailChange = (e) => {
        setUsers({ ...users, email: e.target.value })
        // clearValidationErr("email");
    }
    const onPasswordChange = (e) => {
        setUsers({ ...users, password: e.target.value })
        // clearValidationErr("password");
    }

    const submitLogin = async (e) => {
        if (users.email === "") {
            showValidationErr("email", "Email cannot be empty")
        } if (users.password === "") {
            showValidationErr("password", "Password cannot be empty")
        }

        if (users.email !== "" && users.password !== "") {

            var postData = {
                "name": "generateToken",
                "param": {
                    "email": users.email,
                    "pass": users.password
                }
            };

            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            };
            await axios.post(restUrl, postData, axiosConfig)
                .then(response => setUsers(response.data))

            await axios.post(restUrl, postData, axiosConfig)
                .then(response =>
                    // console.log(response.data.success.token) 
                    localStorage.setItem("auth", JSON.stringify(response.data.success.token))
                )
        }
    }

    return (
        <div className="inner-container">
            <div className="header">
                Login
            </div>
            <div className="box">

                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="email"
                        className="login-input"
                        placeholder="Username"
                        onChange={onEmailChange}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="login-input"
                        placeholder="Password"
                        onChange={onPasswordChange}
                    />
                </div>

                <button
                    type="button"
                    className="login-btn"
                    onClick={submitLogin
                    }> Login
                </button>
                <small className="danger-error">{home.isLoginOpen && <p>login</p>}</small>


            </div>
            <small className="danger-error">Forget Password</small>
        </div>

    );
}

export default Login;
