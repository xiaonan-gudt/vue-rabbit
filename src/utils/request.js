import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user'
import router from "@/router";
const request = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
request.interceptors.request.use(config => {
  const store = useUserStore()
  const token = store.userInfo.token
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
    return config
}, (e) => {
    return Promise.reject(e);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const store = useUserStore()
    ElMessage({type:'warning',message:error.response.data.message})
    if(error.response.data.status === 401)
    {
      store.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(error);
  });
export default request