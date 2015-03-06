/* jshint jasmine: true */
/* globals beforeEach, inject */
describe('contacts module', function  () { 'use strict';

  beforeEach(module('app.contacts'));

  describe('ContactsService', function () {

    var ContactsService;

    beforeEach(inject(function (_ContactsService_) {
      ContactsService = _ContactsService_;
    }));

    it('should exist', function () {
      expect(ContactsService).toBeDefined();
    });

    describe('contacts property', function () {
      it('should initialize as empty array', function () {
        expect(ContactsService.contacts).toEqual(jasmine.any(Array));
        expect(ContactsService.contacts.length).toBe(0);
      });
    });

    describe('add()', function () {

      it('should be a public method', function () {
        expect(ContactsService.add).toEqual(jasmine.any(Function));
      });

      it('should add new contacts', function () {
        expect(ContactsService.contacts.length).toBe(0);
        ContactsService.add({
          name: 'Alice',
          coolness: 4
        });
        expect(ContactsService.contacts.length).toBe(1);
      });
    });

  });

});
