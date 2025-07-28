import request from "@/utils/request"
export const getCheckoutInfoApi = () => {
    return request.get('/member/order/pre')
  }
  export const postCheckoutInfoApi = (data)=>{
    return request.post('/member/order',
      data
    )
  }