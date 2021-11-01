/*
https://vuetifyjs.com/zh-Hans/components/grids#layout-playground

flex attrs src\assets\style\flex-layout.scss

<hy-layout test-layout>
  <hy-layout>
      垂直居中
  </hy-layout>
</hy-layout>

.test-layout{
  background: #f00;
  color: #fff;
  height: 40px;
  width: 100px;
}
*/
export default {
  /* @vue/component */

  name: 'layout',

  functional: true,

  props: {
    id: String,
    tag: {
      type: String,
      default: 'div'
    }
  },

  render (h, { props, data, children }) {
    data.staticClass = `layout ${data.staticClass ||
      (data.attrs || data.class ? '' : 'align-center')}`.trim()

    const { attrs } = data
    if (attrs) {
      // reset attrs to extract utility clases like pa-3
      data.attrs = {}
      const classes = Object.keys(attrs).filter(key => {
        // TODO: Remove once resolved
        // https://github.com/vuejs/vue/issues/7841
        if (key === 'slot') return false

        const value = attrs[key]

        // add back data attributes like data-test="foo" but do not
        // add them as classes
        if (key.startsWith('data-')) {
          data.attrs[key] = value
          return false
        }

        return value || typeof value === 'string'
      })

      if (classes.length) data.staticClass += ` ${classes.join(' ')}`
    }

    if (props.id) {
      data.domProps = data.domProps || {}
      data.domProps.id = props.id
    }

    return h(props.tag, data, children)
  }
}
