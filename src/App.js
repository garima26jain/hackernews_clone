import React,{useEffect,useState} from 'react';
import { StoriesContainer } from './containers/StoriesContainer';
import Routes from './router';
import Header from './header';
import {BrowserRouter as Router} from 'react-router-dom';

const App=()=>{
    return(  
    <div className="App">
      <Router>
        <Header/>
        <Routes/>
      </Router>
    </div>
        
    )
}
  

export default App;
