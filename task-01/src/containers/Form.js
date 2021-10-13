import React, { useState, useReducer, useEffect } from "react";

function reducer(state, action){
    switch (action.type) {
      case "fieldChange": {
        const newState = {...state, [String(action.payload.name)]: String(action.payload.value)}
        return newState;
      }

      case "setData": {
          const newState = action.payload;
          return newState;
      }
      default: {
        return {...state};
      }
    }
}

export default function Form(){
  const [userData, dispatch] = useReducer(reducer, {});
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
      console.log("data: ", data);
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

    console.log(JSON.stringify(userData));

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
            <label>
                First Name:   
                <input type="text" id="firstName" defaultValue={userData.firstName} onChange={handleChange}/>
            </label><br />
            <label>
                Last Name:   
                <input type="text" id="lastName" defaultValue={userData.lastName} onChange={handleChange}/>
            </label><br />
            <label>
                Birth Date:    
                <input type="text" id="birthDate" defaultValue={userData.birthDate} onChange={handleChange}/>
            </label><br />
            <label>
                Eye Color:     
                <input type="text" id="eyeColor" defaultValue={userData.eyeColor} onChange={handleChange}/>
            </label><br />
            <input type="submit" value="submit"/><br />
            <p>{}</p>
        </form>
            <button onClick={() => console.log("userdata from click",userData)}>log userData</button>
      </div>
    )
    )
  


}