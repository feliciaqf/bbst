<template>
  <footer class="app-footer">
    <div class="footer-hd">
      <div class="footer-nav">
        <ul>
          <li v-for="(item, i) in routes" :key="i" ><a :href="item.url">{{item.title}}</a></li>
        </ul>

        <div>
          PT游戏是由PT TranssPacific在
          <span class="pagcor-logo">
            <img
              :src="$imgs['footer/pagcor']"
              width="22"
              height="22"
              alt=""
            />
              <span class="c-yellow">PAGCOR</span>
          </span>
          的授权下部署
        </div>
      </div>
    </div>
    <div class="footer-bd">
      <div class="container">
        <div class="link brower-link">
          <h4 class="footer-title">推荐浏览器</h4>
          <div class="browsers-icons">
            <template v-for="(item,i) in browsers">
              <div class="browser" :key="i">
                <img :src="$imgs[`footer/logo${i+1}`]" height="26">
                <p>{{item}}</p>
              </div>
            </template>
          </div>
        </div>
        <div class="link partner-link">
          <h4 class="footer-title">合作伙伴</h4>
          <div class="partner-icons">
            <span v-for="i in 10" :key="i"><img :src="$imgs[`footer/${i}`]"></span>
          </div>
        </div>
        <div class="link jianguan-link">
          <h4 class="footer-title">监管机构</h4>

          <img :src="$imgs['footer/pg-logo']" alt="" height="43" />
          <img :src="$imgs['footer/icon-18']" alt="" height="43" />
          <img :src="$imgs['footer/icon-vs']" alt="" height="43" />
        </div>
      </div>
    </div>
    <div class="footer-sub">
      <span class="c-yellow">乐猴国际持有菲律宾 PAGCOR 合法博彩执照</span>
    </div>
  </footer>
</template>

<script>
import { backDomain } from "@/api";
export default {
  data() {
    return {
      routes: [
        {
          title: "合作代理",
          url: "/agent/landing",
        },
        {
          title: "常见问题",
          url: "/help/question",
        },
      ],
      browsers: ['谷歌', '火狐', 'IE', 'Safari']
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
      console.log(result);
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
  color: #737171;
  background-color: #2e2e2e;
  min-width: 1180px;
  z-index: 2;
  position: relative;
  ul,
  li,
  p,
  h4,
  div {
    margin: 0;
    padding: 0;
  }
  .c-yellow {
    color: #ff9900;
  }
  .brower-link {
    .browsers-icons {
      display: flex;
      flex-wrap: nowrap;

      .browser {
        img {
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #474343;
          line-height: 20px;
        }
        +.browser {
          margin-left: 30px;
        }
      }
    }
  }
  .footer-hd {
    background: #f1efec;
    .footer-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 62px;
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      li {
        display: inline-block;
        vertical-align: middle;
        line-height: 20px;
        a {
          position: relative;
          padding: 0 23px;
          display: block;
          color: #666666;
          font-size: 14px;
          text-decoration: none;
          &:hover {
            color: #ff9900;
          }
        }
        + li {
          a::before {
            content: '';
            height: 13px;
            width: 1px;
            background: #979797;
            position: absolute;
            left: 0;
            top: 4px;
          }
        }
        &:first-child {
          a {
            padding-left: 0;
          }
        }
      }
      .pagcor-logo {
        margin: 0 5px;
        img {
          margin-right: 5px;
          vertical-align: -5px;
        }
      }
    }
  }
  .footer-bd {
    padding: 26px 0;
    height: 180px;
    .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: nowrap;
      .footer-title {
        color: #666;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        color: #666666;
        line-height: 28px;
        margin-bottom: 18px;
      }
    }
    .link {
      position: relative;
      height: 122px;
      border-left: 1px solid #242424;
      border-right: 1px solid #383838;
      flex-shrink: 0;
      padding-left: 47px;
      padding-right: 50px;
      &:first-child {
        border-left: none;
        padding-left: 0;
      }
      &:last-child {
        border-right: none;
        padding-right: 0;
      }
      &.browser-link {
        width: 250px;
      }
      &.partner-link {
        width: 600px;
        padding-right: 0;
        .partner-icons {
          margin-top: -9px;
          text-align: left;
          padding-right: 70px;
          span {
            display: inline-block;
            width: 80px;
            margin-bottom: 8px;
            margin-left: 18px;
            &:nth-child(5n+1) {
              margin-left: 0;
            }
            img {
              height: 38px;
            }
          }
        }
      }
      &.jianguan-link {
        img {
          + img {
            margin-left: 20px;
          }
        }
      }
    }
  }
  .footer-sub {
    line-height: 50px;
    background-color: #434343;
    text-align: center;
  }
}
</style>
