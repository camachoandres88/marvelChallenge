'use strict';

var moduleName = 'marvelChallengeApp',
    controllerName = 'ComicDetailController';

describe('modules.comics.comicDetail.controller', function() {

    var scope, $controller, controller;

    beforeEach(angular.mock.module(moduleName));

    beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
        scope = $rootScope.$new();
        $controller = _$controller_;

        controller = $controller(controllerName, {
            '$scope': scope
        });
    }));

    it('should be able to instantiate the controller ' + controllerName, function() {
        expect(controller).toBeDefined();
    });


});
