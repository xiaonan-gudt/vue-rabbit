<script setup>
import HomeHot from "@/components/homeHot.vue"
import HomeProduct from "@/components/homeProduct.vue";
import HomeNew from "@/components/homeNew.vue";
import HomeBanner from "@/components/homeBanner.vue";
import HomeCategory from "@/components/homeCategory.vue";
</script>
<template>
   <div class="container">
    <HomeCategory />
    <HomeBanner />
   </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
</template>
 
