import React from "react";
import LanguageSelector from "../components/LanguageSelector";
import Tabs from "./Tabs";
import "./NavBar.css";

export default function NavBar(){
    return (
        <div className="navBar">
            <Tabs />
            <LanguageSelector className="lang"/>
        </div>  
    )
}