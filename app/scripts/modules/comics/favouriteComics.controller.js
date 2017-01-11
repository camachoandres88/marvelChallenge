(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name marvelChallengeApp.modules.comics:FavouriteComicsController
     * @description
     * # FavouriteComicsController
     * Controller that supports all the logic to display the favorite comics and the functionality to remove them from favorites list
     */

    angular
        .module('marvelChallengeApp.modules.comics')
        .controller('FavouriteComicsController', FavouriteComicsController);

    FavouriteComicsController.$inject = ['ComicService'];

    function FavouriteComicsController(ComicService) {
        var vm = this;
        vm.comics = ComicService.getFavouriteComics();
        vm.deleteComic = deleteComic;


        function deleteComic(comic) {
            ComicService.deleteFromFavouriteComics(comic.id);
        }
    }
})();
