import {LoginStore} from "./store";
import {history} from "./component";
import { getRequest, postRequest } from "../../common/services/baseService";
export async function checkLogin(){
    const result = await postRequest("http://localhost:8082/v1/login",{email:"ducuon232g23222032317@gmail.com",password:"1234"});
  
  if(result.status < 300){
    console.log(result);
    localStorage.setItem("token",result.body.token);
    history.push("/Dashboard")
  }
    

}
export function logout(){
    history.push("/")
}

