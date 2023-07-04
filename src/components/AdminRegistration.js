import React, { useState } from 'react'
import { adminReg, adminlogin } from '../routes/api';
import swal from "sweetalert";
import { Link, useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

const AdminRegistration = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        let data = { email, password }
        adminReg(data).then((res) => {
            console.log(res)
            if (res.err === 200) {
                swal("Success", res.msg, "success").then((ok) => {
                    if (ok) {
                        navigate("/")
                    }
                })
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
                                        <h4>Admin Register</h4>
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


                                    <button type="submit" class="w-100 btn btn-primary btn-block mb-4" onClick={submit}>Register</button>

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

export default AdminRegistration;
