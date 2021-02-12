import React, { useState, useEffect, Fragment } from 'react';
import '../Form.css';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';

const restUrl = "https://backend.langsfree.com/"

const Contacts = () => {

  const [error, setError] = useState({ error: [] });
  const [users, setUsers] = useState({ name: "", email: "", mobile: "", message:"", active: "" })
  const [message , setMessage] = useState({alertMessage:""})

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
  const onMobileChange = (e) => {
    setUsers({ ...users, mobile: e.target.value })
    // clearValidationErr("password");
  }
  const onMessageChange = (e) => {
    setUsers({ ...users, message: e.target.value })
    // clearValidationErr("password");
  }


  const submitRegister = async (e) => {

    if (users.name === "") {
      showValidationErr("name", "name cannot be empty")
    } if (users.email === "") {
      showValidationErr("email", "Email cannot be empty")
    } if (users.mobile === "") {
      showValidationErr("mobile", "Mobile number cannot be empty")
    }
    if (users.name !== "" && users.email !== "" && users.mobile !== "") {
      const { data, status } = await axios.get(restUrl + 'create-user-api.php', {
        name: users.name,
        email: users.email,
        mobile: users.mobile,
        message: users.message,
        active: 1
      })
      if (status === 200) {
        setUsers(data)
        setMessage({alertMessage:"Success"})
      }

    } else {
      setError("Fields are required");
      return;
    }
  }

  return (
    <Fragment>
     
      <section class="page_header contact_display" style={{ backgroundPosition: "50% 6px;" }}>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <p>The ones who runs this company</p>
              <h1 class="text-uppercase">CONTACT US</h1>
            </div>
          </div>
        </div>
        <div class="page_linker">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <ul class="breadcrumb">
                  <li><a href="/"><i class="fa fa-home"></i>Home</a></li>
                  <li class="active">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="contact" className="container bg-grey contact-us">
        <div class="title-block service-heading">
          <span class="top-title"></span>
          <h2>CONTACT US</h2>
          <p class="sub-title">What We Do FOR YOU</p>
          <span class="bottom-title"></span>

        </div>

        <div className="row">
          <div className="col-sm-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p><span style={{ marginBottom: "0", paddingBottom: "0", fontSize: "18px", fontWeight: "bold" }}>Noida Office</span><br />

            C-1 UG, Subham Apartment, Sector 73,

            Noida, Uttar Pradesh 201307, INDIA<br />

            satyam.gupta@langsfree.com<br />

            <img src="img/icons8-phone-24.png" width="16" height="11" alt="" /> +91-7210254949<br />

              <img src="img/icons8-phone-24.png" width="16" height="11" alt="" /> +91-8218450251<br />

              <br />

              <span class="bold">Skype -</span> <br />

               satyam_Skype<br />

               anupam_skype<br /><br />



            </p>
            <p><span style={{ marginBottom: "0", paddingBottom: "0", fontSize: "18px", fontWeight: "bold" }}>Agra Office</span><br />

            Plot No. 244A Transport Nagar Agra,
            Uttar Pradesh, India, 282002<br />

            anupam.j@langsfree.com<br />

              <img src="img/icons8-phone-24.png" width="16" height="11" alt="" /> +91-7210254949<br />

              <img src="img/icons8-phone-24.png" width="16" height="11" alt="" /> +91-8218450251<br />

              <br />

              <span class="bold">Skype -</span> <br />

                 satyam_Skype<br />

                 anupam_skype<br /><br />



            </p>
          </div>
          <div className="col-sm-7 slideanim">
            <div className="row">
              <div className="inner-container inner-contacts">
                <div className="header">
                  Let’s Connect
        </div>
                <div className="box">
                  <div className="input-group">
                    <label htmlFor="name">Username</label>
                    <input
                      type="text"
                      method="POST"
                      name="name"
                      className="login-input"
                      placeholder="Username"
                      onChange={onnameChange}
                    />
                    {/* <small className="danger-error">{nameErr ? nameErr : ""}</small> */}
                    {/* <small className="danger-error"> {error ? ('error ') : ('')}</small> */}
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="text"
                      method="POST"
                      name="email"
                      className="login-input"
                      placeholder="Email address"
                      onChange={onEmailChange}
                    />
                    {/* <small className="danger-error">{emailErr ? emailErr : ""}</small> */}
                  </div>

                  <div className="input-group">
                    <label htmlFor="mobile">Phone Number</label>
                    <input
                      type="mobile"
                      method="POST"
                      name="mobile"
                      className="login-input"
                      placeholder="Phone number"
                      onChange={onMobileChange}
                    />
                    {/* <small className="danger-error">{passwordErr ? passwordErr : ""}</small> */}
                  </div>
                 
                  
         
          <div className="input-group">
          <label htmlFor="message">Message</label>
            <textarea 
            type="message"
            method="POST"
            className="form-control"
            name="message" 
             placeholder="Message"
            onChange={onMessageChange}>
            </textarea>
           
          </div>
      
                  <button
                    type="button"
                    className="login-btn"
                    onClick={submitRegister
                    }>Register
                  </button>
                  <hr />
       {/* <small className="danger-error"> {error ? ('error ') : ('')}</small> */}
       {message.alertMessage==="Success"?(<SuccessAlert />):""}
                </div>
                {/* {error && (
        <Alert severity="error" onClick={() => setError(null)}>
          {props.error || error}
        </Alert>
      )} */}

              </div>

            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contacts;