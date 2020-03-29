<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
       <tabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"></tabControl>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
          <Swiper>
            <swiper-item v-for="item in banner"><a :href ="item.link" ><img :src="item.image" alt="" @load="imageLoad()"></a></swiper-item>
          </Swiper>
          <recommend :recommends="recommends"></recommend>
          <FeatureView></FeatureView>
          <tabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tabControl>
          <goodsList :goods="showGoods"></goodsList>
        </scroll>
    <backTop @click.native="backClick()" v-show="isBack"></backTop>

  </div>
</template>

<script>
  import {getHomeMultidata,getHomeGoods} from "../../network/home";

  import navbar from "../../components/common/navbar/navbar";
  import Swiper from "../../components/common/swiper/Swiper";
  import SwiperItem from "../../components/common/swiper/SwiperItem";
  import recommend from "./recommend";
  import FeatureView from "./FeatureView";
  import tabControl from "../../components/content/tabControl/tabControl";
  import goodsList from "../../components/content/goods/goodsList";
  import goodsItem from "../../components/content/goods/goodsItem";
  import scroll from "../../components/common/scroll/scroll";
  import backTop from "../../components/content/backTop/backTop";
  export default {
    name: "home",
    data(){
      return {
        banner:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentGoods:'pop',
        isBack:false,
        tabOffsetTop:540,
        isTabFixed:false,
        saveY:0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentGoods].list
      }
    },
    components:{
      navbar,
      SwiperItem,
      Swiper,
      recommend,
      FeatureView,
      tabControl,
      goodsList,
      goodsItem,
      scroll,
      backTop,

    },
    created(){
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    activated() {
       this.$refs.scroll.scroll.refresh()
       this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated() {
        this.saveY = this.$refs.scroll.scroll.y
    },
    mounted(){
      const refresh = this.debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('itemImagLoad',()=>{
        refresh()
      })

    },
    methods:{
      debounce(func,delay){
        let timer = null
        return function(...args){
          if(timer) clearTimeout(timer)
          timer = setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      },
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banner =res.data.banner.list;
          this.recommends =res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

        })
      },
      loadMore(){
        this.getHomeGoods(this.currentGoods)
        this.$refs.scroll.scroll.finishPullUp()
        this.$refs.scroll.scroll.refresh()
      },
      tabClick(index){
        switch(index) {
             case 0:
              this.currentGoods = 'pop'
              break
             case 1:
               this.currentGoods = 'new'
               break
             case 2:
               this.currentGoods = 'sell'
               break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      contentScroll(position){
          this.isBack = (-position.y)>1000
          this.isTabFixed =(-position.y)>this.tabOffsetTop
      },
      imageLoad(){
       this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;

      }

    }
  }

</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;

  }
.home-nav{
  background-color: var(--color-tint);
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 9;*/
}

  .content{
    /*height: 300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }

</style>
