import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="Navbar">
            <div  style={{display : "flex" , justifyContent : "space-between"}}>
                <Link to="/">ALL STUDENTS</Link>
                <Link to="/addstudent">ADD STUDENT</Link>
                <Link to="/update">UPDATE STUDENT</Link>
                <Link to="/logIn">LOGIN</Link>
            </div>
        </div>
    )
}