<template>
  <div class="tabControl">
      <div class="tabControl-item" v-for="(item,index) in titles"
           :class="{active:index===currentIndex}"
           @click="itemClick(index)" ><span>{{item}}</span></div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props:{
      titles:{
        type:Array,
        default() {
          return [];
        }
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    },
    data(){
      return{
        currentIndex:0
      }
    }
  }
</script>

<style scoped>
.tabControl{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #ffffff;
}
.tabControl-item{
  flex: 1;
}
.tabControl-item span{
  padding: 5px;
}

.active{
    color: var(--color-high-text);

  }

.active span{
    border-bottom: 1px solid var(--color-tint);
  }
</style>
