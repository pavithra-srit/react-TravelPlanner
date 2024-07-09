import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Login.css'
import logoImg from '../../assets/images/logo.jpg'
import bgVideo from '../../assets/video/bgVideo.mp4'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const loginNameEvent = (event) => {
    setLoginName(event.target.value)
  }
  const loginPasswordEvent = (event) => {
    setLoginPassword(event.target.value)
  }
  const navigate = useNavigate();
  const loginEvent = (event) => {
    console.log("LoggedIn", { loginName }, { loginPassword })
    const data ={
      "name": loginName,
      "password": loginPassword
    }
    navigate("/user")
    event.preventDefault();
  }

  return (
    <div className='Login'>
      <div className="container-fluid">
        <video autoPlay loop muted   className="login-video">
     <source src={bgVideo} />    </video>
        <img className="img-logo" src={logoImg} alt="logo"
          width={50} height={40}></img>
        <section className="content demo">
          <div className="card-hghlght demo-card">
            <h3 className="loginTitle pt-2">Login</h3>
            <Form className="form-login" onSubmit={loginEvent}>

              <div className="form-group pt-3">
                <Form.Label htmlFor="userNameInput" >User Name</Form.Label>
                <Form.Control type="text" className="form-control" id="userNameInput"
                  onChange={loginNameEvent} placeholder="Enter User Name" value={loginName} />
              </div>
              <div className="form-group pt-3 pb-3">
                <Form.Label htmlFor="passwordInput">Password</Form.Label>
                <Form.Control type="password" className="form-control" id="passwordInput"
                  onChange={loginPasswordEvent} placeholder="Password" value={loginPassword} />
              </div>
              <Button type="submit" className="btn btn-outline-dark" variant="outline-dark">Login</Button>
            </Form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login