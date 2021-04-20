import Axios, { Method } from "axios";
import humps from "humps";
export interface IApiResponse<T> {
  status: number
  body: T
}

export interface IMetadata {
  page: number,
  size: number,
  total: number,
  totalPage: number
}

async function getRequest(url: string, isToken: boolean = true): Promise<IApiResponse<any>> {
  const headers: { [key: string]: string } = {};
  headers["Content-Type"] = "application/json";
  return new Promise<any>((resolve, reject) => {
    try {
      Axios.get(
         url
      )
        .then(next => {
          resolve({
            body: humps.camelizeKeys(next.data),
            status: next.status
          });
          console.log(`${next.config.method},${url}:${next.status}`);
        })
        .catch(error => {
          console.log(`${error.response.config.method},${url}:${error.response.status}`);
          try {
            resolve({
              status: error.response.status,
              body: humps.camelizeKeys(error.response.data)
            });
            handleOnErrorRequest(error);
          } catch (e) {
            resolve({
              status: 500,
              body: e
            });
          }
        })
    } catch (e) {
      console.error(e);
     
    }
  });
}

async function apiCall(url: string, method: Method, isToken: boolean = true, data?: { [key: string]: any }): Promise<IApiResponse<any>> {
  const headers: { [key: string]: string } = {};
  headers["Content-Type"] = "application/json";
  console.log(url + "...");
  return new Promise<any>((resolve, reject) => {
    try {
      Axios(
        {
          url:  url,
          method: method,
          headers: headers,
          data: data ? JSON.stringify(data) : undefined
        }
      )
        .then(next => {
          resolve({
            body: humps.camelizeKeys(next.data),
            status: next.status
          });
          console.log(`${next.config.method},${url}:${next.status}`);
        })
        .catch(error => {
          console.log(`${error.response.config.method},${url}:${error.response.status}`);
          try {
            resolve({
              status: error.response.status,
              body: humps.camelizeKeys(error.response.data)
            });
            handleOnErrorRequest(error);
          } catch (e) {
            resolve({
              status: 500,
              body: e
            });
          }
        })
    } catch (e) {
      console.error(e);
    }
  });
}

function postRequest(url: string, isToken: boolean = true, data?: { [key: string]: any }): Promise<IApiResponse<any>> {
  return apiCall(url, "POST", isToken, data);
}

function putRequest(url: string, isToken: boolean = true, data?: { [key: string]: any }) {
  return apiCall(url, "PUT", isToken, data);
}

function deleteRequest(url: string, isToken: boolean = true, data?: { [key: string]: any }) {
  return apiCall(url, "DELETE", isToken, data);
}

function handleOnErrorRequest(error: { status: number, data: any }) {
  try {
    if (error.status === 401) {
    }
  } catch (e) {
    console.error(e);
  }
}

export {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
};
