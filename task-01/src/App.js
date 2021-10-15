import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Form from './containers/Form';
import NavBar from './containers/NavBar';

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <NavBar className="NavBar" />
        <header className="App-header">
          <Form />
        </header>
      </ErrorBoundary>
    </div>
  );
}

export default App;
