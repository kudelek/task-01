import React from 'react'
import Form from "./Form";
import Static from "./Static";
import ClassForm from "./ClassForm";
import '../App.css'

export default function TabContent(props) {
    return (
        <div className={props.className}>
            <Form isActive={props.activeTab==="form" ? "true" : undefined}/>
            <Static isActive={props.activeTab==="static" ? "true" : undefined}/>
            <ClassForm isActive={props.activeTab==="classForm" ? "true" : undefined}/>
            
        </div>
    )
}
