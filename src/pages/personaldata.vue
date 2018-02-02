<template>
  <div id="personaldata">
    <div class="backgroundImg">
      <img src="../assets/personaldata/Rem.jpg">
      <h3>{{name}}</h3>
    </div>
    <div class="maindata">
      <div class="mainBtn">
        <mu-float-button icon="star" secondary class="demo-float-button"/>
      </div>
      <div class="maintop" style="margin-top: 20px">
        <div class="mainicon">
          <mu-icon value="phone" :size="24" slot="icon" color="#673ab7"/>
        </div>
        <div class="mainLis">
          <mu-text-field label="手机号码" v-model="data.phone" labelFloat/>
          <mu-text-field label="电话号码" v-model="data.specialplane" labelFloat/>
        </div>
      </div>
      <div class="clear"></div>
      <div class="maincenter">
        <div class="mainicon">
          <mu-icon value="mail" :size="24" slot="icon" color="#673ab7"/>
        </div>
        <div class="mainLis">
          <mu-text-field label="邮箱" v-model="data.Email" labelFloat/>
          <mu-text-field label="博客" v-model="data.blogs" labelFloat/>
        </div>
      </div>
      <div class="clear"></div>
      <div class="maincenter">
        <div class="mainicon">
          <mu-icon value="home" :size="24" slot="icon" color="#673ab7"/>
        </div>
        <div class="mainLis">
          <mu-text-field label="邮箱" v-model="data.home" labelFloat/>
        </div>
      </div>
      <div class="clear"></div>
    </div>



    <toast :isToast="toggle._isToast"></toast>
  </div>
</template>



<script>
  import toast from '../components/toast'
  export default {
    data () {
      return {
        toggle: {
          _isToast: true
        },
        name: '暴走的小学生',
        data: {
          phone: '1234567435',
          specialplane: '123456',
          Email: '5444074@qq.con',
          blogs: 'XXXXXXXXXXXXX',
          home: '韩寒和韩红嘿嘿嘿'
        }
      }
    },
    components: {
      toast
    },
    mounted () {
      setTimeout(() => {
        this.toggle._isToast = false
      }, 500)
    }
  }
</script>


<style lang="less">
  @import "../styles/personaldata.less";
</style>
