import React, { useState } from "react";
import "./login.css"
import "./index.css"

const Logincomp = () => {

  const [customerUserame , setCustomerUsername] = useState("")
  const [customerPassword , setCustomerPassword] = useState("")
   const [retailerUserame , setRetailerUsername] = useState("")
  const [RetailerPassword , setRetailerPassword] = useState("")
  return (
    <React.Fragment>
            <div class="container px-4 py-2 mx-auto">
                <div class="row justify-content-center px-1 mb-1">
                    
                </div>
                <h3 class="mb-5 text-center heading sans">We are INSTADEL</h3>
                <div class="card card0">
                    <div class="d-flex flex-lg-row flex-column-reverse">
                        <div class="card card1">
                            <div class="row justify-content-center my-auto">
                                <div class="col-md-8 col-10 my-5">

                                    <h6 class="msg-info">LOGIN AS A CUSTOMER</h6>

                                    <div class="form-group">
                                        <label class="form-control-label text-muted">Username</label>
                                        <input type="text" id="email" name="email" placeholder="Phone no or email id" class="form-control" value={customerUserame} onChange={(e) => {setCustomerUsername(e.target.value)}}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-control-label text-muted">Password</label>
                                        <input type="password" id="psw" name="psw" placeholder="Password" class="form-control" value={customerPassword} onChange={(e) => {setCustomerPassword(e.target.value)}} />
                                    </div>

                                    <div class="row justify-content-center my-3 px-3">
                                        <button class="btn-block btn-color">Login to Instadel</button>
                                    </div>

                                    <div class="row justify-content-center my-2">
                                        <a href="#"><small class="text-muted">Forgot Password?</small></a>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom text-center mb-5">
                                <p href="#" class="sm-text mx-auto mb-3">Don't have an account?<button class="btn btn-white ml-2">Create new</button></p>
                            </div>
                        </div>
                        <div className="barrier gap bgcolor">
                            
                        </div>
                        <div class="card card1">
                            <div class="row justify-content-center my-auto">
                                <div class="col-md-8 col-10 my-5">
                                    <h6 class="msg-info">LOGIN AS A RETAILER</h6>

                                    <div class="form-group">
                                        <label class="form-control-label text-muted">Username</label>
                                        <input type="text" id="email" name="email" placeholder="Phone no or email id" class="form-control" value={retailerUserame} onChange={(e) => {setRetailerUsername(e.target.value)}} />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-control-label text-muted">Password</label>
                                        <input type="password" id="psw" name="psw" placeholder="Password" class="form-control" value={RetailerPassword} onChange={(e) => {setRetailerPassword(e.target.value)}}/>
                                    </div>

                                    <div class="row justify-content-center my-3 px-3">
                                        <button class="btn-block btn-color">Login to Instadel</button>
                                    </div>

                                    <div class="row justify-content-center my-2">
                                        <a href="#"><small class="text-muted">Forgot Password?</small></a>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom text-center mb-5">
                                <p href="#" class="sm-text mx-auto mb-3">Don't have an account?<button class="btn btn-white ml-2">Create new</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}

export default Logincomp