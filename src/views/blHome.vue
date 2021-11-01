<template>
  <div class="home">
    <div class="header">
      <layout justify-space-between align-center>
        <div>
          <img class="logo" :src="siteinfo.logo" alt="" />
          <!-- <span v-if="$projectName !== 'chobet'&&!aoMenUi.includes($projectName)">官方战略合作</span> -->
        </div>
        <!-- <img v-if="$imgs[logo]" :src="$imgs[logo]" alt="" />
        <img src="@img/picdaili1.png" alt="" /> -->
        <!-- <div class="log-warp">
          <img src="@img/top_logo@2x.png" alt="">
          <img src="@img/red_log@2x.png" alt="">
        </div> -->
      </layout>
    </div>
    <div class="bg">
      <div class="content">
        <div class="title">{{ siteinfo.title }}最新官方网址</div>
        <div class="tips">
          温馨提示：MS值越小,打开网站速度越快,越排前的网址越快！
        </div>
        <div class="list">
          <template v-if="lists.length > 0">
            <layout class="item" v-for="(item, $index) in lists" :key="$index">
              <layout align-center class="left">
                <div :class="['time', getClass(item.speed)]">
                  {{ item.speed
                  }}<span v-show="item.speed !== 'error'">ms</span>
                </div>
                <div class="domain">
                  备用域名{{ $index }}：{{ item.domain.domain }}
                </div>
              </layout>
              <div class="button" @click="open(item)">进入游戏</div>
            </layout>
          </template>
          <template v-else-if="lists.length == 0">
            <layout class="item" v-for="(item, $index) in 4" :key="$index">
              <layout align-center class="left">
                <!-- <div :class="['time']">ms</div>
                <div class="domain">备用域名{{$index}}：</div> -->
              </layout>
              <!-- <div class="button">进入游戏</div> -->
            </layout>
          </template>
        </div>
        <div
          :class="['retest', { disabled: testBtnShow }]"
          @click="backDomain"
          onselectstart="return false"
        >
          重新测速
        </div>
      </div>
    </div>
    <app-footer v-if="footerShow"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { backDomain, siteinfo } from '@/api'
import axios from 'axios'

