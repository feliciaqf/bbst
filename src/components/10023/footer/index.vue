<template>
  <div
    id="bvb-footer"
    class="footer"
    :class="[isAgent?'hidden':'']"
  >
    <!-- <div class="bvb-footer-top">
      <div class="content">
        <div class="top-wrapper">
          <div
            v-for="(item,index) in sponsorArr"
            :key="index"
            class="footer-top-item"
          >
            <img
              :src="item.status?item.imgActive:item.img"
              alt=""
              @mouseover="evt_mouseover(index)"
              @mouseout="evt_out"
            >
          </div>
        </div>
      </div>
    </div> -->
    <div class="bvb-footer-bottom">
      <div class="content">
        <div class="bottom-wrapper">
          <img
            :src="$imgs['footer/footer_a_1']"
            class="bottom-company"
          >
          <ul class="help-wrapper">
            <li
            v-for="(item, index) in routes"
            :key="index"
          >
            <a :href="item.url">
            {{item.title}}
            </a>
          </li>
          </ul>
          <p class="desc  bottom-desc1">
            BVB拥有欧洲马耳他博彩管理局（MGA）和博彩委员会（PAGCOR）颁发的合法执照。
          </p>
          <p class="desc bottom-desc2">
            注册于英属维尔京群岛，是受国际博彩协会认可的合法博彩公司。进行注册并娱乐前，请确保您年满18周岁！
          </p>
          <div class="bottom-paizhao">
            <!-- <span class="gambling" />
            <span class=" mga" />
            <span class=" finanical" /> -->
            <div class="paizhao-item">
              <span>
                英属维尔京群岛
                <br />
                （BVI）认证
              </span>
              <img :src="$imgs['footer/footer_icon1']" />
            </div>

            <div class="paizhao-item paizhao-item2">
              <span>
                马耳他博彩牌照
                <br />
                （MGA）认证
              </span>
              <img :src="$imgs['footer/footer_icon2']" />
            </div>
            <div class="paizhao-item">
              <span>
                菲律宾（PAGCOR）
                <br />
                监管博彩执照
              </span>
              <img :src="$imgs['footer/footer_icon3']" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      isAgent: false,
      sponsorArr: [// 赞助平台
        {
          img: this.$imgs['footer/logo/1'],
          imgActive: this.$imgs['footer/logo/1_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/2'],
          imgActive: this.$imgs['footer/logo/2_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/3'],
          imgActive: this.$imgs['footer/logo/3_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/4'],
          imgActive: this.$imgs['footer/logo/4_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/5'],
          imgActive: this.$imgs['footer/logo/5_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/6'],
          imgActive: this.$imgs['footer/logo/6_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/7'],
          imgActive: this.$imgs['footer/logo/7_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/8'],
          imgActive: this.$imgs['footer/logo/8_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/9'],
          imgActive: this.$imgs['footer/logo/9_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/10'],
          imgActive: this.$imgs['footer/logo/10_active'],
          status: false
        },
        {
          img: this.$imgs['footer/logo/11'],
          imgActive: this.$imgs['footer/logo/11_active'],
          status: false
        }
      ]
    }
  },
  mounted () {
    this.judgeAgent(this.$route)
    this.backDomain()
  },
  methods: {
    judgeAgent (route) {
      console.log(route.name === 'brand', '122')
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
  #bvb-footer.footer{
    .bvb-footer-top{
      background-color: #f9f9f9;
    }
    .bvb-footer-bottom{
      background-color: #33363d;
      padding: 63px 0;
    }
    .content{
        width: 1200px;
        margin: 0 auto;
      .top-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        height: 70px;
        .footer-top-item{
          cursor: pointer;
        }
      }
      .bottom-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        .bottom-company{
          width: 115px;
          height: 208px;
        }
        .help-wrapper{
          width: 52px;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          padding:0;
          margin:0;
          >li{
            font-family: Microsoft YaHei,微软雅黑!important;
            font-size: 13px;
            color: #8994a7;
            cursor: pointer;
            list-style: none;
            a{
                color:rgba(140,143,153,1);
                list-style: none;
                text-decoration: none;
                &:hover{
                    color:#fff;
                }
            }
          }
        }
        .desc{
          font-family: Microsoft YaHei,微软雅黑!important;
          font-size: 13px;
          color: #8994a7;
          height: 200px;
          text-align: left;
          line-height: 24px;
        }
        .bottom-desc1{
          width: 145px;
        }
        .bottom-desc2{
          width: 137px;
        }
        .bottom-paizhao{
          display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
         .paizhao-item {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 44px;
          &:last-child {
            margin-bottom: 0px;
          }
          > span {
            font-family: Microsoft YaHei, 微软雅黑 !important;
            font-size: 13px;
            color: #8994a7;
            margin-right: 40px;
            line-height: 24px;
          }
          > img {
            height: 36px;
          }
        }
           .paizhao-item2 {
                > img {
                    height: 32px;
                }
            }
                > span {
                width: 196px;
                height: 75px;
                //  background-size:contain;
                background-repeat: no-repeat;
                margin-bottom: 15px;
                cursor: pointer;
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
        }
      }
    }
  }
</style>
