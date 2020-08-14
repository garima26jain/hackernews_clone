import React from 'react';
import {Route , Switch} from 'react-router-dom';
import { StoriesContainer } from './containers/StoriesContainer';
// import Home from './components/home';
import PostForm from './submit';
// import Login from './components/login';
//import AuthCallback from './authCallback';
import './App.css';

const Routes=()=>(
    <Switch>
        <Route path="/submit"><PostForm /> </Route>
        <Route path="/"><StoriesContainer /> </Route>
        {/* <Route path="/auth/callback" exact component={AuthCallback}/> */}
        
         
        {/* <Route path="/login" component={Login}/> */}
    </Switch>
)

export default Routes;