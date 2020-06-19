import React from 'react';
import $ from 'jquery'
import Home from './home';
import About from './about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App(props) {
  const navigate = (id)=>{
    // console.log(id,Router)
    $(".nav-list-item").removeClass('active');
    $("#"+id).addClass("active")
  }
  return (
    <Router> 
      <div className="App">
      
        <div className="p-grid p-col-12 p0">
        
          <div className="p-col-2 p-md-1 p-lg-1 p-sm-2 " >
            <nav>
              <ul className="nav-list">
              <Link to="">
                <li className="nav-list-item active" id="home" onClick={()=>navigate('home')}>
                  
                    <i className="pi pi-home"></i>
                  
                </li>
                </Link>
                <Link to="about">
                  <li  className="nav-list-item"  id="about" onClick={()=>navigate('about')}>
                    <i className="pi pi-info-circle"></i>
                  </li>
                </Link>
                
              </ul>
            </nav>
          </div>
          <div className="p-col-10 p-md-11 p-lg-11 p-sm-10 p0">
            <header>
              <div className="p-grid p-col-12">
                <div className="p-md-9 p-lg-9 p-sm-6 align-left">
                    Assignment
                </div>
                <div className="p-md-3 p-lg-3 p-sm-6 align-right">
                    krishna
                </div>
              </div>
            </header>
            <div>
              
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                </Switch>
              
            </div>
          </div>
          
        </div >
        
      </div>
      </Router>
  );
}

export default App;
