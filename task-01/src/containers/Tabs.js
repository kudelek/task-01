import React from 'react';
import './Tabs.css';


function Tab(props) {

    function onClick(e) {
        props.setActiveTab(e.target.id);
    }

    return (
        <div className={props.className} id={props.id} onClick={onClick}>
            {props.id}
        </div>
    )
}

export default function Tabs(props) {

    const TAB_ID = ["form", "static", "classForm"];

    return (
        <div className="tabs">
            {TAB_ID.map(id => <Tab key={id} className={`tab ${props.activeTab === id ? "active" : ""}`} id={id} setActiveTab={props.setActiveTab} />)}
        </div>
    )
}