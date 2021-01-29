

const path = require("path");

module.exports = {
  entry: {app:'./src/index.js',register: './src/register.js',login: './src/login.js'  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',  

  },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    }
}