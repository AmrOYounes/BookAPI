
import {GET} from '../actions';

export const getBooks =   (url:string, params: any) => {
    return GET(url,params);
}

export const getBookInfo = (url:string, params: any) => {
    return GET(url,params);
}
