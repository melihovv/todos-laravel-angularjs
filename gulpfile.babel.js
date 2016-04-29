import gulp from 'gulp';
import util from 'gulp-util';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import webpackCssConfig from './webpack-css.config.js';

gulp.task('default', () => {
    gulp.start('webpack-css', 'webpack');
    gulp.start('watch', 'browser-sync');
});

gulp.task('browser-sync', () => {
    browserSync({
        proxy: 'http://todos-laravel-angularjs/'
    });
});

const execWebpack = (config) => {
    return webpack(config, (err, stats) => {
        if (err) {
            throw new util.PluginError('execWebpack', err);
        }

        return util.log('[execWebpack]', stats.toString({colors: true}));
    });
};

gulp.task('webpack', (callback) => {
    execWebpack(webpackConfig);
    return callback();
});

gulp.task('webpack-css', (callback) => {
    execWebpack(webpackCssConfig);
    return callback();
});

gulp.task('watch', () => {
    gulp.watch(
        ['./resources/assets/js/app.js'],
        ['./resources/assets/templates/**/*'],
        ['webpack']
    );

    gulp.watch(
        [
            'public/assets/*.*',
            'resources/views/home/index.blade.php',
        ],
        {},
        browserSync.reload
    );
});
