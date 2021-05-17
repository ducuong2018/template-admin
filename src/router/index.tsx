import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/component/SignIn";
import Register from "../components/Login/component/SignUp";
import RegisterOtp from "../components/Login/component/SignUpOtp"
export default class index extends React.Component{
    render(){
        return(
        <Router ref={instance  => {console.log(instance)} }>
            <Switch>
            <Route path = "login" component = {Login}/>
            <Route path = "/register-otp" component  = {RegisterOtp}/>
            <Route path = "/register" component  = {Register}/>
            <Route path="/" component={Dashboard}/>
            </Switch>
        </Router>
        )
    }
    
}