import React, { useEffect, useState } from 'react'
import { DeleteEmp, allEmp } from '../routes/api';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import swal from 'sweetalert';

const Home = () => {
    const [empData, setempData] = useState();
    useEffect(() => {
        allEmp().then((res) => {
            console.log(res);
            if (res.err === 200) {
                setempData(res.data)
            }
        })
    }, []);
    let navigate = useNavigate();
    const handleDelete = (id) => {
        console.log(id);
        DeleteEmp(id).then((res) => {
            if (res.err === 200) {
                swal("Success", res.msg, "success").then(() => {
                    window.location.reload()
                })
            }
        })
    }
    return (
        <div>
            <h4 className='text-center mt-1 mb-4'>Admin Dashboard</h4>
            <div className="container">
                <div className="row">

                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 card shadow rounded-5">
                        <div className='d-flex justify-content-end'>

                            <button className='btn btn-sm btn-success mt-2' onClick={() => navigate("/add")}>Add Employee</button>&nbsp;&nbsp;
                        </div>
                        <table class="table hover  ">

                            <thead>
                                <tr>
                                    <th scope="col">sr</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    empData?.map((data, index) => {
                                        console.log(data)
                                        return <tr>
                                            <th scope="row" key={index}>{index + 1}</th>
                                            <td>{data.name}</td>
                                            <td>{data.age}</td>
                                            <td>{data.position}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phoneNumber}</td>
                                            <td>

                                                <button className='btn btn-sm btn-secondary' onClick={() => navigate("/update/" + data._id)}>Update</button>&nbsp;&nbsp;
                                                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(data._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>

        </div>
    )
}

export default Home
