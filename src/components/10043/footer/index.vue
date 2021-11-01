<template>
  <div class="app-footer">
    <layout
      justify-center
      align-center
      class="brands"
    >
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
    </layout>
    <div class="info">
      <span>
        {{$constant.shortTitle}}拥有欧洲马耳他博彩管理局（MGA）、英国GC监督委员会（Gambling
        Commission）和菲律宾政府博彩委员会（PAGCOR）颁发的合法执照。
        注册于英属维尔京群岛，是受国际博彩协会认可的合法博彩公司
      </span>
    </div>
    <layout
      justify-center
      align-center
      class="govs"
    >
      <div class="gov">
        <img
          src="../../../assets/10043/img/footer/logo/K19FLUWMZANQT(1).png"
          alt
        >
        <div>英国GC监督委员会</div>
      </div>
      <div class="gov">
        <img
          src="../../../assets/10043/img/footer/logo/K19FLITFPBZL0(1).png"
          alt
        >
        <div>马耳他博彩牌照(MGA)认证</div>
      </div>
      <div class="gov">
        <img
          src="../../../assets/10043/img/footer/logo/K19FM0HKL5IV2(1).png"
          alt
        >
        <div>英属维尔京群岛(BVI)认证</div>
      </div>
      <div class="gov">
        <img
          src="../../../assets/10043/img/footer/logo/K19FL8TQSD0VI(1).png"
          alt
        >
        <div>菲律宾监督博彩牌照</div>
      </div>
    </layout>
    <div class="help">
        <ul>
          <li
            v-for="(item, index) in routes"
            :key="index"
          >
            <a :href="item.url">
            {{item.title}}
            </a>
          </li>
        </ul>
      </div>
    <div class="copyright">
      Copyright © {{$constant.title}}. All rights reserved.
    </div>
  </div>
</template>

<script>
import { backDomain, siteinfo } from '@/api'
import second from '../../../assets/10043/img/footer/2.png'
import first from '../../../assets/10043/img/footer/1.png'
import thrid from '../../../assets/10043/img/footer/3.png'
import fourth from '../../../assets/10043/img/footer/4.png'
import fifth from '../../../assets/10043/img/footer/5.png'
import sixth from '../../../assets/10043/img/footer/6.png'

