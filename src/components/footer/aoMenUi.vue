<template>
  <div class="app-footer">
    <!-- <layout
      justify-center
      align-center
      column
      class="others"
    >
      <layout class="list">
        <div class="item">
          <img
            src="@img/footer/contract.png"
            alt
          >
          <div class="name">
            联系我们
          </div>
          <div class="tips">
            24X7为您提供服务
          </div>
          <div class="sub-tips">
            <a href="mailto:aawanqu@gmail.com">aawanqu@gmail.com</a>
          </div>
        </div>
        <div class="item">
          <img
            src="@img/footer/new.png"
            alt
          >
          <div class="name">
            新手教程
          </div>
          <div class="tips">
            两分钟让您畅游{{$constant.title}}
          </div>
          <router-link
            :to="{ name: 'help' }"
            class="sub-tips"
          >
            立即查看
            <i class="el-icon-arrow-right" />
          </router-link>
        </div>
        <div class="item">
          <img
            src="@img/footer/join.png"
            alt
          >
          <div class="name">
            加入合营
          </div>
          <div class="tips">
            让您无风险赚大钱
          </div>
          <router-link
            :to="{ name: 'AgentLanding' }"
            class="sub-tips"
          >
            立即加入
            <i class="el-icon-arrow-right" />
          </router-link>
        </div>
      </layout>
    </layout> -->
    <layout
      justify-center
      align-center
      class="brands"
    >
      <div class="box">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </layout>

    <layout
      justify-center
      align-center
      class="footer_bottom"
    >
      <div class="box">
        <div class="common_box">
          <layout
            justify-start
            align-center
            class="govs"
          >
            <div class="gov">
              <img :src="$imgs['footer/footer_cc_normal']" v-if="smhUi" alt="">
              <img
                v-else
                src="../../assets/img/footer/logo/K19FLUWMZANQT.png"
                alt
              >
              <div>英国GC监督委员会</div>
            </div>
            <div class="gov">
              <img :src="$imgs['footer/footer_mga2_normal']" v-if="smhUi" alt="">
              <img
                v-else
                src="../../assets/img/footer/logo/K19FLITFPBZL0.png"
                alt
              >
              <div>马耳他博彩牌照(MGA)认证</div>
            </div>
            <div class="gov">
              <img :src="$imgs['footer/footer_bvi2_normal']" v-if="smhUi" alt="">
              <img
                v-else
                src="../../assets/img/footer/logo/K19FM0HKL5IV2.png"
                alt
              >
              <div>英属维尔京群岛(BVI)认证</div>
            </div>
            <div class="gov">
              <img :src="$imgs['footer/footer_pa2_select']" v-if="smhUi" alt="">
              <img
                v-else
                src="../../assets/img/footer/logo/K19FL8TQSD0VI.png"
                alt
              >
              <div>菲律宾监督博彩牌照</div>
            </div>
          </layout>
          <layout
            justify-start
            class="list reminder"
          >
            <router-link
              v-for="(item, $index) in routes"
              :key="$index"
              :to="{ name: item.name }"
            >
              {{ $t(item.meta.title) }}
            </router-link>
          </layout>
        </div>
        <div class="common_box">
          <div class="info">
            <span>
              {{$constant.shortTitle}}拥有欧洲马耳他博彩管理局（MGA）、英国GC监督委员会（Gambling
              Commission）和菲律宾政府博彩委员会（PAGCOR）颁发的合法执照。<br>
              注册于英属维尔京群岛，是受国际博彩协会认可的合法博彩公司
            </span>
          </div>
          <div class="copyright">
            Copyright © {{$constant.title}}. All rights reserved.
          </div>
        </div>
      </div>
    </layout>
  </div>
</template>

<script>
// import { indexContent } from '@/api'
import second from '@img/footer/2_1.png'
import first from '@img/footer/1.png'
import thrid from '@img/footer/3.png'
import fourth from '@img/footer/4.png'
import fifth from '@img/footer/5.png'
import sixth from '@img/footer/6.png'

// import routes from '@/router/help'


