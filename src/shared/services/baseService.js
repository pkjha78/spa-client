import axios from 'axios';
import { SERVICE_URL, SSO_TOKEN_URL } from "../constants";

export const ssoInstance = axios.create({url: SSO_TOKEN_URL, method: 'get', payload:{"email": "admin@admin.com", "password": "123456"}});

export const getSSO = () =>ssoInstance();
export const instance = axios.create({
  baseURL: SERVICE_URL,
  headers:{
    'Content-Type': 'application/json',
    'X-ORG-Channel-Id': 'ICE',
    'X-ORG-E2E-Trust-Token': 'TOKEN',
    'X-ORG-Request-Correlation-Id': '123',
    'X-ORG-Request-Session-Id': '123',
    'X-ORG-Channel-CountryCode': 'IN',
    'Pragma': 'no-cache'
  },
  validateStatus: status => (status >=200 && status < 202)
});

//Request Interception
instance.interceptors.request.use(req => {
  return req;
}, error => {
  console.console.error("Error from req interceptor: ", error);
});

//Response interceptor
instance.interceptors.response.use(response =>{
  return response;
}, error => {
  return Promise.reject(error);
});

export default instance;
