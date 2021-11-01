<template>
  <div class="footer">
    <layout
      justify-space-between
      class="footer-img-box"
    >
      <div class="first">
        <h4>合作伙伴</h4>
        <layout
          justify-start
          wrap
        >
          <img
            v-for="(item, $index) in imghost"
            :key="`2_${$index}`"
            :src="$imgs[`footer/${$index+1}`]"
          >
        </layout>
      </div>
      <div>
        <h4>支付方式</h4>
        <img :src="$imgs['footer/zhifu']">
      </div>
      <div class="last">
        <h4>监管机构</h4>
        <img :src="$imgs['footer/jigou']">
      </div>
    </layout>
    <div class="f-copyright">
      {{ $constant.title }}国际持菲律宾 PAGCOR合法牌照 2014-2020 版权所有©{{ $constant.title }}国际 侵权必究
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      imghost: new Array(11)
    }
  },
  watch: {
    $route (to, from) {
      this.judgeAgent(to)
    }
  },
  mounted () {
    this.judgeAgent(this.$route)
  },
  methods: {
    judgeAgent (route) {
      if (
        route.name === 'AgentResiter' ||
        route.name === 'AgentLogin' ||
        route.name === 'AgentupdatePassword' ||
        route.name === 'AgentcreateAc'
      ) {
        this.isAgent = true
      } else {
        this.isAgent = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.footer{
    background: #0B0B0C
}
.bottom-bar{
    background: #28282B;
    height:40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #878787;
}
.link-bar {
    a{
       display:inline-block;
       height:40px;
       line-height: 40px;
       font-size: 16px;
       color: #878787;
       padding:0 15px;
    }
}
.f-copyright{
    text-align: center;
    font-size: 14px;
    color: #666;
    padding:20px 0;
}
.footer-img-box{
    overflow: hidden;
    padding:30px 0 10px;
    font-size: 16px;
    color: #878787;
    line-height: 30px;
    width:1200px;
    margin:0 auto;
    > div {
        width:33%;
        h4 {
            text-align: left;
            margin: 0;
        }
        &.first{
            width:43%;
            img {
                width: 70px;
                height: 29px;
                margin-right: 10px;
                margin-bottom: 10px;
            }
        }
        &.last{
            width:19%;
            img {
              height: 40px;
            }
        }
        img {
            max-width: 100%;
            height: 32px;
        }
    }
}
</style>
