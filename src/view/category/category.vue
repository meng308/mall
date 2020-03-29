<template>
  <div class="category">
    <!-- 导航 -->
    <navbar class="category-nav-bar">
      <div slot="center">商品分类</div>
    </navbar>
    <div class="container">
      <div class="menu">
        <!-- 左边菜单栏 -->
        <category-menu @currentMenu="currentMenu" :menuData="categories"/>
      </div>
      <div class="view">
        <!-- 右边 视图view -->
        <category-view  :data-views="showSubcategory"/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar/navbar";
import CategoryMenu from "./children/CategoryMenu";
import CategoryView from "./children/CategoryView";
import {getCategory, getSubcategory} from "../../network/category"

export default {
  name: "Category",
  components: {
    navbar,
    CategoryMenu,
    CategoryView
  },
  data() {
    return {
      categories: [],
      currentIndex: -1,
      categoryData: {},
      isShow:false
    }
  },
  created() {
    this._getCategory()
  },
  computed: {
    showSubcategory() {
      // console.log(this.categoryData);
      if (this.currentIndex === -1) {
        return {}
      }
      return this.categoryData[this.currentIndex]
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        console.log(res);
        this.categories = res.data.category.list
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategory: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 获取第一个菜单的数据
        this._getSubcategory(0)
      })
    },
    _getSubcategory(index) {
      const maitKey = this.categories[index].maitKey
      getSubcategory(maitKey).then(res => {
        // this.categoryViews = res.data.data.list
        this.categoryData[index].subcategory = res.data.list
        this.currentIndex = index
      })
    },
    currentMenu(i) {
      // 菜单栏改变，请求新的数据
      this._getSubcategory(i)
    }
  }
}
</script>

<style scoped>
  .category-nav-bar{
    background-color:#ff8198;
    color:#fff;
    position: relative;
    z-index: 99;
  }


  div{
      font-weight: bolder;
      font-size: 16px;
  }


  .container{
    position: absolute;
    top: 44px;
    bottom :49px;
    width :100%;
    display :flex;
  }


  .menu{
      flex :0 0 100px;
  }

  .view{
    flex: 1;
  }
</style>
