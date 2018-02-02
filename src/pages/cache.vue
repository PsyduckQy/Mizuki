<template>
  <div id="cache">
    <div class="animation">
      <img src="../assets/cache/end-spiral.gif" :style="styleObject">
    </div>
  </div>
</template>



<script>
  export default {
    data () {
      return {
        scroll: 0,
        styleObject: {
          transform: 'rotate(' + 0 + 'deg)'
        }
      }
    },
    methods: {
      handleScroll () {
        this.scroll = document.body.scrollTop
        this.styleObject = {transform: 'rotate(' + document.body.scrollTop / 10 + 'deg)'}
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>


<style lang="less">
  @import "../styles/cache.less";
</style>
