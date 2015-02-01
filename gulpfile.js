var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var path        = require('path');
var copy        = require('gulp-copy');
var livereload  = require('gulp-livereload');
var gzip        = require('gulp-gzip');
var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var minifyHTML  = require('gulp-minify-html');
var rename      = require("gulp-rename");
var preprocess  = require('gulp-preprocess');
var config      = require('./config.json');

var bower_dir   = 'bower';
var js_dir      = 'js';
var scss_dir    = 'scss';
var css_dir     = 'css';
var deploy_dir  = 'deploy'

var s3 = require('gulp-s3-upload')(config.s3);

// DEFAULT

gulp.task('copy-normalize', function () {
  return gulp.src(bower_dir + '/normalize-css/normalize.css')
    .pipe(gulp.dest(css_dir));
});

gulp.task('compile-css', function () {
  return gulp.src(scss_dir + '/style.scss')
    .pipe(sass())
    .pipe(gulp.dest(css_dir))
    .pipe(livereload());
});

gulp.task('copy-bower-files', ['copy-normalize']);

gulp.task('watch-styles', function() {
  return gulp.watch(scss_dir + '/**/*.scss', ['compile-css']);
});

gulp.task('default',['copy-bower-files', 'compile-css', 'watch-styles']);


// PRODUCTION

gulp.task('html-prod', function() {
  var opts = {comments:false,spare:true};

  gulp.src('./index.html')
    .pipe(preprocess({context: { NODE_ENV: 'production', DEBUG: true}}))
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(deploy_dir))
});

gulp.task('js-prod', function () {
  return gulp.src([js_dir + '/codemirror-clojure.min.js', js_dir + '/app.js'])
    .pipe(concat('app.js'))
    .pipe(gzip())
    .pipe(rename('app.js')) // get rid of .gzip
    .pipe(gulp.dest(deploy_dir + "/" + js_dir))
});

gulp.task('css-prod', function () {
  return gulp.src([css_dir + 'normalize.css',
                   css_dir + '/codemirror.css',
                   css_dir + '/style.css'])
    .pipe(concat('style.css'))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gzip())
    .pipe(rename('style.css')) // get rid of .gzip
    .pipe(gulp.dest(deploy_dir + "/" + css_dir))
});

gulp.task('prod',['compile-css', 'js-prod', 'css-prod', 'html-prod']);

gulp.task("upload", function() {
  // index.html
  gulp.src(deploy_dir + "/index.html")
      .pipe(s3({bucket: config.s3bucket}));
  // css/js
  gulp.src([deploy_dir + "/**/*", "!" + deploy_dir + "/index.html"] )
    .pipe(s3({bucket: config.s3bucket,
              gzip: true}));
  // img
  gulp.src("./img/*")
    .pipe(s3({bucket: config.s3bucket,
              name_transform: function(rel_fn){
               return ("img/" + rel_fn);}}));

});

gulp.task('deploy', ['prod', 'upload'])

