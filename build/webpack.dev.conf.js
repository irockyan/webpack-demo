const baseConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");

let devConfig = merge(baseConfig, {
  mode: "development"
});

module.exports = devConfig;
