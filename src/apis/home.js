import request from "@/utils/request";
export const getBannerDataApi = (distributionSite = 1)=>{
    return request.get('home/banner',
        {
            params:{
                distributionSite
            }
        }
    )
}
export const getNewApi = ()=>{
    return request.get('/home/new')
}
export const getHotApi = ()=>{
    return request.get('home/hot')
}
export const getGoodsApi = ()=>{
    return request.get('/home/goods')
}