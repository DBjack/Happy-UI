import { defineConfig } from 'dumi';


// 此处更换为自己的仓库名
let base = '/Happy-UI';
let publicPath = '/Happy-UI/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = '';
  publicPath = '';
}

export default defineConfig({
  title: 'Happy UI',
  // mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  // dynamicImport: {},
  base, // 此处更换为自己的仓库名
  publicPath, // 此处更换为自己的仓库名
});