(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name marvelChallengeApp.services:PaginatorService
     * @description
     * # PaginatorService
     * Service to manage the states of the paginator
     */

    angular
        .module('marvelChallengeApp.services')
        .factory('PaginatorService', PaginatorService);

    PaginatorService.$inject = [];

    function PaginatorService() {

        var actualPage = 0,
            service = {
                getActualPage: getActualPage,
                setActualPage: setActualPage
            };

        return service;

        function getActualPage() {
            return actualPage;
        }

        function setActualPage(value) {
            actualPage = value;
        }
    }
})();
