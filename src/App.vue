<script setup>
import layoutHeader from "./components/layoutHeader.vue"
import layoutNav from "./components/layoutNav.vue";
import layoutFooter from "./components/layoutFooter.vue"

</script>

<template>
    <layoutNav />
    <layoutHeader />
    <router-view />
    <layout-footer />
</template>

<style scoped lang="scss">

</style>
