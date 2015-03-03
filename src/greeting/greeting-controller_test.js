/* jshint jasmine: true */
/* globals beforeEach, inject */
describe('greeting module', function  () { 'use strict';

  beforeEach(module('app.greeting'));

  describe('GreetingController', function () {

    var ctrl;

    beforeEach(inject(function ($controller, $rootScope) {
      ctrl = $controller('app.greeting.GreetingController', {
        $scope: $rootScope.$new()
      });
    }));

    it('should exist', function () {
      expect(!!ctrl).toBe(true);
    });

    describe('greetings', function () {
      it('should be an array on the controller', function () {
        expect(ctrl.greetings).toEqual(jasmine.any(Array));
      });
      it('should be empty', function () {
        expect(ctrl.greetings.length).toEqual(0);
      });
    });

    describe('greet()', function () {
      it('should be a public method', function () {
        expect(ctrl.greet).toEqual(jasmine.any(Function));
      });
    });
  });

});
