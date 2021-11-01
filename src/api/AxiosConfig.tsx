import axios, { AxiosError } from 'axios'
import { Urls } from './Urls'
const NAxios = axios.create({
    baseURL: Urls.BASE,
    timeout: 30000,
    headers: {
        'Content-type': 'application/json',
    }
})

NAxios.interceptors.request.use(function (config) {
    // console.log(`[START][${config.method} ${config.baseURL}${config.url} ]`, config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
NAxios.interceptors.response.use(function (response) {
    // console.log(`[END][${response.config.url}]`, response)
    return response;
  }, function (error) {
    console.log(error.response);
    return Promise.reject(error)
  });

  export default NAxios