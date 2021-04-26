import React, { Component } from "react";
import "./style.css";
export default class index extends Component{
    render(){
        return(
        <div>
            <div className = "header">
                <div className = "header-logo"><img src = "" height ="100px" width = "300px"/></div>
                <div className = "header-search">
                <select>
                    <option value="volvo">Sản phẩm</option>
                    <option value="saab">Nhà cung cấp</option>
                </select>
                <input placeholder = "Tìm kiếm" />
                <button>Tìm kiếm</button>
                </div>
                <div className = "header-action">
                    <div>Thông báo</div>
                    <div>Tin nhắn</div>
                    <div>
                    <div>Đăng nhập/Đăng ký</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
