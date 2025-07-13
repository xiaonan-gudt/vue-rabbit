import {getBannerDataApi} from '@/apis/home'
import {ref, onMounted} from "vue"
export function useBanner(){
    const bannerList = ref([])
const getBannerData = async ( distributionSite = 1)=>{
    const res = await getBannerDataApi(distributionSite)
    console.log(res);
    bannerList.value = res.data.result
}
onMounted(()=>{
    getBannerData(2)
    })
    return {bannerList}
}