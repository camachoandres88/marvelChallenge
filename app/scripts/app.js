(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name marvelChallengeApp
     * @description
     * # marvelChallengeApp
     *
     * Main module of the application.
     */
    angular
        .module('marvelChallengeApp', [
            'ui.router',
            'ngAnimate',
            'ngAria',
            'ngSanitize',
            'restangular',
            'angular-storage',
            'ui.bootstrap',
            'pascalprecht.translate',
            'marvelChallengeApp.modules',
            'marvelChallengeApp.services',
            'marvelChallengeApp.directives'
        ]);
})();
