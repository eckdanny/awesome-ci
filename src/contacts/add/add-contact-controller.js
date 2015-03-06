(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('app.contacts')
    .controller('app.contacts.AddContactController', AddContactController);

  function AddContactController (COOLNESSES, ContactFactory, ContactsService) {

    var self = this;

    angular.extend(this, {
      add: add,
      contactData: {},
      coolnesses: COOLNESSES
    });

    function add (contactData) {
      if (ContactsService.add(ContactFactory.create(contactData))) {
        self.contactData = {};
      }
    }
  }

})(window, window.angular, window._);
