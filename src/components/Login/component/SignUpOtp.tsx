import { Component } from "react";

export default class SignUpOtp extends Component {
    render(){
        return(
            <div>
                <input placeholder = "Mã xác nhận"></input>
                <button>Xác nhận</button>
            </div>
        )
    }
}