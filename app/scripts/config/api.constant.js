(function() {
    'use strict';

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
