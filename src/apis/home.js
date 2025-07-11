import request from "@/utils/request";
export const getBannerDataApi = ()=>{
    return request.get('home/banner')
}
export const getNewApi = ()=>{
    return request.get('/home/new')
}
export const getHotApi = ()=>{
    return request.get('home/hot')
}