import React, { useState } from 'react'
import Form from "./Form";
import Static from "./Static";
import ClassForm from "./ClassForm";
import '../App.css'

export default function TabContent(props) {
    return (
        <div {...props}>
            <Form isactive={props.activetab==="form" ? true : undefined}/>
            <Static isactive={props.activetab==="static" ? true : undefined}/>
            <ClassForm isactive={props.activetab==="classForm" ? true : undefined}/>
        </div>
    )
}
