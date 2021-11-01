<template>
  <div id="db-footer" class="footer" :class="[isAgent ? 'hidden' : '']">
    <!-- <div class="db-footer-top">
      <div class="content">
        <div class="top-wrapper">
          <div
            v-for="(item, index) in sponsorArr"
            :key="index"
            class="footer-top-item"
          >
            <img
              :src="item.status ? item.imgActive : item.img"
              alt=""
              @mouseover="evt_mouseover(index)"
              @mouseout="evt_out"
            />
          </div>
        </div>
      </div>
    </div> -->
    <div class="db-footer-bottom">
      <div class="content">
        <ul class="help-wrapper">
          <li v-for="(item, index) in routes" :key="index">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div class="bottom-wrapper">
          <div class="bottom-desc" style="width: 100px;">
            <img :src="$imgs['footer/footer_a_1']" class="bottom-company" />
            <p class="desc  bottom-desc1">
              克罗地亚国家队官方合作伙伴
            </p>
          </div>
          <div class="bottom-desc" style="width: 100px;">
            <img :src="$imgs['footer/footer_a_2']" class="bottom-company" />
            <p class="desc  bottom-desc1">
              达沃·苏克 全球形象大使
            </p>
          </div>
          <p class="desc  bottom-desc1">
            大博拥有欧洲马耳他博彩管理局（MGA）和博彩委员会（PAGCOR）颁发的合法执照。
          </p>
          <p class="desc bottom-desc2">
            注册于英属维尔京群岛，是受国际博彩协会认可的合法博彩公司。进行注册并娱乐前，请确保您年满18周岁！
          </p>
          <div class="bottom-desc" style="width: 70px;">
            <img :src="$imgs['footer/footer_a_3']" class="bottom-company" />
            <p class="desc  bottom-desc1">
              英国GC 监督委员会
            </p>
          </div>
          <div class="bottom-desc" style="width: 100px;">
            <img :src="$imgs['footer/footer_a_4']" class="bottom-company" />
            <p class="desc  bottom-desc1">
              英属维尔京群岛 （BVI）认证
            </p>
          </div>
          <div class="bottom-desc" style="width: 130px;">
            <img :src="$imgs['footer/footer_a_5']" class="bottom-company" />
            <p class="desc  bottom-desc1">
              马耳他博彩牌照 （MGA）认证
            </p>
          </div>
          <div class="bottom-desc" style="width: 130px;">
            <img :src="$imgs['footer/footer_a_1']" class="bottom-company" />
            <p class="desc  bottom-desc1">
              菲律宾（PAGCOR） 监管博彩执照
            </p>
          </div>
        </div>
        <div class="desc db-copy">版权所有 ©2020 大博 保留所有权</div>
      </div>
    </div>
    <div class="footer-tips" v-if="btnFlag">
      <div class="tips-kefu" @click="$openKefu()">
        <img :src="$imgs['channel/icon_service_blue']" />
        <span>{{ $t("message.onlineKF") }}</span>
      </div>
      <div class="tips-top" @click="backTop">
        <img :src="$imgs['channel/home_backtop']" />
        <span>返回顶部</span>
      </div>
    </div>
  </div>
</template>
<script>
import { backDomain, siteinfo } from "@/api";

