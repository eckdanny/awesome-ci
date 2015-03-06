/* jshint jasmine: true */
/* globals beforeEach, inject */
describe('contacts module', function  () { 'use strict';

  beforeEach(module('app.contacts'));

  describe('ContactFactory', function () {

    var ContactFactory;

    beforeEach(inject(function (_ContactFactory_) {
      ContactFactory = _ContactFactory_;
    }));

    it('should do something', function () {
      expect(!!ContactFactory).toBe(true);
    });

    describe('create()', function () {
      it('should be a public method', function () {
        expect(ContactFactory.create).toBeDefined();
        expect(ContactFactory.create).toEqual(jasmine.any(Function));
      });

      it('should return a contact object for valid input specs', function () {
        var myContact;
        expect(function () {
          myContact = ContactFactory.create({
            name: 'Alice',
            coolness: 3
          });
        }).not.toThrow();
        expect(myContact.name).toBeDefined();
        expect(myContact.coolness).toBeDefined();
      });
    });

  });

});
