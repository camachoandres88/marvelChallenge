(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name marvelChallengeApp.modules.characters:CharactersRouter
     * @description
     * # CharactersRouter
     * Main router for Characters module
     */

    angular
        .module('marvelChallengeApp.modules.characters')
        .config(CharactersRouter);

    CharactersRouter.$inject = ['$stateProvider'];

    function CharactersRouter($stateProvider) {
        $stateProvider
            .state('characters_main', {
                url: '/characters',
                templateUrl: '/views/characters/characters.template.html',
                controller: 'CharactersController',
                controllerAs: 'charactersCtrl',
            })
            .state('characters_detail', {
                url: '/character/:id',
                templateUrl: '/views/characters/characterDetail.template.html',
                controller: 'CharacterDetailController',
                controllerAs: 'characterDetailCtrl'
            });
    }
})();
