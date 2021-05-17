import {observable} from "mobx";
export interface ILogin{
    email:string,
    password:string
}
class Login {
   @observable userName:string = ""
   @observable passWord:string = ""
}
export const LoginStore = new Login();

