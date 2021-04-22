import React from "react";
import { useHistory } from "react-router";
import Dashboard from "./Dashboard";
// @ts-ignore
import { checkLogin } from "./reducer";

export default class index extends React.Component{
    componentDidMount (){
        checkLogin()
    }
    render(){
        return(
            <Dashboard/>
        )
    }
}
