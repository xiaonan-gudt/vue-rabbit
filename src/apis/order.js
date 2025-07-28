import request from "@/utils/request";
export const getOrderDataApi = (id) =>{
    return request.get(`/member/order/${id}`)
}