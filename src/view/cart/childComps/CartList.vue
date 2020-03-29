<template>
    <div class="cart-list">
     <scroll class="content" ref="scroll">
       <CartGoodsListItem v-for="(item , index) in cartList " :product="item" :key="index"></CartGoodsListItem>
     </scroll>
    </div>
</template>

<script>
  import scroll from "../../../components/common/scroll/scroll";
  import CartGoodsListItem from "./CartGoodsListItem";
  export default {
    name: "CartList",
    computed:{
       cartList(){
         return this.$store.state.cartList
       }
    },
    components:{
      scroll,
      CartGoodsListItem,
    },
    activated(){
      this.$refs.scroll.scroll.refresh()
    }
  }
</script>

<style scoped>
.cart-list{
  height: calc(100vh - 44px - 49px - 40px);
}

.content{
  height: 100vh;
  overflow: hidden;
}
</style>
