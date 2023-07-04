import axios from "axios";
export const adminReg = async (data) => {
    let res = await axios.post("http://localhost:5000/admin/register", data);
    return res.data;
}
export const adminlogin = async (data) => {
    let res = await axios.post("http://localhost:5000/admin/login", data);
    return res.data;
}
export const addemp = async (data) => {
    let res = await axios.post("http://localhost:5000/employee/create", data);
    return res.data;
}
export const updateEmp = async (data) => {
    let res = await axios.post("http://localhost:5000/employee/update", data);
    return res.data;
}
export const DeleteEmp = async (id) => {
    let res = await axios.post("http://localhost:5000/employee/delete/" + id);
    return res.data;
}
export const allEmp = async () => {
    let res = await axios.get("http://localhost:5000/employee/list");
    return res.data;
}
export const getEmp = async (id) => {
    let res = await axios.get("http://localhost:5000/employee/get/" + id);
    return res.data;
}

