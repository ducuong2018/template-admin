import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/auth/login"
export default class index extends React.Component{
    render(){
        return(
        <Router ref={instance  => {console.log(instance)} }>
            <Switch>
            <Route path="/" component={Login}/>
            </Switch>
        </Router>
        )
    }
    
}