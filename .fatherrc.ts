export default {
  esm: {
    type: 'babel',
    minify: false, // 压缩文件
    importLibToEs: true,
  },
  cjs: 'babel',
  cssModules: true,
  extractCSS: true,
  lessInBabelMode: true,
  extraBabelPlugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
        rootPathPrefix: '@',
      },
    ],
  ],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
};
