<template>
  <footer class="app-footer" :class="headerGamesClass">
    <div class="wp">
      <div class="footer-links">
        <div class="footer-links-box">
          <h3>{{ $constant.title }}体育</h3>
          <div class="footer-links-cont">
            <a v-for="(item, i) in routes" :key="i" :href="item.url">{{item.title}}</a>
          </div>
        </div>
        <div class="footer-links-box">
          <h3>支持浏览器</h3>
          <div class="browsers-icons">
            <img v-for="i in 6" :src="$imgs[`footer/logo${i}`]" :key="i">
          </div>
        </div>
        <div class="footer-links-box">
          <h3>监管机构</h3>
          <div class="jg-icons">
            <img v-for="i in 3" :src="$imgs[`footer/jg${i}`]" :key="i">
          </div>
        </div>
        <div class="footer-links-box coop">
          <h3>合作伙伴</h3>
          <div class="coop-icons">
            <div class="icon-box" v-for="i in 10" :key="i">
              <img :src="$imgs[`footer/coop${i}`]">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="wp">
        <div>
          {{ $constant.title }}体育持有菲律宾 PAGCOR合法博彩执照 版权为{{
            $constant.title
          }}体育所有 PT游戏是由 PT TransPacific在的授权下部署
          <img :src="$imgs['footer/copyright-icon']" height="15"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { backDomain } from '@/api'
export default {
  computed: {
    // 使用类名
    headerGamesClass() {
      let _isNoGames = ["active", "activeDetail", "vip", "appDownload"];
      if (_isNoGames.includes(this.$route.name)) {
        return "update-other-bg-f";
      } else {
        return `update-${this.$route.name}-bg-f`;
      }
    },
  },
  data() {
    return {
      routes: [
        {
          title: `关于千8`,
          url: '/help/brand'
        },
        {
          title: "常见问题",
          url: "/help/question",
        },
        {
          title: "品牌实力",
          url: "/help/brand",
        },
        {
          title: "游戏手册",
          url: "/help/manual",
        },
        {
          title: "安全保障",
          url: "/help/security",
        },
        {
          title: "合作代理",
          url: "/agent/login",
        },
      ]
    };
  },
  mounted() {
    this.backDomain();
  },
  methods: {
    async backDomain() {
      let routes = this.routes;
      let res = await backDomain();
      let result = res.data.data;
      console.log(result)
      result.map((item) => {
        item.domain = `https://${item.domain}`;
      });
      this.link = result;

      for (let i = 0; i < routes.length; i++) {
        routes[i].url = this.getNum(result.length) + routes[i].url;
      }
    },
    getNum(max) {
      let min = 1;
      var rand = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(rand, "1233");
      return this.link[rand - 1].domain;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-footer {
  // height: 342px;
  background: url("~@img/footer/footer-bg.png") no-repeat center top / cover;
  padding-top: 48px;
  color: #fff;
  position: relative;
  .wp {
    width: 1200px;
    margin: 0 auto;
  }
}

.footer-links {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 28px;
  .footer-links-box {
    width: 180px;
    display: flex;
    flex-direction: column;
    text-align: left;

    &.coop {
      flex: 1;
    }
    > h3 {
      font-size: 18px;
      margin-bottom: 25px;
      font-weight: bold;
    }

    .footer-links-cont {
      display: inline-flex;
      flex-direction: column;
      font-size: 14px;

      > a {
        margin-bottom: 14px;
        margin-left: 3px;
        color: #fff;
        text-decoration: none;
        &:hover {
          opacity: 0.9;
        }
      }

      > a:nth-child(1) {
        margin-left: 5px;
      }
    }

    .browser-images {
      display: flex;
      flex-wrap: wrap;

      > div {
        width: 34%;
        margin-bottom: 23px;
        > img {
          width: 35px;
          height: 35px;
        }
      }
    }

    .browsers-icons {
      width: 100px;
      height: 139px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      img {
        width: 35px;
        height: 35px;
        margin-top: 15px;
        &:first-child, &:nth-child(2) {
          margin-top: 0;
        }
      }
    }
    .jg-icons {
      width: 53px;
      height: 139px;
      display: flex;
      justify-content:center;
      flex-wrap: wrap;
      img {
        width: 39px;
        height:39px;
        margin-top: 15px;
        &:first-child {
          margin-top: 0;
        }
        &:nth-child(2) {
          height: 26px;
          width: 60px;
        }
      }
    }
    .coop-icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-top:14px;
      .icon-box {
        width: 85px;
        height: 35px;
        display: flex;
        align-items: center;
        margin-left: 25px;
        margin-bottom:26px;
        img {
          width: auto;
        }
        &:nth-child(1) {
          margin-left: 0;
          img {
            height: 33px;
          }
        }
        &:nth-child(2) {
          img {
            height: 29px;
          }
        }
        &:nth-child(3) {
          img {
            height: 28px;
          }
        }
        &:nth-child(4) {
          img {
            height: 23px;
          }
        }
        &:nth-child(5) {
          img {
            height: 32px;
          }
        }
        &:nth-child(6) {
          img {
            height: 23px;
          }
        }
        &:nth-child(6) {
          img {
            height: 23px;
          }
        }
        &:nth-child(7) {
          img {
            height: 32px;
          }
        }
        &:nth-child(8) {
          img {
            height: 28px;
          }
        }
        &:nth-child(9) {
          img {
            height: 21px;
          }
        }
        &:nth-child(10) {
          img {
            height: 35px;
          }
        }
      }
    }
  }
}

.copyright {
  width: 100%;
  background: rgba(0, 0, 0, 0.1);

  > .wp {
    width: 1200px;
    margin: 0 auto;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      height: 50px;

      > img {
        margin-left: 5px;
      }
    }
  }
}
</style>
