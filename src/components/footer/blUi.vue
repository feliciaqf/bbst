<template>
  <layout class="footer" justify-center align-center>
    <div class="content">
      <layout justify-space-between align-start class="logos">
        <div class="footer-l">
          <h3>运营牌照</h3>
          <div>
            <div>
              <img :src="$imgs['footer/1@3x']" alt="">
              <p>英国Gambling Commissio</p>
            </div>
            <div>
              <img :src="$imgs['footer/2@3x']" alt="">
              <p>菲律宾Pagcor 博彩执照</p>
            </div>
          </div>
        </div>
        <div class="footer-r">
          <h3>合作支付</h3>
          <div>
            <div>
              <img :src="$imgs['footer/3@3x']" alt="">
            </div>
            <div>
              <img :src="$imgs['footer/4@3x']" alt="">
            </div>
            <div>
             <img :src="$imgs['footer/5@3x']" alt="">
            </div>
            <div>
              <img :src="$imgs['footer/7@3x']" alt="">
            </div>
            <div>
              <img :src="$imgs['footer/8@3x']" alt="">
            </div>
            <div>
              <img :src="$imgs['footer/9@3x']" alt="">
            </div>
          </div>
        </div>
        
      </layout>
      <!-- <layout justify-space-between align-center class="items">
        <layout align-center justify-end>
          <ul>
            <router-link
              v-for="(item, $index) in routes"
              :key="$index"
              tag="li"
              :to="{ path: item.path }"
            >
              {{ item.title }}
            </router-link>
          </ul>
        </layout>
      </layout>
      <div class="copy">
        Copyright© 2020 BEIL
      </div> -->

    </div>
  </layout>
</template>
<script>
// import routes from '@/router/help'

export default {
  data() {
    return {
      routes: [
        {
          title: '常见问题',
          path: '/help/question'
        },
        {
          title: '品牌实力',
          path: '/help/brand'
        },
        {
          title: '游戏手册',
          path: '/help/manual'
        },
        {
          title: '安全保障',
          path: '/help/security'
        },
        // {
        //   title: '隐私条款',
        //   path: '/help/question'
        // },
        // {
        //   title: '帮助中心',
        //   path: '/help/question'
        // }
      ],
      imghost: new Array(11)
    }
  },
  mounted() {},
  methods: {
    judgeAgent(route) {
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
.footer {
  background-color: #252527;
  padding: 33px 0;
}
.content {
  width: 1200px;
  margin: 0 auto;
}
.logos {
  margin-bottom: 30px;
  >div{
    width: 48%;
    h3{
      margin-bottom: 20px;
      text-align: center;
      font-weight: 400;
    color: #838285;
    }
    // border-top: 1px solid #75757F;
    // &::after{
    // content: " ";
    //   height: .01rem;
    //   width: 100%;
    //   display: block;
    //   background: #fff;
    //   background: hsla(0,0%,100%,.2);
    //   position: absolute;
    //   left: 0;
    // }
  }
  .footer-l{
      h3{
        text-align: center;
      }
    >div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #75757F;
      border-bottom: 1px solid #75757F;
      padding: 20px 0;
      img{
        height: 40px;
        width:auto;
      }
      p{
        color: #fff;
        margin-top: 20px;
        text-align: left;
      }
    }
    
  }
  .footer-r{
    >div{
      display: flex;
      flex-wrap:wrap;
      border-top: 1px solid #75757F;
      border-bottom: 1px solid #75757F;
      padding: 20px 20px;
      div{
        width: 25%;
      }
      img{
        margin-bottom: 24px;
        height: 25px;
        width:auto;
        margin-right: 20px;
      }
    }
  }
  img {
    display: block;
    width: 100%;
  }
  .line {
    width: 1px;
    height: 62px;
    background-color: #0f0f0f;
  }
  // div:nth-child(1) {
  //   width: 202px;
  // }
  // div:nth-child(3) {
  //   width: 246px;
  // }
  // div:nth-child(5) {
  //   width: 206px;
  // }
  // div:nth-child(7) {
  //   width: 161px;
  // }
}
.copyright {
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}
.items .layout.justify-end{
  justify-content: center !important;
}
.items ul {
  display: flex;
  align-items: center !important;
  margin-bottom: 30px;
  li{
    color: #9B9BA2 !important;
  }
  li:nth-child(1) {
    border-right: 1px solid #9B9BA2;
    padding-right: 30px;
  }li:nth-child(2) {
    border-right: 1px solid #9B9BA2;
    padding-right: 30px;
  }li:nth-child(3) {
    border-right: 1px solid #9B9BA2;
    padding-right: 30px;
  }
  li {
    font-size: 13px;
    color: #fff;
    margin-left: 30px;
    cursor: pointer;
  }
}
.copy{
  text-align: center;
  font-weight: 400;
  color: #9B9BA2;
  line-height: 21px;
  font-size: 14px;
}
</style>
