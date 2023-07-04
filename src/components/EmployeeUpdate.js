import React, { useEffect, useState } from 'react';
import { addemp, getEmp, updateEmp } from '../routes/api';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development';

const EmployeeUpdate = () => {
    const { id } = useParams();
    console.log(id)
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getEmp(id).then((res) => {
            if (res.err === 200) {
                setName(res.data.name);
                setAge(res.data.age)
                setPosition(res.data.position)
                setEmail(res.data.email)
                setPhoneNumber(res.data.phoneNumber)
            }


        })
    }, [])



    const submit = (e) => {
        e.preventDefault();

        // Perform form validations
        if (!name || !age || !position || !email || !phoneNumber) {
            swal('Warning', 'Please fill in all the fields', 'warning');
            return;
        }

        // Perform additional validations if needed

        const data = { id, name, age, position, email, phoneNumber };
        updateEmp(data)
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
                        <h2 className="text-center mb-4">Update Employee</h2>
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
                                    Update Employee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeUpdate;