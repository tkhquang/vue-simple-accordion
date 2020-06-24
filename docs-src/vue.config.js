const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../docs"),
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-simple-accordion/" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue Simple Accordion";
      return args;
    });
  }
};
