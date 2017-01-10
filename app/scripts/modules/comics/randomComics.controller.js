(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.modules.comics')
        .controller('RandomComicsController', RandomComicsController);

    RandomComicsController.$inject = ['$uibModalInstance', 'comic', 'ComicService'];

    function RandomComicsController($uibModalInstance, comic, ComicService) {
        let vm = this;
        vm.comics = comic;
        vm.addComicsToFavourites = addComicsToFavourites;
        vm.getComicImage = getComicImage;
        vm.close = close;

        function addComicsToFavourites() {
            for (let i = 0; i < vm.comics.length; i++) {
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
