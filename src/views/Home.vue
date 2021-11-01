<template>
  <div class="home">
    <div class="header">
      <layout
        justify-space-between
        align-center
      >
        <div>
          <img
            class="logo"
            :src="siteinfo.logo"
            :style="`${$projectName === '59001' ? 'width: 161px; height: 24px !important; padding-top: 30px;' : ''}`"
            alt=""
          />
          <!-- <span v-if="$projectName !== 'chobet'&&!aoMenUi.includes($projectName)">官方战略合作</span> -->
        </div>
        <!-- <img v-if="$imgs[logo]" :src="$imgs[logo]" alt="" /> -->
        <!-- <img
          v-if="$projectName === '50001'"
          :src="$imgs['pic']"
          alt=""
        /> -->
        <div
          v-if="$projectName === '50001'"
          class="blizzwin"
        >
          <div>
            <p>{{ $t('wlkoski') }}</p>
            <p>BLIZZWIN {{ $t('dyr') }}</p>
          </div>
          <img
            :src="$imgs['welz']"
            alt=""
          >
        </div>
        <!-- <div class="log-warp">
          <img src="@img/top_logo@2x.png" alt="">
          <img src="@img/red_log@2x.png" alt="">
        </div> -->
      </layout>
    </div>
    <div class="bg">
      <div class="content">
        <div class="title">{{ siteinfo.title }}{{$t('newUrl')}}</div>
        <div class="tips">
          {{$t('tipText')}}
          <!-- 温馨提示：MS值越小,打开网站速度越快,越排前的网址越快！ -->
        </div>
        <div class="list">
          <template v-if="lists.length > 0">
            <layout
              class="item"
              v-for="(item, $index) in lists"
              :key="$index"
            >
              <layout
                align-center
                class="left"
              >
                <div :class="['time', getClass(item.speed)]">
                  {{ item.speed
                  }}<span v-show="item.speed !== 'error'">ms</span>
                </div>
                <div class="domain">
                  {{$t('backup')}}{{ $index }}：{{ item.domain.domain }}
                </div>
              </layout>
              <div
                class="button"
                @click="open(item)"
              >{{ $t('enterGame') }}</div>
            </layout>
          </template>
          <template v-else-if="lists.length == 0">
            <layout
              class="item"
              v-for="(item, $index) in 4"
              :key="$index"
            >
              <layout
                align-center
                class="left"
              >
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
          {{$t('retest')}}
        </div>
      </div>
    </div>
    <app-footer v-if="footerShow" />
  </div>
</template>

<script>
// @ is an alias to /src
import { backDomain, siteinfo, regionlist } from '@/api'
import axios from 'axios'
import { getRegionLang } from '@/api/index'

let aoMenUi = [
  'takchun',
  '10012',
  '10013',
  '10020',
  '10018',
  '10016',
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
  '10057',
  '10036'
]
let yaboUi = ['10024']
let agUI = ['10030', '10061']
const selfUI = ['10039', '10041']
let AppFooter = {}
if (aoMenUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/aoMenUi`).default
} else if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/yaboUi`).default
} else if (agUI.includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/agUI`).default
} else if (['10035'].includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/hsUI`).default
} else if (['10062'].includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/hjUI`).default
} else if (['10038'].includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/btxUI`).default
} else if (['10042'].includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/betUI`).default
} else if (['10044'].includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/mbUI`).default
} else if (['10047'].includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/footer/baijiUI`).default
} else if (['50001'].includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/50001/footer/index`).default
} else if (selfUI.includes(process.env.VUE_APP_PROJECT_NAME)) {
  AppFooter = require(`@/components/${process.env.VUE_APP_PROJECT_NAME}/footer/index`).default
} else {
  AppFooter = require(`@/components/footer/Index`).default
}

export default {
  name: 'home',
  components: {
    AppFooter
  },
  data() {
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
      ],
      currencyId: null,
      regionId: null
    }
  },
  computed:{
    footerShow(){
      return (process.env.VUE_APP_PROJECT_NAME === '10036')
    }
  },
  methods: {
    getClass(time) {
      if (time < 300 > 60) {
        return 'time-2'
      } else if (time > 300 || time === 'error') {
        return 'time-3'
      }
      return ''
    },
    async backDomain() {
      let res = await backDomain()

      // let res = {data:{"code":0,"msg":"success","data":[{"domain":"qb08.vip"},{"domain":"qibovip2.com"},{"domain":"qb06.vip"},{"domain":"qb622.com"},{"domain":"qb03.vip"},{"domain":"qb02.vip"},{"domain":"qibovip4.com"},{"domain":"qibovip1.com"},{"domain":"qb266.com"},{"domain":"qb2020.com"}]}};

      res.data.data.length = 4
      this.testSpeed(res.data.data)
    },
    testSpeed(domains) {
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
    open(item) {
      location.href = `https://${item.domain.domain}`
    },
    getLang(lang) {
      if (lang.startsWith('en')) {
        return 'en'
      }
      if (lang.startsWith('vi') || lang === 'vn') {
        return 'vi'
      }
      if (lang.startsWith('th')) {
        return 'th'
      }
      return 'zh-CN'
    },
    getParams(name) {
      const { search } = location
      if (search.includes(name)) {
        return (new URLSearchParams(search)).get(name)
      }
      return ''
    },
    getSiteInfo() {
      let that = this
      siteinfo({ inte_currency_id: this.currencyId, inte_region_id: this.regionId }).then(({ data }) => {
        if (data.code === 0) {
          that.siteinfo = data.data
          if (data.data.description) {
            window.document.title = data.data.title + '-' + data.data.description
          } else {
            window.document.title = data.data.title
          }
        }
      })
    }
  },
  created() {
    this.backDomain()
    const lang = process.env.VUE_APP_PROJECT_NAME === '10041' ? 'zh-CN' : this.getParams('lang')
    if (lang) {
      this.$i18n.locale = lang
    } else {
      getRegionLang()
        .then((result) => {
          console.log(result)
          const { language } = navigator
          const localLang = this.getLang(language)
          if (localLang === result) {
            this.$i18n.locale = result
          } else {
            this.$i18n.locale = 'en'
          }
        })
    }
    regionlist().then(region => {
      let res = region.data.data.find(_item => _item.is_default === 1)
      this.regionId = res.id
      this.currencyId = res.currency_conf.default.id
      this.getSiteInfo()
    }).catch(err => {
      this.getSiteInfo()
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
      color: #525152;
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
            color: #7fe1df;
            border-right: 1px solid #ccc;
            margin-right: 30px;
            width: 102px;
            text-align: center;
          }
          .time-2 {
            color: #c8a77f;
          }
          .time-3 {
            color: #ff6666;
          }
          .domain {
            font-size: 16px;
            color: #cccccc;
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
