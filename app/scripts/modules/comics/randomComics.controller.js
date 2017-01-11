(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name marvelChallengeApp.modules.comics:RandomComicsController
     * @description
     * # RandomComicsController
     * Controller that supports all the logic to display ramdon comics and the functionality to add them to favourites list
     */

    angular
        .module('marvelChallengeApp.modules.comics')
        .controller('RandomComicsController', RandomComicsController);

    RandomComicsController.$inject = ['$uibModalInstance', 'comic', 'ComicService'];

    function RandomComicsController($uibModalInstance, comic, ComicService) {
        var vm = this;
        vm.comics = comic;
        vm.addComicsToFavourites = addComicsToFavourites;
        vm.getComicImage = getComicImage;
        vm.close = close;

        function addComicsToFavourites() {
            for (var i = 0; i < vm.comics.length; i++) {
                ComicService.addFavouriteComic(vm.comics[i]);
            }
            vm.close();
        }

        function close() {
            $uibModalInstance.close();
        }

        function getComicImage(comic) {
            return ComicService.getImage(comic);
        }
    }
})();
