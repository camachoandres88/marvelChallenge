(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name marvelChallengeApp.modules.comics:ComicDetailController
     * @description
     * # ComicDetailController
     * Controller that supports all the logic to display the comic detail and the add to favourites functionality.
     */

    angular
        .module('marvelChallengeApp.modules.comics')
        .controller('ComicDetailController', ComicDetailController);

    ComicDetailController.$inject = ['$uibModalInstance', 'comic', 'ComicService', 'APP_CONSTANTS', '$sce'];

    function ComicDetailController($uibModalInstance, comic, ComicService, APP_CONSTANTS, $sce) {
        var vm = this;

        vm.comic = comic;
        vm.close = closeModal;
        vm.getImage = getImage;

        vm.added = ComicService.isComicAddedInStore(vm.comic.id);
        vm.addComicToFavourites = addComicToFavourites;
        vm.sanitizeDescription = sanitizeDescription;

        function closeModal() {
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
