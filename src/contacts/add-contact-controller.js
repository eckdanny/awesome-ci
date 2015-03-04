(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('app.contacts')
    .controller('app.contacts.AddContactController', AddContactController);

  function AddContactController (COOLNESSES, ContactsService) {

    var self = this;

    angular.extend(this, {
      add: add,
      contactData: {},
      coolnesses: COOLNESSES
    });

    function add (contactData) {
      if (ContactsService.add(contactData)) {
        self.contactData = {};
      }
    }
  }

})(window, window.angular, window._);
