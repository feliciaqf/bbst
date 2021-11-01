<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
  created () {
    this.favicon()
  },
  methods: {
    favicon () {
      // const { title, description } = data
      // const { title } = data
      var link =
                document.querySelector('link[rel*="icon"]') ||
                document.createElement('link')
      link.type = 'image/x-icon'
      link.rel = 'shortcut icon'
      link.href = require('@img/favico.png')
      // link.href = icon
      document.getElementsByTagName('head')[0].appendChild(link)
      // window.document.title = `${title}-${description}`
      // window.document.title = this.$constant.title+'-尊享万般乐趣'
    }
  }
}
</script>

<style lang="scss" src="@/assets/style/app.scss"></style>
<style lang="scss">
body,
html {
    background: #1e1e1e;
    margin: 0;
}
</style>
