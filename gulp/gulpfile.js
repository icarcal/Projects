var gulp = require('gulp');
var coffee = require('gulp-coffee');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var jasmine = require('gulp-jasmine');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var del = require('del');

var files = {
	jasminecoffee: "./assets/coffee/tests/*.coffee",
	commonjscoffee: "./assets/coffee/*.coffee",
	jasmine: "./assets/tests/*.js",
	stylus: "./assets/stylus/*.stylus"
};

var filesdest = {
	jasmine: "./assets/tests/",
	commonjs: "./assets/js/",
	stylus: "./assets/css/"
};

var filesdestclean = [
	"./assets/tests/*.js",
	"./assets/js/*.js",
	"./assets/css/*.css"
]

gulp.task('clean', function(){
	return del(filesdestclean);
});

gulp.task('jasminecoffee',  ['clean'], function(){
	return gulp.src(files.jasminecoffee)
		.pipe(coffee({bare:true}).on('error', gutil.log))
		.pipe(gulp.dest(filesdest.jasmine));
});

gulp.task('coffee', ['jasminecoffee'], function(){
	return gulp.src(files.commonjscoffee)
		.pipe(coffee({bare:true}).on('error', gutil.log))
		.pipe(gulp.dest(filesdest.commonjs));
});

gulp.task('tests', ['jasminecoffee', 'coffee'], function(){
	return gulp.src(files.jasmine)
		.pipe(jasmine());
})

gulp.task('build', ['clean', 'jasminecoffee', 'coffee', 'tests']);

gulp.task('default', ['build']);