import { makeObservable, observable} from "mobx";
class Dashboard{
   userData:IUserData [] = [];
   isShowModal:boolean = false;

    constructor() {
        makeObservable(this,{
            userData:observable,
            isShowModal:observable
        });
    }
    addUser:IUserData = {
        email: "",
        fullname: "",
        pass: "",
    }


}
interface IUserData{
    email: string
    fullname: string
    id?: number
    pass: string
    repassword?:string
}
export const dashboardStore = new Dashboard()
