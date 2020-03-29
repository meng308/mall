import Vue from 'vue'
import VueRouter from "vue-router";
const Home = ()=>import('../view/home/home')
const Category = ()=>import('../view/category/category')
const Cart = ()=>import('../view/cart/cart')
const Profile = ()=>import('../view/profile/profile')
const Detail =()=>import('../view/detail/detail')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:'/home'
  },

  {
    path:'/home',
    component:Home
  },

  {
    path:'/category',
    component:Category
  },

  {
    path:'/cart',
    component:Cart
  },

  {
    path:'/profile',
    component:Profile
  },

  {
    path:'/detail/:iid',
    component:Detail
  }

]
const router = new VueRouter({
   routes,
   mode:'history'
})

export default router
