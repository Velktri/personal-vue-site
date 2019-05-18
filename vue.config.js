const path = require("path")

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/personal-vue-site' : '/',

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'sass',
        patterns: [path.resolve(__dirname, "./src/styles/global.sass")]
      }
    }
}
