(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name marvelChallengeApp.directives:scrollToTop
     * @description
     * # scrollToTop
     * Directive to scroll to top on click over root element
     */

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
