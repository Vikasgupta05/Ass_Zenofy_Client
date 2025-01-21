import React from "react";
import axios from "axios"
import { useState } from "react";
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export const Update = () => {

    const  [firstname , setfirstname]  = useState()
    const  [Lastname , setLastname]  = useState()
    const  [email , setemail]  = useState()
    const  [goal , setGoal]  = useState()
    const  [summary , setSummary]  = useState()
    const {id} = useParams()
    const navigate = useNavigate();

 
    const data = {
        First_name : firstname,
        Last_name : Lastname,
        Email : email,
        goal : goal,
        Summary : summary
    }
       
    const handelSubmit = () => {
        axios.patch(`http://localhost:2345/student/${id}`, data).then(function(res){
            console.log(res.data)
        })

        alert("Update succesfully")
        navigate("/");

    }

    return(
        <div >

            <h1 style={{textAlign:"center " , marginTop : "20px"}}>Update Student Details</h1>
            <div className="loginDiv">
        
            <label>First Name</label>
            <input 
                type="text"
                placeholder="Enter FirsrName"
                onChange={(e) => {
                    setfirstname(e.target.value)
                }}
            /> 
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

            <label>Email</label>
            <input 
                type="text"
                placeholder="Enter Email"
                onChange={(e) => {
                    setemail(e.target.value)
                }}
            /> 
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
            <Button className="mt-5" style={{width : "100%"}}
                onClick={handelSubmit}
            >Update</Button>
            </div>
        </div>
    )
}