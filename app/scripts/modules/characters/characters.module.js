(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name marvelChallengeApp.modules.characters
     * @description
     * # CharactersModule
     * Module to manage characters search and detail
     */

    angular
        .module('marvelChallengeApp.modules.characters', [
            'marvelChallengeApp.modules.comics',
            'marvelChallengeApp.services'
        ]);
})();
