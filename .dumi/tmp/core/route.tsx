// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"docs/index":{"path":"","id":"docs/index","parentId":"DocLayout"},"components/alert/index":{"id":"components/alert/index","path":"components/alert","parentId":"DocLayout","meta":{"_atom_route":true}},"components/upload/index":{"id":"components/upload/index","path":"components/upload","parentId":"DocLayout","meta":{"_atom_route":true}},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"dumi-context-layout"}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__404" */'D:/code/learn/happy-ui/node_modules/dumi/dist/client/pages/404.js')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'D:/code/learn/happy-ui/.dumi/tmp/dumi/theme/ContextWrapper')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi__theme-default__layouts__DocLayout__index" */'D:/code/learn/happy-ui/node_modules/dumi/theme-default/layouts/DocLayout/index.js')),
'docs/index': React.lazy(() => import(/* webpackChunkName: "docs__index.md" */'D:/code/learn/happy-ui/docs/index.md')),
'components/alert/index': React.lazy(() => import(/* webpackChunkName: "alert__index.md" */'D:/code/learn/happy-ui/src/alert/index.md')),
'components/upload/index': React.lazy(() => import(/* webpackChunkName: "upload__index.md" */'D:/code/learn/happy-ui/src/upload/index.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */'D:/code/learn/happy-ui/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}
