<script setup>

import layoutHeader from "./components/layoutHeader.vue"
import layoutNav from "./components/layoutNav.vue";
import layoutFooter from "./components/layoutFooter.vue"
import layoutFloat from "./components/layoutFloat.vue"
</script>

<template>
 <layoutFloat />
    <layoutNav />
    <layoutHeader />
    <router-view />
    <layoutFooter />
</template>

<style scoped lang="scss">

</style>
