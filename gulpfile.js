var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
//node本地服务
gulp.task('run',function(){
	nodemon({
		script:'index.js',
	})
})