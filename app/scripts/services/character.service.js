(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.services')
        .factory('CharacterService', CharacterService);

    CharacterService.$inject = ['Restangular', 'API_CONSTANTS', 'APP_CONSTANTS'];

    function CharacterService(Restangular, API_CONSTANTS, APP_CONSTANTS) {

        var service = {
            getSingleEntity: getSingleEntity,
            getImage: getImage,
            getEntityByNameAndOffset: getEntityByNameAndOffset
        };

        return service;

        function getBase() {
            return Restangular.all(API_CONSTANTS.CHARACTERS.BASE);
        }

        function getSingleEntity(id) {
            var params = {
                apikey: APP_CONSTANTS.MARVEL_API_KEY
            };
            return getBase().one('', id).customGET('', params);
        }

        function getImage(character) {
            if (character) {
                return character.thumbnail.path + '/' + APP_CONSTANTS.IMAGE.SIZES.CHARACTER + '.' + character.thumbnail.extension;

            } else {
                return '';
            }
        }

        function getEntityByNameAndOffset(name, page, sort) {
            var params = {
                limit: APP_CONSTANTS.PAGINATOR.RECORDS_LIMIT,
                offset: ((page - 1) * APP_CONSTANTS.PAGINATOR.RECORDS_LIMIT),
                apikey: APP_CONSTANTS.MARVEL_API_KEY,
                orderBy: sort
            };

            if (name) {
                params.nameStartsWith = name;
            }
            return getBase().customGET('', params);
        }
    }
})();
