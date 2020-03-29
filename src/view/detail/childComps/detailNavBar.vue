<template>
  <div>
    <navbar>
      <div slot="left" class="back" @click="backClick()">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item"
             v-for="(item,index) in titles"
             :class="{active:index === currenIndex}"
             @click="titleClick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
  import navbar from "../../../components/common/navbar/navbar";
  export default {
    name: "detailNavBar",
    components:{
      navbar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currenIndex:0
      }
    },
    methods:{
      titleClick(index){
        this.currenIndex = index
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.title{
  display: flex;
}
.title-item{
  flex: 1;
  font-size: 13px;
}
.active{
  color: var(--color-high-text);
}
  .back img{
    margin-top: 11px;
  }
</style>
