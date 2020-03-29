<template>
  <scroll class="scroll">
    <div class="category-view">
      <div class="view-item">
        <div class="item" v-for="item in this.dataViews.subcategory">
          <a :href="item.link">
            <img class="item-img" :src="item.image" alt="">
            <span class="item-text">{{item.title}}</span>
          </a>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>

import scroll from "../../../components/common/scroll/scroll";

export default {
  name: "CategoryView",
  components: {
    scroll
  },
  props: {
    dataViews: {
      type: Object
    }
  },
  created() {

  }
}
</script>

<style scoped>
  .scroll{
    height:100%;
  }


  .category-view{
    padding:5px 5px 10px 10px;
  }

  .view-item{
    display :flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }


  .item{
    margin-top :10px;
    margin-right: 13px;
  }


  a{
    display :flex;
    flex :1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;
  }



  .item-img{
    border-radius:50%;
    width: 50px;
    height: 50px;
  }


  .item-text{
    width: 50px;
    text-align: center;
    margin-top: 10px;
    font-size :12px;
  }

</style>
