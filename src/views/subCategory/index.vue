<script setup>
import {getCategoryFilterAPI,getSubCategoryAPI} from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from "@/components/goodsItem.vue"
const route = useRoute()
const subCategoryData = ref({})
const getSubCategoryData = async (id = route.params.id) =>{
  const res = await getCategoryFilterAPI(id)
  console.log(res)
  subCategoryData.value = res.data.result
}
const subCategoryList = ref([])
const resData = ref({
  categoryId:route.params.id,
  page:1,
  pageSize:20,
  sortField:'publishTime'
})
const getSubCategoryList = async () =>{
  const res = await getSubCategoryAPI(resData.value)
  console.log(res)
  subCategoryList.value = res.data.result.items
  
}
 const handleChange = ()=>{
  resData.value.page = 1
  getSubCategoryList()
 }
 const disabled = ref(false)
const load = async () => {
  resData.value.page++
  const res = await getSubCategoryAPI(resData.value)
  if(res.data.result.items.length === 0){
    disabled.value = true
  }
  subCategoryList.value = [...subCategoryList.value,...res.data.result.items]
}
onMounted(()=>{ 
  getSubCategoryData()
  getSubCategoryList()
}
  )
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb  separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subCategoryData.parentId}` }">{{subCategoryData.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{subCategoryData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="resData.sortField" @tab-change="handleChange">
        <el-tab-pane label="最新商品"  name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气"  name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多"  name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div v-infinite-scroll="load" :infinite-scroll-disabled="disabled" class="body">
         <!-- 商品列表-->
         <GoodsItem v-for="good in subCategoryList"  :key="good.id" :good="good" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>