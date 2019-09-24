var gulp = require('gulp');

// html压缩
var htmlmin = require('gulp-html-minify');
gulp.task('html',function(){
    gulp.src('./*.html')
    .pipe(htmlmin({
        collapseWhitespace : true,
        removeComments : true
    }))
    .pipe(gulp.dest('./build'))
})

// sass编译
var minifyCSS = require('gulp-clean-css');
gulp.task('css',function(){
    gulp.src('./src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/src/css'))
});

// 图片压缩
var imagemin = require('gulp-imagemin');
gulp.task('imagemin',function() {
	return gulp.src(['./src/img/**/*','!./img/*.ico'])
       .pipe(imagemin({
            optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
       .pipe(gulp.dest('./build/src/img'));
});

// js丑化
var uglify = require('gulp-uglify'),
    babel = require('gulp-babel');
gulp.task('js',function(){
    gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build/src/js'))
});


gulp.task('default',['imagemin','html','css','js']);