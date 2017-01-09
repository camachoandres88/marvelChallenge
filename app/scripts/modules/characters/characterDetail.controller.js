(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.modules.characters')
        .controller('CharacterDetailController', CharacterDetailController);

    CharacterDetailController.$inject = ['CharacterService', 'ComicService', 'APP_CONSTANTS', '$scope', '$stateParams', '$q', '$state', '$uibModal'];

    function CharacterDetailController(CharacterService, ComicService, APP_CONSTANTS, $scope, $stateParams, $q, $state, $uibModal) {
        var vm = this;

        vm.activate = activate;
        vm.character = null;
        vm.comics = [];
        vm.id = $stateParams.id;
        vm.isLoading = false;

        vm.getCharacterDetail = getCharacterDetail;
        vm.getComicImage = getComicImage;
        vm.getImage = getImage;
        vm.showComicDetail = showComicDetail;
        vm.viewMain = viewMain;
        vm.activate();

        function activate() {
            vm.getCharacterDetail();
        }

        function getCharacterDetail() {
            var promises = [];
            vm.isLoading = true;
            promises.push(CharacterService.getSingleEntity(vm.id));
            promises.push(ComicService.getEntitiesByCharacter(vm.id));

            $q.all(promises).then(function(result) {
                vm.character = result[0].data.results[0];
                vm.comics = result[1].data.results;
            }).finally(function() {
                vm.isLoading = false;
            });
        }

        function getImage() {
            if (vm.character) {
                return vm.character.thumbnail.path + '/' + APP_CONSTANTS.IMAGE.SIZES.CHARACTER + '.' + vm.character.thumbnail.extension;

            } else {
                return '';
            }
        }

        function getComicImage(comic) {
            if (comic) {
                return comic.thumbnail.path + '/' + APP_CONSTANTS.IMAGE.SIZES.COMIC + '.' + comic.thumbnail.extension;
            } else {
                return '';
            }
        }

        function showComicDetail(comic) {
            vm.isLoading = true;
            ComicService.getSingleEntity(comic.id).then(function(result) {
                $uibModal.open({
                    templateUrl: '/views/comics/comicDetail.template.html',
                    controller: 'ComicDetailController as comicDetailCtrl',
                    size: 'md',
                    resolve: {
                        comic: function() {
                            return result.data.results[0];
                        }
                    }
                });
            }).finally(function() {
                vm.isLoading = false;
            });
        }

        function viewMain() {
            $state.go('characters_main');
        }
    }
})();
