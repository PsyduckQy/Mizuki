<template>
  <div id="mymanage">
    <div class="mynavtop">
      <div class="mynavtopImg">
        <div class="mynavtopImgso">
          <div class="mynavtopImgsoso">
            <img src="../assets/mymanage/userImg.jpg">
          </div>
        </div>
      </div>
      <div class="mynavmessage">
        <h3 class="username">暴走的小学生</h3>
        <p class="userstate">
          <span>这是一个标签</span>
        </p>
        <div class="userstate-icon">
          <router-link :to="{ name: 'personaldata' }">
            <mu-icon value="arrow_forward_ios" :size="24" color="#ffffff"/>
          </router-link>
        </div>
        <h4 class="usertreasure">
          <span>硬币：2333</span>
          <span>S币：2333</span>
        </h4>
      </div>
    </div>
    <div class="clear"></div>
    <div class="navigationLis">
      <div class="navigationLis-top">
        <h1 class="navigationLisNav">个人中心</h1>
        <mu-flexbox>
          <mu-flexbox-item class="flex-demo">
            <vue-star animate="animated bounceIn">
              <img src="../assets/mymanage/biglogo1.png" slot="icon" @click="gasroute('cache')">
            </vue-star>
            <p>离线缓存</p>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <vue-star animate="animated bounceInDown">
            <img src="../assets/mymanage/biglogo2.png" slot="icon">
            </vue-star>
            <p>历史记录</p>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <vue-star animate="animated bounceInLeft">
            <img src="../assets/mymanage/biglogo3.png" slot="icon">
            </vue-star>
            <p>我的收藏</p>
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox class="mt8">
          <mu-flexbox-item class="flex-demo">
            <vue-star animate="animated bounceInUp">
            <img src="../assets/mymanage/biglogo5.png" slot="icon">
            </vue-star>
            <p>稍后再看</p>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <vue-star animate="animated jackInTheBox">
            <img src="../assets/mymanage/biglogo6.png" slot="icon">
            </vue-star>
            <p>S币钱包</p>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <vue-star animate="animated flip">
            <img src="../assets/mymanage/biglogo7.png" slot="icon">
            </vue-star>
            <p>主题选择</p>
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
      <div class="navigationLis-center">
        <h1 class="navigationLisNav">我的服务</h1>
        <mu-flexbox>
          <mu-flexbox-item class="flex-demo">
            <vue-star animate="animated flipInY">
              <img src="../assets/mymanage/biglogo8.png" slot="icon">
            </vue-star>
            <p>游戏中心</p>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <vue-star animate="animated slideInDown">
              <img src="../assets/mymanage/biglogo9.png" slot="icon">
            </vue-star>
            <p>直播中心</p>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <vue-star animate="animated zoomInDown">
              <img src="../assets/mymanage/biglogo10.png" slot="icon">
            </vue-star>
            <p>大会员</p>
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
    </div>

    <toast :isToast="toggle._isToast"></toast>
  </div>
</template>



<script>
import toast from '../components/toast'
import VueStar from 'vue-star'
export default {
  data () {
    return {
      toggle: {
        _isToast: true
      }
    }
  },
  components: {
    VueStar,
    toast
  },
  methods: {
    gasroute (ob) {
      setTimeout(() => {
        this.$router.push({ name: ob })
        // console.log(history.back())
      }, 500)
    }
  },
  mounted () {
    setTimeout(() => {
      this.toggle._isToast = false
    }, 500)
  }
}
</script>


<style lang="less">
  @import "../styles/mymanage.less";
  @import "../styles/animate.min.css";
</style>
