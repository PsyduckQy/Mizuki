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
        <div class="waterfallListContent" @click="gasname(item.name)">
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
import cosMo from '../assets/index/12561152604872184.jpg'
import GokouRuri from '../assets/index/GokouRuri.jpg'
import TokisakiKurumi from '../assets/index/TokisakiKurumi.jpg'
import VueStar from 'vue-star'
import InfiniteLoading from 'vue-infinite-loading'
import {__setItem} from '../usilt/usilt'
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
        {txt: '保安亭', name: 'security-booth'},
        {txt: '背景花格', name: 'villa-garden'},
        {txt: '别墅花园', name: 'verso-textbook'},
        {txt: '反面教材', name: 'cabinet-furred'},
        {txt: '柜子吊顶', name: 'outdoors-furniture'},
        {txt: '户外家具', name: 'flower-tree'},
        {txt: '花箱树池', name: 'garden-arches'},
        {txt: '花园拱门', name: 'rockery-basin'},
        {txt: '假山水系', name: 'terrace-garden'},
        {txt: '露台花园', name: 'coba-attic'},
        {txt: '门头楼阁', name: 'wood-floor'},
        {txt: '木地板墙板', name: 'wood-pergola'},
        {txt: '木花架', name: 'wood-garden'},
        {txt: '木花园', name: 'wood-handrail'},
        {txt: '木栏杆', name: 'security-booth'},
        {txt: '木凉亭', name: 'security-booth'},
        {txt: '木楼梯', name: 'security-booth'},
        {txt: '木石马赛克', name: 'security-booth'},
        {txt: '木屋阳光房', name: 'security-booth'},
        {txt: '木阳台', name: 'security-booth'},
        {txt: '木艺品', name: 'security-booth'},
        {txt: '欧式门头', name: 'security-booth'},
        {txt: '品牌宣传', name: 'security-booth'},
        {txt: '秋千', name: 'security-booth'},
        {txt: '色板材料', name: 'security-booth'},
        {txt: '设备宠物房', name: 'security-booth'},
        {txt: '铁铝大门', name: 'security-booth'},
        {txt: '铁铝网栏', name: 'security-booth'},
        {txt: '小桥水车', name: 'security-booth'},
        {txt: '院子木门', name: 'security-booth'},
        {txt: '桌椅板凳', name: 'security-booth'}
      ],
      nber: 0,
      state: true,
      imagelist: []
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
    },
    gasname (_name) {
      console.log(_name)
      this.$router.push({name: 'imagelist'})
      __setItem('name', _name)
    }
  },
  mounted () {
    // this.$refs.Errormes.ErrormesFun('23333333333')
//    this.imagelist = []
    setTimeout(() => {
      this.toggle._isToast = false
    }, 500)
//    this.$http.get('/static/api.json', {})
//      .then((res) => {
//        for (let i in res.data) {
//          if (i === 'villa-garden') {
//            for (let k = 1; k <= res.data[i].num; k++) {
//              let Url = res.data[i].imgName + i + k + '.JPG'
//              this.imagelist.push(Url)
//            }
//          }
//        }
//        console.log(this.imagelist)
//      }, () => {})
  }
}
</script>

<style lang="less">
  @import "../styles/index.less";
  @import "../styles/icon.less";
</style>

