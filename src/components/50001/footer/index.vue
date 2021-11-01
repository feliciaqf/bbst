<template>
  <div>
    <div class="together">
      <div class="align-center-wrap layout-flex-between">
        <div class="cooperation">
          <p class="title">{{$t('partner')}}</p>
          <div class="layout-flex-center">
            <div>
              <img
                :src="$imgs['footer/cooperation01']"
                alt
              />
              <p>{{$t('official')}}</p>
              <p>Slavia Prague</p>
            </div>
            <div>
              <img
                :src="$imgs['footer/cooperation02']"
                alt
              />
              <p>{{$t('official')}}</p>
              <p>Slavia Prague</p>
            </div>
          </div>
        </div>
        <div class="brand">
          <p class="title">{{$t('brand')}}</p>
          <div class="layout-flex-center">
            <img
              :src="$imgs['footer/brand']"
              alt
            />
            <p>{{$t('wlkoski')}}<br />{{$t('forward')}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-wrap">

      <div class="footer-wrap-main">
        <div class="layout-flex-start top">
          <div
            v-for="(item,index) in navTop"
            :key="index"
            class="duty"
          >
            <p class="title">{{ $t(item.title) }}</p>
            <div class="layout-flex-start">
              <div
                :style="{width: item.width,height: item.height}"
                v-for="(item, index) in item.icon"
                :key="index"
              ></div>
              <!-- <img
              v-for="(item, index) in item.icon"
              :key="index"
              :src="$getSrc(`/src/assets/images/footer/${item}.png`)"
              alt
            /> -->
            </div>
          </div>
        </div>
        <div class="plat">
          <p class="title">{{$t('platform')}}</p>
          <div class="layout-flex-center plat-icon">
            <div
              v-for="(item,index) in platforms"
              :key="index"
            >
              <div :style="{width: item.width,height: item.height}"></div>
              <!-- <img
              :src="$getSrc(`/src/assets/images/footer/plat${index + 1}.png`)"
              alt
            /> -->
            </div>
          </div>
        </div>
        <div class="layout-flex-start nav">
          <p>
            <span
              v-for="(item,index) in nav1"
              :key="index"
              @click="goPath(item)"
            >{{ $t(item.title) }}</span>
          </p>
          <p>
            <span
              v-for="(item,index) in nav2"
              @click="goPath(item)"
              :key="index"
            >{{ $t(item.title) }}</span>
          </p>
          <p>
            <span
              v-for="(item,index) in nav3"
              :key="index"
              @click="goPath(item)"
            >{{ $t(item.title) }}</span>
          </p>
          <div class="social">
            <p class="title">{{$t('media')}}</p>
            <div class="layout-flex-start">
              <img
                v-for="(item,index) in 5"
                :key="index"
                :src="$imgs[`footer/social0${index + 1}`]"
                alt
              />
            </div>
          </div>
        </div>
        <p class="copyright">
          {{$t('operation')}}
          <br />
          {{$t('licensed')}}
          <br />
          {{$t('copyright')}}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { backDomain, siteinfo } from '@/api'
import { getRegionLang } from '@/api/index'
export default {
  data() {
    return {
      navTop: [
        { title: 'responsibility', icon: [{ name: 'zr1', width: '30px', height: '30px' }, { name: 'zr1', width: '28px', height: '31px' }] },
        { title: 'supervision', icon: [{ name: 'jg1', width: '26px', height: '31px' }, { name: 'jg2', width: '33px', height: '32px' }] },
        { title: 'payment', icon: [{ name: 'pay1', width: '101px', height: '23px' }, { name: 'pay2', width: '71px', height: '25px' }, { name: 'pay3', width: '75px', height: '30px' }, { name: 'pay1', width: '80px', height: '26px' }, { name: 'pay1', width: '42px', height: '25px' }, { name: 'pay1', width: '70px', height: '27px' }, { name: 'pay1', width: '97px', height: '23px' }, { name: 'pay1', width: '91px', height: '24px' }, { name: 'pay1', width: '98px', height: '20px' }] },
        { title: 'security', icon: [{ name: 'safe1', width: '86px', height: '17px' }] }
      ],
      platforms: [
        { name: 'pay1', width: '90px', height: '29px' },
        { name: 'pay2', width: '67px', height: '25px' },
        { name: 'pay3', width: '109px', height: '34px' },
        { name: 'pay4', width: '65px', height: '34px' },
        { name: 'pay5', width: '85px', height: '26px' },
        { name: 'pay6', width: '69px', height: '33px' },
        { name: 'pay7', width: '72px', height: '31px' },
        { name: 'pay8', width: '101px', height: '21px' },
        { name: 'pay9', width: '89px', height: '22px' },
        { name: 'pay10', width: '84px', height: '30px' },
        { name: 'pay11', width: '94px', height: '24px' },
        { name: 'pay12', width: '62px', height: '24px' },
        { name: 'pay13', width: '73px', height: '17px' },
        { name: 'pay14', width: '73px', height: '27px' },
        { name: 'pay15', width: '116px', height: '23px' }
      ],
      nav1: [
        { title: 'betting', path: '/sport' },
        { title: 'eSports', path: '/esport' },
        { title: 'casino', path: '/real' },
        { title: 'slot', path: '/electronic' },
        { title: 'lottery', path: '/lottery' },
        { title: 'fishing', path: '/fishing' }
      ],
      nav2: [
        { title: 'promo', path: '/discount' },
        { title: 'club', path: '/vip' },
        { title: 'downloadCenter', path: '/appDownload' }
      ],
      nav3: [
        { title: 'faq', path: '/help/question?id=0-0', id: '0-0' },
        { title: 'manual', path: '/help/manual?id=1-0', id: '1-0' },
        { title: 'safety', path: '/help/security?id=2', id: '2' }
      ],
      link: ''
    }
  },
  created() {
    this.backDomain()
    const lang = this.getParams('lang')
    if (lang) {
      this.$i18n.locale = lang
    } else {
      getRegionLang()
        .then((result) => {
          console.log(navigator)
          const { language } = navigator
          const localLang = this.getLang(language)
          if (localLang === result) {
            this.$i18n.locale = result
          } else {
            this.$i18n.locale = 'en'
          }
        })
    }
  },

  mounted() {
  },
  methods: {
    async backDomain() {
      let routes = this.routes
      let res = await backDomain()
      let result = res.data.data

      result.map((item) => {
        item.domain = `https://${item.domain}`
      })
      this.link = result[0].domain
      //  console.log(this.link)
    },
    goPath(item) {
      location.href = this.link + item.path
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
    }
  }
}

</script>

<style lang="scss" scoped>
.align-center-wrap {
  // width: var(--base-width);
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 64px;
}

.align-center-wrap-1200 {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}
.layout-flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-flex-start {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.layout-flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.together {
  padding: 65px 0 132px;
  font-size: 18px;
  color: #000;
  background-color: #fff;

  .align-center-wrap {
    align-items: flex-start;

    .title {
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      line-height: 25px;
      margin: 0 0 26px;
    }

    .cooperation {
      flex: 1;

      .layout-flex-center {
        div {
          margin: 0 10%;

          img {
            width: 250px;
            margin-bottom: 34px;
          }

          p {
            margin: 0 0 9px;
          }
        }
      }
    }

    .brand {
      font-size: 16px;
      text-align: left;
      padding-right: 97px;
      white-space: nowrap;

      img {
        width: 343px;
        margin-right: 19px;
      }
    }
  }
}
.footer-wrap {
  line-height: 50px;
  background-color: #222930;
  color: #fff;
  text-align: left;

  &-main {
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;

    .title {
      font-size: 17px;
      color: #fff;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 17px;
    }

    .top {
      align-items: flex-start;
      justify-content: space-between;
      padding-left: 20px;
    }

    .duty {
      &:nth-child(1) {
        > div div {
          @for $i from 1 through 2 {
            &:nth-child(#{$i}) {
              background: url("../../../assets/50001/img/footer/zr#{$i}.png")
                center
                no-repeat;
              background-size: 100% auto;
              margin-right: 25px;

              &:hover {
                background: url("../../../assets/50001/img/footer/zr#{$i}-active.png")
                  center
                  no-repeat;
                background-size: 100% auto;
              }
            }
          }
        }
      }
      &:nth-child(2) {
        > div div {
          @for $i from 1 through 2 {
            &:nth-child(#{$i}) {
              background: url("../../../assets/50001/img/footer/jg#{$i}.png")
                center
                no-repeat;
              background-size: 100% auto;
              margin-right: 25px;

              &:hover {
                background: url("../../../assets/50001/img/footer/jg#{$i}-active.png")
                  center
                  no-repeat;
                background-size: auto 100%;
              }
            }
          }
        }
      }

      &:nth-child(3) {
        max-width: 37%;

        > div {
          justify-content: space-between;
          div {
            @for $i from 1 through 9 {
              &:nth-child(#{$i}) {
                background: url("../../../assets/50001/img/footer/pay#{$i}.png")
                  left
                  center
                  no-repeat;
                background-size: 100% auto;
                margin-bottom: 42px;

                &:hover {
                  background: url("../../../assets/50001/img/footer/pay#{$i}-active.png")
                    left
                    center
                    no-repeat;
                  background-size: 100% auto;
                }
              }
            }
          }
        }
      }

      &:last-child {
        margin-right: 0;

        > div div {
          background: url("../../../assets/50001/img/footer/safe1.png") left
            center no-repeat;
          background-size: 100% auto;

          &:hover {
            background: url("../../../assets/50001/img/footer/safe1-active.png")
              left center no-repeat;
            background-size: 100% auto;
          }
        }
      }
    }

    .plat {
      padding-left: 20px;
    }

    .plat-icon {
      flex-wrap: wrap;
      justify-content: flex-start;
      > div {
        width: calc(100% / 8);
        margin-bottom: 20px;

        @for $i from 1 through 15 {
          &:nth-child(#{$i}) {
            div {
              background: url("../../../assets/50001/img/footer/plat#{$i}.png")
                center
                no-repeat;
              background-size: 100% auto;
            }

            &:hover div {
              background: url("../../../assets/50001/img/footer/plat#{$i}-active.png")
                center
                no-repeat;
              background-size: 100% auto;
            }
          }
        }
      }

      img {
        height: 25px;
        display: block;
      }
    }

    .nav {
      padding: 20px 40px 37px 59px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      align-items: flex-start;
      justify-content: space-between;

      p {
        margin: 0;

        span {
          display: block;
          line-height: 28px;
          cursor: pointer;
        }
      }
    }

    .social {
      .title {
        margin-bottom: 17px;
      }
      img {
        width: 23px;
        display: block;
        margin-right: 15px;
        cursor: pointer;
      }
    }

    .copyright {
      padding: 25px 0 29px;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      margin: 0;
    }
  }
}
</style>
