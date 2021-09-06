const path = require('path')
module.exports = {
  //配置方式一：CLI提供属性
  outputDir: './build', // 打包位置
  publicPath: './', //修改的是加载资源对应的路径,不用在webpack打包后再加./
  //配置方式二：与webpack相同，最后被合并到一起
  // 这里是个对象，相当于用webpack-merger进行合并
  //为了在其他文件中引入路径起一个别名，方便后续引入
  /*     configureWebpack: {
            resolve: {
                //别名
                alias: {
                    // 默认情况下，@对应在src
                    component: '@/component'
                }
            }
        } */
  //  第三种方式，通过函数进行引入，相同的被覆盖，意思是别名为@去代替当前目录下的src文件路径，views代替src/views
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
  }
}
