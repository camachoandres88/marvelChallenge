(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.modules.characters')
        .controller('CharactersController', CharactersController);

    CharactersController.$inject = ['CharacterService', 'APP_CONSTANTS', '$scope', '$state', '$window'];

    function CharactersController(CharacterService, APP_CONSTANTS, $scope, $state, $window) {
        var vm = this;

        vm.characters = [];
        vm.filterText = '';
        vm.isLoading = false;
        vm.paging = {
            total: 100,
            current: 1,
            maxPagesSize: 5,
            onPageChanged: getCharacters,
            sort: 'name'
        };

        vm.activate = activate;
        vm.getCharacters = getCharacters;
        vm.getImage = getImage;
        vm.scrollToTop = scrollToTop;
        vm.sort = sort;
        vm.viewDetail = viewDetail;


        vm.activate();

        function activate() {
            vm.getCharacters();
        }

        function getCharacters() {
            vm.isLoading = true;
            CharacterService.getEntityByNameAndOffset(vm.filterText, vm.paging.current, vm.paging.sort).then(function(result) {
                vm.paging.total = result.data.total;
                vm.characters = result.data.results;
                vm.scrollToTop();
            }).finally(function() {
                vm.isLoading = false;
            });
        }

        function getImage(character) {
            return character.thumbnail.path + '/' + APP_CONSTANTS.IMAGE.SIZES.CHARACTER + '.' + character.thumbnail.extension;
        }

        function sort(value) {
            vm.paging.sort = value;
        }

        function viewDetail(id) {
            $state.go('characters_detail', { id: id });
        }

        function scrollToTop() {
            $window.scrollTo(0, 0);
        }

        $scope.$watch(function() { return vm.filterText; }, function(newValue, oldValue) {
            if (newValue !== oldValue) {
                vm.paging.current = 1;
                vm.getCharacters();
            }
        });

        $scope.$watch(function() { return vm.paging.sort; }, function(newValue, oldValue) {
            if (newValue !== oldValue) {
                vm.getCharacters();
            }
        });
    }
})();
