import React, { useState, useEffect } from 'react';
import './App.css';
//import Form from './components/Form';

function App() {
  const [isloading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [personData, setPersonData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    eyeColor: ""
  });

  function fillDetails() {
    setFirstName(person.name);
    setLastName(person.surname);
    setBirthDate(person.birthDate);
    setEyeColor(person.eyeColor);
  }

  useEffect(() => {
    fetch('http://localhost:3000/user')
    .then(response =>{
      if(response.ok) {
        console.log("GET response: ", response);
        return response.json();
      }

      throw response;
    })
    .then(data => {
      console.log("data: ", data);
      if(data){
        setPersonData(data[0]);
        setPerson(data[0]);
      }
      console.log("person: ", person);
      //fillDetails();

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
    console.log("submitting person: ", person);
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person)
    };
    fetch('http://localhost:3000/user', requestOptions)
    .then(response => {
      response.json();
      console.log("response: ", response);
      console.log("person: ", person);
    });
    
  }

  function handleChange(ev){
    ev.preventDefault();
    const value = ev.target.value;
    console.log("change made in: " + ev.target.name + ". Value: " + ev.target.value);
    setPersonData({[ev.target.name]: value, ...personData});
    console.log("Updated person data: ", personData);
  }


  function Form(){
    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:   
                <input type="text" name="firstName" value={personData.firstName} onChange={handleChange}/>
            </label><br />
            <label>
                Last Name:   
                <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label><br />
            <label>
                Birth Date:    
                <input type="text" name="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
            </label><br />
            <label>
                Eye Color:     
                <input type="text" name="eyeColor" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)}/>
            </label><br />
            <input type="submit" value="submit"/>
        </form>
    )
}

  function Body(){
    return isloading ? <div>Loading...</div> : <Form />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Body />
      </header>
    </div>
  );
}

export default App;
