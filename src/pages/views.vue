<template>
  <div class="parent">
    <transition name="fadesd" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
.fadesd-enter-active, .fadesd-leave-active {
  transition: all .2s ease;
}
.fadesd-enter, .fadesd-leave-active {
  opacity: 0;
}
</style>
