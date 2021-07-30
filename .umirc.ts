import { defineConfig } from 'dumi';
const PackageJson = require('./package.json');

export default defineConfig({
  title: 'pro-tea-components',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? `/${PackageJson.name}` : '/',
  publicPath:
    process.env.NODE_ENV === 'production' ? `/${PackageJson.name}/` : '/',
  mfsu: {},
  manifest: {},
  hash: true,

  sass: {
    implementation: require('node-sass'),
    prependData: `@import "~@/styles/index.scss";`,
  },
  // more config: https://d.umijs.org/config
});
