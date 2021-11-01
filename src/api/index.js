import axios from 'axios'

const http = axios.create({
    // baseURL: process.env.VUE_APP_WEB_API_URL
    baseURL: process.env.VUE_APP_WEB_API_URL
})

const backDomain = () => {
    return http.get(`backdomain?merchant_no=${process.env.VUE_APP_MERCHANT_NO}`)
}
const siteinfo = (params) => {
    // return http.get(`siteinfo?merchant_no=${process.env.VUE_APP_MERCHANT_NO}&inte_currency_id=3&inte_region_id=2`)
    return http.get('/siteinfo', {
        params: {
            'merchant_no': process.env.VUE_APP_MERCHANT_NO,
            ...params
        }
    })
}
const regionlist = () => {
    return http.get(`regionlist?merchant_no=${process.env.VUE_APP_MERCHANT_NO}`)
}

// 服务端获取IP语言
const getRegionLang = () => {
    const config = {
        zh: 'zh-CN',
        en: 'en',
        th: 'th',
        vi: 'vi',
        vn: 'vi'
    }
    return http.get(`iplocale?merchant_no=${process.env.VUE_APP_MERCHANT_NO}`).then((data) => config[data.data.data.locale])
}
// export async function getRegionLang() {
//     // return new Promise((resolve) => resolve('zh'));
//     return request('/iplocale', {
//       method: 'get',
//     }).then((data) => config[data.locale]);
//   }

export {
    backDomain, siteinfo, getRegionLang, regionlist
}
