const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  // 打包白屏问题
  publicPath: './',
  // 打包默认文件夹
  outputDir: 'build',
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  // 配置路径别名
  // lintOnSave: process.env.NODE_ENV !== 'production',

  configureWebpack: {
    resolve: {
      alias: {
        com: '@/components'
      }
    },
    // ...
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // },

  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', path.resolve(__dirname, 'views'))
  // },
  devServer: {
    open: true,
    port: '9999',
    host: 'localhost'
  }
})
