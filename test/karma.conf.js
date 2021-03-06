module.exports = function(config) {
    'use strict';

    config.set({
        autoWatch: true,

        basePath: '../',
        frameworks: [
            'jasmine'
        ],

        files: [
            // bower:js
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-translate/angular-translate.js',
            'bower_components/lodash/lodash.js',
            'bower_components/restangular/dist/restangular.js',
            'bower_components/a0-angular-storage/dist/angular-storage.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-mocks/angular-mocks.js',
            // endbower
            'dist/scripts/vendor.*.js',
            'app/scripts/app.js',
            'app/scripts/**/*.module.js', // <-- first the module definitions...
            'app/scripts/**/*.js',
            'test/spec/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        preprocessors: {
            'app/scripts/**/*.js': 'coverage'
        },

        reporters: ['spec', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        port: 8080,

        browsers: [
            'Chrome'
        ],


        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-spec-reporter'
        ],

        singleRun: false,
        colors: true,
        logLevel: config.LOG_INFO
    });
};
