const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const Timestamp = new Date().getTime()

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    proxy: 'http://localhost:4000'
  },
  // 部署应用包时的基本 URL
  publicPath: isDev ? '/' : process.env.VUE_APP_ASSET_PATH,
  css: {
    sourceMap: true,
    loaderOptions: {
      // sass-loader 8.0
      scss: {
        prependData: `@import "@/assets/${process.env.VUE_APP_PROJECT_NAME}/variables.scss";`
      }
    }
  },
  //
  chainWebpack: config => {
    let url = `./src/assets/${process.env.VUE_APP_PROJECT_NAME}/img`
    if (process.env.VUE_APP_PROJECT_NAME === 'wanqu') {
      url = './src/assets/img'
    }
    config.resolve.alias
      .set('@img', path.resolve(__dirname, url))
    if (!isDev) {
      config.output.filename(`js/[name].[hash:8]${Timestamp}.js`).end()
      config.output.chunkFilename(`js/[name].[hash:8]${Timestamp}.js`).end()
      config.plugin('extract-css').tap(args => [{
        filename: `css/[name].[hash:8]${Timestamp}.css`,
        chunkFilename: `css/[name].[hash:8]${Timestamp}.css`
      }])
    }
  }
}
