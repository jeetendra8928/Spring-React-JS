import React from 'react';
import logo from './logo.svg';
import './App.css';
import UpdateUserComponent from './components/UpdateUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import UserComponent from './components/UserComponent';
import CreateUserComponent from './components/CreateUserComponent';
//import ViewUserComponent from './components/ViewUserComponent';
function App() {
  return (
    <div>
    <Router>
   <div className = "App">
   <HeaderComponent/>
     <Switch> 
       <Route path ="/users"  component = {UserComponent}></Route> 
       <Route path ="/add-User"  component = {CreateUserComponent}></Route> 
       <Route path ="/update-User/:id"  component = {UpdateUserComponent}></Route>
       </Switch>
        </div>
   <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
