import React, { useState, useEffect, useReducer } from 'react';
import './App.css';

function reducer(state, action){
  switch (action.type) {
    case "inputChange": {
      const newValue = action.payload;
      return newValue;
    }
    default: {
  return {...state};
  }
  }
  
}

function App() {
  const [personData, setPersonData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    eyeColor: ''
  });
  const [state, dispatch] = useReducer(reducer, personData);
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
    //setPersonData({[ev.target.name]: ev.target.value,...personData});
    ev.stopPropagation();
    console.log("change made in: " + ev.target.name + ". Value: " + ev.target.value);
    console.log("Updated person data: ", personData);

    const action = {
      input: ev.target.name,
      payload: ev.target.value,
    }

    dispatch(action);

  }

  
  function PersonDataForm(){
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
                First Name:   
                <input key="firstName" type="text" name="firstName" value={personData.firstName} onChange={handleChange}/>
            </label><br />
            <label>
                Last Name:   
                <input key="lastName" type="text" name="lastName" value={personData.lastName} onChange={handleChange}/>
            </label><br />
            <label>
                Birth Date:    
                <input key="birthDate" type="text" name="birthDate" value={personData.birthDate} onChange={handleChange}/>
            </label><br />
            <label>
                Eye Color:     
                <input key="eyeColor" type="text" name="eyeColor" value={personData.eyeColor} onChange={handleChange}/>
            </label><br />
            <input type="submit" value="submit"/>
          </form>
        </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {isloading ? <div>Loading...</div> : <PersonDataForm />}
      </header>
    </div>
  );
}

export default App;
