'use strict';

var moduleName = 'marvelChallengeApp',
    controllerName = 'CharactersController';

describe('modules.characters.characters.controller', function() {

    var scope, $controller, characterController, CharacterService;

    beforeEach(angular.mock.module(moduleName));

    beforeEach(angular.mock.inject(function($rootScope, _$controller_, _CharacterService_) {
        scope = $rootScope.$new();
        $controller = _$controller_;
        CharacterService = _CharacterService_;
        spyOn(CharacterService, 'getEntityByNameAndOffset').and.callThrough();

        characterController = $controller(controllerName);
    }));

    it('should be able to instantiate the controller ' + controllerName, function() {
        expect(characterController).toBeDefined();
    });

    it('Should have a activate function', function() {
        expect(characterController.activate).toBeDefined();
    });

    it('Should have call a activate function', function() {
        spyOn(characterController, 'activate').and.callThrough();
        expect(characterController.activate).toHaveBeenCalled();
    });

    it('Should call CharacterService.getEntityByNameAndOffset on activate', function() {
        expect(CharacterService.getEntityByNameAndOffset).toHaveBeenCalled();
    });
});
