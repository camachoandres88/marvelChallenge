(function() {
    'use strict';
    angular
        .module('marvelChallengeApp')
        .config(restangularConfig);

    restangularConfig.$inject = ['RestangularProvider', 'APP_CONSTANTS'];

    function restangularConfig(RestangularProvider, APP_CONSTANTS) {
        RestangularProvider.setBaseUrl(APP_CONSTANTS.API_URL);
    }
})();
