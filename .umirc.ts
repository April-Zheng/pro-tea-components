import { defineConfig } from 'dumi';
const PackageJson = require('./package.json');

export default defineConfig({
  title: 'pro-tea-components',
  favicon: '/assets/icon.ico',
  logo: '/assets/logo.svg',
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? `/${PackageJson.name}` : '/',
  publicPath:
    process.env.NODE_ENV === 'production' ? `/${PackageJson.name}/` : '/',
  mfsu: {},
  manifest: {},
  hash: true,
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
