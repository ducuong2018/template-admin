import {getRequest, postRequest} from "../../common/services/baseService";
import {dashboardStore} from "./store";

export const getUser = async () => {
    const result = await getRequest("http://localhost:8081/api/user");
    if(result.status < 300){
        dashboardStore.userData = result.body
        console.log(dashboardStore.userData)
        console.log(result)
    }
}
export const addUser = async () =>{
    const result = await  postRequest("http://localhost:8081/api/user",dashboardStore.addUser);
    if(result.status < 300){

    }
}
