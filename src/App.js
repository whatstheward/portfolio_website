import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import AppHeader from './components/AppHeader'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Resume from './components/Resume'

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
      <AppHeader/> 
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/resume" component={Resume} />
      </Switch>

      </div>
  )};
}

export default App;
