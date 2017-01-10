(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.services')
        .factory('PaginatorService', PaginatorService);

    PaginatorService.$inject = [];

    function PaginatorService() {

        let actualPage = 0,
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
