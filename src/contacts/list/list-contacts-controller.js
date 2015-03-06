(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('app.contacts')
    .controller('app.contacts.ListContactsController', ListContactsController);

  function ListContactsController (ContactsService) {
    angular.extend(this, {
      contacts: ContactsService.contacts
    });
  }

})(window, window.angular, window._);
