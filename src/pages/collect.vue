<template>
  <div id="collect">
    <div class="payFooter">
      <div class="payFooterLeft">
        <p>还需支付</p>
        <h2>0<span>元</span></h2>
      </div>
      <div class="payFooterRight">
        <span @click="Berserker">明细
             <b :class="{ 'print': run ===true, 'def': run ===false}"></b>
        </span>
        <button>去支付</button>
      </div>
    </div>
    <transition name="fadeace">
      <div class="payFooterList" v-if="run">
        <ul>
          <li>
            <h3>总金额</h3>
            <p>200<span>元</span></p>
          </li>
          <li>
            <h3>直降</h3>
            <p>200<span>元</span></p>
          </li>
          <li>
            <h3>优惠券</h3>
            <p>200<span>元</span></p>
          </li>
          <li>
            <h3>余额扣减</h3>
            <p>200<span>元</span></p>
          </li>
        </ul>
      </div>
    </transition>

    <transition name="fades">
      <div class="shade" @touchmove.prevent v-if="run" @click="Berserker"></div>
    </transition>
  </div>
</template>



<script>
  export default {
    data () {
      return {
        run: false
      }
    },
    components: {
    },
    created () {
    },
    methods: {
      Berserker () {
        this.run = !this.run
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less">
  @import "../styles/collect.less";
</style>
