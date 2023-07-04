import './App.css';

import AdminLogin from './components/AdminLogin';
import AdminRegistration from './components/AdminRegistration';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeUpdate from './components/EmployeeUpdate';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/register' element={<AdminRegistration />} />
          <Route path='/add' element={<EmployeeAdd />} />
          <Route path='/update/:id' element={<EmployeeUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
