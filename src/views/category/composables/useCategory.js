import {ref, onMounted} from "vue"
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import {getTopCategoryDataApi} from '@/apis/category'
export function useCategory(){
    const topCategoryData = ref({})
    const route = useRoute()
    const getTopCategoryData = async (id)=>{
        const res = await getTopCategoryDataApi(id)
        console.log(res);
        topCategoryData.value = res.data.result
    }
    onMounted(()=>{
        getTopCategoryData(route.params.id)
        })
        onBeforeRouteUpdate((to)=>{
          console.log(to);
          getTopCategoryData(to.params.id)
        })
       return { topCategoryData } 
}