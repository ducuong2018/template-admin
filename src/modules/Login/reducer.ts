import {LoginStore} from "./store";
import {history} from "./component";
import { postRequest } from "../../api";
export async function login(){
    const data = {email:LoginStore.userName,password:LoginStore.passWord}
    const result = await postRequest("http://localhost:8321/v1/auth/login",false,data);
  if(result.status < 300){
    console.log(result);
    localStorage.setItem("token",result.body.token);
    history.push("/Dashboard")
  }
    

}
export function logout(){
    history.push("/")
}

