import {history} from "../../App";
export const checkLogin = async() =>{
    if(await localStorage.getItem("token")){
        // console.log("1");
        
        // history.push("/dashboard");
    }
    else {
        history.push("/login")
    }
}