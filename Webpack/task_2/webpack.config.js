const path = require('path'); // CommonJS import

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',  // Your entry JavaScript file
  output: {
    filename: 'bundle.js',  // Output JavaScript file
    path: path.resolve(__dirname, 'public'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply this rule to all JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel loader to transpile JS
        },
      },
      {
        test: /\.css$/,  // Apply this rule to all CSS files
        use: ['style-loader', 'css-loader'],  // Use style-loader and css-loader for CSS
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,  // Apply this rule to image files
        use: [
          {
            loader: 'file-loader',  // Use file-loader to handle images
          },
          {
            loader: 'image-webpack-loader',  // Optimize images
            options: {
              bypassOnDebug: true,  // Disable image optimization in debug mode
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],  // Resolve .js files
  },
};
