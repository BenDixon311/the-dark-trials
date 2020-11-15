import React from 'react';
import logo from './logo.svg';
import { Switch, Route, withRouter, BrowserRouter, Router } from 'react-router-dom';

//import routes
import Main from './Components/Main/index';
import Contact from './Components/Contact/index'
import Books from './Components/Books/index';
import Header from './Components/Nav/index';

import 'bootstrap/dist/css/bootstrap.min.css';




import './App.css';

function App() {
  return (
      <div className="App">
          
          <BrowserRouter>
            <Switch>
              <Route exact path ="/">
                <Main />
              </Route>
              <Route path = "/books">
                <Books />
              </Route>
              <Route path = "/contact">
                <Contact />
              </Route>
            </Switch>
          </BrowserRouter>
          
      </div>
    
  );
}

export default App;
