const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const minifyCSS = require('gulp-cssmin');
const spawn = require('cross-spawn');
const uglify = require('gulp-uglify-es').default;
const alert = require('ansi-colors');

let FOLDER;
for (let i = process.argv.length; i > 0; i--) {
    let arg = process.argv[i];
    let nextArg = process.argv[i + 1];

    if (arg == '--folder' && nextArg) {
        FOLDER = process.cwd() + '/' + nextArg;
    } else {
        FOLDER = process.cwd() + '/theme';
    }
}

const JSPATH = FOLDER + '/js/';
const CSSPATH = FOLDER + '/css/';

gulp.task('js', (done) => {
    gulp.src(JSPATH + "main.js")
    .pipe(rename("main.min.js"))
    .pipe(uglify({"compress": false}))
    .pipe(gulp.dest(JSPATH));

    done()
});

gulp.task('css', (done) => {
    gulp
        .src(CSSPATH + 'base.css')
        .pipe(concat('base.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(CSSPATH))

    done()
});

gulp.task('sass', (done) => {
    gulp
    .src(CSSPATH + 'sass/frontend.scss')
    .pipe(sass())
    .pipe(concat('frontend.min.css'))
    .on("error", sass.logError)
    .pipe(minifyCSS())
    .pipe(gulp.dest(CSSPATH))

    done()
});

gulp.task('opencode', () => {
    process.chdir(FOLDER);

    const opencode = spawn('opencode', ['watch']);

    opencode.stdout.on('data', (data) => {
        let output = alert.green(data);
        if (data.indexOf('Error') > -1) {
            output = alert.red(data);
        }
        process.stdout.write(output);
    });

    opencode.stderr.on('data', (data) => {
        process.stdout.write(alert.red(data));
    });
});

gulp.task('watch', () => {
    gulp.watch(JSPATH  + 'main.js', gulp.series('js'));
    gulp.watch(CSSPATH + 'base.css', gulp.series('css'));
    gulp.watch(CSSPATH + '**/*.scss', gulp.series('sass'));
    // gulp.watch(CSSPATH + '**/*[!.min].{scss,sass}', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('opencode', 'watch', 'sass', 'js', 'css'));
