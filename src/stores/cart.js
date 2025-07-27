import { defineStore } from "pinia";
import { computed,  ref } from "vue";
import { useUserStore } from "./user";
import { getCartListApi, addCartApi, delCartApi } from "@/apis/cart";
export const useCartStore = defineStore('cart',()=>{
    const cartList = ref([])
    const userStore = useUserStore()
    const isLogin = computed(()=>userStore.userInfo.token)
    const addCart = async(goods)=>{
        const {skuId, count} = goods
        if(isLogin.value){
        await addCartApi(skuId,count)
        getCartList()
        }
        else{
            const item = cartList.value.find(item => item.skuId === goods.skuId)
            if(item){
                item.count += goods.count
            }
            else cartList.value.push(goods)
        }
    }

    const delCart = async (skuId) => {
        if(isLogin.value){
            await delCartApi([skuId])
            getCartList()
        }
        else cartList.value = cartList.value.filter(item => item.skuId !== skuId)
    }
    const clearCart = () => {
    cartList.value = []
    }
    const getCartList = async()=>{
        const res = await getCartListApi()
        console.log(res);
        cartList.value = res.data.result        
    }
    const singeCheck = (selected, i) =>{
        const item = cartList.value.find(item => item.skuId === i.skuId)
        item.selected = selected
    }
    const multiCheck = (selected) =>{
        cartList.value.forEach(item => item.selected = selected)
    }
   const allCount = computed(()=>{
       return cartList.value.reduce((total, item)=> total + item.count, 0)
    })
    const allPrice = computed(()=>{
        return cartList.value.reduce((total, item) => total + item.price * item.count, 0)
    })
    const isAll = computed(()=>{
        return cartList.value.every(item => item.selected)
    })
    const selCartList = computed(()=>{
        return cartList.value.filter(item => item.selected === true)
    })
    const selCount = computed(()=>{
        return selCartList.value.reduce((total, item)=> total + item.count, 0)
     })
     const selPrice = computed(()=>{
         return selCartList.value.reduce((total, item) => total + item.price * item.count, 0)
     })
    return {cartList, isAll, multiCheck, addCart, delCart, allCount, allPrice, singeCheck, selCount, selPrice, clearCart, getCartList}
},
{
    persist:true
})