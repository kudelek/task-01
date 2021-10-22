import React, { useState, useEffect }  from 'react';
import './Tabs.css';

function onClick(name, setActive){
    setActive(name);
}

function Tab(props) {
    return (
        <div className={props.className} name={props.name} id={props.id} onClick={() => onClick(props.name, props.setActive)}>
            {props.name}
        </div>
    )
}

export default function Tabs(props) {
    const [active, setActive] = useState("form");
    const [className, setClassName] = useState({form: "tab active", static: "tab"});
    const setTabContentClassName = props.setTabContentClassName;

    useEffect(() => {
        switch (active) {
            case "form":
                setClassName({form: "tab active", static: "tab"});
                setTabContentClassName({form: "tab-content active", static: "tab-content"});
                break;
            case "static":
                setClassName({form: "tab", static: "tab active"});
                setTabContentClassName({form: "tab-content", static: "tab-content active"});
                break;
            default:
                setClassName({form: "tab active", static: "tab"});
                setTabContentClassName({form: "tab-content active", static: "tab-content"});
        }
    }, [active, setTabContentClassName])

    const tabList = {
        form: {name: "form", className: "tab active"},
        static: {name: "static", className: "tab"}
    }

    return (
        <div className="tabs">
            {Object.entries(tabList).map(([id, obj]) => <Tab key={id} className={className[id]} id={id} name={obj.name} setActive={setActive}/>)}
        </div>
    )
}