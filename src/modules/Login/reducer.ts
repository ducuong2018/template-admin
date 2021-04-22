import {LoginStore} from "./store";
import {history} from "../../App";
import { postRequest } from "../../api";
export async function login(){
    const data = {email:LoginStore.userName,password:LoginStore.passWord}
    const result = await postRequest("http://localhost:8321/v1/auth/login",false,data);
    console.log(result);
  if(result.status < 300){
    localStorage.setItem("token",result.body.token);
    window.location.href = '/dashboard';
  }
    

}
export function logout(){
    history.push("/")
}

