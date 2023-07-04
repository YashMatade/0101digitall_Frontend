import React, { useState } from 'react';
import { addemp } from '../routes/api';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const EmployeeAdd = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        // Perform form validations
        if (!name || !age || !position || !email || !phoneNumber) {
            swal('Warning', 'Please fill in all the fields', 'warning');
            return;
        }

        // Perform additional validations if needed

        const data = { name, age, position, email, phoneNumber };
        addemp(data)
            .then((res) => {
                if (res.err === 200) {
                    swal('Success', res.msg, 'success').then((ok) => {
                        if (ok) {
                            navigate('/dashboard');
                        }
                    });
                } else {
                    swal('Warning', res.msg, 'warning');
                }
            })
            .catch((error) => {
                console.log(error);
                swal('Error', 'An error occurred', 'error');
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card p-3 rounded-5 shadow">
                        <h2 className="text-center mb-4">Add Employee</h2>
                        <form className="form">
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Employee Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Employee Age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Employee Position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Employee Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Employee Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success" onClick={submit}>
                                    Add Employee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAdd;
