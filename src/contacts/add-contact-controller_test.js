/* jshint jasmine: true */
/* globals beforeEach, inject */
describe('contacts module', function  () { 'use strict';

  beforeEach(module('app.contacts'));

  describe('AddContactController', function () {

    var ctrl, COOLNESSES, ContactsService;

    beforeEach(function () {
      ContactsService = jasmine.createSpyObj('ContactsService', ['add']);
      COOLNESSES = [ { value : 1, display : 'Cool' } ];
    });

    beforeEach(inject(function ($controller, $rootScope) {
      ctrl = $controller('app.contacts.AddContactController', {
        $scope: $rootScope.$new(),
        ContactsService: ContactsService,
        COOLNESSES: COOLNESSES
      });
    }));

    it('should do something', function () {
      expect(!!ctrl).toBe(true);
    });

    describe('contactData prop', function () {
      it('should be attached to viewModel', function () {
        expect(ctrl.contactData).toBeDefined();
      });
      it('should be initialized to an empty object', function () {
        expect(ctrl.contactData).toEqual({});
      });
    });

    describe('coolnesses prop', function () {
      it('should be attached to viewModel', function () {
        expect(ctrl.coolnesses).toEqual(COOLNESSES);
      });
    });

    describe('add()', function () {
      it('should be a viewModel method', function () {
        expect(ctrl.add).toEqual(jasmine.any(Function));
      });
      it('should passthru to ContactsService.add()', function () {
        expect(ContactsService.add === ctrl.add);
        expect(ContactsService.add).not.toHaveBeenCalled();
        ctrl.add(123);
        expect(ContactsService.add).toHaveBeenCalledWith(123);
      });
    });

  });

});
