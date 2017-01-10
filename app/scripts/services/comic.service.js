(function() {
    'use strict';

    angular
        .module('marvelChallengeApp.services')
        .factory('ComicService', ComicService);

    ComicService.$inject = ['Restangular', 'API_CONSTANTS', 'APP_CONSTANTS', 'store'];

    function ComicService(Restangular, API_CONSTANTS, APP_CONSTANTS, store) {

        let favouriteComics = store.get(APP_CONSTANTS.STORE.FAVOURITE_COMICS) || [],
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
            let params = {
                apikey: APP_CONSTANTS.MARVEL_API_KEY
            };
            return getBase().one('', id).customGET('', params);
        }

        function getEntitiesByCharacter(characterId) {
            let params = {
                characters: characterId,
                apikey: APP_CONSTANTS.MARVEL_API_KEY
            };
            return getBase().customGET('', params);
        }

        function addFavouriteComic(comic) {
            let lightComicObject = { id: comic.id, title: comic.title, image: comic.thumbnail.path + '/' + APP_CONSTANTS.IMAGE.SIZES.COMIC_INCREDIBLE + '.' + comic.thumbnail.extension };

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
                for (let i = 0; i < favouriteComics.length; i++) {
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
            let objectToDelete = null,
                index = null;

            for (let i = 0; i < favouriteComics.length; i++) {
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
            let comicsIntersection = [];

            if (favouriteComics) {
                for (let i = 0; i < favouriteComics.length; i++) {
                    for (let j = 0; j < comicList.length; j++) {
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
            let randomComics = [],
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
                for (let i = 0; i < comicList.length; i++) {
                    if (comicList[i].id === comicId) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
})();
