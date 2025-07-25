import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useCartStore = defineStore('cart',()=>{
    const cartList = ref([])
    const addCart = (goods) =>{
        const item = cartList.value.find(item => item.skuId === goods.skuId)
        if(item){
            item.count += goods.count
        }
        else cartList.value.push(goods)
    }
    const delCart = (id) => {
        cartList.value = cartList.value.filter(item => item.skuId !== id)
    }
   const allCount = computed(()=>{
       return cartList.value.reduce((total, item)=> total + item.count, 0)
    })
    const allPrice = computed(()=>{
        return cartList.value.reduce((total, item) => total + item.price * item.count, 0)
    })
    return {cartList, addCart, delCart, allCount, allPrice}
},
{
    persist:true
})