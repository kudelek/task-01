import React from "react";
import LanguageSelector from "../components/LanguageSelector";
import "./NavBar.css";

export default function NavBar(){
    return (
        <div className="navBar">
            <LanguageSelector className="nav"/>
        </div>  
    )
}