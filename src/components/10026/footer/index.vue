<template>
  <layout
    class="footer"
    justify-center
    align-center
  >
    <div class="content">
      <layout
        justify-space-between
      >
        <span
          v-for="(item,$index) in imghost"
          :key="$index"
          :class="[`content-item`,` content-item_${$index}`]"
        />
      </layout>
      <layout
        justify-space-between
      >
        <div class="help">
          <ul>
            <li
              v-for="(item, index) in routes"
              :key="index"
              tag="li"
            >
              <a :href="item.url">
            {{item.title}}
            </a>
            </li>
          </ul>
        </div>
        
      </layout>
      <div class="company-desc">
        <p>
          全球拥有欧洲马耳他博彩管理局（MGA）、英国GC监督委员会（Gambling Commission）和菲律宾政府博彩委员会（PAGCOR）颁发的合法执照。
        </p>
        <p> 注册于英属维尔京群岛，是受国际博彩协会认可的合法博彩公司。进行注册并娱乐前，请确保您年满18周岁！</p>
        <!-- <p>版权所有©2019-2020全球保留所有权</p> -->
      </div>
      <!-- <layout
        justify-center
        class="company_img"
      >
        <span
          v-for="(item,$index) in ['gambling','mga','finanical','pagcor']"
          :key="$index"
          :class="[`company_img`,`${item}`]"
        />
      </layout> -->
      <div class="copyright">
        <p>版权所有 ©2019-2020 全球 保留所有权</p>
      </div>
    </div>
  </layout>
</template>
<script>
// import routes from '@/router/help'
import { backDomain, siteinfo } from '@/api'

