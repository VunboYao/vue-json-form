const { defineConfig } = require('@vue/cli-service')
const autoImport = require('unplugin-auto-import/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      autoImport({
        include: [/\.[tj]sx?$/, /\.vue$/],
        import: ['vue'],
      }),
    ],
  },
})
