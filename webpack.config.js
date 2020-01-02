const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isDev = env === 'development';

  const conditionalWebpackOptimization = {
    minimizer: [
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  };

  // We tell Webpack not to include react and react-dom in the package.
  // This reduces package size
  const externals = {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  };

  const developmentPlugins = [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html'
   })
  ];

  var plugins = [
    // Add production plugins here
  ];

  if(isDev) {
    plugins = [
      ...plugins,
      ...developmentPlugins
    ];
  }

  console.log("Env:", env);

  return {
    mode: isDev ? 'development' : 'production',
    devServer: {
      port: 3001
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    externals: !isDev ? externals : {},

    // Our entry-point, index.js should import all we need in the bundle
    entry: isDev ? './src/index.js' : './src/lib/index.js',
    output: {
      filename: 'index.js',
      library: 'RSSWidget', // How this can be accessed globally once bundled
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: plugins,
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  outputStyle: 'compressed',
                },
              },
            },
          ],
        },
        {
          test: /\.module.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|svg|eot|ttf|png|gif|jpg|jpeg)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'url-loader',
          options: {
            limit: '150000',
            /*
             * Public fonts folder, where files that are too
             * big to include in the .js/.css files end up.
             */
            name: 'fonts/[name]-[hash].[ext]',
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/react'],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    optimization: !isDev ? conditionalWebpackOptimization : {},
  }
};
