import request from "@/utils/request"
export const getTopCategoryDataApi = (id) =>{
    return request.get('/category',{
        params:{
            id
        }
    })
}