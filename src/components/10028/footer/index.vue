<template>
  <layout
    class="footer"
    justify-center
    align-center
  >
    <div class="content">
        <div class="help">
        <ul>
          <li
            v-for="(item, index) in routes"
            :key="index"
          >
            <a :href="item.url">
            {{item.title}}
            </a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p>版权所有 ©2019-2020 兆博 保留所有权</p>
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
.footer:after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    opacity: 0.4;
    background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0)), color-stop(65%, #f4c187), color-stop(40%, #fff), color-stop(16%, #d5aa72), to(rgba(0, 0, 0, 0)));
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0), #f4c187 65%, #fff 40%, #d5aa72 16%, rgba(0, 0, 0, 0));
    z-index:11;
}
  .footer{
    background-color:#000000;
    position: relative;
    background-image:url(../../../assets/style/yabo/footer/zb_bg.png);
    .content{
      width:$contentWidth;
      margin:0 auto;
      height: 106px;
      padding-top: 50px;
    //   line-height: 106px;
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
      .help{
          a{
                color:#5F574E;
                list-style: none;
                text-decoration: none;
                &:hover{
                    color:#F2D8C0;
                }
            }
      }
      .help,.zanzhu,.copyright{
        width:295px;
        margin:0 auto;
        ul{
          display:flex;
          padding: 0;
          >li{
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:600;
            color:#5F574E;
            line-height:22px;
            cursor: pointer;
            margin-right: 10px;
            padding-right: 10px;
            position: relative;
            list-style: none;
            &:hover{
            color: #F2D8C0;
          }
            &:last-child{
              padding-right: 0;
              &::after{
                display: none;
              }
            }
          }
        }
        p{
          color:#5F574E;
          font-size: 14px;
          text-align:center;
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
