(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.modules.comics')
        .controller('ComicDetailController', ComicDetailController);

    ComicDetailController.$inject = ['$uibModalInstance', 'comic', 'ComicService', 'APP_CONSTANTS', '$sce'];

    function ComicDetailController($uibModalInstance, comic, ComicService, APP_CONSTANTS, $sce) {
        let vm = this;

        vm.comic = comic;
        vm.close = close;
        vm.getImage = getImage;

        vm.added = ComicService.isComicAddedInStore(vm.comic.id);
        vm.addComicToFavourites = addComicToFavourites;
        vm.sanitizeDescription = sanitizeDescription;

        function close() {
            $uibModalInstance.close();
        }

        function sanitizeDescription(description) {
            return $sce.trustAsHtml(description);
        }

        function addComicToFavourites() {
            ComicService.addFavouriteComic(vm.comic);
            vm.close();
        }

        function getImage() {
            return ComicService.getIncredibleImage(vm.comic);
        }
    }
})();
