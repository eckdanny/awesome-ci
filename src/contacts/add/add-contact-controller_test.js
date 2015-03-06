/* jshint jasmine: true */
/* globals beforeEach, inject */
describe('contacts module', function  () { 'use strict';

  beforeEach(module('app.contacts'));

  describe('AddContactController', function () {

    var ctrl, COOLNESSES, ContactsService, ContactFactory;

    beforeEach(function () {
      ContactsService = {};   // jasmine.createSpyObj('ContactsService', ['add']);
      ContactFactory = {};    // jasmine.createSpyObj('ContactFactory', ['create']);
      COOLNESSES = [ { value : 1, display : 'Cool' } ];
    });

    beforeEach(inject(function ($controller, $rootScope) {
      ctrl = $controller('app.contacts.AddContactController', {
        $scope: $rootScope.$new(),
        ContactsService: ContactsService,
        ContactFactory: ContactFactory,
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

      it('should delegate contact creation to the ContactFactory', function () {

        var mockContactData = {}, mockContact = { a : 'a' };

        ContactFactory.create = angular.noop;
        spyOn(ContactFactory, 'create').and.returnValue(mockContact);

        ContactsService.add = angular.noop;
        spyOn(ContactsService, 'add');

        expect(ContactsService.add).not.toHaveBeenCalled();
        expect(ContactFactory.create).not.toHaveBeenCalled();

        ctrl.add(mockContactData);

        expect(ContactFactory.create).toHaveBeenCalledWith(mockContactData);
        expect(ContactsService.add).toHaveBeenCalledWith(mockContact);
      });
    });

  });

});
