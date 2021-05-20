import React from "react";
import "./style.css"
export default class index extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "container">
                    <input className = "container_input" type = "text" placeholder = "Email"/>
                    <input className = "container_input" type = "password" placeholder = "Mật khẩu"/>
                    <button className = "container_button">Đăng nhập</button>  
                </div>       
            </React.Fragment>
        )
    }
}