export default {
  data () {
    return {
    routes: [
           {
              title:'常见问题',
              url:'/help/question'
          },
          {
              title:'品牌实力',
              url:'/help/brand'
          },
          {
              title:'游戏手册',
              url:'/help/manual'
          },
          {
              title:'安全保障',
              url:'/help/security'
          }],
      imghost: new Array(10)
    }
  },
  mounted () {
      this.backDomain();
  },
  methods: {
      async backDomain() {
        let routes=this.routes;
        let res = await backDomain()
        let result=res.data.data;
        result.map((item)=>{
            item.domain=`https://${item.domain}`
        })
        this.link=result;

        for(let i=0;i<routes.length;i++){
            routes[i].url=this.getNum(result.length)+routes[i].url;
        }
    },
    getNum(max){
        let min=1;
        var rand = Math.floor(Math.random()*(max-min+1))+min;
        console.log(rand,'1233')
        return this.link[rand-1].domain
    }
  }
}
</script>
<style lang="scss" scoped>
  .footer{
    background-color:#EBF5FC;
    .content{
      width:$contentWidth;
      margin:0 auto;
      padding:70px 0 30px;
      height: 3s00px;
      .content-item{
        width:100px;
        height: 34px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
      .content-item_0{
            width:63px;
            height: 28px;
            background-image: url('../../../assets/style/yabo/qq-zan/1.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/1_active.png');
            }
        }
        .content-item_1{
            width:60px;
            height: 26px;
            background-image: url('../../../assets/style/yabo/qq-zan/2.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/2_active.png');
            }
        }
        .content-item_2{
            width:42px;
            height: 24px;
            background-image: url('../../../assets/style/yabo/qq-zan/3.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/3_active.png');
            }
        }
        .content-item_3{
            width:51px;
            height: 20px;
            background-image: url('../../../assets/style/yabo/qq-zan/4.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/4_active.png');
            }
        }
        .content-item_4{
            width:35px;
            height: 28px;
            background-image: url('../../../assets/style/yabo/qq-zan/5.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/5_active.png');
            }
        }
        .content-item_5{
            width:40px;
            height: 28px;
            background-image: url('../../../assets/style/yabo/qq-zan/6.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/6_active.png');
            }
        }
        .content-item_6{
            width:28px;
            height: 28px;
            background-image: url('../../../assets/style/yabo/qq-zan/7.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/7_active.png');
            }
        }
        .content-item_7{
            width:66px;
            height: 26px;
            background-image: url('../../../assets/style/yabo/qq-zan/8.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/8_active.png');
            }
        }
        .content-item_8{
            width:54px;
            height: 20px;
            background-image: url('../../../assets/style/yabo/qq-zan/9.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/9_active.png');
            }
        }
        .content-item_9{
            width:38px;
            height: 31px;
            background-image: url('../../../assets/style/yabo/qq-zan/10.png');
            &:hover{
            background-image: url('../../../assets/style/yabo/qq-zan/10_active.png');
            }
        }
    //   .content-item_10{
    //     background-image: url('../../../assets/style/yabo/footer/11.png');
    //     &:hover{
    //       background-image: url('../../../assets/style/yabo/footer/11_active.png');
    //     }
    //   }
      .layout{
        img{
            width:100px;
            height:34px;
        }
      }
      .hr{
        width:1300px;
        height:1px;
        background:rgba(61,70,82,1);
        margin:22px auto 19px;
      }
      .companylogo{
        >img{
          width:118px;
          height:155px;
          margin-bottom:15px;
        }
        .desc{
          height:20px;
          font-size:14px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(140,143,153,1);
          line-height:20px;
          letter-spacing:1px;
        }
      }
      .copyright{
        width:326px;
        margin:30px auto 0;
        ul{
          display:flex;
          >li{
            font-size:16px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:500;
            color:#7C8797;
            line-height:22px;
            cursor: pointer;
            margin-right: 10px;
            padding-right: 10px;
            position: relative;
            &:last-child{
              padding-right: 0;
              &::after{
                display: none;
              }
            }
            &::after{
                position: absolute;
                content: " ";
                right: 0;
                width: 2px;
                height:16px;
                top:3px;
                border-right: 1px solid #6B7685;
                color: #6B7685;
            }
          }
        }
        p{
          color:#7C8797;
          font-size: 14px;
        }
      }
      .help{
          margin: 20px auto 0;
        .title{
          height:34px;
          font-size:14px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:600;
          color:rgba(51,51,51,1);
          line-height:34px;
        }
        >img{
          max-width: 80px;
          max-height: 130px;
        }
        ul{
          display:flex;
          width: 406px;
          >li{
              flex:1;
            font-size:14px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:#7687B4;
            cursor: pointer;
            list-style: none;
            a{
                color:#7687B4;
                list-style: none;
                text-decoration: none;
                &:hover{
                    color:#7687B4;
                }
            }
          }
        }
      }
      .paizhao{
       >h3{
         text-align:left;
         margin-bottom:10px;
       }
       .paizhao-item{
         >span{
           display:inline-block;
           width:196px;
           height:75px;
          //  background-size:contain;
           background-repeat: no-repeat;
           margin-bottom:15px;
         }
       }
      }
      .zanzhu{
         margin-top: 38px;
         img{
          width:148px;
          height:50px;
         }
      }
      .company-desc{
          text-align: center;
          margin-top:30px;
        >p{
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:#7C8797;
          line-height:25px;
          line-height: 16px;
          &:last-child{
            margin-top:5px;
          }
        }
      }
      .company_img{
        margin:10px 44px 20px 0px;
        .gambling{
         background-image:url(../../../assets/style/yabo/footer/agent_footer_cc.png);
         &:hover{
          background-image:url(../../../assets/style/yabo/footer/agent_footer_cc_select.png);
         }
       }
       .mga{
         background-image:url(../../../assets/style/yabo/footer/14.png);
          &:hover{
            background-image:url(../../../assets/style/yabo/footer/agent_footer_mga_select.png);
         }
       }
       .finanical{
         background-image:url(../../../assets/style/yabo/footer/agent_footer_bvi.png);
          &:hover{
            background-image:url(../../../assets/style/yabo/footer/agent_footer_bvi_select.png);
         }
       }
       .pagcor{
         background-image:url(../../../assets/style/yabo/footer/15.png);
          &:hover{
            background-image:url(../../../assets/style/yabo/footer/agent_footer_pa_select.png);
         }
       }
        >span{
            width:196px;
            height:75px;
            background-repeat: no-repeat;
          background-size: contain;
        }
      }
    }
  }
</style>
