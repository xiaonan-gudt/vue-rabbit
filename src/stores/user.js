import { loginApi } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCartStore } from "./cart";
import { mergeCartApi } from "@/apis/cart";
export const useUserStore = defineStore('user', ()=>{
    const userInfo = ref({})
    const cartStore = useCartStore()
    const getUserInfo = async ({account, password})=>{
        const res = await loginApi({account, password})
        userInfo.value = res.data.result  
        await mergeCartApi(cartStore.cartList.map(item => {
           return{
           skuId:item.skuId,
           selected:item.selected,
           count:item.count
           }
        }))
        cartStore.getCartList()  
    }
    
    const clearUserInfo = () =>{
        userInfo.value = {}
         cartStore.clearCart()   
    }
    return {userInfo, getUserInfo, clearUserInfo}

},
   {
    persist: true,
  },)