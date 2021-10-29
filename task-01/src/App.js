import React, { useState } from 'react';
import { LanguageProvider } from './libs/language';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import NavBar from './containers/NavBar';
import TabContent from './containers/TabContent';

function App() {
  const [activeTab, setActiveTab] = useState("form");
  
  return (
    <div className="App">
      <ErrorBoundary>
        <LanguageProvider>
          <NavBar className="NavBar" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent className="App-content" activetab={activeTab}/>
        </LanguageProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
