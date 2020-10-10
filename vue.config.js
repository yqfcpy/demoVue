const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
  // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
  chainWebpack: (config) => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('img', resolve('src/assets/img'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('css', resolve('src/assets/css'))
      .set('network', resolve('src/network'))
  }
}
