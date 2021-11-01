<template>
  <div class="app-footer">
    <div class="container">
      <div class="footer-left">
        <div class="logo">
          <router-link to="/">
            <img :src="$imgs['footer/footer_slogan']" alt="" class="slogan">
          </router-link>
        </div>
      </div>
      <div class="footer-right">
        <div class="links">
          <li v-for="(item, i) in routes" :key="i">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { backDomain } from "@/api";
export default {
  name: 'Footer',
  data() {
    return {
      routes: [
        {
          title: '首页',
          url: '/'
        },
        {
          title: '网站实力',
          url: '/brand'
        },
        {
          title: '下载中心',
          url: '/appdownload'
        },
        {
          title: '新手指南',
          url: '/help/question'
        },
        {
          title: '加盟代理',
          url: '/agent/login'
        },
        {
          title: '博彩执照',
          url: '/help/security'
        }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.backDomain();
  },
  methods: {
    async backDomain() {
      let routes = this.routes;
      let res = await backDomain();
      let result = res.data.data;
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
      return this.link[rand - 1].domain;
    },
  },
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.app-footer {
  background: #313131;
  .container {
    width: 1200px;
    height: $footer-height;
    text-align: left;
    color: #9ea8c9;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .footer-left {
      img {
        display: block;
        height: 71px;

        // &.logo {
        //   margin-bottom: 9px;
        // }
      }
    }
  }
  .links {
    font-size: 16px;
    display: flex;
    flex-wrap: nowrap;
    width: 667px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      a {
        display: block;
        padding: 0 14px;
        height: 20px;
        color: #fff;
        &:hover {
              color: #7d7d7d;
        }
      }
      &:nth-child(2) a {
        border-left: none;
      }
    }
  }

  .platforms {
    display: flex;
    align-items: center;
    margin-top: 28px;
    font-size: 16px;
    img {
      height: 35px;
      margin-right: 40px;
    }
  }
}
</style>
