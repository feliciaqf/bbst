<template>
  <div class="app-footer">
    <div class="container">
      <div class="logo">
        <a :href="getNum()">
          <img class="header-logo" :src="$imgs['logo']" alt="">
        </a>
      </div>
      <div class="intro">
        <div v-for="(item, i) in intro" :key="i" class="intro-block">
          <div class="title">{{ $t(item.title) }}</div>
          <div class="txt">
            {{ $t(item.desc) }}
          </div>
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
      intro: [
        {
          title: '关于我们',
          desc: '凯王始于1990，在亚洲和欧洲均设有运营中心，持有菲律宾和英国政府颁发的经营执照，是受所在国政府监管及保护的合法娱乐公司。凯时秉承品牌精神锐意进取，以为全球贵宾提供精彩纷呈的游戏内容与无与伦比的客户体验而深感自豪，成为您在线博彩最佳选择。'
        },
        {
          title: '尊享体验',
          desc: '以真人视讯、电玩娱乐、体育赛事、彩票投注、棋牌竞技等优势游戏项目而受全球贵宾拥趸。业界独家钜献百家乐最高限红200万元，任一游戏洗码无上限，每日提款无上限，助您大显身手，成就王者风范。贵宾可至菲律宾线下凯时实体贵宾厅出码；线上提款平均6分钟到账，为所有贵宾提供7*24小时全年无休至尊服务；只为您放心娱乐 , 尽享非凡人生。'
        },
        {
          title: '信誉保证',
          desc: '凯王与英国维冈竞技、德国勒沃库森、德国奥格斯堡、荷兰阿贾克斯、意大利罗马、巴西弗鲁米嫩塞等俱乐部达成紧密合作，是深受俱乐部信赖的赞助商。2019年，凯王以赞助商之身份随夏尔巴登山队成功登顶珠穆朗玛峰而伫立于世界之巅。'
        },
        {
          title: '隐私安全',
          desc: '凯王极度注重阁下隐私，基于21年运营经验制定严格的隐私保护制度。采用国际领先的TeamViewer信息安全技术，RSA私有/公共密钥交换和AES（256）位会话编码能达到https/SSL相同的安全标准。TeamViewer软件每次启动时都会随机更改，以防受到未经许可的访问造成信息泄露。'
        },
        {
          title: '理性游戏',
          desc: '凯王友情提示：根据相关法律之规定，未满18岁人士禁止访问本网站，如有违反所有盈利将予以冻结并交由警方处理。我们强烈建议阁下理性面对游戏，并合理安排游戏时间和投入，享受健康生活。'
        }
      ],
      domains: []
    }
  },
  computed: {},
  created() {
    this.backDomain();
  },
  methods: {
    async backDomain() {
      let res = await backDomain();
      let result = res.data.data;
      for(const item of result) {
        this.domains.push(`https://${item.domain}`);
      }
      console.log(this.domains)
    },
    getNum() {
      let min = 1;
      const max = this.domains.length;
      var rand = Math.floor(Math.random() * (max - min + 1)) + min;
      return this.domains[rand - 1];
    },
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  background-color: #141414;
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .logo {
    text-align: center;
    padding: 31px 0;
    border-bottom: 1px solid #494949;
    a {
      cursor: pointer;
    }
    img {
      height: 37px;
    }
  }
  .intro {
    padding-top: 31px;
    margin-bottom: 52px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .intro-block {
      width: 180px;
    }

    .title {
      font-size: 15px;
      font-weight: 600;
      color: #cccccc;
      line-height: 21px;
      margin-bottom: 9px;
      text-align: left;
      &:before {
        content: '';
        width: 3px;
        height: 14px;
        display: inline-block;
        vertical-align: middle;
        background: #CCCCCC;
        margin-right: 8px;
      }
    }

    .txt {
      font-size: 12px;
      font-weight: 400;
      color: #888888;
      line-height: 17px;
      text-align: left;
    }
  }
}
</style>
