const gulp = require("gulp"); // gulp
const babel = require("gulp-babel"); // 用于编译ts
const less = require("gulp-less"); // less
const autoprefixer = require("gulp-autoprefixer"); // 自动添加css前缀
const cssnano = require("gulp-cssnano"); // 压缩css
const through2 = require("through2");
const paths = {
  dest: {
    lib: "lib", // commonjs 文件存放的目录名 - 本块关注
    esm: "esm", // ES module 文件存放的目录名 - 暂时不关心
    dist: "dist" // umd文件存放的目录名 - 暂时不关心
  },
  styles: "src/**/*.less", // 样式文件路径 - 暂时不关心
  scripts: ["src/**/*.{ts,tsx}", "!src/**/demo/*.{ts,tsx}", "!src/**/__tests__/*.{ts,tsx}"] // 脚本文件路径
};

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  // 设置环境变量
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel())
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); // 文件内容处理
          file.path = file.path.replace(/index\.js/, "css.js"); // 文件重命名
          this.push(file); // 新增该文件
          next();
        } else {
          next();
        }
      })
    ) // 使用gulp-babel处理
    .pipe(gulp.dest(destDir));
}

/**
 * 编译cjs
 */
function compileCJS() {
  const { dest } = paths;
  return compileScripts("cjs", dest.lib);
}

/**
 * 编译esm
 */
function compileESM() {
  const { dest } = paths;
  return compileScripts("esm", dest.esm);
}

// 拷贝样式文件
function copyLess() {
  return gulp.src(paths.styles).pipe(gulp.dest(paths.dest.lib)).pipe(gulp.dest(paths.dest.esm));
}

function less2css() {
  return gulp
    .src(paths.styles)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * @param {string} content
 */
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, ".css");
}

// 串行执行编译脚本任务(cjs,esm) 避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

// 整体并行执行任务
const build = gulp.parallel(buildScripts, copyLess, less2css);

exports.build = build;

exports.default = build;
