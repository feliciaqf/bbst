<template>
  <layout class="footer" justify-center align-center>
    <div class="content">
      <layout justify-space-between align-center class="logos">
        <div>
          <img :src="$imgs['footer/img_bottoum1@3x']" alt="" />
        </div>
        <p class="line"></p>
        <div>
          <img :src="$imgs['footer/img_bottoum2@3x']" alt="" />
        </div>
        <p class="line"></p>
        <div>
          <img :src="$imgs['footer/img_bottoum3@3x']" alt="" />
        </div>
        <p class="line"></p>
        <div>
          <img :src="$imgs['footer/img_bottoum4@3x']" alt="" />
        </div>
      </layout>
      <layout justify-space-between align-center class="items">
        <p class="copyright">Copyright © 2020 MB Group. All Rights Reserved.</p>
        <!-- <layout align-center justify-end>
          <ul>
            <li
              v-for="(item, $index) in routes"
              :key="$index"
              tag="li"
              @click="goPath(item.path)"
            >
              {{ item.title }}
            </li>
          </ul>
          <ul>
            <li @click="goPath('/agent/landing')">加入代理</li>
            <li @click="goPath('/')">在线客服</li>
          </ul>
        </layout> -->
      </layout>
    </div>
  </layout>
</template>
<script>
import { backDomain, siteinfo } from "@/api";
export default {
  data() {
    return {
      routes: [
        {
          title: "关于我们",
          path: "/help/brand",
        },
        {
          title: "博彩申明",
          path: "/help/security",
        },
        {
          title: "博彩责任",
          path: "/help/security",
        },
        {
          title: "用户协议",
          path: "/help/question",
        },
        {
          title: "隐私条款",
          path: "/help/question",
        },
        {
          title: "帮助中心",
          path: "/help/question",
        },
      ],
      imghost: new Array(11),
    };
  },
  created() {
    this.backDomain();
  },
  methods: {
    goPath(item) {
      location.href = this.link + item.path;
    },
    async backDomain() {
      let routes = this.routes;
      let res = await backDomain();
      let result = res.data.data;

      result.map((item) => {
        item.domain = `https://${item.domain}`;
      });
      this.link = result[0].domain;
      //  console.log(this.link)
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  background-color: #000;
  padding: 33px 0;
}
.content {
  width: 1200px;
  margin: 0 auto;
}
.logos {
  margin-bottom: 50px;
  img {
    display: block;
    width: 100%;
  }
  .line {
    width: 1px;
    height: 62px;
    background-color: #979797;
  }
  div:nth-child(1) {
    width: 202px;
  }
  div:nth-child(3) {
    width: 246px;
  }
  div:nth-child(5) {
    width: 206px;
  }
  div:nth-child(7) {
    width: 161px;
  }
}
.copyright {
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
}
.items ul {
  display: flex;
  align-items: center;
  list-style: none;
  &:first-child {
    border-right: 1px solid #fff;
    padding-right: 30px;
  }
  li {
    font-size: 13px;
    color: #fff;
    margin-left: 30px;
    cursor: pointer;
  }
}
</style>
