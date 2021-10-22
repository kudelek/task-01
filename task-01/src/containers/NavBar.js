import React from "react";
import LanguageSelector from "../components/LanguageSelector";
import Tabs from "./Tabs";
import "./NavBar.css";

export default function NavBar(props){
    return (
        <div className="navBar">
            <Tabs setTabContentClassName={props.setTabContentClassName}/>
            <LanguageSelector className="lang"/>
        </div>  
    )
}