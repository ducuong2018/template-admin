import "./style.scss"
import Modal from 'react-modal';
import {dashboardStore} from "../../store";
import React from "react";
import {Observer} from "mobx-react";
import {addUser} from "../../reducer";
const customStyles = {
    content : {
        top                   : '25%',
        left                  : '25%',
        right                 : 'auto',
        bottom                : 'auto',
        // marginRight           : '-50%',
        // transform             : 'translate(-50%, -50%)',
        width:"50%",
        height:"50%",
        alignItems:"center"
    }
};
function handleChange(event:any) {
    console.log(event)
}
const ModalAddUser = () =>{

    return(
            <Observer>
                {() => (
                    <Modal
                        isOpen={dashboardStore.isShowModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div>
                            <div>

                            </div>
                            <div className={"body"}>
                                <div className={"body-item"}>
                                    <div  className={"body-item-title"}>Full Name</div>
                                    <input onChange={(e)=>dashboardStore.addUser.fullname = e.target.value} className={"body-item-input"}/>
                                </div>
                                <div className={"body-item"}>
                                    <div  className={"body-item-title"}>Email</div>
                                    <input onChange={(e)=>dashboardStore.addUser.email = e.target.value} type="email" className={"body-item-input"}/>
                                </div>
                                <div className={"body-item"}>
                                    <div  className={"body-item-title"}>Password</div>
                                    <input onChange={(e)=>dashboardStore.addUser.pass = e.target.value} type="password" className={"body-item-input"}/>
                                </div>
                                <div className={"body-item"}>
                                    <div  className={"body-item-title"}>RePassword</div>
                                    <input  type="password" className={"body-item-input"}/>
                                </div>

                            </div>
                            <div className={"footer"}>
                                <button onClick={()=>addUser()}>Add</button>
                                <button onClick={()=>dashboardStore.isShowModal = false}>Close</button>
                            </div>

                        </div>

                    </Modal>
                )}
            </Observer>
    )
}
export default ModalAddUser


