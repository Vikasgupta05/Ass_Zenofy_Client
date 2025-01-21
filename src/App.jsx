import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Add_Student } from './Component/Add_student';
import { Update_Student } from './Component/Update_student';
import { Student } from './Component/Student';
import {  Routes, Route } from "react-router-dom";
import {Update} from "./Component/Update"
import { Login } from './Component/Login';
import { SignUp } from './Component/SignUp';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/logIn" element={<Login />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/" element={<Student />}/>
        <Route path="/addstudent" element={<Add_Student />}/>
        <Route path="/update" element={<Update_Student/>}/>
        <Route path="/update_student:id" element={<Update/>}/>
      </Routes>
     
    </div>
  )
}

export default App
