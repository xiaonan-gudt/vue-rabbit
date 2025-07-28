import request from "@/utils/request";
export const getOrderData = () =>{
    return request.get('/member/order/{id}')
}