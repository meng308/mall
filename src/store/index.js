import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
     addCounter(state,payload){
       payload.count++
     },
    addToCart(state,payload){
       payload.isCheck = true
       state.cartList.push(payload)
    }
  },
  actions:{
    addCart(context,payload){
      return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item=>item.iid===payload.iid)

        if(oldProduct){
          // oldProduct.count += 1
          context.commit('addCounter',oldProduct)
          resolve('当前商品数量+1')

        }else{
          payload.count = 1
          // context.state.cartList.push(payload)
          context.commit('addToCart',payload)
          resolve('添加了新的商品')
        }
      })
    }
  },
  getters:{

  }
})

export default store
