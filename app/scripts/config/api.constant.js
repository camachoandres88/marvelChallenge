(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name marvelChallengeApp:API_CONSTANTS
     * @description
     * # API_CONSTANTS
     * Constant Marvel Rest URL's used by the app
     */

    angular
        .module('marvelChallengeApp')
        .constant('API_CONSTANTS', {
            CHARACTERS: {
                BASE: '/v1/public/characters'
            },
            COMICS: {
                BASE: '/v1/public/comics'
            }
        });
})();
