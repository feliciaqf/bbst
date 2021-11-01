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
        <div class="companylogo">
          <img :src="$imgs['footer/footer_logo']">
          <p class="desc">
            包罗万象  从容选择
          </p>
        </div>
        <div class="help">
          <h3 class="title">
            帮助中心
          </h3>
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
        <div class="paizhao">
          <h3 class="title">
            牌照中心
          </h3>
          <div class="paizhao-item">
            <span class="gambling" />
            <span class=" mga" />
          </div>
          <div class="paizhao-item">
            <span class=" finanical" />
            <span class=" pagcor" />
          </div>
        </div>
        <div class="zanzhu">
          <h3 class="title">
            赞助中心
          </h3>
          <img :src="$imgs['footer/footer_logo2']">
          <p class="desc">
            意甲亚特兰大
          </p>
          <p class="desc">
            亚洲区独家合作伙伴
          </p>
        </div>
      </layout>
      <div class="company-desc">
        <p>
          KVK体育拥有欧洲马耳他博彩管理局（MGA）、英国GC监督委员会（Gambling Commission）和菲律宾政府博彩委员会（PAGCOR）颁发的合法执照。
        </p>
        <p> 注册于英属维尔京群岛，是受国际博彩协会认可的合法博彩公司。进行注册并娱乐前，请确保您年满18周岁！</p>
        <p>版权所有©2019-2020KVK保留所有权</p>
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
    background-color:#fff;
    .content{
      width:$contentWidth;
      margin:0 auto;
      padding:10px 0 40px;
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
                color:rgba(51,51,51,1);
                list-style: none;
                text-decoration: none;
                &:hover{
                    color:#000;
                }
            }
      }
      .help,.paizhao,.zanzhu{
        .title{
          height:34px;
          font-size:14px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:34px;
        }
        ul{
          display:flex;
          flex-direction: column;
            padding:0;

          >li{
            font-size:14px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(140,143,153,1);
            line-height:40px;
            cursor: pointer;
            list-style: none;
            padding:0;
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
           width:198px;
           height:61px;
           background-size:contain;
           background-repeat: no-repeat;
           margin-bottom:15px;
         }
       }
       .gambling{
         background-image:url(~@img/footer/footer_cc_normal.png);
         margin-right:44px;
         &:hover{
          background-image:url(~@img/footer/footer_cc_select.png);
         }
       }
       .mga{
         background-image:url(~@img/footer/footer_mga2_normal.png);
          &:hover{
          background-image:url(~@img/footer/footer_mga2_select.png);
         }
       }
       .finanical{
         background-image:url(~@img/footer/footer_bvi2_normal.png);
         margin-right:44px;
          &:hover{
          background-image:url(~@img/footer/footer_bvi2_select.png);
         }
       }
       .pagcor{
         background-image:url(~@img/footer/footer_pa2_normal.png);
          &:hover{
          background-image:url(~@img/footer/footer_pa2_select.png);
         }
       }
      }
      .zanzhu{
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
      .company-desc{
        margin-top:30px;
        text-align: center;
        >p{
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:25px;
          &:last-child{
            margin-top:5px;
          }
        }
      }
    }
  }
</style>
