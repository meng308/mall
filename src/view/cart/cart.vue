<template>
  <div class="cart">
    <navbar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </navbar>
    <CartList></CartList>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import navbar from "../../components/common/navbar/navbar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";
  export default {
    name: "cart",
    components:{
      navbar,
      CartList,
      CartBottomBar
    },
    computed:{
      cartLength(){
        return this.$store.state.cartList.length
      }
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
}
</style>
