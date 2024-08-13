const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //contentBase:path.join(__dirname, 'public'),
    port:8888,
  },
})
