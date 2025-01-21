import React from "react";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Update_Student = () => {

    const [data , setData] = useState()

    useEffect(() => {
        Data()
    },[])

    const Data = () => {
        axios.get("http://localhost:2345/student").then(function(res){
            setData(res.data)
            console.log("avid" , res.data)
        })
    }

    return(

        <div>
            <Navbar/>
            <h1>update_Student</h1>

            <div className="maindiv">
                <table className="table">
                        <thead>
                            <tr>
                                <th className="table">No</th>
                                <th  className="table">First name</th>
                                <th  className="table">Lastname</th>
                                <th  className="table">Email</th>
                                <th  className="table">Summary</th>
                                <th  className="table">Goal</th>

                                <th  className="table">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((el , i ) => {
                                return (
                                    <tr key={i}>
                                        <td className="table">{i+1}</td>
                                        <td className="table">{el?.First_name}</td>
                                        <td className="table">{el?.Last_name}</td>
                                        <td className="table">{el?.Email}</td>
                                        <td className="table">{el?.Summary}</td>
                                        <td className="table">{el?.goal}</td>

                                        < td ><Link to={`/update_student${el._id}`}> <button>Edit</button></Link></td>
                                    </tr>
                                )
                                })
                            }
                        </tbody>
                </table>
            </div>
        </div>
    )
}