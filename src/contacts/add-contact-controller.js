(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('app.contacts')
    .controller('app.contacts.AddContactController', AddContactController);

  function AddContactController (COOLNESSES, ContactsService) {
    angular.extend(this, {
      add: _.bind(ContactsService.add, ContactsService),
      contactData: {},
      coolnesses: COOLNESSES
    });
  }

})(window, window.angular, window._);
