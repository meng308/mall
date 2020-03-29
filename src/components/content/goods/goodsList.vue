<template>
  <div class="goods">
    <goodsItem v-for="item in goods" :goods-item="item"></goodsItem>
  </div>
</template>

<script>
  import goodsItem from "./goodsItem";
  export default {
    name: "goodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      goodsItem
    },

  }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
