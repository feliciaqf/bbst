<template>
  <layout class="footer" justify-space-between align-center column>
    <div class="content">
      <layout justify-space-between align-center class="footer-top">
        <div class="help">
          <ul>
            <li
              v-for="(item, $index) in routes"
              :key="$index"
              @click="goPath(item)"
            >
              {{ item.tite }}
            </li>
          </ul>
        </div>
        <layout align-center justify-end>
          <div class="footer-top-logo">
            <img src="../../assets/10035/img/header-logo3@2x.png" alt="" />
            <p>2019-2021赛季<br />赞助皇家贝蒂斯</p>
          </div>
          <div class="footer-top-logo">
            <img src="../../assets/10035/img/header-logo2@2x.png" alt="" />
            <p>2019-2021赛季<br />赞助奥格斯堡</p>
          </div>
          <div class="footer-top-logo">
            <img src="../../assets/10035/img/top_logo2@2x.png" alt="" />
          </div>
        </layout>
      </layout>
    </div>
    <div class="hr" />
    <div class="content">
      <layout justify-space-between>
        <span
          v-for="(item, $index) in imghost"
          :key="$index"
          :class="[`content-item`, ` content-item_${$index}`]"
        />
      </layout>
      <div class="copyright">
        <p>
          {{ $constant.title }}娱乐官方网站 Copyright © 2008-2020
          {{ $constant.e_title }}Bet Online Game. All rights reserved.
        </p>
      </div>
    </div>
  </layout>
</template>
<script>
import { backDomain, siteinfo } from '@/api'
export default {
  data () {
    return {
      routes: [
        { tite: '关于我们', path: '/help/brand' },
        { tite: '新手指南', path: '/help/question' },
        { tite: '游戏规则', path: '/help/manual' },
        { tite: '博彩牌照', path: '/help/security' },
        { tite: '合作代理', path: '/agent/Login' }
      ],
      imghost: new Array(10)
    }
  },
  created () {
    this.backDomain()
  },
  mounted () {
    this.judgeAgent(this.$route)
  },
  methods: {
    goPath (item) {
      location.href = this.link + item.path
    },
    async backDomain () {
      let routes = this.routes
      let res = await backDomain()
      let result = res.data.data

      result.map((item) => {
        item.domain = `https://${item.domain}`
      })
      this.link = result[0].domain
      //  console.log(this.link)
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #111;
  .hr {
    width: 100%;
    height: 1px;
    background: #4e4e4e;
    margin: 0 auto 17px;
  }

  .content {
    width: $contentWidth;
    margin: 0 auto;
    .layout .footer-top-logo {
      text-align: center;
      font-size: 12px;
      color: #fff;
      margin-left: 40px;
      line-height: 17px;
      img {
        height: 50px;
        width: auto;
      }
    }
    .footer-top {
      height: 146px;
    }
    .content-item {
      width: 109px;
      height: 39px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      cursor: pointer;
    }
    .content-item_0 {
      background-image: url("../../assets/10035/img/logo/1.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/1_active.png");
      }
    }
    .content-item_1 {
      background-image: url("../../assets/10035/img/logo/2.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/2_active.png");
      }
    }
    .content-item_2 {
      background-image: url("../../assets/10035/img/logo/3.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/3_active.png");
      }
    }
    .content-item_3 {
      background-image: url("../../assets/10035/img/logo/4.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/4_active.png");
      }
    }
    .content-item_4 {
      background-image: url("../../assets/10035/img/logo/5.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/5_active.png");
      }
    }
    // .content-item_5 {
    //   background-image: url('../../assets/10035/img/logo/6.png');
    //   &:hover {
    //     background-image: url('~@/assets/style/yabo/img/footer/qq-zan/6_active.png');
    //   }
    // }
    .content-item_5 {
      background-image: url("../../assets/10035/img/logo/7.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/7_active.png");
      }
    }
    .content-item_6 {
      background-image: url("../../assets/10035/img/logo/8.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/8_active.png");
      }
    }
    .content-item_7 {
      background-image: url("../../assets/10035/img/logo/9.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/9_active.png");
      }
    }
    .content-item_8 {
      background-image: url("../../assets/10035/img/logo/10.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/10_active.png");
      }
    }
    .content-item_9 {
      background-image: url("../../assets/10035/img/logo/11.png");
      &:hover {
        background-image: url("../../assets/10035/img/logo/11_active.png");
      }
    }
    .layout {
      img {
        width: 109px;
        height: 39px;
      }
    }

    .companylogo {
      > img {
        width: 118px;
        height: 155px;
        margin-bottom: 15px;
      }
      .desc {
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(140, 143, 153, 1);
        line-height: 20px;
        letter-spacing: 1px;
      }
    }

    .help,
    .zanzhu,
    .copyright {
      margin: 0 auto;

      ul {
        display: flex;
        list-style: none;
        > li {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 500;
          color: #fff;
          line-height: 22px;
          cursor: pointer;
          margin-right: 10px;
          padding-right: 10px;
          position: relative;
          &:last-child {
            padding-right: 0;
            &::after {
              display: none;
            }
          }
          &::after {
            position: absolute;
            content: " ";
            right: 0;
            width: 2px;
            height: 16px;
            top: 3px;
            border-right: 1px solid #fff;
            color: #6b7685;
          }
        }
      }
      p {
        margin-top: 34px;
        color: #7c8797;
        font-size: 14px;
      }
    }
    .copyright {
      padding-bottom: 17px;
      text-align: center;
      p {
        margin-top: 8px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .paizhao {
      > h3 {
        text-align: left;
        margin-bottom: 10px;
      }
      .paizhao-item {
        > span {
          display: inline-block;
          width: 196px;
          height: 75px;
          //  background-size:contain;
          background-repeat: no-repeat;
          margin-bottom: 15px;
        }
      }
    }
    .zanzhu {
      margin-top: 38px;
      img {
        width: 148px;
        height: 50px;
      }
    }
    .company-desc {
      > p {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #7c8797;
        line-height: 25px;
        line-height: 16px;
        &:last-child {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
