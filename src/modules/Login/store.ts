import {observable} from "mobx";
interface ILogin{
    userName:string,
    passWord:string
}
class Login {
   @observable userName:string = ""
   @observable passWord:string = ""
}
export const LoginStore = new Login();

