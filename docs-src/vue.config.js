const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../docs"),
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue Simple Accordion";
      return args;
    });
  }
};
