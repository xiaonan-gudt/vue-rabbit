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
    return {cartList, isAll, multiCheck, addCart, delCart, allCount, allPrice, singeCheck, selCount, selPrice}
},
{
    persist:true
})