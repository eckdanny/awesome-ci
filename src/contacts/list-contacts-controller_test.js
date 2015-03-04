/* jshint jasmine: true */
/* globals beforeEach, inject */
describe('contacts module', function  () { 'use strict';

  beforeEach(module('app.contacts'));

  describe('ListContactsController', function () {

    var ctrl, ContactsService;

    beforeEach(module(function ($provide) {
      ContactsService = {
        contacts: [1,2,3]
      };
      $provide.value('ContactsService', ContactsService);
    }));

    beforeEach(inject(function ($controller, $rootScope) {
      ctrl = $controller('app.contacts.ListContactsController', {
        $scope: $rootScope.$new(),
        ContactsService: ContactsService
      });
    }));

    it('should do something', function () {
      expect(!!ctrl).toBe(true);
    });

    it('should attach ContactsService.contacts to the view model', function () {
      expect(ctrl.contacts).toBeDefined();
      expect(ctrl.contacts).toEqual(ContactsService.contacts);
    });

  });

});
