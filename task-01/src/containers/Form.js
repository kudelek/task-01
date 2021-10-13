import React, { useState, useEffect } from "react";

export default function Form(){
  const [personData, setPersonData] = useState({});
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
      if(data){
        setPersonData(data[0]);
      }
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

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: Array(JSON.stringify(personData))
    };
    fetch('http://localhost:3000/user/1', requestOptions)
    .then(response => {
      response.json();
    });
  }

  function handleChange(ev){
    setPersonData({...personData, [ev.target.name]: ev.target.value});}

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