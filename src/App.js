import React from 'react';
import './css/App.css';
import Parent from './components/Parent';
import { AppProvider } from './components/Context';
import './css/Child.css';
import './css/Parent.css';

function App() {
  return (
    <div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="App">
        <h1>Prop Drilling</h1>
        <AppProvider>
          <Parent />
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
