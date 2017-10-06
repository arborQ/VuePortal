var webpackDevServer = require('webpack-dev-server');
var webpack = require("webpack");
var config = require("../webpack.config.js");
var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  quiet: false,
  stats: { colors: true, chunks: false },
  hot: true,
  historyApiFallback: true,
  proxy: {
    "/api": {
      "target": {
        "host": "localhost",
        "protocol": 'http',
        "port": 5881
      },
      secure: false
    }
  }
});
server.listen(8080);