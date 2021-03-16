
import Column from "./Column"
import "./style.scss"
import React, { useEffect} from "react";
import {getUser} from "./reducer";
import {dashboardStore} from "./store";
import { Observer } from 'mobx-react'
import ModalAddUser from "./component/ModalAddUser/ModalAddUser";
function Index() {
     useEffect(()=>{
         getUser();
     },dashboardStore.userData)
    return (
         <Observer>
             {() => (
                 <div className={"all"}>
                     <Column></Column>
                     <div className="table">
                         <div className="table-header">
                             <div className="header__item">STT</div>
                             <div className="header__item">Email</div>
                             <div className="header__item">Full name</div>
                             <div className="header__item">Password</div>
                             <div className="header__item">Action</div>
                         </div>
                         <div className="table-content">
                             {
                                 dashboardStore.userData && dashboardStore.userData.map((item,index)=>{
                                         return(
                                             <div key={index} className="table-row">
                                                 <div className="table-data">{item.id}</div>
                                                 <div className="table-data">{item.email}</div>
                                                 <div className="table-data">{item.fullname}</div>
                                                 <div className="table-data">{item.pass}</div>
                                                 <div  className="table-data"><button onClick={()=>dashboardStore.isShowModal = true}>Thêm</button></div>
                                             </div>
                                         )
                                 })
                             }
                         </div>
                     </div>
                     <ModalAddUser/>
                 </div>

             )}
         </Observer>
     )
 }
export default Index
