<script setup>
import HomePanel from './HomePanel.vue'
import {ref, onMounted} from 'vue'
import { getNewApi } from "@/apis/home"
const newList = ref([])
const getNewList = async () =>{
  const res = await getNewApi()
  console.log(res);
  newList.value = res.data.result
}
onMounted(() => getNewList())
</script>

<template>
<HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱"> <div>
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img v-img-lazy="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
 </div></HomePanel>
 
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>