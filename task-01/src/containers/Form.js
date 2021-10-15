import React, { useState, useReducer, useEffect } from "react";
import { reducer } from "../libs/reducer";
import './Form.css';

export default function Form(){
  const [userData, dispatch] = useReducer(reducer, {
      firstName: "",
      lastName: "",
      birthDate: "",
      eyeColor: ""
  });
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
      loadData();
  },[])

  async function loadData(){
    await fetch('http://localhost:3000/user')
    .then(response =>{
      if(response.ok) {
        return response.json();
      }
    })
    .then(data => {
      if(data){
        let d = data[0];
        dispatch({type: "setData", payload: d});
      }
    })
    .catch(error => {
      console.log("Error fetching data: ",error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="labels">
                        <label>First Name:</label><br />
                        <label>Last Name:</label><br />
                        <label>Birth Date:</label><br />
                        <label>Eye Color:</label><br />
                    </div>
                    <div className="inputs">
                        <input type="text" id="firstName" defaultValue={userData.firstName} onChange={handleChange}/><br />
                        <input type="text" id="lastName" defaultValue={userData.lastName} onChange={handleChange}/><br />
                        <input type="text" id="birthDate" defaultValue={userData.birthDate} onChange={handleChange}/><br />
                        <input type="text" id="eyeColor" defaultValue={userData.eyeColor} onChange={handleChange}/><br />
                    </div>
                </div>
                <input type="submit" value="submit"/><br />
                <p>{}</p>
            </form>
                <button onClick={() => console.log("userdata from click",userData)}>log userData</button>
        </div>
    )
    )
  


}