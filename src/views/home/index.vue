<script setup>
import HomeHot from "@/components/homeHot.vue"
import HomeProduct from "@/components/homeProduct.vue";
import HomeNew from "@/components/homeNew.vue";
import HomeBanner from "@/components/homeBanner.vue";
import HomeCategory from "@/components/homeCategory.vue";
import HomePanel from  "@/components/homePanel.vue"
</script>
<template>
   <div class="container">
    <HomeCategory />
    <HomeBanner />
   </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <div>主体内容区域</div> </HomePanel>
</template>
 
