import React, { useState, useReducer, useEffect } from "react";

function reducer(state, action){
    console.log("Reducer used.");
    switch (action.type) {
      case "inputChange": {
        //const newValue = action.payload;
        console.log("Current state: ", state);
        const newState = {...state, [ev.target.name]: ev.target.value}
        console.log("Returning new state: ", newState);
        return newState;
      }
      default: {
        return {...state};
      }
    }
    
}

export default function Form(){
  const [personData, setPersonData] = useState({
  });
  const [state, dispatch] = useReducer(reducer, personData);
  console.log("reducer state: ", state);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/user')
    .then(response =>{
      if(response.ok) {
        console.log("GET response: ", response);
        return response.json();
      }
    })
    .then(data => {
      console.log("data: ", data);
      if(data){
        console.log("Person data before set: ", personData);
        console.log("data to be set: ", data);
        setPersonData(data[0]);
        console.log("Person data set");
      }

      console.log("Person data: ", personData);
    })
    .catch(error => {
      console.log("Error fetching data: ",error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  },[])

  function handleSubmit(ev){
    ev.preventDefault();

    console.log("submitting person data: ", personData);
    console.log(Array(personData));
    console.log(JSON.stringify(personData));

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: Array(JSON.stringify(personData))
    };
    fetch('http://localhost:3000/user/1', requestOptions)
    .then(response => {
      response.json();
      console.log("response: ", response);
      console.log("person: ", personData);
    });
  }

  function handleChange(ev){
    console.log("person data before change: ", personData)
    //setPersonData({...personData, [ev.target.name]: ev.target.value});
    console.log("change made in: " + ev.target.name + ". Value: " + ev.target.value);
    console.log("Updated person data: ", personData);

    const action = {
      type: "inputChange",
      payload: ev,
    }

    dispatch(action);

  }

  
    return ( isloading ? <div>Loading...</div> : (
      <form onSubmit={handleSubmit}>
        <label>
            First Name:   
            <input type="text" name="firstName" defaultValue={personData.firstName} onChange={handleChange}/>
        </label><br />
        <label>
            Last Name:   
            <input type="text" name="lastName" defaultValue={personData.lastName} onChange={handleChange}/>
        </label><br />
        <label>
            Birth Date:    
            <input type="text" name="birthDate" defaultValue={personData.birthDate} onChange={handleChange}/>
        </label><br />
        <label>
            Eye Color:     
            <input type="text" name="eyeColor" defaultValue={personData.eyeColor} onChange={handleChange}/>
        </label><br />
        <input type="submit" value="submit"/>
      </form>
    )
    )
  


}