<template>
  <div id="index">
    <!--banner部分-->
    <div class="banner">
      <carousel-3d :autoplay="true" :autoplay-timeout="5000" :height="202.5" @after-slide-change="onAfterSlideChange">
        <slide :index="index" v-for="(item, index) in bannersImahes" :key="(item,index)">
          <div class="bannerInside">
            <img :src="item.bigImages" class="bannerImg">
            <!--<transition name="slide-fade">-->
              <!--<img :src="item.locationImg" class="locationImg" v-if="Joenanber ===index">-->
            <!--</transition>-->
          </div>
        </slide>
      </carousel-3d>
    </div>

    <ul class="waterfall">
      <li class="waterfallList" v-for="(item, index) in list" :key="index">
        <div class="waterfallListContent">
          <div></div>
          <h3>{{item.txt}}</h3>
        </div>
      </li>
      <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
          <span slot="no-more">
            没有更多数据了...
          </span>
      </infinite-loading>

    </ul>

    <div style="width: 100%;height: 70px"></div>
    <toast :isToast="toggle._isToast"></toast>
    <ErrormesFun ref="Errormes"></ErrormesFun>
  </div>
</template>


<script>
// npm install vue-star
/*
'♥◡♥', '◔ᴗ◔', 'ಠ_๏', 'ಠ‿ಠ'
*/
import toast from '../components/toast'
import ErrormesFun from '../components/ErrormesFun'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import Kuroiwa from '../assets/index/258986643076516610.jpg'
import blackRock from '../assets/index/602508444667765003.jpg'
import Kuroiwas from '../assets/index/881522823082757276.jpg'
import Nightmare from '../assets/index/768109278584655459.jpg'
import scenery from '../assets/index/scenery.jpg'
import cosMo from '../assets/index/12561152604872184.jpg'
import GokouRuri from '../assets/index/GokouRuri.jpg'
import TokisakiKurumi from '../assets/index/TokisakiKurumi.jpg'
import VueStar from 'vue-star'
import InfiniteLoading from 'vue-infinite-loading'
export default {
  data () {
    return {
      toggle: {
        _isToast: true
      },
      bannersImahes: [
        {
          bigImages: Kuroiwa,
          locationImg: GokouRuri
        },
        {
          bigImages: blackRock,
          locationImg: TokisakiKurumi
        },
        {
          bigImages: Kuroiwas,
          locationImg: GokouRuri
        },
        {
          bigImages: Nightmare,
          locationImg: TokisakiKurumi
        },
        {
          bigImages: scenery,
          locationImg: GokouRuri
        },
        {
          bigImages: cosMo,
          locationImg: TokisakiKurumi
        }
      ],
      show: false,
      Joenanber: 0,
      list: [],
      waterfall: [
        {
          cententer: '♥◡♥',
          coloer: '#ffcdd2'
        },
        {
          cententer: '◔ᴗ◔',
          coloer: '#84ffff'
        },
        {
          cententer: 'ಠ_๏',
          coloer: '#e6ee9c'
        },
        {
          cententer: 'ಠ‿ಠ',
          coloer: '#64ffda'
        }
      ],
      datalist: [
        {txt: '保安亭'},
        {txt: '背景花格'},
        {txt: '别墅花园'},
        {txt: '反面教材'},
        {txt: '柜子吊顶'},
        {txt: '户外家具'},
        {txt: '花箱树池'},
        {txt: '花园拱门'},
        {txt: '假山水系'},
        {txt: '露台花园'},
        {txt: '门头楼阁'},
        {txt: '木地板墙板'},
        {txt: '木花架'},
        {txt: '木花园'},
        {txt: '木栏杆'},
        {txt: '木凉亭'},
        {txt: '木楼梯'},
        {txt: '木石马赛克'},
        {txt: '木屋阳光房'},
        {txt: '木阳台'},
        {txt: '木艺品'},
        {txt: '欧式门头'},
        {txt: '品牌宣传'},
        {txt: '秋千'},
        {txt: '色板材料'},
        {txt: '设备宠物房'},
        {txt: '铁铝大门'},
        {txt: '铁铝网栏'},
        {txt: '小桥水车'},
        {txt: '院子木门'},
        {txt: '桌椅板凳'}
      ],
      nber: 0,
      state: true
    }
  },
  components: {
    toast,
    Carousel3d,
    Slide,
    VueStar,
    ErrormesFun,
    InfiniteLoading
  },
  created () {
  },
  methods: {
    onAfterSlideChange (index) {
      this.Joenanber = index
    },
    infiniteHandler ($state) {
      setTimeout(() => {
        if (this.state) {
          const temp = []
          let oo = this.nber ? (this.nber * 10) : 0
          let cc = (this.nber ? (this.nber + 1) : 1) * 10
          for (let a = oo; a < cc; a++) {
            console.log(a)
            if (this.datalist[a]) {
              temp.push(this.datalist[a])
            } else {
              this.state = false
            }
          }
          this.nber++
          this.list = this.list.concat(temp)
          $state.loaded()
        } else {
          $state.complete()
        }
      }, 500)
    }
  },
  mounted () {
    // this.$refs.Errormes.ErrormesFun('23333333333')
    setTimeout(() => {
      this.toggle._isToast = false
    }, 500)
  }
}
</script>

<style lang="less">
  @import "../styles/index.less";
  @import "../styles/icon.less";
</style>

