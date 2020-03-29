<template>
  <scroll class="wrapper">
    <div class="menu">
      <div class="menu-item"
           @click="menuItemClick(index)"
           v-for="(item,index) in menuData"
           :class="{'active':currentIndex === index}">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>

import scroll from "../../../components/common/scroll/scroll";

export default {
  name: "CategoryMenu",
  components: {
    scroll
  },
  props: {
    menuData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  created() {
    // console.log(this.menuData);
  },
  methods:{
    menuItemClick(i){
      this.currentIndex = i
      this.$emit('currentMenu',i)
    }
  }
}
</script>

<style scoped>
  .wrapper{
    height:100%;
  }

  .menu .menu-item{
      height :45px;
      display: flex;
      align-items :center;
      justify-content :center;
      background-color: #f6f6f6;
      font-size: 14px;
    }

  .active{
    border-left: 2px solid #ff5777;
    background-color:#fff;
    color :#ff8198;
  }



</style>
