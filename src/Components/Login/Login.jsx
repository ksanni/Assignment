import React from 'react'
import './login.css'

export default function Login() {
    
  return (
    <div className="container">
        <div className="titleLogin">
            <h1>Login</h1>
        </div>
        <div className="chooseOption">
                 <span>User Type :</span>
                 <input type="radio" name="gender" value="male"/> Employee
                <input type="radio" name="gender" value="female"/> Admin

        </div>
        <main className="login-form">
            <div className="cotainer">
                    <div className="row justify-content-center">

                        <div className="col-md-4 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <form action="" method="">
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">Employee ID</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address" required autofocus/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input type="password" id="password" className="form-control" name="password" required/>
                                            </div>
                                        </div>

                                       

                                        <div className="col-md-6 offset-md-4">
                                            <a href="#" className="btn btn-link " id='remeber'>
                                                Forgot Password?
                                            </a>
                                            <buttonn id="btn1" type="submit" className="btn btn-primary">
                                                Log in
                                            </buttonn>
                                        </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </main>

        </div>
  )
  }
