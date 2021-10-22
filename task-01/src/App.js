import React, { useState } from 'react';
import { LanguageProvider } from './libs/language';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import NavBar from './containers/NavBar';
import Form from './containers/Form';
import Static from './containers/Static';

function App() {
  const [tabContentClassName, setTabContentClassName] = useState({form: "tab-content active", static: "tab-content"});
  
  return (
    <div className="App">
      <ErrorBoundary>
        <LanguageProvider>
          <NavBar className="NavBar" setTabContentClassName={setTabContentClassName} />
          <div className="App-content">
            <Form id="form-content" className={tabContentClassName["form"]} />
            <Static id="static-content" className={tabContentClassName["static"]} />
          </div>
        </LanguageProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