export default {
  data() {
    return {
      btnFlag: false,
      routes: [
        {
          title: "常见问题",
          url: "/help/question"
        },
        {
          title: "品牌实力",
          url: "/help/brand"
        },
        {
          title: "游戏手册",
          url: "/help/manual"
        },
        {
          title: "安全保障",
          url: "/help/security"
        }
      ],
      isAgent: false,
      sponsorArr: [
        // 赞助平台
        {
          img: this.$imgs["footer/logo/1"],
          imgActive: this.$imgs["footer/logo/1_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/2"],
          imgActive: this.$imgs["footer/logo/2_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/3"],
          imgActive: this.$imgs["footer/logo/3_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/4"],
          imgActive: this.$imgs["footer/logo/4_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/5"],
          imgActive: this.$imgs["footer/logo/5_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/7"],
          imgActive: this.$imgs["footer/logo/7_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/8"],
          imgActive: this.$imgs["footer/logo/8_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/9"],
          imgActive: this.$imgs["footer/logo/9_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/10"],
          imgActive: this.$imgs["footer/logo/10_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/11"],
          imgActive: this.$imgs["footer/logo/11_active"],
          status: false
        },
        {
          img: this.$imgs["footer/logo/6"],
          imgActive: this.$imgs["footer/logo/12_active"],
          status: false
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);

    this.judgeAgent(this.$route);
    this.backDomain();
  },
  watch: {
    $route(to, from) {
      this.judgeAgent(to);
    }
  },
  methods: {
    judgeAgent(route) {
      if (route.name === "AgentResiter" || route.name === "AgentLogin") {
        this.isAgent = true;
      } else {
        this.isAgent = false;
      }
    },
    backTop() {
      scroll(0, 0);
    },
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      if (this.scrollTop > window.screen.height) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }
    },
    evt_mouseover(index) {
      // 移入
      console.log(index, "asf");
      let sponsor = this.sponsorArr;
      for (let item of sponsor) {
        item.status = false;
      }
      sponsor[index].status = true;
    },
    evt_out() {
      // 移出
      let sponsor = this.sponsorArr;
      for (let item of sponsor) {
        item.status = false;
      }
    },
    async backDomain() {
      let routes = this.routes;
      let res = await backDomain();
      let result = res.data.data;
      result.map(item => {
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
    }
  }
};
</script>
<style lang="scss" scoped>
.help-wrapper {
  line-height: 80px;
  padding: 0;
  text-align: center;
  > li {
    font-family: Microsoft YaHei, 微软雅黑 !important;
    font-size: 13px;
    color: #8791a5;
    cursor: pointer;
    display: inline-block;
    margin-right: 20px;
    a {
      color: #8791a5;
      text-decoration: none;
      &:hover {
        color: #fff;
      }
    }
    &:hover {
      color: #fff;
      .list-circle {
        background-color: #fff;
      }
    }
    .list-circle {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: #8791a5;
      margin-right: 2px;
    }
  }
}
#db-footer.footer {
  .db-footer-top {
    background-color: #f9f9f9;
  }
  .db-footer-bottom {
    // background: url('~@img/footer/footer_bg.png') no-repeat top left;
    background-size: 100% 100%;
    padding: 14px 0;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    .top-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      height: 70px;
      .footer-top-item {
        cursor: pointer;
        img {
          height: 34px;
          width: auto;
        }
      }
    }
    .db-copy {
      font-family: Microsoft YaHei, 微软雅黑 !important;
      font-size: 13px;
      color: #8994a7;
      text-align: center;
      line-height: 24px;
      margin-top: 30px;
    }
    .bottom-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      > div,
      > p {
        margin-right: 40px;
        text-align: center;
      }
      .bottom-desc .bottom-desc1 {
        text-align: center;
      }
      .bottom-company {
        width: auto;
        height: 56px;
      }

      .desc {
        font-family: Microsoft YaHei, 微软雅黑 !important;
        font-size: 13px;
        color: #8994a7;
        text-align: left;
        line-height: 24px;
      }
      .bottom-desc1 {
        max-width: 130px;
        height: auto;
      }
      .bottom-desc2 {
        width: 137px;
      }
      .bottom-paizhao {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        > span {
          width: 196px;
          height: 75px;
          //  background-size:contain;
          background-repeat: no-repeat;
          margin-bottom: 15px;
          cursor: pointer;
        }
      }
    }
  }
  .footer-tips {
    position: fixed;
    right: 40px;
    bottom: 200px;
    z-index: 200;
    .tips-kefu,
    .tips-top {
      cursor: pointer;
      > img {
        width: 36px !important;
        height: 36px;
        animation: imgKeyfram 8s linear infinite;
        display: block;
        margin: 20px auto 10px;
      }
      > span {
        line-height: 20px;
        font-size: 14px;
        color: #9797b2;
      }
      &:hover {
        > span {
          color: #4765f3;
        }
      }
    }
  }
}
@keyframes imgKeyfram {
  0% {
    transform: rotateY(0deg);
  }
  30% {
    transform: rotateY(180deg);
  }
  50% {
    transform: rotateY(180deg);
  }

  80% {
    transform: rotateY(1turn);
  }
  to {
    transform: rotateY(1turn);
  }
}
</style>
