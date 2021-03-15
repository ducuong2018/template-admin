import axios from 'axios';
import humps from 'humps'
export interface IApiResponse {
    readonly status: number;
    readonly body: any
}

export async function getRequest(path: string): Promise<IApiResponse>{
    const request = await axios.get(path)
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
