<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "scroll",
    data(){
      return{
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type: Boolean,
        default: true
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
         click:true,
         probeType: this.probeType,
         pullUpLoad:this.pullUpLoad
      })
      this.scroll.on('scroll',position=>{
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp',()=>{
         this.$emit('pullingUp')
      })
    },
    methods:{
      refresh(){
        this.scroll&&this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
