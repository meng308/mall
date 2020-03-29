<template>
  <div class="profile">
    <navbar class="profile-nav-bar"><div slot="center">商城</div></navbar>
    <scroll class="content">
      <user-info class="user-info"/>
      <div class="order-list">
        <div class="list-item">
          <img class="item-img" src="~assets/img/profile/profile_message.svg" alt="">
          <span class="item-text">我的消息</span>
        </div>
        <div class="list-item">
          <img class="item-img" src="~assets/img/profile/profile_score.svg" alt="">
          <span class="item-text">积分商城</span>
        </div>
        <div class="list-item">
          <img class="item-img" src="~assets/img/profile/profile_vip.svg" alt="">
          <span class="item-text">会员卡</span>
        </div>
      </div>
      <div class="order-list">
        <div class="list-item">
          <img class="item-img" src="~assets/img/profile/profile_cart.svg" alt="">
          <span class="item-text">我的购物车</span>
        </div>
        <div class="list-item">
          <img class="item-img" src="~assets/img/profile/profile_download.svg" alt="">
          <span class="item-text">下载购物APP</span>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar/navbar";
import UserInfo from "./children/UserInfo";
import scroll from "../../components/common/scroll/scroll";

export default {
  name: "Profile",
  components: {
    UserInfo,
    navbar,
    scroll
  }
}
</script>

<style scoped>
  .profile .profile-nav-bar{
    background-color: #ff8198;
    color: #fff;
  }
  div{
    font-weight: bold;
  }

  .content{
    position: absolute;
    top:44px;
    bottom: 50px;
    width: 100%;
  }

  .order-list{
    display :flex;
    flex-direction :column;
    border-bottom: 10px solid #f2f2f2;
  }

  .list-item{
    border-bottom: 1px solid #f2f2f2;
    padding: 12px;
    display: flex;
    align-items: center;
  }

  .item-img{
    margin-left: 10px;
    height: 18px;
    width: 18px;
  }

  .item-text{
    margin-left: 10px;
  }

</style>
