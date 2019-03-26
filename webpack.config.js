const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs')

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
      const parts = item.split('.');
      const name = parts[0];
      const extension = parts[1];
      return new HTMLWebpackPlugin({
        filename: `${name}.html`,
        template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
        inject: false,
      })
    })
}

 const htmlPlugins = generateHtmlPlugins('./src/html/views')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
        test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: "css-loader",
              options: {
                    sourceMap: true
              }
            },
            {
              loader: "resolve-url-loader",
              options: {
                debug: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                  sourceMap: true
              }
            },
          ],
      },  
    {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
    },{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  plugins: [
    new HTMLWebpackPlugin(),
    new CopyPlugin([{
        from: './src/fonts',
        to: './fonts'
      },
      {
        from: './src/favicon',
        to: './favicon'
      },
      {
        from: './src/img',
        to: './img'
      }
    ]),
  ].concat(htmlPlugins)
};