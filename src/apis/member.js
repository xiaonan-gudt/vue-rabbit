 import request from "@/utils/request";
//获取可能喜欢的列表数据
export const getLikeListApi = ( limit = 4 ) => {
    return request({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }

  export const getUserOrder = (params) => {
    return request({
      url:'/member/order',
      params
    })
  }