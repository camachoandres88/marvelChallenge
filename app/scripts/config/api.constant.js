(function() {
    'use strict';

    angular
        .module('marvelChallengeApp')
        .constant('API_CONSTANTS', {
            CHARACTERS: {
                BASE: '/v1/public/characters'
            }
        });
})();
