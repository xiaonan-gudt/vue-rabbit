import request from "@/utils/request";
export const getBannerDataApi = ()=>{
    return request.get('home/banner')
}