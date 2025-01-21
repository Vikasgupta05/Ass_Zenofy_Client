import React from "react";
import axios from "axios"
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export const Add_Student = () => {

    const  [firstname , setfirstname]  = useState()
    const  [Lastname , setLastname]  = useState()
    const  [email , setemail]  = useState()
    const  [goal , setGoal]  = useState()
    const  [summary , setSummary]  = useState()

    const navigate = useNavigate();
 
    const data = {
        First_name : firstname,
        Last_name : Lastname,
        Email : email,
        goal : goal,
        Summary : summary
    }
       
    const handelSubmit = () => {
        axios.post("http://localhost:2345/student", data).then(function(res){
            console.log(res.data)
        })
        alert("Add succesfully")
        navigate("/");
    }

    return(


        <div >
            
            <Navbar/>
            <h1 style={{marginTop : "50px" ,textAlign : "center" , marginBottom : "50px"}}>ADD STUDENT</h1>

            <div className="loginDiv">
                <form >

                    <label >First Name</label>
                    <input 
                        type="text"
                        placeholder="Enter FirsrName"
                        onChange={(e) => {
                            setfirstname(e.target.value)
                        }}
                    /> 
                    <br />
                    <br />


                    <label>Last Name</label>
                    <input 
                        type="text"
                        placeholder="Enter lastName"
                        onChange={(e) => {
                            setLastname(e.target.value)
                        }}
                    /> 
                    <br />
                    <br />


                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                    /> 
                    <br />
                    <br />


                    <label>Summary</label>
                    <textarea 
                        placeholder="Enter Summary"
                        onChange={(e) => {
                            setSummary(e.target.value)
                        }}
                    /> 
                    <br />
                    <br />

                    <label>Goal</label>
                    <input 
                        type="text"
                        placeholder="Enter Goal"
                        onChange={(e) => {
                            setGoal(e.target.value)
                        }}
                    /> 
                    <br />
                    <br />


                    <Button style={{width : "100%"}}
                        onClick={handelSubmit}
                    >Add</Button>
                </form>
            </div>

        </div>
    )
}