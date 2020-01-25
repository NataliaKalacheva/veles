// connect modules
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const del = require("del");
const browserSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const babel = require("gulp-babel");

gulp.task("sass-compile", function() {
  return (
    gulp
      .src("./src/scss/app.scss")
      // .src([
      //   "./src/scss/main.scss",
      //   "./src/scss/header-nav.scss",
      //   "./src/scss/about.scss"
      // ])
      .pipe(sourcemaps.init())
      .pipe(
        sass({
          includePaths: require("node-normalize-scss").includePaths
        })
      )
      .pipe(sass().on("error", sass.logError))
      .pipe(concat("main.css"))
      .pipe(
        autoprefixer({
          cascade: false
        })
      )
      .pipe(cleanCSS({ level: 1 }))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./build/css/"))
      .pipe(browserSync.stream())
  );
});

gulp.task("html", function() {
  return gulp
    .src("*.html")
    .pipe(posthtml([include()]))
    .pipe(gulp.dest("./build/"))
    .pipe(browserSync.stream());
});

gulp.task("scripts:lib", function() {
  return (
    gulp
      .src([
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/slick-carousel/slick/slick.min.js"
      ])
      // .src(["./src/js/**/*.js"])
      // .pipe(sourcemaps.init())
      // .pipe(
      //   babel({
      //     presets: ["@babel/env"]
      //   })
      // )
      // .pipe(concat("all.js"))
      .pipe(concat("libs.min.js"))
      // .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("./build/js/"))
      .pipe(browserSync.stream())
  );
});

gulp.task("scripts", function() {
  return gulp
    .src(["./src/js/**/*.js"])
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./build/js/"))
    .pipe(browserSync.stream());
});

gulp.task("images", function() {
  return (
    gulp
      .src("./src/img/**/*")
      // .pipe(imagemin())
      .pipe(gulp.dest("./build/img"))
  );
});

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "./build/"
    }
  });
  gulp.watch("./src/scss/**/*.scss", gulp.series("sass-compile"));
  gulp.watch("./src/js/**/*.js", gulp.series("scripts:lib", "scripts"));
  gulp.watch("*.html", gulp.series("html"));
  gulp.watch("./src/img/**/*", gulp.series("images"));
});

gulp.task("del", function() {
  return del(["build/*"]);
});

gulp.task(
  "build",
  gulp.series(
    "del",
    gulp.parallel("html", "sass-compile", "scripts:lib", "scripts", "images")
  )
);

gulp.task("jquery", function() {
  return gulp
    .src("./node_modules/jquery/src")
    .pipe(
      jquery({
        flags: [
          "-deprecated",
          "-event/alias",
          "-ajax/script",
          "-ajax/jsonp",
          "-exports/global"
        ]
      })
    )
    .pipe(gulp.dest("./public/vendor/"));
  // creates ./public/vendor/jquery.custom.js
});
