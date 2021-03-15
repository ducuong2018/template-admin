import {getRequest} from "../../common/services/baseService";
import {dashboardStore} from "./store";

export const getUser = async () => {
    const result = await getRequest("http://192.168.1.221:8080/api/user");
    if(result.status < 300){
        dashboardStore.userData = result.body
        console.log(dashboardStore.userData)
        console.log(result)
    }
}
