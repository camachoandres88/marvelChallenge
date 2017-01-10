(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.services')
        .factory('ComicService', ComicService);

    ComicService.$inject = ['Restangular', 'API_CONSTANTS', 'APP_CONSTANTS', 'store'];

    function ComicService(Restangular, API_CONSTANTS, APP_CONSTANTS, store) {

        var comics = store.get(APP_CONSTANTS.STORE.FAVOURITE_COMICS) || [],
            service = {
                getSingleEntity: getSingleEntity,
                getImage: getImage,
                getIncredibleImage: getIncredibleImage,
                getEntitiesByCharacter: getEntitiesByCharacter,
                addFavouriteComic: addFavouriteComic,
                getFavouriteComics: getFavouriteComics,
                isComicAddedInStore: isComicAddedInStore,
                deleteFromFavouriteComics: deleteFromFavouriteComics
            };

        return service;

        function getBase() {
            return Restangular.all(API_CONSTANTS.COMICS.BASE);
        }

        function getSingleEntity(id) {
            var params = {
                apikey: APP_CONSTANTS.MARVEL_API_KEY
            };
            return getBase().one('', id).customGET('', params);
        }

        function getEntitiesByCharacter(characterId) {
            var params = {
                characters: characterId,
                apikey: APP_CONSTANTS.MARVEL_API_KEY
            };
            return getBase().customGET('', params);
        }

        function addFavouriteComic(comic) {
            var lightComicObject = { id: comic.id, title: comic.title, image: comic.thumbnail.path + '/' + APP_CONSTANTS.IMAGE.SIZES.COMIC_INCREDIBLE + '.' + comic.thumbnail.extension };

            if (!comics) {
                comics = [lightComicObject];
            } else {
                if (!isComicAddedInStore(lightComicObject.id)) {
                    comics.unshift(lightComicObject);
                }
            }
            store.set(APP_CONSTANTS.STORE.FAVOURITE_COMICS, comics);
        }

        function isComicAddedInStore(comicId) {
            if (comics) {
                for (var i = 0; i < comics.length; i++) {
                    if (comics[i].id === comicId) {
                        return true;
                    }
                }
            }
            return false;
        }

        function getFavouriteComics() {
            return comics;
        }

        function getImage(comic) {
            if (comic) {
                return comic.thumbnail.path + '/' + APP_CONSTANTS.IMAGE.SIZES.COMIC + '.' + comic.thumbnail.extension;
            } else {
                return '';
            }
        }

        function getIncredibleImage(comic) {
            if (comic) {
                return comic.thumbnail.path + '/' + APP_CONSTANTS.IMAGE.SIZES.COMIC + '.' + comic.thumbnail.extension;
            } else {
                return '';
            }
        }

        function deleteFromFavouriteComics(comicId) {
            var objectToDelete = null,
                index = null;

            for (var i = 0; i < comics.length; i++) {
                if (comics[i].id === comicId) {
                    objectToDelete = comics[i];
                }
            }

            if (objectToDelete) {
                index = comics.indexOf(objectToDelete);
                comics.splice(index, 1);
            }
            store.set(APP_CONSTANTS.STORE.FAVOURITE_COMICS, comics);
        }
    }
})();
