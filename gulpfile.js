
var gulp = require("gulp");
var server= require("gulp-server-livereload");
var nodemon = require("gulp-nodemon");


gulp.task('watch', function () {
    gulp.watch('js/*.js', ['server']);
});

gulp.task("server", function(){
    gulp.src("")
        .pipe(server({
            livereload:true,
            directoryListing: true,
            open: true
        }));
});
