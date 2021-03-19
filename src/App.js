import React,{useEffect} from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Nav from './Nav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
   auth.onAuthStateChanged(userAuth =>{
     if(userAuth){
       //Logged In
       console.log(userAuth);
     }else{
       //Logged Out
     }
   })
  }, [])
  return (
    <div className="app">
      <Router>
      { !user?(
        <LoginScreen/>
      ):(
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      )}
    

      
        
    </Router>
    </div>
  );
}

export default App;
