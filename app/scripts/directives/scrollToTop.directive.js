(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.directives')
        .directive('scrollToTop', scrollToTop);

    scrollToTop.$inject = [];

    function scrollToTop() {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, element) {
            element.on('click', function() {
                angular.element('body').animate({ scrollTop: 0 }, "slow");
            });
        }
    }
})();
