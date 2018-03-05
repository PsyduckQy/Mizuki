<template>
  <div class="gridlist-demo-container">
    <mu-grid-list class="gridlist-demo">
      <mu-sub-header style="text-align: center">图片展示</mu-sub-header>
      <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
        <img :src="tile.image"/>
        <span slot="title">{{tile.title}}</span>
        <span slot="subTitle"><b>{{tile.author}}</b></span>
        <mu-icon-button icon="star_border" slot="action"/>
      </mu-grid-tile>
    </mu-grid-list>

    <toast :isToast="toggle._isToast"></toast>

    <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
          <span slot="no-more">
            没有更多数据了...
          </span>
    </infinite-loading>
  </div>
</template>

<script>
  import toast from '../components/toast'
  import InfiniteLoading from 'vue-infinite-loading'
  import {__getItem} from '../usilt/usilt'
  export default {
    data () {
      return {
        list: [],
        toggle: {
          _isToast: true
        },
        nber: 0,
        imagelist: [],
        state: true
      }
    },
    components: {
      toast,
      InfiniteLoading
    },
    methods: {
      isFiveMultiply (num) {
        return num % 5 === 0
      },
      infiniteHandler ($state) {
        setTimeout(() => {
          if (this.state) {
            const temp = []
            let oo = this.nber ? (this.nber * 10) : 0
            let cc = (this.nber ? (this.nber + 1) : 1) * 10
            for (let a = oo; a < cc; a++) {
              if (this.imagelist[a]) {
                temp.push(this.imagelist[a])
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
      this.imagelist = []
      let name = __getItem('name')
      console.log(name)
      this.$http.get('/static/api.json', {})
        .then((res) => {
          for (let i in res.data) {
            if (i === name) {
              for (let k = 1; k <= res.data[i].num; k++) {
                let Url = res.data[i].imgName + i + k + '.JPG'
                this.imagelist.push({
                  image: Url,
                  title: '图片展示',
                  author: '',
                  featured: this.isFiveMultiply(k)
                })
              }
            }
          }
          setTimeout(() => {
            this.toggle._isToast = false
          }, 500)
        }, () => {})
    }
  }
</script>

<style>
  .gridlist-demo-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100vw;
    height: auto;
  }

  .gridlist-demo{
    width: 100vw;
    height: auto;
    overflow-y: auto;
  }
  .mu-grid-tile > img {
    width: 100%;
    height: 100%;
  }
</style>
