module.exports = {
  entry: {app:'./src/index.js',register: './src/register.js',login: './src/login.js'  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',  

  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};

