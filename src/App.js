import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { login, logout, selectUser } from './features/userSlice';
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
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
     if(userAuth){
       //Logged In
       dispatch(login({
         uid:userAuth.uid,
         email:userAuth.email
       }))
     }else{
       //Logged Out
       dispatch(logout());
     }
   })
   return unsubscribe;
  }, [dispatch])
  return (
    <div className="app">
      <Router>
      { !user?(
        <LoginScreen/>
      ):(
        <Switch>
          <Route path="/Profile">
              <ProfileScreen/>
          </Route>
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
