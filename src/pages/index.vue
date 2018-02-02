<template>
  <div id="index">
    <!--banner部分-->
    <div class="banner">
      <carousel-3d :autoplay="true" :autoplay-timeout="5000" :height="202.5" @after-slide-change="onAfterSlideChange">
        <slide :index="index" v-for="(item, index) in bannersImahes" :key="(item,index)">
          <div class="bannerInside">
            <img :src="item.bigImages" class="bannerImg">
            <transition name="slide-fade">
              <img :src="item.locationImg" class="locationImg" v-if="Joenanber ===index">
            </transition>
          </div>
        </slide>
      </carousel-3d>
    </div>

    <ul class="waterfall">
      <li class="waterfallList" v-for="(item, index) in list" :key="index">
        <div class="waterfallListContent" :style="{background: item.coloer}">
          <span>{{index}}</span>
          {{item.cententer}}
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
import Kuroiwa from '../assets/index/Kuroiwa1.jpg'
import blackRock from '../assets/index/Kuroiwa2.jpg'
import Kuroiwas from '../assets/index/Kuroiwa3.jpg'
import Nightmare from '../assets/index/Nightmare.jpg'
import scenery from '../assets/index/scenery.jpg'
import cosMo from '../assets/index/cosMo.jpg'
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
      ]
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
        const temp = []
        for (let i = 1; i <= 10; i++) {
          let Random = Math.floor((Math.random() * this.waterfall.length))
          temp.push(this.waterfall[Random])
        }
        this.list = this.list.concat(temp)
        console.log(this.list)
        $state.loaded()
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

