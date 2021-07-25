export default {
  target: 'browser',
  esm: {
    type: 'babel',
    minify: false, // 压缩文件
    importLibToEs: true,
  },
  cjs: 'babel',
  extractCSS: false,
  lessInBabelMode: true,
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  }
};
