import request from '@/utils/request'
export const testApi = ()=>{
   return request.get('home/category/head')
}