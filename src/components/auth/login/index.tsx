import React from "react";
import "./style.scss"
export default class index extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "formLogin">
                    <input type = "text" placeholder = "Email"/>
                    <input type = "password" placeholder = "Mật khẩu"/>
                    <button>Đăng nhập</button>  
                </div>       
            </React.Fragment>
        )
    }
}