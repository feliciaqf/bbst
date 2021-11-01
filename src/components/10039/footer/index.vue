<template>
  <div class="app-footer">
    <div class="container">
      <ul class="links">
        <li>更多入口：</li>
        <li v-for="(item, i) in routes" :key="i">
          <a :href="item.url">{{ item.title }}</a>
        </li>
      </ul>
      <ul class="platforms">
        <li>合作平台：</li>
        <li v-for="item in 8" :key="item">
          <img :src="$imgs[`footer/logo/${item}`]" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { backDomain } from "@/api";
export default {
  name: "Footer",
  data() {
    return {
      routes: [
        {
          title: "新手指南",
          url: "/help/question",
        },
        {
          title: "游戏规则",
          url: "/help/manual",
        },
        {
          title: "合作加盟",
          url: "/agent/login",
        },
      ],
    };
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
};
</script>

<style lang="scss" scoped>
.app-footer {
  background: #202537;
  padding: 28px 0 35px;
  li {
    list-style: none;
  }
  .container {
    width: 1200px;
    text-align: left;
    color: #9ea8c9;
    margin: 0 auto;
  }
  .links {
    font-size: 16px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    li {
      a {
        display: block;
        padding: 0 14px;
        color: #9ea8c9;
        border-left: 1px solid #9ea8c9;
        text-decoration: none;
        line-height: 1;
        &:hover {
          color: #04c6fd;
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
