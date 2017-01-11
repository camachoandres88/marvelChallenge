'use strict';

var moduleName = 'marvelChallengeApp',
    controllerName = 'CharacterDetailController';

describe('modules.characters.characterDetail.controller', function() {

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

    it('Should have a activate function', function() {
        expect(controller.activate).toBeDefined();
    });

    it('Should have call a activate function', function() {
        spyOn(controller, 'activate').and.callThrough();
        expect(controller.activate).toHaveBeenCalled();
    });


});
