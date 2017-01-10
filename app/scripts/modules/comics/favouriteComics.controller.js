(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.modules.comics')
        .controller('FavouriteComicsController', FavouriteComicsController);

    FavouriteComicsController.$inject = ['ComicService'];

    function FavouriteComicsController(ComicService) {
        let vm = this;
        vm.comics = ComicService.getFavouriteComics();
        vm.deleteComic = deleteComic;


        function deleteComic(comic) {
            ComicService.deleteFromFavouriteComics(comic.id);
        }
    }
})();
