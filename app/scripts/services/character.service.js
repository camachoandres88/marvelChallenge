(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.services')
        .factory('CharacterService', CharacterService);

    CharacterService.$inject = ['Restangular', 'API_CONSTANTS', 'APP_CONSTANTS'];

    function CharacterService(Restangular, API_CONSTANTS, APP_CONSTANTS) {

        var service = {
            getBase: getBase,
            getAllEntities: getAllEntities,
            getSingleEntity: getSingleEntity,
            getEntityByNameAndOffset: getEntityByNameAndOffset
        };

        return service;

        function getBase() {
            return Restangular.all(API_CONSTANTS.CHARACTERS.BASE);
        }

        function getAllEntities() {
            return getBase().getList();
        }

        function getSingleEntity(id) {
            return getBase().get(id);
        }

        function getEntityByNameAndOffset(name, page) {
            var params = {
                limit: APP_CONSTANTS.PAGINATOR.RECORDS_LIMIT,
                offset: ((page - 1) * APP_CONSTANTS.PAGINATOR.RECORDS_LIMIT),
                apikey: APP_CONSTANTS.MARVEL_API_KEY
            };

            if (name) {
                params.nameStartsWith = name;
            }
            return getBase().customGET('', params);
        }
    }
})();
