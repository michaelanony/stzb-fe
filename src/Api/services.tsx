import axios from "./myaxios";
import {UserResp} from "../Types/Types"

const REACT_APP_API_HOST = "http://127.0.0.1/api"

export const apiGetMembers = async(name:string|null):Promise<UserResp>=>{
    if (name){
        var url= REACT_APP_API_HOST + `/member?name=`+name
    }else{
        var url = REACT_APP_API_HOST + `/member`
    }
    return axios({
        url:url,
        method: "GET",
    }).then(res => {
        return res.data
    })
}
