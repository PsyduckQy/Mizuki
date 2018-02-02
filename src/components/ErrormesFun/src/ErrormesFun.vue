<template>
  <transition name="fades">
   <div class="Errormes" v-if="Errormes.show">{{Errormes.txt}}</div>
  </transition>
</template>

<script>
  import './ErrormesFun.less'
  export default {
    data () {
      return {
        Errormes: {
          txt: '', // 提示信息
          show: false // 是否显示
        }
      }
    },
    methods: {
      ErrormesFun (oo) { // 提示弹窗
        this.Errormes.txt = oo
        this.Errormes.show = true
        setTimeout(() => {
          this.Errormes.show = false
        }, 2000)
      }
    }
  }
</script>
