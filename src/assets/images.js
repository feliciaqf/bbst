const imgs = {}
let requireImg = require.context(
  `./${process.env.VUE_APP_PROJECT_NAME !== 'wanqu' ? process.env.VUE_APP_PROJECT_NAME + '/img':'img'}`, // 在当前目录下查找
  true, // 遍历子文件夹
  /\.(jpg|png|gif|svg)$/ // 正则匹配 以 .vue结尾的文件
)

requireImg.keys().forEach(fileName => {
  let name = fileName.replace('./', '')
  // name = name.replace(/\//ig, "_");
  // name = name.replace(/\./ig, "_");
  name = name.substring(0, name.length - 4)
  console.log(name, fileName)

  imgs[name] = requireImg(fileName)
  console.log(name)
})
let bImgs = {}
for (let i in imgs) {
  bImgs[i] = `url("${imgs[i]}")`
}
export default {
  imgs, bImgs
}
