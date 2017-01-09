(function() {
    'use strict';

    angular
        .module('marvelChallengeApp')
        .constant('APP_CONSTANTS', {
            API_URL: 'https://gateway.marvel.com:443',
            MARVEL_API_KEY: '010d48bc826621bc851993925f9d6877',
            PAGINATOR: {
                STEPS: 6,
                RECORDS_LIMIT: 10
            },
            IMAGE: {
                SIZES: {
                    CHARACTER: 'standard_xlarge',
                    COMIC: 'portrait_xlarge',
                    COMIC_INCREDIBLE: 'portrait_incredible'
                }
            },
            STORE: {
                FAVOURITE_COMICS: 'store_favourite_comics'
            }

        });
})();
