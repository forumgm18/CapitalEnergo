'use strict';
let sassOutputStyle = {outputStyle: 'compact'}
/* параметры для gulp-autoprefixer */
let autoprefixerList = [
    'Chrome >= 45',
    'Firefox ESR',
    'Edge >= 12',
    'Explorer >= 10',
    'iOS >= 9',
    'Safari >= 9',
    'Android >= 4.4',
    'Opera >= 30'
];

/* пути к исходным файлам (src), к готовым файлам (build), а также к тем, за изменениями которых нужно наблюдать (watch) */
let path = {
    build: {
        html: 'dist/',
          js: 'dist/js/',
   cssBefore: 'dist/css/',
         css: 'dist/css/',
cssFinalName: 'main.css',
         img: 'dist/img/',
       fonts: 'dist/fonts/',
     plugins: 'dist/plugins/',
     favicon: 'dist/favicon/'

    },
    src: {
        baseDir: 'src/html/',
           html: ['src/html/*.html','src/html/*.php','!src/html/include/**'],
             // js: './src/js/main.js',
             js: './src/js/*.js',
          style: 'src/plugins/*.css',
           scss: 'src/scss/main.scss',
        plugins: 'src/plugins/**/*.*',
            img: 'src/img/img/**/*.*',
         imgSvg: 'src/img/svg/**/*.svg',
          fonts: 'src/fonts/**/*.*',
        favicon: 'src/favicon/**/*.ico'
    },
    watch: {
        html: ['src/html/**/*.html','src/html/**/*.php'],
        // html: ['src/html/*.html','!src/html/include/**'],
         tpl: 'src/html/include/*.html',
          js: 'src/js/**/*.js',
         css: 'src/scss/**/*.scss',
         img: 'src/img/img/**/*.*',
      imgSvg: 'src/img/svg/**/*.*',
       fonts: 'src/fonts/**/*.*',
     favicon: 'src/favicon/**/*.ico'

    },
    cleanAll: 'dist/*',
    clean: ['dist/*.html','dist/css/*','dist/js/*']
};

/* настройки сервера */
let config = {
    server: { baseDir: './dist' },
    notify: false
};

/* подключаем gulp и плагины */
let gulp = require('gulp'),  // подключаем Gulp
    webserver = require('browser-sync'), // сервер для работы и автоматического обновления страниц
    plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
    sourcemaps = require('gulp-sourcemaps'), // модуль для генерации карты исходных файлов
    sass = require('gulp-sass'), // модуль для компиляции SASS (SCSS) в CSS
    autoprefixer = require('gulp-autoprefixer'), // модуль для автоматической установки автопрефиксов
    cleanCSS = require('gulp-clean-css'), // плагин для минимизации CSS
    // uglify = require('gulp-uglify'), // модуль для минимизации JavaScript
    cache = require('gulp-cache'), // модуль для кэширования
    imagemin = require('gulp-imagemin'), // плагин для сжатия PNG, JPEG, GIF и SVG изображений
    jpegrecompress = require('imagemin-jpeg-recompress'), // плагин для сжатия jpeg	
    pngquant = require('imagemin-pngquant'), // плагин для сжатия png
    del = require('del'), // плагин для удаления файлов и каталогов
    rename = require('gulp-rename'),
    fileinclude = require('gulp-file-include'), // модуль для импорта содержимого одного файла в другой
 concat = require('gulp-concat'),
    // merge = require('merge-stream'),
    merge = require('merge2'),

  webpack = require('webpack'),
  webpackStream = require('webpack-stream');

// Режим сборки
let isDev = true;     // Разработка
let isProd = !isDev;  // Продакшен

