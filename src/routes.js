import React from 'react';
import {Switch, Route} from 'react-router-dom';


// import App from './App'
import Details from './components/Details';
import Login from './components/Login';
import Cart from './components/Cart';
import Browse from './components/Browse';


export default (
    <Switch>
        <Route exact path='/' component={Login}/> {/*Sim1 42H*/}
        <Route path='/details/:id' component={Details}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/browse' component={Browse}/>
    </Switch>
)