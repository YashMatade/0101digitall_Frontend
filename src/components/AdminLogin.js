import React, { useState } from 'react'
import { adminReg, adminlogin } from '../routes/api';
import swal from "sweetalert";
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

const AdminLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = (e) => {
        e.preventDefault()
        let data = { email, password }
        adminlogin(data).then((res) => {
            console.log(res)
            if (res.err === 200) {
                swal("Success", res.msg, "success");
            } else {
                swal("Error", res.msg, "warning");
            }
        })
    }


    return (
        <>
            <div className='container-fluid bg-light w-100 '>
                <div className="row pt-5 ">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 card p-3 rounded-5 shadow">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <form>
                                    <div class="text-center mb-3">
                                        <h4>Admin Login</h4>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input type="email" id="loginName" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" />
                                        <label class="form-label" for="loginName" >Email</label>
                                    </div>


                                    <div class="form-outline mb-4">
                                        <input type="password" id="loginPassword" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label class="form-label" for="loginPassword">Password</label>
                                    </div>


                                    <div class="row mb-4">
                                        <div class="col-md-6 d-flex justify-content-center">

                                            <div class="form-check mb-3 mb-md-0">
                                                <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                                <label class="form-check-label" for="loginCheck"> Remember me </label>
                                            </div>
                                        </div>

                                        <div class="col-md-6 d-flex justify-content-center">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>


                                    <button type="submit" class="w-100 btn btn-primary btn-block mb-4" onClick={submit}>Sign in</button>


                                    <div class="text-center">
                                        <p>Not a member? <Link to="/register">Register</Link></p>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                <form>
                                    <div class="text-center mb-3">
                                        <p>Sign up with:</p>
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                            <i class="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                            <i class="fab fa-google"></i>
                                        </button>

                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                            <i class="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                            <i class="fab fa-github"></i>
                                        </button>
                                    </div>

                                    <p class="text-center">or:</p>


                                    <div class="form-outline mb-4">
                                        <input type="text" id="registerName" class="form-control" />
                                        <label class="form-label" for="registerName">Name</label>
                                    </div>


                                    <div class="form-outline mb-4">
                                        <input type="text" id="registerUsername" class="form-control" />
                                        <label class="form-label" for="registerUsername">Username</label>
                                    </div>


                                    <div class="form-outline mb-4">
                                        <input type="email" id="registerEmail" class="form-control" />
                                        <label class="form-label" for="registerEmail">Email</label>
                                    </div>


                                    <div class="form-outline mb-4">
                                        <input type="password" id="registerPassword" class="form-control" />
                                        <label class="form-label" for="registerPassword">Password</label>
                                    </div>


                                    <div class="form-outline mb-4">
                                        <input type="password" id="registerRepeatPassword" class="form-control" />
                                        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                                    </div>


                                    <div class="form-check d-flex justify-content-center mb-4">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                            aria-describedby="registerCheckHelpText" />
                                        <label class="form-check-label" for="registerCheck">
                                            I have read and agree to the terms
                                        </label>
                                    </div>


                                    <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>

        </>


    )
}

export default AdminLogin;
