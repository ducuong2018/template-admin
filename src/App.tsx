import React, {  Component } from 'react';
import Login from "./modules/Login/component/SignIn";
import Register from "./modules/Login/component/SignUp";
import RegisterOtp from "./modules/Login/component/SignUpOtp"
import Dashboard from "./modules/dashboard/index";
import Index from "../src/modules/index";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { observer } from 'mobx-react';
@observer
export default class App extends Component<any,any> {
  render(){
    return (
        // <Router  ref={instance  => {console.log(instance)} }>
        //     <Switch>
        //     <Route path="/dashboard" component={Dashboard}/>
        //     <Route path = "/register-otp" component  = {RegisterOtp}/>
        //     <Route path = "/register" component  = {Register}/>

        //     <Route path="/" component = {Login}/>
        //     </Switch>
        // </Router>
<Index/>

    )
  }
    
};

