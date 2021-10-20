import React, { useState, useReducer, useEffect } from "react";
import { Text } from "../libs/language";
import { reducer } from "../libs/reducer";
import { loadData } from "../libs/dataFlow";
import './Form.css';

export default function Form(props){
  const [userData, dispatch] = useReducer(reducer, {
      firstName: "",
      lastName: "",
      birthDate: "",
      eyeColor: ""
  });
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData(setIsLoading).then(d => dispatch({type: "setData", payload: d}));
  },[])



  function handleSubmit(ev){
    ev.preventDefault();

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: Array(JSON.stringify(userData))
    };
    
    fetch('http://localhost:3000/user/1', requestOptions)
    .then(response => {
      response.json();
    });
  }

  function handleChange(ev){
    console.log("change made in: " + ev.target.id + ". Value: " + ev.target.value);
    const action = {
      type: "fieldChange",
      payload: {name: [ev.target.id], value: [ev.target.value]},
    }
    dispatch(action);
  }

  return ( isloading ? <div>Loading...</div> : (
    <div {...props}>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="labels">
              <label><Text tid="firstName" /></label><br />
              <label><Text tid="lastName" /></label><br />
              <label><Text tid="birthDate" /></label><br />
              <label><Text tid="eyeColor" /></label><br />
            </div>
            <div className="inputs">
              <input type="text" id="firstName" defaultValue={userData.firstName} onChange={handleChange}/><br />
              <input type="text" id="lastName" defaultValue={userData.lastName} onChange={handleChange}/><br />
              <input type="text" id="birthDate" defaultValue={userData.birthDate} onChange={handleChange}/><br />
              <input type="text" id="eyeColor" defaultValue={userData.eyeColor} onChange={handleChange}/><br />
            </div>
          </div>
          <button id="submit" type="submit"><Text tid="submit" /></button>
          <p>{}</p>
        </form>
        <button id="loguserdata" onClick={() => console.log("userdata from click",userData)}>log userData</button>
      </div>
    </div>
  ))
  


}