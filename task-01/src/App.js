import React from 'react';
import { LanguageProvider } from './libs/language';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Form from './containers/Form';
import NavBar from './containers/NavBar';

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <LanguageProvider>
          <NavBar className="NavBar" />
          <header className="App-header">
            <Form />
          </header>
        </LanguageProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
