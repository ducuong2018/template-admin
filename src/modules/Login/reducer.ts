import {LoginStore} from "./store";
import {history} from "./component";
export function checkLogin(){
    if(LoginStore.userName === "admin" && LoginStore.pass === "1"){
            history.push("/Dashboard")
    }
    else {
            history.push("/Dashboard")
            console.log("1")
    }

}
export function logout(){
    history.push("/")
}

