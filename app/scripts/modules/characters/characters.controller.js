(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name marvelChallengeApp.modules.characters:CharactersController
     * @description
     * # CharactersController
     * Controller that supports all the logic to search characters and display them in groups of 10.
     */

    angular
        .module('marvelChallengeApp.modules.characters')
        .controller('CharactersController', CharactersController);

    CharactersController.$inject = ['CharacterService', 'APP_CONSTANTS', '$scope', '$state'];

    function CharactersController(CharacterService, APP_CONSTANTS, $scope, $state) {
        var vm = this;

        vm.characters = [];
        vm.filterText = '';
        vm.isLoading = false;
        vm.paging = {
            total: 0,
            current: 1,
            maxPagesSize: APP_CONSTANTS.PAGINATOR.PAGINATOR_SIZE,
            onPageChanged: getCharacters,
            sort: 'name'
        };

        vm.activate = activate;
        vm.getCharacters = getCharacters;
        vm.getImage = getImage;
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
            }).finally(function() {
                vm.isLoading = false;
            });
        }

        function getImage(character) {
            return CharacterService.getImage(character);
        }

        function sort(value) {
            vm.paging.sort = value;
        }

        function viewDetail(id) {
            $state.go('characters_detail', { id: id });
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
