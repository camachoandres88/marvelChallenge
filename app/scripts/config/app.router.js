(function () {
  'use strict';

  angular
    .module('marvelChallengeApp')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/characters');
    //$locationProvider.html5Mode(true).hashPrefix('!');
  }
})();
