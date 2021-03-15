import { makeObservable, observable} from "mobx";
class Dashboard{
    userData:IUserData [] = [];
    constructor() {
        makeObservable(this,{
            userData:observable,
        });
    }

}
interface IUserData{
    email: string
    fullname: string
    id: number
    pass: string
}
export const dashboardStore = new Dashboard()
