var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:path.join(__dirname,"src/main.js"),
    output:{
      path:__dirname,
      filename:'bundle.js'
    },
    resolve: {
      extensions:['.js','.jsx'],
      alias:{
        SERVICES: path.resolve(__dirname,'src/services'),
        STORE: path.resolve(__dirname,'store')
      }
    },
    module:{
      rules:[
        {
          test:/\.jsx?$/,
          use:'babel-loader',
          exclude:/node_modules/
        },
        {
          test:/\.css$/,
          use:[
            {loader:'style-loader'},
            {loader:'css-loader'}
          ]
        },
        {
          test:/\.scss$/,
          use:[
            {loader:'style-loader'},
            {loader:'css-loader'},
            {loader:'sass-loader'}
          ]
        },
        {
          test:/\.(jpg|png)$/,
          use:[
            {loader:'url-loader'}
          ]
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./template.html'
      })
    ]
  }
  