export default {
  name: 'Footer',
  data () {
    return {
      navList: [
        { en: this.$i18n.t('message.homeGroup'), link: 'ace-advanture.com', logo: first },
        { en: this.$i18n.t('message.homeRoom'), link: 'aagbt.com', logo: thrid },
        { en: this.$i18n.t('message.homePowerSwitch'), link: 'aadiantou.com', logo: fifth },
        { en: this.$i18n.t('message.homeYachtHall'), link: 'aayth.com', logo: fourth },
        { en: this.$i18n.t('message.homeClub'), link: 'aavipjlb.com', logo: sixth }
      ],
      navList_new:navlist_new.default,
      routes: routes.children,
      brand: [],
      smhUi: null
    }
  },
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  created () {
    this.smhUi = ['10057'].includes(process.env.VUE_APP_PROJECT_NAME)
    // this.indexContent()
  },
  methods: {
    async indexContent () {
      let res = await indexContent()
      this.brand = res.web_content
      // this.navList.forEach((item, i) => {
      //   if (this.brand[i]) {
      //     // item.logo = this.brand[i].logo
      //     item.link = this.brand[i].link
      //   }
      // })
      this.$set(this.navList, '1', {
        en: this.$i18n.t('message.aagames'),
        link: this.$projectName === 'wanqu'?'wanqu.bet':'wanqu.com',
        logo: second
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  // height: 670px;
  // padding-bottom: 15px;
  background: #000;
  .others {
    background:$footer-bottom-bg;
    .list {
      margin-top: 30px;

      .item {
        width: 229px;
        height: 72px;
        position: relative;
        margin-right: 198px;

        &:last-child {
          margin-right: 0;
        }

        .el-icon-arrow-right {
          margin-left: -6px;
          font-size: 12px;
        }

        > img {
          position: absolute;
          top: 5px;
          left: 0;
        }

        .name {
          position: absolute;
          top: 0;
          left: 75px;
          font-size: 16px;
          color: #ccc;
        }

        .tips {
          position: absolute;
          top: 27px;
          left: 75px;
          // color: #525152;
          color: $footer-tips-color;
          font-size: 14px;
          white-space: nowrap;
        }

        .sub-tips {
          position: absolute;
          bottom: 0;
          left: 75px;
          color: $--color-primary;
          font-size: 14px;
          cursor: pointer;
          width: 140px;
          text-align: left;
          &:hover, &:focus {
            color: #ccc;
          }
          a {
            color: $--color-primary;
          }
        }
      }
    }
  }

  .brands {
    background:$footer-bottom-bg;
    height: 85px;
    border-bottom: 1px solid rgba(53, 52, 53, 1);
    .box{
      width:1200px;
      margin:0 auto;
      display:flex;
      justify-content: space-between;
      align-items: center;
      div {
        margin-right: 40px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transition: all 0.45s ease-out;
        cursor: pointer;

        &:first-child {
          width: 77px;
          height: 34px;
          background-image: url('~@img/logo/1.png');

          &:hover {
            background-image: url('~@img/logo/1_active.png');
          }
        }

        &:nth-child(2) {
          width: 85px;
          height: 35px;
          margin-top: 6px;
          background-image: url('~@img/logo/2.png');

          &:hover {
            background-image: url('~@img/logo/2_active.png');
          }
        }

        &:nth-child(3) {
          width: 62px;
          height: 35px;
          margin-top: 10px;
          background-image: url('~@img/logo/3.png');

          &:hover {
            background-image: url('~@img/logo/3_active.png');
          }
        }

        &:nth-child(4) {
          width: 89px;
          height: 34px;
          margin-top: 2px;
          background-image: url('~@img/logo/4.png');

          &:hover {
            background-image: url('~@img/logo/4_active.png');
          }
        }

        &:nth-child(5) {
          width: 45px;
          height: 35px;
          margin-top: 5px;
          background-image: url('~@img/logo/5.png');

          &:hover {
            background-image: url('~@img/logo/5_active.png');
          }
        }

        &:nth-child(6) {
          width: 51px;
          height: 35px;
          margin-top: 4px;
          background-image: url('~@img/logo/6.png');

          &:hover {
            background-image: url('~@img/logo/6_active.png');
          }
        }

        &:nth-child(7) {
          width: 39px;
          height: 21px;
          margin-top: 5px;
          background-image: url('~@img/logo/7.png');

          &:hover {
            background-image: url('~@img/logo/7_active.png');
          }
        }

        &:nth-child(8) {
          width: 35px;
          height: 34px;
          margin-top: 2px;
          background-image: url('~@img/logo/8.png');

          &:hover {
            background-image: url('~@img/logo/8_active.png');
          }
        }

        &:nth-child(9) {
          width: 89px;
          height: 35px;
          margin-top: 3px;
          background-image: url('~@img/logo/9.png');

          &:hover {
            background-image: url('~@img/logo/9_active.png');
          }
        }

        &:nth-child(10) {
          width: 95px;
          height: 35px;
          margin-top: 8px;
          background-image: url('~@img/logo/10.png');

          &:hover {
            background-image: url('~@img/logo/10_active.png');
          }
        }

        &:nth-child(11) {
          width: 45px;
          height: 34px;
          margin-top: 3px;
          background-image: url('~@img/logo/11.png');
          margin-right: 0px;
          &:hover {
            background-image: url('~@img/logo/11_active.png');
          }
        }
      }
    }
  }
  .footer_bottom{
    // width: auto;
    // width: 1200px;
    // margin:0 auto;
    // padding:0 120px 30px;
    background:$footer-bottom-bg;
    .box{
      width: 1200px;
      margin:0 auto;
      margin-bottom: 20px;
      display: flex;
      .common_box{
        &:first-child{
          flex:3;
          flex-shrink: 0;
        }
        &:last-child{
          flex:2;
          margin-left:40px;
        }
      }
    }
  }
  .info {
    // color: #949494;
    color: $footer-info-color;
    font-size: 14px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 31px;

    span {
      display: inline-block;
      // width: 913px;
      line-height: 1.5;
      text-align:left;
    }
  }

  .govs {
    margin-bottom: 40px;
    margin-top:30px;
    .gov {
      margin-right: 50px;
      img{
        height: 30px;
      }
      div {
        margin-top: 10px;
        // color: #4d4c4d;
        color: $footer-gov-color;
        font-size: 12px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .list.reminder {
    a {
      color: #ccc;
      font-size: 16px;
      border-right: 1px solid #ccc;
      padding: 0 15px;
      &:hover, &:focus {
        color: $--color-primary;
      }
      &:last-child {
        border-right: 0;
      }
    }
  }

  .copyright {
    font-size: 14px;
    // color: #525152;
    color: $footer-copyright-color;
    margin-top: 20px;
    text-align:left;
  }
}

[theme='dark'] {
  // @import '~themes/var_dark';
  .app-footer {
    // background: $footer-bg;
  }
}

[theme='light'] {
  // @import '~themes/var_light';
  .app-footer {
   // background: $footer-bg;
  }
}
</style>
