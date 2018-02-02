<template>
  <div id="app">
    <header class="header">
      <div class="navmenu" v-if="$route.meta.navBar">
        <mu-paper>
          <mu-bottom-nav :value="bottomNav" shift  @change="handleChange" style="background-color: #f06292;">
            <mu-bottom-nav-item to="/" value="首页" title="首页" icon="home"/>
            <mu-bottom-nav-item to="/collect" value="收藏" title="收藏" icon="favorite"/>
            <mu-bottom-nav-item to="/mymanage" value="个人中心" title="个人中心" icon="location_on"/>
          </mu-bottom-nav>
        </mu-paper>
      </div>
    </header>
    <transition name="fadesd" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: '首页',
      bottomNavColor: '首页'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style>
  @import "styles/nav.less";
</style>