export default {
  name: 'Footer',
  data () {
    return {
      brand: [],
      routes: [
        {
          title: '常见问题',
          url: '/help/question'
        },
        {
          title: '品牌实力',
          url: '/help/brand'
        },
        {
          title: '游戏手册',
          url: '/help/manual'
        },
        {
          title: '安全保障',
          url: '/help/security'
        }],
    }
  },
  mounted () {
    this.backDomain()
  },
  methods: {
    async backDomain () {
      let routes = this.routes
      let res = await backDomain()
      let result = res.data.data
      result.map((item) => {
        item.domain = `https://${item.domain}`
      })
      this.link = result

      for (let i = 0; i < routes.length; i++) {
        routes[i].url = this.getNum(result.length) + routes[i].url
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  background-color: $footer-bg;
  width: 100%;
  // height: 670px;
  padding-bottom: 15px;

  .nav {
    height: 213px;
    font-size: 30px;
    color: rgba(255, 255, 255, 1);
    border-bottom: #a77d26 solid 1px;
    background: url('../../../assets/10043/img/footer/bg1.png');

    .title {
      margin-top: 40px;
      margin-bottom: 30px;
    }

    .line {
      width: 100px;
      height: 1px;
      background: rgba(53, 52, 53, 1);
      border-radius: 6px;
    }

    .list {
      padding-bottom: 20px;

      .item {
        width: 240px;
        height: 70px;
        position: relative;
        border-right: 1px solid #353435;

        &:last-child {
          border-right: none;
        }

        > .layout {
          width: 70px;
          height: 70px;
          flex-basis: 70px;
          flex-grow: 0;
        }

        .name {
          font-size: 20px;
          color: rgba(204, 204, 204, 1);
        }

        .link {
          // width: 170px;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          text-align: left;
          white-space: nowrap;
          padding: 0;
          border: none;

          h3 {
            margin-bottom: 5px;
          }

          a {
            padding: 0;
            color: #666;
          }
        }
      }
    }
  }

  .others {
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
          color: #525152;
          font-size: 14px;
        }

        .sub-tips {
          position: absolute;
          bottom: 0;
          left: 75px;
          color: #c8a77f;
          font-size: 14px;
          cursor: pointer;
          width: 140px;
          text-align: left;
        }
      }
    }
  }

  .brands {
    width: 1200px;
    margin: 0 auto;
    height: 85px;
    border-bottom: 1px solid rgba(255, 255, 255, .04);
    display: flex;
    align-items: center;
    justify-content: space-between!important;

    div {
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transition: all 0.45s ease-out;
      cursor: pointer;

      &:first-child {
        width: 53px;
        height: 35px;
        background-image: url('../../../assets/10043/img/logo/icon01.png');

        &:hover {
          background-image: url('../../../assets/10043/img/logo/icon01.png');
        }
      }
      &:nth-child(2) {
        width: 67px;
        height: 32px;
        background-image: url('../../../assets/10043/img/footer/logo/1.png');

        &:hover {
          background-image: url('../../../assets/10043/img/footer/logo/1_active.png');
        }
      }

      &:nth-child(3) {
        width: 67px;
        height: 30px;
        margin-top: 6px;
        background-image: url('../../../assets/10043/img/footer/logo/2.png');

        &:hover {
          background-image: url('../../../assets/10043/img/footer/logo/2_active.png');
        }
      }

      &:nth-child(4) {
        width: 46px;
        height: 28px;
        margin-top: 10px;
        background-image: url('../../../assets/10043/img/footer/logo/3.png');

        &:hover {
          background-image: url('../../../assets/10043/img/footer/logo/3_active.png');
        }
      }

      &:nth-child(5) {
        width: 56px;
        height: 23px;
        margin-top: 2px;
        background-image: url('../../../assets/10043/img/footer/logo/4.png');

        &:hover {
          background-image: url('../../../assets/10043/img/footer/logo/4_active.png');
        }
      }

      &:nth-child(6) {
        width: 38px;
        height: 32px;
        margin-top: 5px;
        background-image: url('../../../assets/10043/img/footer/logo/5.png');

        &:hover {
          background-image: url('../../../assets/10043/img/footer/logo/5_active.png');
        }
      }

      // &:nth-child(7) {
      //   width: 51px;
      //   height: 35px;
      //   margin-top: 4px;
      //   background-image: url('../../../assets/10043/img/footer/logo/6.png');

      //   &:hover {
      //     background-image: url('../../../assets/10043/img/footer/logo/6_active.png');
      //   }
      // }

      &:nth-child(7) {
        width: 39px;
        height: 21px;
        margin-top: 5px;
        background-image: url('../../../assets/10043/img/footer/logo/7.png');

        &:hover {
          background-image: url('../../../assets/10043/img/footer/logo/7_active.png');
        }
      }

      &:nth-child(8) {
        width: 35px;
        height: 34px;
        margin-top: 2px;
        background-image: url('../../../assets/10043/img/footer/logo/8.png');

        &:hover {
          background-image: url('../../../assets/10043/img/footer/logo/8_active.png');
        }
      }

      &:nth-child(9) {
        width: 65px;
        height: 27px;
        margin-top: 3px;
        background-image: url('../../../assets/10043/img/footer/logo/9.png');

        &:hover {
          background-image: url('../../../assets/10043/img/footer/logo/9.png');
        }
      }

      &:nth-child(10) {
        width: 58px;
        height: 22px;
        margin-top: 8px;
        background-image: url('../../../assets/10043/img/footer/logo/10.png');
        &:hover {
        background-image: url('../../../assets/10043/img/footer/logo/10_active.png');
        
        }
      }

      &:nth-child(11) {
        width: 45px;
        height: 34px;
        margin-top: 3px;
        opacity: .7;
        background-image: url('../../../assets/10043/img/footer/logo/11.png');

        &:hover {
         background-image: url('../../../assets/10043/img/footer/logo/11_active.png');
        }
      }
    }
  }

  .info {
    color: #949494;
    font-size: 14px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 31px;

    span {
      display: inline-block;
      width: 913px;
      line-height: 1.5;
    }
  }

  .govs {
    margin-bottom: 40px;

    .gov {
      margin-right: 50px;
      img{
        height:30px;
      }
      // width: 200px;
      // text-align: center;
      // img{
      //   width: 100%;
      // }
      div {
        margin-top: 10px;
        color: #4d4c4d;
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

      &:last-child {
        border-right: 0;
      }
    }
  }
  .app-footer {
    background: #282828;
  }
  .help{
    ul{
      display: flex;
    align-items: center;
    list-style: none;
    justify-content: center;
    }
    li{
 &:not(:first-child){
                  border-left: 1px solid #7C8797;
                }
    }
          a{
                color:#C0C4D0;
                list-style: none;
                text-decoration: none;
                font-size: 16px;
                padding: 0 10px;
               
                &:hover{
                    color:#7C8797;
                    opacity: 0.9;
                }
            }
      }
  .copyright {
    font-size: 14px;
    color: #525152;
    margin-top: 20px;
    text-align: center;
  }
}
</style>
