<template>
  <div class="app-footer">
    <!--   <layout
         v-show="routeName === 'home'"
         justify-center
         column
         align-center
         class="nav"
       >
         <layout
           justify-center
           align-center
           class="title"
         >
           <div
             class="line"
             style="margin-right: 20px;"
           />
           AA集团旗下业务
           <div
             class="line"
             style="margin-left: 20px;"
           />
         </layout>
         <layout class="list">
           <layout
             v-for="item in navList"
             :key="item.en"
             class="item"
             justify-center
             align-center
           >
             <layout
               justify-center
               align-center
             >
               <img
                 class="logo"
                 :src="item.logo"
                 alt
               >
             </layout>
             <div class="link">
               <h3 class="name">
                 {{ item.en }}
               </h3>
               <a
                 :href="`https://${item.link}`"
                 target="_blank"
               >{{ item.link }}</a>
             </div>
           </layout>
         </layout>
       </layout>-->
    <layout
      justify-center
      align-center
      column
      class="others"
    >
      <layout class="list">
        <div class="item">
          <img
            src="@img/footer/contract.png"
            alt
          >
          <div class="name">
            联系我们
          </div>
          <div class="tips">
            24X7为您提供服务
          </div>
          <div class="sub-tips">
            <!-- 免费电话 400-343-4 -->
            <a href="mailto:aawanqu@gmail.com">aawanqu@gmail.com</a>
          </div>
        </div>
        <div class="item">
          <img
            src="@img/footer/new.png"
            alt
          >
          <div class="name">
            新手教程
          </div>
          <div class="tips">
            两分钟让您畅游{{$constant.title}}
          </div>
          <router-link
            :to="{ name: 'help' }"
            class="sub-tips"
          >
            立即查看
            <i class="el-icon-arrow-right"/>
          </router-link>
        </div>
        <div class="item">
          <img
            src="@img/footer/join.png"
            alt
          >
          <div class="name">
            加入合营
          </div>
          <div class="tips">
            让您无风险赚大钱
          </div>
          <router-link
            :to="{ name: 'AgentLanding' }"
            class="sub-tips"
          >
            立即加入
            <i class="el-icon-arrow-right"/>
          </router-link>
        </div>
      </layout>
    </layout>
    <layout
      justify-center
      align-center
      class="brands"
    >
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </layout>
    <div class="footer">
      <div class="item">
        <layout
          justify-center
          align-center
          class="govs"
        >
          <div class="gov">
            <img
              src="../../assets/img/footer/logo/K19FLUWMZANQT.png"
              alt
            >
            <div>英国GC监督委员会</div>
          </div>
          <div class="gov">
            <img
              src="../../assets/img/footer/logo/K19FLITFPBZL0.png"
              alt
            >
            <div>马耳他博彩牌照(MGA)认证</div>
          </div>
          <div class="gov">
            <img
              src="../../assets/img/footer/logo/K19FM0HKL5IV2.png"
              alt
            >
            <div>英属维尔京群岛(BVI)认证</div>
          </div>
          <div class="gov">
            <img
              src="../../assets/img/footer/logo/K19FL8TQSD0VI.png"
              alt
            >
            <div>菲律宾监督博彩牌照</div>
          </div>
        </layout>
        <layout
          justify-center
          class="list reminder"
        >
          <router-link
            v-for="(item, $index) in routes"
            :key="$index"
            :to="{ name: item.name }"
          >
            {{ $t(item.meta.title) }}
          </router-link>
        </layout>
      </div>
      <div style="width: 100px"></div>
      <div class="item">
        <div class="info">
      <p>
        {{$constant.shortTitle}}拥有欧洲马耳他博彩管理局（MGA）、英国GC监督委员会（Gambling
        Commission）和菲律宾政府博彩委员会（PAGCOR）颁发的合法执照。
        <br>注册于英属维尔京群岛，是受国际博彩协会认可的合法博彩公司
      </p>
        </div>
        <div class="copyright">
          Copyright © 2019 {{$constant.title}}官方网站 Online Game. All rights reserved.
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import { indexContent } from "@/api";
  import second from "@img/footer/2_1.png";
  import first from "@img/footer/1.png";
  import thrid from "@img/footer/3.png";
  import fourth from "@img/footer/4.png";
  import fifth from "@img/footer/5.png";
  import sixth from "@img/footer/6.png";

  import routes from "@/router/help";

  export default {
    name: "Footer",
    data () {
      return {
        navList: [
          { en: this.$i18n.t("message.homeGroup"), link: "ace-advanture.com", logo: first },
          { en: this.$i18n.t("message.homeRoom"), link: "aagbt.com", logo: thrid },
          { en: this.$i18n.t("message.homePowerSwitch"), link: "aadiantou.com", logo: fifth },
          { en: this.$i18n.t("message.homeYachtHall"), link: "aayth.com", logo: fourth },
          { en: this.$i18n.t("message.homeClub"), link: "aavipjlb.com", logo: sixth }
        ],
        routes: routes.children,
        brand: []
      };
    },
    computed: {
      routeName () {
        return this.$route.name;
      }
    },
    created () {
      this.indexContent();
    },
    methods: {
      async indexContent () {
        let res = await indexContent();
        this.brand = res.web_content;
        // this.navList.forEach((item, i) => {
        //   if (this.brand[i]) {
        //     // item.logo = this.brand[i].logo
        //     item.link = this.brand[i].link
        //   }
        // })
        this.$set(this.navList, "1", {
          en: this.$i18n.t("message.aagames"),
          link: this.$projectName === "wanqu" ? "wanqu.bet" : "wanqu.com",
          logo: second
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .footer {
    max-width: 1200px;
    margin: 31px auto;
    display: flex;
    .item {
      flex: 1;
    }
  }

  .app-footer {
    width: 100%;
    // height: 670px;
    padding-bottom: 15px;

    /*    .nav {
          height: 213px;
          font-size: 30px;
          color: rgba(255, 255, 255, 1);
          border-bottom: #a77d26 solid 1px;
          background-image: url('~@img/footer/bg1.png');
          background-position: center;
          background-size: auto 100%;

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
              border-right: 1px solid $body-bg-2;

              &:last-child {
                border-right: none;
              }

              > .layout {
                width: 70px;
                height: 70px;
                flex-basis: 70px;
                flex-grow: 0;
                .logo {
                  width: 48px;
                }
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
        }*/

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
            color: #fff;
          }

          .tips {
            position: absolute;
            top: 27px;
            left: 75px;
            color: #fff;
            font-size: 14px;
          }

          .sub-tips {
            position: absolute;
            bottom: 0;
            left: 75px;
            color: $--color-primary;
            font-size: 14px;
            cursor: pointer;
            width: 140px;
            text-align: left;
            &:hover, &:focus {
              color: #ccc;
            }
            a {
              color: $--color-primary;
            }
          }
        }
      }
    }

    .brands {
      height: 85px;
      border-bottom: 1px solid rgba(53, 52, 53, 1);

      div {
        margin-right: 40px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transition: all 0.45s ease-out;
        cursor: pointer;

        &:first-child {
          width: 53px;
          height: 35px;
          background-image: url('~@img/footer/logo/0.png');
          &:hover {
            background-image: url('~@img/footer/logo/0_active.png');
          }
        }
        &:nth-child(2) {
          width: 77px;
          height: 35px;
          background-image: url('~@img/footer/logo/1.png');

          &:hover {
            background-image: url('~@img/footer/logo/1_active.png');
          }
        }
        &:nth-child(3) {
          width: 35px;
          height: 24px;
          margin-top: 5px;
          background-image: url('~@img/footer/logo/7.png');

          &:hover {
            background-image: url('~@img/footer/logo/7_active.png');
          }
        }

        &:nth-child(4) {
          width: 61px;
          height: 35px;
          margin-top: 10px;
          background-image: url('~@img/footer/logo/3.png');

          &:hover {
            background-image: url('~@img/footer/logo/3_active.png');
          }
        }
        &:nth-child(5) {
          width: 89px;
          height: 34px;
          margin-top: 2px;
          background-image: url('~@img/footer/logo/4.png');

          &:hover {
            background-image: url('~@img/footer/logo/4_active.png');
          }
        }
        &:nth-child(6) {
          width: 45px;
          height: 35px;
          margin-top: 5px;
          background-image: url('~@img/footer/logo/5.png');

          &:hover {
            background-image: url('~@img/footer/logo/5_active.png');
          }
        }
        &:nth-child(7) {
          width: 51px;
          height: 35px;
          margin-top: 4px;
          background-image: url('~@img/footer/logo/6.png');

          &:hover {
            background-image: url('~@img/footer/logo/6_active.png');
          }
        }
        /*&:nth-child(2) {*/
        /*width: 85px;*/
        /*height: 35px;*/
        /*margin-top: 6px;*/
        /*background-image: url('../../assets/img/footer/logo/2.png');*/

        /*&:hover {*/
        /*background-image: url('../../assets/img/footer/logo/2_active.png');*/
        /*}*/
        /*}*/

        /*     &:nth-child(3) {
               width: 62px;
               height: 35px;
               margin-top: 10px;
               background-image: url('../../assets/img/footer/logo/3.png');

               &:hover {
                 background-image: url('../../assets/img/footer/logo/3_active.png');
               }
             }*/

        &:nth-child(8) {
          width: 60px;
          height: 35px;
          margin-top: 2px;
          background-image: url('~@img/footer/logo/d8.png');

          &:hover {
            background-image: url('~@img/footer/logo/d8_active.png');
          }
        }

        &:nth-child(9) {
          width: 35px;
          height: 35px;
          margin-top: 2px;
          background-image: url('~@img/footer/logo/8.png');

          &:hover {
            background-image: url('~@img/footer/logo/8_active.png');
          }
        }

        &:nth-child(10) {
          width: 89px;
          height: 35px;
          margin-top: 3px;
          background-image: url('~@img/footer/logo/9.png');

          &:hover {
            background-image: url('~@img/footer/logo/9_active.png');
          }
        }

        &:nth-child(11) {
          width: 95px;
          height: 35px;
          margin-top: 8px;
          background-image: url('~@img/footer/logo/10.png');

          &:hover {
            background-image: url('~@img/footer/logo/10_active.png');
          }
        }

        &:nth-child(12) {
          width: 45px;
          height: 34px;
          margin-top: 3px;
          background-image: url('~@img/footer/logo/11.png');

          &:hover {
            background-image: url('~@img/footer/logo/11_active.png');
          }
        }
      }
    }

    .info {
      color: #fff;
      font-size: 14px;
      text-align: left;
      margin-bottom: 30px;

      p {
        display: inline-block;
        /*width: 913px;*/
        line-height: 1.5;
      }
    }

    .govs {
      margin-bottom: 35px;

      .gov {
        margin-right: 50px;

        div {
          margin-top: 10px;
          color: #fff;
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
        &:hover, &:focus {
          color: $--color-primary;
        }
        &:last-child {
          border-right: 0;
        }
      }
    }

    .copyright {
      font-size: 14px;
      color: #fff;
      margin-top: 20px;
    }
  }

  [theme='dark'] {
    // @import '~themes/var_dark';
    .app-footer {
      // background: $footer-bg;
    }
  }

  [theme='light'] {
    // @import '~themes/var_light';
    .app-footer {
      // background: $footer-bg;
    }
  }
</style>
