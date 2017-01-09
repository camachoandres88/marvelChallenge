(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.modules.characters')
        .controller('ComicDetailController', ComicDetailController);

    ComicDetailController.$inject = ['$uibModalInstance', 'comic', 'APP_CONSTANTS', '$sce'];

    function ComicDetailController($uibModalInstance, comic, APP_CONSTANTS, $sce) {
        var vm = this;

        vm.added = false;
        vm.comic = comic;

        vm.close = close;
        vm.getImage = getImage;
        vm.sanitizeDescription = sanitizeDescription;

        function close() {
            $uibModalInstance.close();
        }

        function sanitizeDescription(description) {
            return $sce.trustAsHtml(description);
        }

        function getImage() {
            if (vm.comic) {
                return vm.comic.thumbnail.path + '/' + APP_CONSTANTS.IMAGE.SIZES.COMIC_INCREDIBLE + '.' + vm.comic.thumbnail.extension;
            } else {
                return '';
            }
        }
    }
})();
