import React from 'react';
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Recomded from './component/Recomded' 
import LoginTab from './component/LoginPage'
import Login from './component/Login'
import SearchPage from './component/SearchPage' 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/search/:searchvalue'>
        <div className='app_pages'>
        <Sidebar/>
        <SearchPage/>
        </div>
        </Route>
        <Route path='/'>
        <div className='app_pages'>
          {/* <Login/> */}
        <Sidebar/>
         <Recomded/>
         <LoginTab/>
        </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
