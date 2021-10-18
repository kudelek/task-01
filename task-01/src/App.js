import React from 'react';
import { LanguageProvider } from './libs/language';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import NavBar from './containers/NavBar';
import Form from './containers/Form';
import Static from './containers/Static';

function App() {
  
  return (
    <div className="App">
      <ErrorBoundary>
        <LanguageProvider>
          <NavBar className="NavBar" />
          <div className="App-content">
            <Form id="form-content" className="tab-content"/>
            <Static id="static-content" className="tab-content"/>
          </div>
        </LanguageProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