let AppFooter = {}
if (process.env.VUE_APP_PROJECT_NAME === '10045') {
  AppFooter = require(`@/components/footer/blUi`).default
} else if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/yaboUi`).default
}

export default {
  name: 'home',
  components: {
    AppFooter
  },
  data  () {
    return {
      siteinfo: {},
      lists: [],
      testBtnShow: 'false',
      botshow: false,
      aoMenUi: [
        'takchun',
        '10012',
        '10013',
        '10020',
        '10018',
        '10014',
        'mgm8',
        '10006',
        '10011',
        '10007',
        '10009',
        '10010',
        '10008',
        '10021',
        '10034',
        '10036'
      ]
    }
  },
  computed:{
    footerShow(){
      return !(process.env.VUE_APP_PROJECT_NAME === '10036') 
    }
  },
  methods: {
    getClass  (time) {
      if (300 > time > 60) {
        return 'time-2'
      } else if (time > 300 || time === 'error') {
        return 'time-3'
      }
      return ''
    },
    async backDomain  () {
      let res = await backDomain()

      // let res = {data:{"code":0,"msg":"success","data":[{"domain":"qb08.vip"},{"domain":"qibovip2.com"},{"domain":"qb06.vip"},{"domain":"qb622.com"},{"domain":"qb03.vip"},{"domain":"qb02.vip"},{"domain":"qibovip4.com"},{"domain":"qibovip1.com"},{"domain":"qb266.com"},{"domain":"qb2020.com"}]}};

      res.data.data.length = 4
      this.testSpeed(res.data.data)
    },
    testSpeed  (domains) {
      this.testBtnShow = true
      // var arr = []
      // data.forEach((item, index) => {
      //   arr.push(this.getTime(item, index))
      // })
      // Promise.all(arr).then(res => {
      //   this.list = data
      // })
      if (!!domains && domains.lenght > 0) {
        this.testBtnShow = true
      } else {
        this.testBtnShow = false
      }
      this.lists = []
      const me = this
      domains.forEach((domain, index) => {
        const start = new Date().getTime()
        const img = new Image()
        img.onload = img.onerror = img.onabort = () => {
          let speed = Math.floor((new Date().getTime() - start) / 5)
          let status = ''
          let text = ''
          if (speed < 200) {
            status = 'quick'
            text = '畅通'
          } else if (speed >= 200 && speed < 400) {
            status = 'normal'
            text = '正常'
          } else if (speed >= 400 && speed < 700) {
            status = 'slow'
            text = '一般'
          } else {
            status = 'super-slow'
            text = '较慢'
            speed = 'error'
          }
          me.lists.push({
            speed,
            domain,
            status,
            text,
            index
          })
          sessionStorage.setItem('domins', JSON.stringify(me.lists))
        }
        img.src = 'https://' + domain.domain + '/favicon.ico?' + Math.random()
        if (index == domains.length - 1) {
          me.testBtnShow = false
        }
      })
    },
    // async getTime(item, index) {
    //   let time = new Date().getTime()
    //   await axios.get(`https://${item.domain}/speed.json?${new Date().getTime()}`)
    //   item.time = new Date().getTime() - time
    // },
    open  (item) {
      location.href = `https://${item.domain.domain}`
    }
  },
  created  () {
    this.backDomain()
    siteinfo().then(({ data }) => {
      if (data.code === 0) {
        this.siteinfo = data.data
        if (data.data.description) {
          window.document.title = data.data.title + '-' + data.data.description
        } else {
          window.document.title = data.data.title
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  .header {
    background-color: $body-bg-1;
    height: 90px;
    width: 100%;
    > .layout {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      > div {
        position: relative;
      }
      span {
        font-size: 12px;
        color: #525152;
        position: absolute;
        left: 170px;
        display: block;
        width: 100px;
        top: 6px;
      }
      img {
        &:first-child {
          height: 31px;
        }
        &:last-child {
          height: 70px;
        }
        height: 46px;
      }
    }
  }
  .content {
    background-color: $content-bg;
    width: 1200px;
    height: 515px;
    margin: 0 auto;
    padding-top: 40px;
    overflow: hidden;
    .retest {
      border: 1px solid $--color-primary;
      border-radius: 4px;
      width: 200px;
      height: 50px;
      font-size: 18px;
      color: #cccccc;
      line-height: 50px;
      text-align: center;
      margin: 20px auto 0;
      cursor: pointer;
      &:hover {
        background: #525152;
      }
      &.disabled {
        pointer-events: none;
      }
    }
    .title {
      font-size: 28px;
      color: #ffffff;
      text-align: center;
      margin-bottom: 20px;
    }
    .tips {
      font-size: 14px;
      color: #666;
      text-align: center;
      margin-bottom: 40px;
    }
    .list {
      .item {
        width: 530px;
        margin: 0 auto 15px;
        .left {
          width: 400px;
          height: 50px;
          border-radius: 4px;
          background: #353435;
          .time {
            font-size: 16px;
            font-weight: 600;
            color: #22A09D;
            border-right: 1px solid #4d4c4d;
            margin-right: 30px;
            width: 102px;
            text-align: center;
          }
          .time-2 {
            font-weight: 600;
            color: #C8A77F;
          }
          .time-3 {
            font-weight: 600;
            color: #FF6666;
          }
          .domain {
            font-size: 16px;
            color: #666;
          }
        }
        .button {
          cursor: pointer;
          width: 120px;
          height: 50px;
          background: linear-gradient(
            115deg,
            $--color-gradual1 0%,
            $--color-gradual2 99%
          );
          font-size: 18px;
          color: #232321;
          line-height: 50px;
          text-align: center;
          border-radius: 4px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
