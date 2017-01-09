(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.services')
        .factory('ComicService', ComicService);

    ComicService.$inject = ['Restangular', 'API_CONSTANTS', 'APP_CONSTANTS'];

    function ComicService(Restangular, API_CONSTANTS, APP_CONSTANTS) {

        var service = {
            getSingleEntity: getSingleEntity,
            getEntitiesByCharacter: getEntitiesByCharacter
        };

        return service;

        function getBase() {
            return Restangular.all(API_CONSTANTS.COMICS.BASE);
        }

        function getSingleEntity(id) {
            var params = {
                apikey: APP_CONSTANTS.MARVEL_API_KEY
            };
            return getBase().one('', id).customGET('', params);
        }

        function getEntitiesByCharacter(characterId) {
            var params = {
                characters: characterId,
                apikey: APP_CONSTANTS.MARVEL_API_KEY
            };
            return getBase().customGET('', params);
        }
    }
})();
