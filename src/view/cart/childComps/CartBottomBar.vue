<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
      <CheckButton class="check-button" :is-check="isSelectAll" @click.native="checkClick"></CheckButton>
      <span>全选</span>
    </div>
    <div>
      合计:{{totalPrice}}
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  export default {
    name: "CartBottomBar",
    components:{
      CheckButton
    },
    computed:{
      totalPrice(){
        return this.$store.state.cartList.filter(item=>{
          return item.isCheck
        }).reduce((preValue,item)=>{
          return preValue + item.price * item.count
        },0)
      },
      isSelectAll(){
        // return   !(this.$store.state.cartList.filter(item=>!item.isCheck).length)
        if(this.$store.state.cartList.length ===0) return false
        return !this.$store.state.cartList.find(item=>!item.isCheck)
      }
    },
    methods:{
      checkClick(){
        if(this.isSelectAll){
          this.$store.state.cartList.forEach(item=>item.isCheck= false)
        }else{
          this.$store.state.cartList.forEach(item=>item.isCheck= true)
        }
      }
    }
  }
</script>

<style scoped>
.cart-bottom-bar{
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  display: flex;
}
.check-content{
  display: flex;
  margin-left: 10px;
}
  .check-button{
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
</style>
