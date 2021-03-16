import axios from 'axios';
import Axios from 'axios';
import humps from 'humps'
export interface IApiResponse {
    readonly status: number;
    readonly body: any
}

export async function getRequest(path: string): Promise<IApiResponse>{
    const newHeaders: { [key: string]: string } = { "Content-Type": "application/json" };
    const request = await axios.get(path,{ headers: newHeaders })
        .then((response)=>{
            return response
        },(error)=>{
            return error.response;
        });
    try {
        return {
            status: request.status,
            body: humps.camelizeKeys(request.data)
        }
    }
    catch (e) {
        return {
            status: 0,
            body: undefined
        }
    }
}
export async function postRequest(path: string, _params: object): Promise<IApiResponse> {
    const newHeaders: { [key: string]: string } = { "Content-Type": "application/json" };
    return new Promise<IApiResponse>((resolve) => {
        Axios({
            data: JSON.stringify(_params),
            method: "POST",
            headers: newHeaders,
            url: path
        }).then((success: any) => {
            resolve({
                body: humps.camelizeKeys(success.data),
                status: success.status
            });
        }).catch((error) => {
            const resError: IApiResponse = {
                body: error.response.data,
                status: error.response.status
            };
            resolve(resError);
        });
    });
}
