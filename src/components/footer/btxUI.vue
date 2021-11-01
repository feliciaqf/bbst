<template>
  <div
    id="yabo-footer"
    class="footer"
    justify-center
    align-center
  >
    <div class="content">
      <!-- company-info -->
      <div class="company-info" v-if="routes.length">
        <a v-for="(item,index) in routes" :key="index" @click="goPath(item)">{{item.tit}}</a>
      </div>
      <div>
        <div class="title">2020 © 博天下 版权所有 b66博天下 百家乐天下</div>
        <div class="line"></div>
        <div class="btn-group">
          <div class="button" @click="backTop">
            <img :src="$imgs['footer/chinese']" alt="" />
            <span>简体中文</span>
          </div>
          <div class="button" @click="centerDialogVisible = true">
            <img :src="$imgs['footer/clear']" alt="" />
            <span>清除缓存</span>
          </div>
          <div class="button" @click="backTop">
            <img :src="$imgs['footer/arrow@2x']" style="width:16px" alt="">
            <span>返回顶部</span>
          </div>
        </div>
        <div class="company-desc">
          <div class="info">
            <p>博天下简介</p>
            <p>
              博天下以成为全球最诚信最有实力的博彩公司为目标，立志为客户提供最优质服务的博彩业百年老店！
            </p>
          </div>
          <div class="info">
            <p>真钱开户</p>
            <p>
              开设账户申请即可获得5000元首存礼金，并尊享网站的其他优惠及抽奖。
            </p>
          </div>
          <div class="info">
            <p>合作加盟</p>
            <p>
              高返利、高收益的合作模式，让您轻松赚取巨额佣金，与我们共同成长。
            </p>
          </div>
          <div class="info">
            <p>优惠活动</p>
            <p>
              网站长期推出各类存款返利，投注洗码无上限返利，最给力的优惠倾情奉送。
            </p>
          </div>
          <div class="info">
            <p>联系我们</p>
            <p>
              客服提供7*24全天候周到服务，免费回拨服务无需支付长途及市话费用，欢迎使用。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { backDomain, siteinfo } from '@/api'
export default {
  data() {
    return {
      show: true,
      isAgent: false,
      centerDialogVisible: false, //清除缓存弹出
      noticeList: [],
      link:'',
      routes:[
          {
              tit:'关于我们',
              path:'/help/brand',
          },
          {
              tit:'合作加盟',
              path:'/agent/landing',
          },
          {
              tit:'新手速成专区',
              path:'/help/question',
          },
          {
              tit:'游戏规则',
              path:'/help/manual',
          },
          {
              tit:'博彩牌照',
              path:'/help/security',
          },
          {
              tit:'VIP贵宾会',
              path:'/vip',
          },
          {
              tit:'优惠活动',
              path:'/active',
          },
          {
              tit:'博天下风采',
              path:'/brand',
          }
      ]
    }
  },
  computed: {
    
  },
  created() {
    this.backDomain ()
  },
  methods: {
    //返回顶部
    backTop() {
      scroll(0, 0)
    },
    goPath(item){
        location.href = this.link + item.path
    },
    async backDomain () {
      let routes = this.routes
      let res = await backDomain()
      let result = res.data.data
     
      result.map((item) => {
        item.domain = `https://${item.domain}`
      })
      this.link = result[0].domain
      //  console.log(this.link)
    },
  }
}
</script>
<style lang="scss" scoped>
#yabo-footer.footer {
  width: 100%;
  background-color: #191A1E;
  padding-bottom: 0px !important;
  text-align: center;

  .content {
    width: 100%;

    .company-info {
      width: 100%;
      height: 67px;
      background-color: #26282c;
      // margin-top: 47px; // 因设计图修改颜色,有色差后之前的写法是不行的
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        margin-right: 30px !important;
        font-size: 16px;
        color: #7d7d7d;
        cursor: pointer;
      }
    }

    .title {
      margin-top: 60px;
      height: 17px;
      font-size: 12px;
      margin-bottom: 20px;
      color: #7D7D7D;
    }

    .line {
      width: 100%;
      height: 1px;
      background: #424242;
    }

    .btn-group {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      .el-dropdown {
        padding-left: 15px;
        padding-right: 15px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        border: 1px solid #424242;
        cursor: pointer;
      }

      .button {
        padding-left: 15px;
        padding-right: 15px;
        height: 37px;
        line-height: 37px;
        border: 1px solid #424242;
        color: #7d7d7d;
        cursor: pointer;
        margin: 0 6px;
        display: flex;
        align-items: center;
        justify-items: center;
        img{
            margin-right: 10px;
        }
      }
    }

    .company-desc {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 37px;
      padding-bottom: 24px;
      color: #7D7D7D;

      :nth-child(1) {
        font-size: 14px;
        line-height: 1.5;
      }

      p {
        width: 172px;
        text-align: left;
        line-height: 17px;
        font-size: 12px;
        margin: 0;
      }
    }
  }
}

/deep/ .el-dialog__header {
  background: #282828;
}

/deep/ .el-dialog__body {
  background: #282828;
}

/deep/ .el-dialog__footer {
  background: #282828;

  .el-button--primary {
    background: #308ac8 !important;
    border-radius: 0;
  }
}

.merquee-cont {
  width: 100%;
  background: #000000;
  position: relative;
  align-items: center;
  .merquee-cont-center {
    width: 1200px;
    margin: 0 auto;
    height: 38px;
    display: flex;
    align-items: center;
  }

  .laba-icon {
    margin-right: 20px;
  }

  .close {
    margin-left: 20px;
  }
}

.merquee {
  flex: 1;
  margin: 0 auto;
  line-height: 38px;
  height: 38px;
  box-sizing: border-box;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;

  .merquee-txt {
    display: inline-block;
    padding-left: 100%; /* 从右至左开始滚动 */
    animation: marqueeTransform 16s linear infinite;
  }

  @keyframes marqueeTransform {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
}
</style>
