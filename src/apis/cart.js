import request from "@/utils/request";
export const addCartApi = (skuId, count)=>{
   return request.post('/member/cart',{
            skuId,
            count
    })
}
export const getCartListApi = ()=>{
    return request.get('/member/cart')
}

export const delCartApi = (ids) => {
    return request.delete('/member/cart', {
        data:{
            ids
        }
    })
}
export const mergeCartApi = (data) => {
    return request.post('/member/cart/merge',data)
}