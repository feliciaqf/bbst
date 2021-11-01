<template>
  <layout
    id="yabo-footer"
    class="footer"
    justify-center
    align-center
  >
    <div class="content">
      <layout
        justify-center
      >
        <div class="cooperation">
            <div class="logo-left">
                <img :src="$imgs['footer/logo']" alt="">
            </div>
            <div class="logo-ri">
                <div class="ri1">
                    <div class="im"><img :src="$imgs['footer/footer_logo1']" alt=""></div>
                    <p>RB莱比锡</p>
                </div>
                <div class="ri1">
                    <div class="im"><img :src="$imgs['footer/footer_logo2']" alt=""></div>
                    <p>帕尔马</p>
                </div>
            </div>
        </div>
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
        <div class="paizhao">
          <div class="paizhao-item">
            <!-- <span class="gambling" />
            <span class=" mga" />
             <span class=" finanical" />
            <span class=" pagcor" /> -->
            <div class="item-img" v-for="(item,index) in paizhaoArr" :key="index">
                <img :src="item.img" alt="">
            </div>
          </div>
        </div>

      </layout>
      <div class="company-desc">
        <p>
          火龙平台拥有欧洲马耳他管理局（MGA）、英国GC监督委员会（GamblingCommission）和菲律宾政府委员会（PAGCOR）颁发的合法执照。
        </p>
        <p> 注册 于英属维尔京群岛，是受国际行业协会认可的合法公司。进行注册并娱乐前，请确保您年满18周岁！</p>
        <p>版权所有©2019-2020 火龙 保留所有权</p>
      </div>
    </div>
  </layout>
</template>
<script>
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
      isAgent:false,
      fotHover:this.$imgs['footer/ios2x_t_1@2x'],
      paizhaoArr:[
          {
              img:this.$imgs['footer/footer_bvi2_normal']
          },
          {
              img:this.$imgs['footer/footer_pa2_normal']
          },
          {
              img:this.$imgs['footer/footer_mga2_normal']
          },
          {
              img:this.$imgs['footer/footer_cc_normal']
          }
      ]
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
  #yabo-footer.footer{
    background-color:#484A59;
    height:365px;
    .content{
    //   padding:10px 0 40px;
      width: 100%;
      .justify-space-between{
          width: 1108px;
          margin: 0 auto;
          padding-top: 30px;
      }
      .head{
          font-size:14px;
          color:#999;
          font-weight:600;
        margin-bottom: 30px;
      }
      .cooperation{
          display:flex;
          height: 90px;
          margin-top:60px;
          margin-right: 30px;

          .logo-left{
              margin-right: 20px;
              img{
                  width:161px;
                  height: 68px;
              }
          }
          .logo-ri{
              border-left: 1px solid rgba(204, 204, 204, 0.2);
              padding-left: 20px;
             display:flex;
             color:#fff;
             text-align: center;
             .im{
                 height: 60px;
             }
             .ri1:last-child{
                 margin-left: 30px;
             }
          }

      }
      .help{
          width: 164px;
          height: 224px;
          border: 1px solid rgba(204, 204, 204, 0.2);
          border-top: 0;
          border-bottom: 0;
      }
      .companylogo{
        >img{
          width:110px;
          height:120px;
          margin-bottom:15px;
        }
        .desc{
          height:20px;
          font-size:12px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(140,143,153,1);
          line-height:20px;
          letter-spacing:1px;
        }
      }
      .help,.paizhao,.zanzhu{
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
          padding: 0;
          margin:0;
          flex-direction: column;
          >li{
            font-size:14px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:#fff;
            line-height:56px;
            cursor: pointer;
            list-style: none;
            text-align:center;
            a{
                color:#fff;
                list-style: none;
                text-decoration: none;
                &:hover{
                    color:rgba(255,255,255,0.8);
                }
            }
          }
        }
      }
      .paizhao{
         text-align:left;
        height: 225px;
        margin-left:50px;
       .paizhao-item{
         display:flex;
         flex-wrap: wrap;
         width: 480px;
         .item-img{
             margin-left: 20px;
             margin-bottom: 20px;
             background:rgba(0,0,0,0.1);
             opacity: 0.5;
             width:220px;
             height: 92px;
             text-align:center;
             display:flex;
             align-items: center;
             justify-content:center;
             img{
               height: 61px;
             }
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
          text-align: left;
        }
        .service{
            margin-top: 20px;
            margin-bottom: 20px;
            width: 110px;
            height: 40px;
            border-radius: 20px;
            text-align: center;
            background-image: -webkit-linear-gradient(344deg, #ec6b31, #ea8c38);
            background-image: linear-gradient(106deg, #ec6b31, #ea8c38);
            font-family: FZLTHK-GBK1-0;
            font-size: 14px;
            text-align: center;
            color: #ffffff;
            line-height: 40px;
            position: relative;
            cursor: pointer;
            font-weight: 600;
            img{
                margin-right: 5px;
            }
        }
        .zan-flex{
            margin-top: 20px;
            display:flex;
            img{
                width: 24px;
                height: 24px;
            }
        }
      }
      .company-desc{
        margin-top:10px;
        text-align:center;
        >p{
          font-size:12px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:#999;
          line-height:20px;
          &:last-child{
            margin-top:5px;
          }
        }
      }
    }
  }
</style>
