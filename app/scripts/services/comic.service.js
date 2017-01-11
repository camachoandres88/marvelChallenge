(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name marvelChallengeApp.services:ComicService
     * @description
     * # ComicService
     * Service to consume the marvel rest api (Comic endpoints) and manage comics data
     */

    angular
        .module('marvelChallengeApp.services')
        .factory('ComicService', ComicService);

    ComicService.$inject = ['Restangular', 'API_CONSTANTS', 'APP_CONSTANTS', 'store'];

    function ComicService(Restangular, API_CONSTANTS, APP_CONSTANTS, store) {

        var favouriteComics = store.get(APP_CONSTANTS.STORE.FAVOURITE_COMICS) || [],
            service = {
                getSingleEntity: getSingleEntity,
                getImage: getImage,
                getIncredibleImage: getIncredibleImage,
                getEntitiesByCharacter: getEntitiesByCharacter,
                addFavouriteComic: addFavouriteComic,
                getFavouriteComics: getFavouriteComics,
                isComicAddedInStore: isComicAddedInStore,
                deleteFromFavouriteComics: deleteFromFavouriteComics,
                enableRandomFunctionality: enableRandomFunctionality,
                getRandomComics: getRandomComics
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

            if (!favouriteComics) {
                favouriteComics = [lightComicObject];
            } else {
                if (!isComicAddedInStore(lightComicObject.id)) {
                    favouriteComics.unshift(lightComicObject);
                }
            }
            store.set(APP_CONSTANTS.STORE.FAVOURITE_COMICS, favouriteComics);
        }

        function isComicAddedInStore(comicId) {
            if (favouriteComics) {
                for (var i = 0; i < favouriteComics.length; i++) {
                    if (favouriteComics[i].id === comicId) {
                        return true;
                    }
                }
            }
            return false;
        }

        function getFavouriteComics() {
            return favouriteComics;
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

            for (var i = 0; i < favouriteComics.length; i++) {
                if (favouriteComics[i].id === comicId) {
                    objectToDelete = favouriteComics[i];
                }
            }

            if (objectToDelete) {
                index = favouriteComics.indexOf(objectToDelete);
                favouriteComics.splice(index, 1);
            }
            store.set(APP_CONSTANTS.STORE.FAVOURITE_COMICS, favouriteComics);
        }

        function enableRandomFunctionality(comicList) {
            var comicsIntersection = [];

            if (favouriteComics) {
                for (var i = 0; i < favouriteComics.length; i++) {
                    for (var j = 0; j < comicList.length; j++) {
                        if (favouriteComics[i].id === comicList[j].id) {
                            comicsIntersection.push(comicList[j]);
                        }
                    }
                }
                return (comicList.length - comicsIntersection.length) >= 3;
            } else {
                return false;
            }
        }

        function getRandomComics(comicList) {
            var randomComics = [],
                item;

            while (randomComics.length < 3) {
                item = comicList[Math.floor(Math.random() * comicList.length)];
                if (!isContainedInComicsList(randomComics, item.id) && !isComicAddedInStore(item.id)) {
                    randomComics.push(item);
                }
            }
            return randomComics;
        }

        function isContainedInComicsList(comicList, comicId) {
            if (comicList) {
                for (var i = 0; i < comicList.length; i++) {
                    if (comicList[i].id === comicId) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
})();
