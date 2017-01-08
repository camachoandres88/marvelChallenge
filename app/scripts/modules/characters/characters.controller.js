(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.modules.characters')
        .controller('CharactersController', CharactersController);

    CharactersController.$inject = ['CharacterService', '$scope'];

    function CharactersController(CharacterService, $scope) {
        var vm = this;
        vm.activate = activate;
        vm.characters = [];
        vm.getCharacters = getCharacters;
        vm.getImage = getImage;
        vm.paging = {
            total: 100,
            current: 1,
            maxPagesSize: 5,
            onPageChanged: getCharacters,

        };
        vm.filterText = '';
        vm.isLoading = false;

        vm.activate();


        function activate() {
            vm.getCharacters();
        }

        function getCharacters() {
            vm.isLoading = true;
            CharacterService.getEntityByNameAndOffset(vm.filterText, vm.paging.current).then(function(result) {
                console.log('result', result);
                vm.paging.total = result.data.total;

                vm.characters = result.data.results;
            }).finally(function() {
                vm.isLoading = false;
            });
        }

        function getImage(character) {
            return character.thumbnail.path + '/standard_xlarge.' + character.thumbnail.extension;
        }

        $scope.$watch(function() { return vm.filterText; }, function(newValue, oldValue) {
            if (newValue !== oldValue) {
                vm.getCharacters();
            }
        });
    }
})();
