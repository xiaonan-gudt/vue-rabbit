import { defineStore } from 'pinia'
import {ref} from 'vue'
import { getCategory} from '../apis/layout'
export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([])
   const getCategoryMsg = async () => {
        const res = await getCategory()
        console.log(res);
        categoryList.value = res.data.result
     }
     return {categoryList, getCategoryMsg}
})
