import React, { useState, useReducer, useEffect } from "react";
import { Text } from "../libs/language";
import { reducer } from "../libs/reducer";
import './Form.css';
import { editUser, loadUser } from "../libs/formAPI";

export default function Form(props) {
  const [userData, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    birthDate: "",
    eyeColor: ""
  });
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser()
    .then(d => { dispatch({type: "setData", payload: d})})
    .finally(setIsLoading(false));
  }, [])

  function handleSubmit(e) {
    editUser(e, userData, 1);
  }

  function handleChange(ev) {
    console.log("change made in: " + ev.target.id + ". Value: " + ev.target.value);
    const action = {
      type: "fieldChange",
      payload: { name: [ev.target.id], value: [ev.target.value] },
    }
    dispatch(action);
  }

  return (props.isActive ? (isloading ? <div>Loading...</div> : (
    <div>
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
              <input aria-label="First Name" type="text" id="firstName" defaultValue={userData.firstName} onChange={handleChange} /><br />
              <input aria-label="Last Name" type="text" id="lastName" defaultValue={userData.lastName} onChange={handleChange} /><br />
              <input aria-label="Birth Date" type="text" id="birthDate" defaultValue={userData.birthDate} onChange={handleChange} /><br />
              <input aria-label="Eye Color" type="text" id="eyeColor" defaultValue={userData.eyeColor} onChange={handleChange} /><br />
            </div>
          </div>
          <button id="submit" type="submit"><Text tid="submit" /></button>
          <p>{ }</p>
        </form>
        <button id="loguserdata" onClick={() => console.log("userdata from click", userData)}>log userData</button>
      </div>
    </div>
  )) : null)



}