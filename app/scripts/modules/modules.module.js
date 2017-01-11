(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name marvelChallengeApp.modules
     * @description
     * # Modules
     * Module to manage sub modules on the app
     */

    angular
        .module('marvelChallengeApp.modules', [
            'marvelChallengeApp.modules.characters',
            'marvelChallengeApp.modules.comics'
        ]);
})();
