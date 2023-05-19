const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //dipasang via npm
const common ={
  entry: './app,js'
  //...
};

module.exports = {
    mode: 'development',
    entry: {
        index : '   ./src/index.js',
    
        print :     './src/print.js'} ,
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management - motorcycles',
          title: 'Development',
        }),
      ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'styles-loader'
            },
            {
              loader: 'style-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      })
    ]
    
} 