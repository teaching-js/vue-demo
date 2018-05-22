module.exports = {
  lintOnSave: true,
  baseUrl: "vue-demo",
  outputDir: "docs",
  configureWebpack: {
    entry: {
      app: "./src/index.js"
   }
  }
}
