/**
 * @file Create gulp tasks using gulp-task-maker
 * See https://github.com/kaliop/gulp-assets-builder for details, and more task scripts
 */
const gtm = require("gulp-task-maker");

var sassSources = [
    'assets/scss/**/*.scss',
    'assets/scss/*.scss',
    ' node_modules/slick-carousel/slick/slick.scss',
    ' node_modules/slick-carousel/slick/slick-theme.scss'
]
var sassDestination = 'dist/css/main.css'
var jsDestination = 'dist/js/main.js'


var minJsSrc = [
    'node_modules/jquery/dist/jquery.slim.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'assets/js/*.js'
]

gtm.load("gulp-scripts", {
    sass: {
        src: sassSources,
        watch: [
            sassSources,
        ],
        dest: sassDestination
    },

    minjs: [
        // minify and copy
        {
            src: minJsSrc,
            dest: jsDestination
        },
        // concatenate, minify and copy
        {
            src: minJsSrc,
            watch: [
                minJsSrc
            ],
            dest: jsDestination
        }
    ]
});

