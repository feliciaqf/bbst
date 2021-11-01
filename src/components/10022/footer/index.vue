<template>
  <layout
    id="yabo-footer"
    class="footer"
    justify-center
    align-center
    :class="[isAgent?'hidden':'']"
  >
    <div class="content">
      <layout
        justify-space-between
      >
        <div class="cooperation">
            <h2 class="head">合作伙伴</h2>
            <div class="cooper-box">
                <div class="cooper-list" v-for="(item,index) in sponsorArr" :key="index">
                    <img :src="item.status?item.imgActive:item.img" alt="" @mouseover="evt_mouseover(index)" @mouseout="evt_out">
                </div>
            </div>
        </div>
        <div class="companylogo">
            <h2 class="head">赞助球队</h2>
          <img :src="fotHover" @mouseover="evt_ios2x" @mouseout="evt_ios2xOut">
          <p class="desc">
            毕尔巴鄂竞技俱乐部
          </p>
        </div>
        <div class="paizhao">
         <h2 class="head">合法许可</h2>
          <div class="paizhao-item">
            <span class="gambling" />
            <span class=" mga" />
             <span class=" finanical" />
            <span class=" pagcor" />
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
        <!-- <div class="zanzhu">
          <p class="desc">
            7*24小时在线客服
          </p>
          <div class="service" >
              <img :src="$imgs['footer/ios2x_image_fooeter_kefu@2x']" alt="" style="width:20px;height:20px">在线客服
          </div>
          <p class="desc">
              合营计划客服
          </p>
          <div class="zan-flex">
              <img src="https://devbwoss.z3x9u9.com/website/siteManage/1587019777375215.png" alt="">
          </div>
        </div> -->
      </layout>
    </div>
  </layout>
</template>
<script>
import { backDomain, siteinfo } from '@/api'

export default {
  data () {
    return {
        link:[],
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
      sponsorArr: [// 赞助平台
        {
          img: this.$imgs['footer/ios2x_t_l_1@2x'],
          imgActive: this.$imgs['footer/t_lr_1'],
          status: false
        },
        {
          img: this.$imgs['footer/ios2x_t_l_2@2x'],
          imgActive: this.$imgs['footer/t_lr_2'],
          status: false
        },
        {
          img: this.$imgs['footer/ios2x_t_l_3@2x'],
          imgActive: this.$imgs['footer/t_lr_3'],
          status: false
        },
        {
          img: this.$imgs['footer/ios2x_t_l_4@2x'],
          imgActive: this.$imgs['footer/t_lr_4'],
          status: false
        },
        {
          img: this.$imgs['footer/ios2x_t_l_5@2x'],
          imgActive: this.$imgs['footer/t_lr_5'],
          status: false
        },
        {
          img: this.$imgs['footer/ios2x_t_l_6@2x'],
          imgActive: this.$imgs['footer/t_lr_6'],
          status: false
        },
        {
          img: this.$imgs['footer/ios2x_t_l_7@2x'],
          imgActive: this.$imgs['footer/t_lr_7'],
          status: false
        },
        {
          img: this.$imgs['footer/ios2x_t_l_8@2x'],
          imgActive: this.$imgs['footer/t_lr_8'],
          status: false
        },
        {
          img: this.$imgs['footer/t_l_11'],
          imgActive: this.$imgs['footer/t_lr_11'],
          status: false
        },
        {
          img: this.$imgs['footer/ios2x_t_l_9@2x'],
          imgActive: this.$imgs['footer/t_lr_9'],
          status: false
        },
        {
          img: this.$imgs['footer/ios2x_t_l_10@2x'],
          imgActive: this.$imgs['footer/t_lr_10'],
          status: false
        },
      ],
      fotHover:this.$imgs['footer/ios2x_t_1@2x'],
    }
  },
  mounted () {
      this.judgeAgent(this.$route)
      this.backDomain();
  },
  methods: {
    judgeAgent (route) {
          console.log(route,'122')
        if (route.name === 'AgentLanding' || route.name === 'brand') {
            this.isAgent = true
        } else {
            this.isAgent = false
        }
    },
    evt_mouseover (index) { // 移入
      console.log(index, 'asf')
      let sponsor = this.sponsorArr
      for (let item of sponsor) {
        item.status = false
      }
      sponsor[index].status = true
    },
    evt_out () { // 移出
      let sponsor = this.sponsorArr
      for (let item of sponsor) {
        item.status = false
      }
    },
    evt_ios2x(){
        this.fotHover=this.$imgs['footer/hover'];
    },
    evt_ios2xOut(){
        this.fotHover=this.$imgs['footer/ios2x_t_1@2x'];
    },
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
  },
  computed:{
  }
}
</script>
<style lang="scss" scoped>
  #yabo-footer.footer{
    background-color:#333;
    height:530px;
    .content{
    //   padding:10px 0 40px;
      width: 100%;
      .justify-space-between{
          width: 1300px;
          margin: 0 auto;
          padding-top: 40px;
      }
      .head{
          font-size:14px;
          color:#999;
          font-weight:600;
        margin-bottom: 30px;
      }
      .cooperation{
          width: 304px;
          text-align: left;
          .cooper-box{
              display:flex;
              flex-wrap:wrap;
              .cooper-list{
                  // width: 80px;
                  line-height:45px;
                  margin-bottom: 25px;
                  margin-right: 20px;
                  img{
                      // width:80%;
                      height:35px;
                  }
              }
          }
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
          flex-direction: column;
          >li{
            font-size:14px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(140,143,153,1);
            line-height:40px;
            cursor: pointer;
            list-style: none;
            a{
                color:rgba(140,143,153,1);
                list-style: none;
                text-decoration: none;
                &:hover{
                    color:rgba(140,143,153,0.8);
                }
            }
          }
        }
      }
      .paizhao{
         text-align:left;

       .paizhao-item{
         >span{
           display:block;
           width:198px;
           height:61px;
           margin-bottom: 10px;
           background-size:contain;
           background-repeat: no-repeat;
           transform:scale(0.9);
           margin-left: -10px;
         }
       }
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
          border-top: 1px solid #444;
        margin-top:10px;
        padding-top: 20px;
        padding-bottom: 20px;
        >p{
          font-size:12px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:#666;
          line-height:25px;
          &:last-child{
            margin-top:5px;
          }
        }
      }
    }
  }
</style>
