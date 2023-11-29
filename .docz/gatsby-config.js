const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Happy Ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'D:\\code\\learn\\happy-ui\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Happy Ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\code\\learn\\happy-ui',
          templates:
            'D:\\code\\learn\\happy-ui\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\code\\learn\\happy-ui\\.docz',
          cache: 'D:\\code\\learn\\happy-ui\\.docz\\.cache',
          app: 'D:\\code\\learn\\happy-ui\\.docz\\app',
          appPackageJson: 'D:\\code\\learn\\happy-ui\\package.json',
          appTsConfig: 'D:\\code\\learn\\happy-ui\\tsconfig.json',
          gatsbyConfig: 'D:\\code\\learn\\happy-ui\\gatsby-config.js',
          gatsbyBrowser: 'D:\\code\\learn\\happy-ui\\gatsby-browser.js',
          gatsbyNode: 'D:\\code\\learn\\happy-ui\\gatsby-node.js',
          gatsbySSR: 'D:\\code\\learn\\happy-ui\\gatsby-ssr.js',
          importsJs: 'D:\\code\\learn\\happy-ui\\.docz\\app\\imports.js',
          rootJs: 'D:\\code\\learn\\happy-ui\\.docz\\app\\root.jsx',
          indexJs: 'D:\\code\\learn\\happy-ui\\.docz\\app\\index.jsx',
          indexHtml: 'D:\\code\\learn\\happy-ui\\.docz\\app\\index.html',
          db: 'D:\\code\\learn\\happy-ui\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
