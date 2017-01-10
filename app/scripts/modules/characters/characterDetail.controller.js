(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.modules.characters')
        .controller('CharacterDetailController', CharacterDetailController);

    CharacterDetailController.$inject = ['CharacterService', 'ComicService', 'APP_CONSTANTS', '$scope', '$stateParams', '$q', '$state', '$uibModal'];

    function CharacterDetailController(CharacterService, ComicService, APP_CONSTANTS, $scope, $stateParams, $q, $state, $uibModal) {
        let vm = this;

        vm.activate = activate;
        vm.character = null;
        vm.comics = [];
        vm.id = $stateParams.id;
        vm.isLoading = false;

        vm.enableRandomButton = enableRandomButton;
        vm.getCharacterDetail = getCharacterDetail;
        vm.getComicImage = getComicImage;
        vm.getImage = getImage;
        vm.getRandomComics = getRandomComics;
        vm.showComicDetail = showComicDetail;
        vm.viewMain = viewMain;
        vm.activate();

        function activate() {
            vm.getCharacterDetail();
        }

        function getCharacterDetail() {
            let promises = [];
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
            return CharacterService.getImage(vm.character);
        }

        function getComicImage(comic) {
            return ComicService.getImage(comic);
        }

        function getRandomComics() {
            let randomComics = ComicService.getRandomComics(vm.comics);

            $uibModal.open({
                templateUrl: '/views/comics/randomComics.template.html',
                controller: 'RandomComicsController as randomComicsCtrl',
                size: 'md',
                resolve: {
                    comic: function() {
                        return randomComics;
                    }
                }
            });
        }

        function enableRandomButton() {
            return ComicService.enableRandomFunctionality(vm.comics);
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
