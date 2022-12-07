/* eslint-disable linebreak-style */
/* "import/no-unresolved": "off" */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

export const mode = 'development';
export const entry = {
  index: resolve(__dirname, './src/index.js'),
};
export const devServer = {
  static: './dist',
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/template.html',
  }),
];
export const output = {
  filename: '[name].js',
  path: resolve(__dirname, 'dist'),
  clean: true,
  assetModuleFilename: 'src//images/[name].[ext]',
};
export const optimization = {
  runtimeChunk: 'single',
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            publicPath: 'images/',
          },
        },
      ],
    },
    {
      test: /\.html$/,
      use: ['html-loader'],
    },
  ],
};