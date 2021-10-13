import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Form from './containers/Form';

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <header className="App-header">
          <Form />
        </header>
      </ErrorBoundary>
    </div>
  );
}

export default App;
