import React from 'react';
import logo from './logo.svg';
import { Switch, Route, withRouter } from 'react-router-dom';

//import routes
import Main from './Components/Main/index';
import Header from './Components/Nav/index';


import './App.css';

function App() {
  return (
    <div className="App">
        <Main />
        </div>
    
  );
}

export default App;
