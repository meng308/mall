<template>
   <div id="detail">
     <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
     <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
       <detailSwiper :topImages="topImages"></detailSwiper>
       <detailBaseInfo :goods="goods"></detailBaseInfo>
       <detailShopInfo :shop="shop"></detailShopInfo>
       <detailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></detailGoodsInfo>
       <detailParamInfo :paramInfo="paramInfo" ref="params"></detailParamInfo>
       <detailcommentInfo :commentInfo="commentInfo" ref="comment"></detailcommentInfo>
       <goodsList :goods="recommends" ref="recommend"></goodsList>
     </scroll>
     <detailBottomBar @addCart="addCart"></detailBottomBar>
     <toast :message="message" :show="show"></toast>
   </div>
</template>

<script>
  import detailNavBar from "./childComps/detailNavBar";
  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";
  import detailSwiper from "./childComps/detailSwiper";
  import detailBaseInfo from "./childComps/detailBaseInfo";
  import detailShopInfo from "./childComps/detailShopInfo";
  import scroll from "../../components/common/scroll/scroll";
  import detailGoodsInfo from "./childComps/detailGoodsInfo";
  import detailParamInfo from "./childComps/detailParamInfo";
  import detailcommentInfo from "./childComps/detailcommentInfo";
  import goodsList from "../../components/content/goods/goodsList";
  import detailBottomBar from "./childComps/detailBottomBar";
  import toast from "../../components/toast/toast";
  export default {
    name: "detail",
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[0,1000,2000,3000],
        currentIndex:0,
        message:'',
        show:false
      }
    },
    created(){
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res=>{
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        if(data.rate.cRate!==0){
          this.commentInfo = data.rate.list[0]
        }

      })
      getRecommend().then(res=>{
        this.recommends = res.data.list
      })
    },
    components:{
      detailNavBar,
      detailSwiper,
      detailBaseInfo,
      detailShopInfo,
      scroll,
      detailGoodsInfo,
      detailParamInfo,
      detailcommentInfo,
      goodsList,
      detailBottomBar,
      toast
    },
    methods:{
      imageLoad(){
        this.$refs.scroll.refresh()
        this.themeTopYs=[]
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
      },
      titleClick(index){
        this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],100)
      },
      contentScroll(position){
        const positionY = -position.y
        let length = this.themeTopYs.length
        for(let i =0;i<length ;i++){
          if(this.currentIndex!==i && ((i<length-1&&positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])||(i===this.themeTopYs.length-1&&positionY>this.themeTopYs[i]))){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addCart(){
        const product = {}
        product.img = this.topImages[0]
        product.title = this.goods.title
        product.desc =this.goods.desc
        product.price =this.goods.realPrice
        product.iid = this.iid
        this.$store.dispatch('addCart',product).then(res=>{
          this.show=true;
          this.message = res;
          setTimeout(()=>{
            this.show = false;
            this.message =''
          },1500)
        })

      }
    },

  }
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
  .content{
    height: calc(100% - 44px - 49px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
