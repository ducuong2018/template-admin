import {observable} from "mobx";
class Login{

    @observable userName:string = ""
    @observable pass :string = ""
}
export const LoginStore = new Login();
