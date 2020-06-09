import axios from "./myaxios";
import {UserResp} from "../Types/Types"

const REACT_APP_API_HOST = "http://127.0.0.1/api"

export const apiGetMembers = async():Promise<UserResp>=>{
    return axios({
        url: REACT_APP_API_HOST + `/member`,
        method: "GET",
    }).then(res => {
        return res.data
    })
}
