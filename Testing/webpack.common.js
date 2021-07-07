const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
     entry : {
         main : "./src/scripts/index.js"
     },
     plugins : [new HtmlWebpackPlugin({
         template : "./src/templates/index.html"
     })],
     module:{
         rules: [
           
            {
                test : /\.html$/,
                loader : 'html-loader'
            },
            {
                test: /\.(svg|png|jpg|gif)/,
                type : 'asset/resource'
            }
           

         ]
    }
}