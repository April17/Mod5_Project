import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Pages from './pages'
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/game" component={Pages.GamePage} />
          <Route exact path="/profile" component={Pages.ProfilePage} />
          <Route exact path="/"     component={Pages.FrontPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
