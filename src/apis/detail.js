import request from "@/utils/request";
export const getDetailApi = (id) =>{
    return request.get('/goods',{
        params:{
            id
        }
    }) 
}
export const getHotGoodsApi = ({id, type, limit = 3}) =>{
    return request.get('/goods/hot',{
        params:{
            id,
            type,
            limit
        }
    }) 
}