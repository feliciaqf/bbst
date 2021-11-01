import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Layout from './components/layout'
import images from './assets/images.js'
import I18n from 'vue-i18n'

let constant = require(`@/assets/${process.env.VUE_APP_PROJECT_NAME}/constant.js`)
console.log(process.env.VUE_APP_PROJECT_NAME)
require(`@/assets/${process.env.VUE_APP_PROJECT_NAME}/style.scss`)

Vue.component(Layout.name, Layout)

Vue.prototype.$imgs = images.imgs
Vue.prototype.$bImgs = images.bImgs
Vue.prototype.$projectName = process.env.VUE_APP_PROJECT_NAME

Vue.config.productionTip = false
Vue.prototype.$constant = constant

Vue.use(I18n)

const i18n = new I18n({
  locale: 'zh-CN',
  messages: {
    en: {
      newUrl: ' Latest official website',
      tipText: 'Warm reminder: The smaller the MS value, the faster the opening of the website, and the faster the URL in front of the row!',
      download: 'Download',
      apple: 'Apple {msg}',
      android: 'Android {msg}',
      retest: 'Retest speed',
      mga: 'Horse Other License (MGA) certification',
      gc: 'British GC Oversight Committee',
      pa: 'The Philippines (PAGCOR) supervised certification',
      bvi: 'British Virgin Islands (BVI) certification',
      backup: 'Domain',
      enterGame: 'Enter game',
      partner: 'Partner',
      official: 'Official jersey sponsor',
      brand: 'Brand ambassador',
      wlkoski: 'Wilkoski',
      forward: 'North Macedonia-Striker',
      platform: 'Gaming Platfor',
      media: 'Social Media',
      operation: 'Blizzwin is under operation of the OG Global Access Ltd',
      licensed: 'Blizzwin is licensed and aduited by PAGCOR of Philippine government since March 01, 2019',
      copyright: 'Blizzwin ©All rights reserved',
      responsibility: 'Betting Responsibility',
      supervision: 'Operational Supervision',
      payment: 'Payment Method',
      security: 'Information Security',
      betting: 'Sports Betting',
      eSports: 'eSports',
      casino: 'Live Casino',
      slot: 'Slot',
      lottery: 'Lottery',
      fishing: 'Fishing',
      promo: 'Promo',
      club: 'King Club',
      downloadCenter: 'Download Center',
      faq: 'FAQ',
      manual: 'Game Manual',
      safety: 'Safety Assurance',
      dyr: 'Spokesperson'
    },
    'zh-CN': {
      newUrl: ' 最新官方网址',
      tipText: '温馨提示：MS值越小,打开网站速度越快,越排前的网址越快！',
      download: '下载',
      apple: '苹果下载',
      android: '安卓下载',
      retest: '重新测速',
      mga: '马其他牌照(MGA)认证',
      gc: '英国GC监督委员会',
      pa: '菲律宾(PAGCOR)监督牌照',
      bvi: '英属维尔京群岛(BVI)认证',
      backup: '备用域名',
      enterGame: '进入游戏',
      partner: '合作伙伴',
      official: '官方球衣赞助商',
      brand: '品牌大使',
      wlkoski: '维尔科斯基',
      forward: '北马其顿-前锋',
      platform: '游戏平台',
      media: '社交媒体',
      operation: 'Blizzwin属于OG GLOBAL ACCESS LIMITED运营',
      licensed: 'Blizzwin于2019年03月01日起由菲律宾政府PAGCOR授权及监管',
      copyright: 'Blizzwin©版权所有违者必究',
      responsibility: '博彩责任',
      supervision: '运营监管',
      payment: '支付方式',
      security: '信息安全',
      betting: '体育博彩',
      eSports: '电竞',
      casino: '真人娱乐场',
      slot: '老虎机',
      lottery: '彩票',
      fishing: '捕鱼游戏',
      promo: '优惠',
      club: '天王俱乐部',
      downloadCenter: '下载中心',
      faq: '常见问题',
      manual: '游戏手册',
      safety: '安全保障',
      dyr: '代言人'
    },
    vi: {
      newUrl: ' Trang web chính thức mới nhất',
      tipText: 'Lời nhắc ấm áp: Giá trị MS càng nhỏ, trang web mở càng nhanh và URL phía trước hàng càng nhanh!',
      download: 'Tải xuống',
      apple: 'Apple {msg}',
      android: 'Android {msg}',
      retest: 'Kiểm tra lại tốc độ',
      mga: 'Giấy chứng nhận Horse Other License (MGA)',
      gc: 'Ủy ban giám sát GC của Anh\n',
      pa: 'Giấy phép Giám sát của Philippine (PAGCOR)',
      bvi: 'Chứng nhận Quần đảo Virgin thuộc Anh (BVI)',
      backup: 'tên miền',
      enterGame: 'vào trò chơi\n',
      partner: 'Bạn đồng hành',
      official: 'Nhà tài trợ áo đấu chính thức',
      brand: 'Đại sứ thương hiệu',
      wlkoski: 'Wilkoski',
      forward: 'Bắc Macedonia-Tiền đạo',
      platform: 'Nền tảng chơi game',
      media: 'truyền thông xã hội',
      operation: 'Blizzwin thuộc về hoạt động Og global Access Limited',
      licensed: 'Blizzwin giấy phép và giám sát từ chính phủ Philippines từ ngày 01 tháng ba năm 2019',
      copyright: 'Blizzwin © Copyright phạm tội',
      responsibility: 'Trách nhiệm cá cược',
      supervision: 'Giám sát hoạt động',
      payment: 'Phương thức thanh toán',
      security: 'Bảo mật thông tin',
      betting: 'Cá cược thể thao',
      eSports: 'Chơi game',
      casino: 'Sòng bạc sống',
      slot: 'May đanh bạc',
      lottery: 'Trò chơi câu cá',
      fishing: 'Vé số',
      promo: 'Chiết khấu',
      club: 'Câu lạc bộ King',
      downloadCenter: 'Trung tâm tải xuống',
      faq: 'Vấn đề thường gặp',
      manual: 'Hướng dẫn trò chơi',
      safety: 'Bảo vệ',
      dyr: 'Người phát ngôn'
    },
    th: {
      newUrl: ' เว็บไซต์ทางการล่าสุด',
      tipText: 'คำเตือนที่อบอุ่น: ยิ่งค่า MS น้อยเท่าใด การเปิดเว็บไซต์ก็จะยิ่งเร็วขึ้น และ URL ที่ด้านหน้าแถวก็จะเร็วขึ้น!',
      download: 'ดาวน์โหลด',
      apple: 'Apple {msg}',
      android: 'Android {msg}',
      retest: 'ทดสอบความเร็วอีกครั้ง',
      mga: 'การรับรองใบอนุญาตอื่นของม้า (MGA)',
      gc: 'คณะกรรมการกำกับดูแล GC ของอังกฤษ',
      pa: 'ใบอนุญาตกำกับดูแลของฟิลิปปินส์ (PAGCOR)',
      bvi: 'ใบรับรองหมู่เกาะบริติชเวอร์จิน (BVI)',
      backup: 'ชื่อโดเมน',
      enterGame: 'เข้าเกม',
      partner: 'พันธมิตร',
      official: 'สปอนเซอร์เสื้ออย่างเป็นทางการ',
      brand: 'แบรนด์แอมบาสเดอร์',
      wlkoski: 'Wilkoski',
      forward: 'North Macedonia - กองหน้า',
      platform: 'แพลตฟอร์มเกม',
      media: 'สื่อสังคม',
      operation: 'Blizzwin เป็นของการดำเนินงาน Og global Access Limited',
      licensed: 'Blizzwin ใบอนุญาตและการกำกับดูแลจากรัฐบาลฟิลิปปินส์จาก 1 มีนาคม 2019',
      copyright: 'Blizzwin © Copyright ผู้กระทำผิด',
      responsibility: 'ความรับผิดชอบในการเดิมพัน',
      supervision: 'การกำกับดูแลการปฏิบัติงาน',
      payment: 'วิธีการชำระเงิน',
      security: 'ความปลอดภัยของข้อมูล',
      betting: 'การเดิมพันกีฬา',
      eSports: 'การเล่นเกม',
      casino: 'มีชีวิตอยู่คาสิโน',
      slot: 'เครื่องสล็อต',
      lottery: 'เกมตกปลา',
      fishing: 'ตั๋วลอตเตอรี',
      promo: 'การเล่นเกม',
      club: 'คิงคลับ',
      downloadCenter: 'ศูนย์ดาวน์โหลด',
      faq: 'ปัญหาที่พบบ่อย',
      manual: 'คู่มือเกม',
      safety: 'คุ้มครอง',
      dyr: 'โฆษก'
    }
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
