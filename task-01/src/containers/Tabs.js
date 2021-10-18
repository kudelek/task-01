import React from 'react';
import './Tabs.css';

function onClick(e, name){
    var tabContent, tabs;
    tabContent = document.getElementsByClassName("tab-content"); 

    for(let i=0;i<tabContent.length;i++)     tabContent[i].style.display = "none";

    tabs = document.getElementsByClassName("tab");

    for(let i=0;i<tabs.length;i++)    tabs[i].className = tabs[i].className.replace(" active","");

    document.getElementById(name+"-content").style.display = "block";
    e.currentTarget.className += " active";
}

function Tab(props) {
    return (
        <div className="tab" name={props.name} id={props.id} onClick={(e) => onClick(e, props.name)}>
            {props.name}
        </div>
    )
}

export default function Tabs() {

    const tabList = {
        form: "form",
        static: "static"
    }
    return (
        <div className="tabs">
            {Object.entries(tabList).map(([id, name]) => <Tab id={id} value={name} name={name} />)}
        </div>
    )
}