// настройки WebPack
const WebpackConfig = {
  output: {
    filename: 'main.js',//path.build.js,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: "jquery/dist/jquery.min.js",
    //         jQuery: "jquery/dist/jquery.min.js",
    //         "window.jQuery": "jquery/dist/jquery.min.js",
    //
    //     })
    // ],
  mode: isDev ? 'development' : 'production'
}

/* задачи */

// запуск сервера
gulp.task('webserver', function () {
    webserver(config);
});

// сбор html
gulp.task('html:build', function () {
    return gulp.src(path.src.html) // выбор всех html файлов по указанному пути
        .pipe(plumber()) // отслеживание ошибок
        .pipe(fileinclude({ // импорт вложений
              prefix: '@@',
              basepath: path.src.baseDir
              // basepath: '@root'
            }))
        .pipe(gulp.dest(path.build.html)) // выкладывание готовых файлов
        .pipe(webserver.reload({ stream: true })); // перезагрузка сервера
});

// сбор html tpl
// gulp.task('tpl:build', function () {
//     return gulp.src(path.src.tpl) // выбор всех html файлов по указанному пути
//         .pipe(plumber()) // отслеживание ошибок
//         .pipe(fileinclude({ // импорт вложений
//               prefix: '@@',
//               basepath: path.src.baseDir
//             }))
//         .pipe(gulp.dest(path.build.tpl)) // выкладывание готовых файлов
//         .pipe(webserver.reload({ stream: true })); // перезагрузка сервера
// });

// сбор стилей
// gulp.task('css:build', function () {
//     return gulp.src(path.src.style) // получим main.scss
//         .pipe(plumber()) // для отслеживания ошибок
//         .pipe(sourcemaps.init()) // инициализируем sourcemap
//         .pipe(sass(sassOutputStyle)) // scss -> css
//         // .pipe(autoprefixer({browsers: autoprefixerList})) // добавим префиксы
//         .pipe(autoprefixer({overrideBrowserslist: autoprefixerList})) // добавим префиксы
//         .pipe(gulp.dest(path.build.css))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(cleanCSS()) // минимизируем CSS
//         .pipe(sourcemaps.write('./')) // записываем sourcemap
//         .pipe(gulp.dest(path.build.css)) // выгружаем в build
//         .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
// });

// сбор стилей
gulp.task('css:build', function () {
    return merge(
                    //Объединяем стили плагинов
                    gulp.src(path.src.style).pipe(concat('z.z.css')),
                    //compile sass
                    gulp.src(path.src.scss)
                        .pipe(plumber()) // для отслеживания ошибок
                        .pipe(sourcemaps.init()) // инициализируем sourcemap
                        .pipe(sass(sassOutputStyle)) // scss -> css
                        .pipe(autoprefixer({overrideBrowserslist: autoprefixerList})) // добавим префиксы
                        .pipe(sourcemaps.write('./')) // записываем sourcemap
           )
        // Постобработка после объединения
        .pipe(concat(path.build.cssFinalName))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(path.build.css)) // выгружаем в build
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});

// сбор js
gulp.task('js:build', function () {
  // let gs = gulp.src(path.src.js);
  // console.log('gulp.src(path.src.js): ', gs);
    return gulp.src('./src/js/main.js') // получим файл main.js
      .pipe(webpackStream(WebpackConfig), webpack) // прогоняем JavaScript через Webpack
        .pipe(gulp.dest(path.build.js)) // положим готовый файл
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});

// перенос svg
gulp.task('svg:build', function () {
    return gulp.src(path.src.imgSvg)
        .pipe(gulp.dest(path.build.img));
});
//===================================
// перенос шрифтов
gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});
//===================================

// перенос  favicon
gulp.task('favicon:build', function () {
    return gulp.src(path.src.favicon)
        .pipe(gulp.dest(path.build.favicon));
});
//===================================

// перенос плагинов
gulp.task('plugins:build', function () {
    return gulp.src(path.src.plugins)
        .pipe(gulp.dest(path.build.plugins));
});
//===================================

// обработка картинок
gulp.task('image:build', function () {
    return gulp.src(path.src.img) // путь с исходниками картинок
        .pipe(cache(imagemin([ // сжатие изображений
            imagemin.gifsicle({ interlaced: true }),
            jpegrecompress({
                progressive: true,
                max: 90,
                min: 80
            }),
            pngquant()
        ])))
        .pipe(gulp.dest(path.build.img)); // выгрузка готовых файлов
});

// удаление каталога build 
gulp.task('clean:build', async function () {
    return del.sync(path.clean);
});
// удаление каталога build 
gulp.task('cleanAll', async function () {
    return del.sync(path.cleanAll);
});

// очистка кэша
gulp.task('cache:clear', function () {
    cache.clearAll();
});

// сборка
gulp.task('build',
    gulp.series('cleanAll',
        gulp.parallel(
            'html:build',
            'css:build',
            'js:build',
            'fonts:build',
            'svg:build',
            'image:build',
            'favicon:build',
            'plugins:build'
        )
    )
);

// запуск задач при изменении файлов
gulp.task('watch', function () {
    gulp.watch(path.watch.html, gulp.series('html:build'));
    gulp.watch(path.watch.css, gulp.series('css:build'));
    gulp.watch(path.watch.js, gulp.series('js:build'));
    gulp.watch(path.watch.imgSvg, gulp.series('svg:build'));
    gulp.watch(path.watch.img, gulp.series('image:build'));
    gulp.watch(path.watch.img, gulp.series('favicon:build'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});

// задача по умолчанию
gulp.task('default', gulp.series(
    'build',
    gulp.parallel('webserver','watch')      
));
