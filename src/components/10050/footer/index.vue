<template>
  <layout
    id="yabo-footer"
    class="footer"
  >
  <!-- :class="[isAgent?'hidden':'']" -->
    <footer class="footer-wrap" :style="{width: caclWidth}">
      <div class="foot-pay">
        <div class="fp-a">
          <span>合作伙伴：</span>
          <div class="plogos">
            <img :src="$imgs['footer/footer2']">
            <img :src="$imgs['footer/footer3']">
            <img :src="$imgs['footer/footer4']">
            <img :src="$imgs['footer/footer5']">
            <img :src="$imgs['footer/footer7']">
          </div>
        </div>
      </div>
      <div class="foot-pay">
        <div class="fp-a pay">
          <span>支付方式：</span>
          <div class="plogos">
            <img :src="$imgs['footer/icon1']">
            <img :src="$imgs['footer/icon2']">
            <img :src="$imgs['footer/icon3']">
            <img :src="$imgs['footer/icon4']">
            <img :src="$imgs['footer/icon5']">
            <img :src="$imgs['footer/icon6']">
            <img :src="$imgs['footer/icon7']">
          </div>
        </div>
        <div class="ft ft-d">
          <span>
            <img :src="$imgs['footer/icon11']">客服邮箱：
            <label>CS@kuang.bet</label>
          </span>
          <span>
            <img :src="$imgs['footer/icon12']">商务合作：
            <label>CS@kuang.bet</label>
          </span>
          <a href="https://kuangjj.vip/kefu?link=https%3A%2F%2Ftemp-chat.mstatik.com%2Fwidget%2Fstandalone.html%3Feid%3D162726" target="_blank" class="btn-kefu">
          <img :src="$imgs['footer/icon13']">在线客服</a>
        </div>
        <div class="foot-copy">
          <div class="fc-l">
            <img :src="$imgs['footer/icon9']">
            <img :src="$imgs['footer/icon10']">
          </div>
          <div class="fc-r">
            © kuang.bet 由AA集团拥有，由狂竞技专业团队运营，在欧洲马耳他的商业注册处注册。受马耳他竞技管理委员会（MGA）及其政府监管，并遵守欧洲游戏和竞技协会（EGBA）制定的所有运营准则。
          </div>
        </div>
      </div>
    </footer>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      isAgent: false,
      caclWidth: '100%'
    }
  },
  mounted () {
  },
  watch: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  #yabo-footer.footer{
    .footer-wrap {
      width: 80%;
      background-color: #000;
      color: hsla(0,0%,100%,.5);
      padding: 30px 80px;
      min-width: 1024px;
      .foot-game, .foot-pay, .foot-copy {
        display: flex;
      }
      .foot-game {
        .ft {
          position: relative;
          &:not(:last-child):before {
            content: "";
            position: absolute;
            top: 5%;
            right: 2rem;
            height: 90%;
            width: 1px;
            background-color: hsla(0,0%,100%,.06);
          }
          h2 {
            font-size: 14px;
            color: hsla(0,0%,100%,.85);
            margin-bottom: 10px;
            text-align: left;
          }
          .items {
            display: flex;
            .item {
              display: flex;
              flex: 1;
              flex-direction: column;
              a {
                position: relative;
                text-align: left;
                color: #808080;
                padding: 7px 2px 5px 10px;
                font-size: 12px;
                &:hover {
                  color: #fff;
                }
                &:before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 9.5px;
                  height: 8px;
                  width: 2px;
                  background: hsla(0,0%,100%,.2);
                }
              }
            }
          }
        }
        .ft-a {
          flex: 1.2;
        }
        .ft-c {
          flex: 2;
        }
        .ft-b {
          flex: 3;
        }
        .ft-d {
          flex: 1.5;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      .foot-pay {
        margin: 30px 0 0px;
        justify-content: space-between;
        height: 65px;
        width: 76%;
        .fp-a {
          flex: 0 0 500px;
          display: flex;
          span {
            flex: 0 0 80px;
          }
          .plogos {
            display: flex;
            flex-wrap: wrap;
            img {
              opacity: 0.5;
              filter: alpha(opacity=50);
              height: 24px;
              margin-right: 20px;
              margin-bottom: 20px;
              vertical-align: middle;
              border: none;
            }
          }
        }
        .ft-d {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          position: relative;
          top: -66px;
          margin: 0 100px;
          span {
            margin-bottom: 10px;
            img {
              width: 16px;
              height: 16px;
            }
          }
          img {
            width: 16px;
            height: 16px;
            margin-right: 5px;
          }
          .btn-kefu {
            cursor: pointer;
            text-align: center;
            width: 135px;
            height: 34px;
            line-height: 34px;
            border-radius: 2px;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            font-size: 1rem;
            border: 1px solid hsla(0,0%,100%,.3);
            background-color: hsla(0,0%,100%,.1);
            color: hsla(0,0%,100%,.75);
            margin-top: 10px;
            img {
              margin: 5px 10px 0 0;
            }
          }
        }
        .pay {
          span {
            margin-top: 3px;
          }
          .plogos {
            img {
              opacity: 1;
            }
          }
        }
      }
      .help{
          margin: 0 auto;
          margin-bottom: 15px;
        .title{
          height:34px;
          font-size:14px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:600;
          color:rgba(51,51,51,1);
          line-height:34px;
        }
        >img{
          max-width: 80px;
          max-height: 130px;
        }
        ul{
          display:flex;
          width: 406px;
          >li{
              flex:1;
            font-size:14px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:#7687B4;
            cursor: pointer;
          }
        }
      }
      .foot-copy {
        align-items: center;
        position: relative;
        top: -66px;
        left: 40px;
        .fc-l {
          display: flex;
          img {
            vertical-align: middle;
            height: 32px;
          }
        }
        .fc-r {
          color: #4D4D4D;
          font-size: 12px;
          line-height: 1.2;
          margin-left: 20px;
          width: 450px;
        }
      }
    }
  }
</style>
