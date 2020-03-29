<template>
  <div class="tab-item" @click="myfun()">
          <div v-if="isActive"><slot name="iconActive" ></slot></div>
          <div v-else><slot name="icon"></slot></div>
          <div :style="finalcolor"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "tabbar-item",
    data(){
      return{

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      finalcolor(){
        return this.isActive? {color:this.mycolor}:{}
      }
    },
    props:{
      path:String,
      mycolor:{
        type:String,
        default:'yellow'
      }
    },
    methods:{
      myfun(){
        if(this.$route.path !== this.path)
        {this.$router.push(this.path)};
      }
    }
  }
</script>

<style scoped>
  .tab-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>
