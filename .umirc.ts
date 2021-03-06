import { defineConfig } from 'dumi';
const PackageJson = require('./package.json');

const baseName =
  process.env.NODE_ENV === 'production' ? `/${PackageJson.name}` : '';

export default defineConfig({
  mode: 'site',
  title: 'pro-tea-components',
  favicon: `${baseName}/assets/icon.ico`,
  logo: `${baseName}/assets/logo.svg`,
  outputPath: 'docs-dist',
  base: baseName || '/',
  publicPath: process.env.NODE_ENV === 'production' ? `${baseName}/` : '/',
  mfsu: {},
  manifest: {},
  hash: true,
  chainWebpack(memo) {
    memo.resolve.alias.set(PackageJson.name, '/src');
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/April-Zheng/pro-tea-components',
    },
  ],
  // lessLoader: {
  //   globalVars:{
  //     prefix: 'pro-tea'
  //   },
  //   modifyVars: {
  //     hack: 'true; @import "~@/styles/index.less";',
  //   },
  // },
  // more config: https://d.umijs.org/config
});
