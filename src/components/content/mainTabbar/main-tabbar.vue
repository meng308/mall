<template>
  <div>
    <tabBar>
      <tabBarItem path="/home" mycolor="#ff5777">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="iconActive">
        <div slot="text">首页</div>
      </tabBarItem>
      <tabBarItem path="/category" mycolor="#ff5777">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="iconActive">
        <div slot="text">分类</div>
      </tabBarItem>
      <tabBarItem path="/cart" mycolor="#ff5777">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="icon">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="iconActive">
        <div slot="text">购物车</div>
      </tabBarItem>
      <tabBarItem path="/profile" mycolor="#ff5777">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="iconActive">
        <div slot="text">我的</div>
      </tabBarItem>
    </tabBar>
  </div>

</template>

<script>
  import tabBar from "../../common/tabbar/tabbar";
  import tabBarItem from "../../common/tabbar/tabbar-item"
  export default {
    name: "main-tabbar",
    components:{
      tabBar,
      tabBarItem
    }
  }
</script>

<style scoped>

</style>
