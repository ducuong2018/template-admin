import {LoginStore} from "./store";
import {
    useHistory
} from "react-router-dom";
export function checkLogin(){
    if(LoginStore.userName == "admin" && LoginStore.pass == "1"){
       Navigation("/Dashboard")
    }
    else {
        Navigation("/Dashboard")
    }

}
export function Navigation(redirect:string){
    const history = useHistory();
   return  history.push(redirect);

}
