(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name marvelChallengeApp:RouterConfig
     * @description
     * # RouterConfig
     * Main router for marvelChallengeApp
     */

    angular
        .module('marvelChallengeApp')
        .config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/characters');
        //$locationProvider.html5Mode(true).hashPrefix('!');
    }
})();
