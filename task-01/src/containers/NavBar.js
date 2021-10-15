import React from "react";
import "./NavBar.css";

export default function NavBar(){
    return (
        <div className="navBar">
            <select title="language" className="nav">
                <option>English</option>
                <option>Polish</option>
            </select>
        </div>  
    )
}