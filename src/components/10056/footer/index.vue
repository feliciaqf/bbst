<template>
  <footer class="app-footer">
    <div class="wp">
      <div class="footer-links">
        <div class="footer-links-box coop">
          <h3>合作伙伴</h3>
          <div class="coop-icons">
            <div class="icon-box" v-for="i in 9" :key="i" :class="`i${i}`">
              <img :src="$imgs[`footer/${i}`]">
            </div>
          </div>
        </div>
        <div class="footer-links-box">
          <h3>推荐浏览器</h3>
          <div class="browsers-icons">
            <img v-for="i in 4" :src="$imgs[`footer/logo${i}`]" :key="i">
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="wp">
        <p>PT游戏是由 PT TransPacific在<img :src="$imgs['footer/copyright-icon']" height="24"/><em>PAGCOR</em>的授权下部署</p>
        <p>Copyright © <em>{{$constant.title}}</em> 2015-2020 All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
// import { backDomain } from '@/api'
export default {
  data() {
    return {
    };
  },
  mounted() {
    // this.backDomain();
  },
  methods: {
    // async backDomain() {
    //   let routes = this.routes;
    //   let res = await backDomain();
    //   let result = res.data.data;
    //   console.log(result)
    //   result.map((item) => {
    //     item.domain = `https://${item.domain}`;
    //   });
    //   this.link = result;

    //   for (let i = 0; i < routes.length; i++) {
    //     routes[i].url = this.getNum(result.length) + routes[i].url;
    //   }
    // },
    // getNum(max) {
    //   let min = 1;
    //   var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    //   console.log(rand, "1233");
    //   return this.link[rand - 1].domain;
    // },
  },
};
</script>

<style lang="scss" scoped>
.app-footer {
  background: url("~@img/footer/footer-bg.jpg") no-repeat right center / cover;
  padding-top: 46px;
  padding-bottom: 18px;
  color: #fff;
  position: relative;
  .wp {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    em {
      font-style: normal;
      color: #E68410;
    }
  }
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .footer-links-box {
    margin-bottom: 34px;
    &.coop {
      flex: 1;
      text-align: center;
      margin-top:3px;
    }
    > h3 {
      font-size: 16px;
      margin-bottom: 18px;
      margin-top: 0;
      color: #8A8A8A;
      font-weight: normal;
    }

    .footer-links-cont {
      display: inline-flex;
      font-size: 14px;

      > a {
        margin-left: 3px;
        color: #fff;
        text-decoration: none;
        padding-left: 23px;
        padding-right: 23px;
        color: #5C96FF;
        font-size: 16px;
        line-height: 1;
        + a {
          border-left: 2px solid #666;
        }
        &:hover {
          opacity: 0.9;
        }
      }

      > a:nth-child(1) {
        margin-left: 5px;
      }
    }

    .browsers-icons {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      img {
        width: 28px;
        height: 28px;
        &:hover {
          opacity: .7;
        }
        + img{
          margin-left: 16px;
        }
      }
    }
    .coop-icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-left: 38px;
      .icon-box {
        width: 100px;
        text-align: center;

        img {
          width: auto;
          height: 38px;
          &:hover {
            opacity: .7;
          }
        }
      }
    }
  }
}

.copyright {
  width: 100%;
  color: #999;
  font-size: 14px;
  p {
    margin: 0 0 8px 0;
    padding: 0;
    line-height: 20px;
    img {
      margin-left: 9px;
      vertical-align: middle;
      margin-top: -5px;
    }
    em {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
  > .wp {
    width: 1200px;
    margin: 0 auto;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      height: 50px;
      
    }
  }
}
</style>
