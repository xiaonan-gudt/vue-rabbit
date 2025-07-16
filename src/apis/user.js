import request from "@/utils/request";
export const loginApi = ({account, password}) => {
    return request({
        url:'/login',
        method:'POST',
        data:{
            account, password 
        }
    })
}