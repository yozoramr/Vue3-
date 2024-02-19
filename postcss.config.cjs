module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 根元素字体大小
      unitPrecision: 5, // 转换后的值保留的小数位数
      propList: ['*', '!border*'], // 可以从 px 更改为 rem 的属性
      selectorBlackList: [], // 忽略的选择器，保留为 px
      replace: true, // 是否替换包含 px 的属性值
      mediaQuery: false, // 是否转换在媒体查询中的 px 值
      minPixelValue: 0, // 设置要替换的最小像素值
      exclude: /node_modules/i // 忽略 node_modules 目录下的文件
    }
  }
};
