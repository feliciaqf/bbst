<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-main">
        <ul>
          <li>
            <h3>帮助</h3>
            <p
              v-for="(item, $index) in routes"
              :key="$index"
              @click="open(item.path)"
            >
              <span>{{ item.title }}</span>
            </p>
          </li>
          <li>
            <h3>设置</h3>
            <p><span @click="open('/')">收藏</span></p>
            <p style="font-size: 14px">
              中文
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bot">
      <div class="footer-main">
        <p class="foot-logo">
          <img
            :src="$imgs['footer/GT']"
            alt=""
          >
          <img
            :src="$imgs['footer/InternationalBettingIntegrity']"
            alt=""
          >
          <img
            :src="$imgs['footer/Gibraltar']"
            alt=""
          >
          <img
            :src="$imgs['footer/IBAS']"
            alt=""
          >
          <img
            :src="$imgs['footer/18']"
            alt=""
          >
        </p>
        <h2><img
            :src="$imgs['footer/foot_logo@1x']"
            alt=""
          ></h2>
        <p class="tips">您必须<span>年满18岁</span>才能玩。如果您或您认识的人有赌博问题并需要帮助，请致电<span>1-800 GAMBLER</span></p>
        <p class="tips">Hillside(New Jersey) LLC受新泽西州游戏执法部门根据交易豁免#477-50的监管</p>
        <p class="tips">©2001-2020 bet365。版权所有。</p>
        <p class="tips">服务器时间中国北京时间{{ time }}</p>
        <ul>
          <li>
            <a @click="open('/real')">真人</a>
            <a @click="open('/electron')">电子</a>
            <a @click="open('/lottery')">彩票</a>
          </li>
          <li>
            <a @click="open('/chess')">棋牌</a>
            <a @click="open('/esport')">电竞</a>
            <a @click="open('/fish')">捕鱼</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: [
        {
          title: "常见问题",
          path: "/help/question"
        },
        {
          title: "品牌实力",
          path: "/help/brand"
        },
        {
          title: "游戏手册",
          path: "/help/manual"
        }
      ],
      imghost: new Array(11),
      addFavoriteDialogVisible: false,
      time: ""
    };
  },
  watch: {
    time: function() {
      let _this = this;
      setTimeout(() => {
        _this.headerTime(Math.round(new Date()));
      }, 1000);
      immediate: true;
    }
  },
  mounted() {
    console.log(this.domins);
    this.headerTime(Math.round(new Date()));
  },
  computed: {},
  methods: {
    open(item) {
      let domins = JSON.parse(sessionStorage.getItem("domins"));
      if (domins.length) {
        // location.href = 'https://' + domins[0].domain.domain + item + ''
        window.open("https://" + domins[0].domain.domain + item + "");
      }
    },
    headerTime(date) {
      date = new Date(date);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var h = date.getHours();
      var m1 = date.getMinutes();
      var s = date.getSeconds();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      s = s < 10 ? "0" + s : s;
      m1 = m1 < 10 ? "0" + m1 : m1;
      this.time = y + "-" + m + "-" + d + " " + h + ":" + m1 + ":" + s;
    }
  }
};
</script>
<style lang="scss" scoped>
.footer {
  background-color: #1b1b1b;

  .footer-top {
    height: 261px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    padding-top: 20px;
    box-sizing: border-box;

    ul {
      font-size: 0;
      display: block;
      list-style: none;
      padding: 0;

      li {
        flex: 1;
        display: inline-block;
        width: 50%;
        color: #999;
        line-height: 45px;
        font-size: 14px;
        vertical-align: top;
        text-align: left;

        p {
          margin: 0;
          padding: 0;
        }

        h3 {
          color: #fff;
          margin: 0;
        }

        span {
          cursor: pointer;
          &:hover {
            color: #fff;
            transition: 0.3s;
          }
        }
      }
    }
  }

  .footer-main {
    width: 755px;
    margin: 0 auto;
    position: relative;
  }

  .footer-bot {
    height: 317px;
    text-align: left;
    padding-top: 40px;
    box-sizing: border-box;
    h2 {
      color: #fff;
      text-align: left;
      font-size: 32px;
      font-weight: bold;
      margin: 40px 0 20px;
    }
    .foot-logo {
      display: flex;
      align-items: center;
      img {
        margin-right: 40px;
        height: 24px;
      }
    }
    .tips {
      font-size: 12px;
      color: #999;
      line-height: 30px;
      margin: 0;
      span {
        color: #fff;
      }
    }
    ul {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 160px;
      li {
        font-size: 14px;
        list-style: none;
        a {
          display: block;
          margin-bottom: 20px;
          cursor: pointer;
          transition: 0.3s;
          color: #999;
          text-decoration: none;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  .language .el-dropdown-link {
    color: #999;
    i {
      font-size: 14px;
    }
  }
}
</style>
