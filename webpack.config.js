//作为绝对路径引入
const path = require('path');
module.exports = {
  //入口
  entry: path.resolve(__dirname,'./main.js'),
  //打包出口
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist')
  },
  devtool:"source-map",
  //热中心，修改保存，就自动更新页面
  devServer:{
    contentBase:path.resolve(__dirname,'./dist')
  }
}