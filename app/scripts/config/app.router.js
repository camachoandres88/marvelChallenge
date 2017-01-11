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

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/characters');
    }
})();
