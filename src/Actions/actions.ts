import axios from "axios";
import {BASE_URL} from '../config'
axios.defaults.baseURL = BASE_URL;

export const GET = (path : string, Q: any) => {
   return axios({
      method: 'GET',
      url: path,
      params: Q,
  }).then( res =>  res.data)
  
}

