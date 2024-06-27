


import DepartmentList from "./Department/DepartmentList";

import {BrowserRouter, Router, Route,Routes} from 'react-router-dom';
import Room from "./Room/RoomList";
import RoleList from "./Role/RoleList";
import Employee from "./Employee/EmployeeList"
import Navbar from "./Dashboard/Component/Navbar";
import Patient from './Patient/PatientList'
import Role from './Role/RoleList'
import Lab from "./Lab/LabList"
import EmployeeProfile from './EmployeeProfile/EmployeeProfileList'
import HospitalTreatment from "./HospitalTreatment/HospitalTreatmentList";
import Main from "./Dashboard/Component/Dashboard";
import AssignroleList from "./Assignrole/AssignroleList";
import ViewProfile from "./Employee/ViewProfile";
import AppointmentList from "./Appointment/AppointmentList";
import LoginList from "./Login/LoginList";

//  import ViewProfile from "./Employee/ViewProfile";







function App() {
  return (
    
      <BrowserRouter>
 
    <Routes>
    <Route path='/'  element={<Navbar/>}>
    <Route path='/dashboard'  element={<Main/>}></Route>
    <Route path='/room'  element={<Room/>}></Route>
    <Route path='/department'  element={<DepartmentList/>}></Route>
    <Route path='/role'  element={<Role/>}></Route>
    <Route path='/employee'  element={<Employee/>}></Route>
    <Route path='/viewProfile/:employee_id'  element={<ViewProfile/>}></Route>
    <Route path='/lab'  element={<Lab/>}></Route>
    <Route path='/patient'  element={<Patient/>}></Route>
    <Route path='/employeeprofile'  element={<EmployeeProfile/>}></Route>
    <Route path='/hospitaltreatment'  element={<HospitalTreatment/>}></Route>
    <Route path='/assignrole'  element={<AssignroleList/>}></Route>
    <Route path='/appointment'  element={<AppointmentList/>}></Route>
      </Route>
    </Routes>
   
  
  </BrowserRouter>

 
     
  );
}

export default App;
 