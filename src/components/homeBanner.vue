<script setup>
import {ref, onMounted} from 'vue'
import {getBannerDataApi} from '@/apis/home'
const data =ref({})
const bannerList = ref([])
const getBannerData = async ()=>{
    const res = await getBannerDataApi()
    console.log(res);
    data.value = res.data
    bannerList.value = data.value.result
    console.log(bannerList.value);
}

onMounted(()=>getBannerData()) 
</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>