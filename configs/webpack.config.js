const path  = require("path");
const CleanWebpackPlugin  = require("clean-webpack-plugin");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const recursionPages = require("./../node/entryUtil");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//项目根目录
var rootDir = path.join(__dirname, '..');
//源码所在路径
var srcDir = path.join(__dirname, '..', 'src');
//编译后输出的文件目录
var distDir = path.join(__dirname, '..', 'dist');

//定义入口
let entry = {};
//生成每个入口的HTML
let entryHtmlPlugins = [];
let pageEntitys = recursionPages.getPageArray();
for(let curEntity of pageEntitys){
  entry[curEntity.entiryName] = curEntity.entiryFile;
  //构建HTML插件
  let htmlConfig = curEntity.htmlConfig;
  entryHtmlPlugins.push(new HtmlWebpackPlugin(Object.assign({
    filename: `${curEntity.entiryName}.html`,
    template: path.join(srcDir, 'defaultHtmlTemp.html'),
    chunks: [curEntity.entiryName]
  }, htmlConfig)));
}

//资源路径解析
let resolve = {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.runtime.esm.js',
    '@': srcDir,
    '@icons': path.join(srcDir, 'imgs', 'icons')
  },
  symlinks: false
}

//模块解析器（loader）
let rules = [];
const include = [srcDir, path.resolve(rootDir, 'node_modules')];
rules.push({test: /\.js$/, include, loader: 'babel-loader'});
rules.push({test: /\.vue$/, include, loader: 'vue-loader'});
rules.push({test: /\.css$/, include, use: ['vue-style-loader', 'css-loader']});
rules.push({test: /\.scss$/, include, use: ['vue-style-loader', 'css-loader', 
  {
    loader:'sass-loader',options: {
      includePaths: [path.join(srcDir, 'css')]
    }
  }
]});
rules.push({
  test: /\.(png|jpg|gif)$/, 
  include: srcDir, 
  use: [{loader: 'url-loader', options: {limit: 8192, outputPath: 'imgs/'}}], 
});

//插件
let plugins = [];
plugins = plugins.concat(entryHtmlPlugins);
//插件用于转换vue单文件插件里面的script、css
plugins.push(new VueLoaderPlugin());

module.exports = env => {
  distDir = env&&env.product?path.join('/data/www/dist'):distDir;
  rootDir = env&&env.product?path.join('/data/www'):rootDir;
  //文件拷贝
  plugins.push(new CopyWebpackPlugin([{ from: path.join(srcDir, 'imgs/favicon.ico'), to: path.join(distDir, 'favicon.ico') }]));
  if(!env || !env.dontClean){
    plugins.push(new CleanWebpackPlugin([distDir], {root: rootDir}));
  }
  return {
    context: path.join(srcDir, 'pages'),
    entry,
    output: {
      filename: 'js/[name].[chunkhash].js',
      chunkFilename: 'js/[id].[chunkhash].js',
      path: distDir,
      publicPath: env&&env.product?"/":"/dist/"
    },
    resolve,
    plugins,
    module: {rules}
  }
};