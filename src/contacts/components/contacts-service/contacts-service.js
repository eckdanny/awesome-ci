(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('app.contacts')
    .service('ContactsService', ContactsService);

  /**
   * Contacts Service
   * Collection service
   * @constructor
   */
  function ContactsService () {

    if (!(this instanceof ContactsService)) {
      return new ContactsService();
    }

    this.contacts = [];
  }

  /**
   * Adds a new contact to the contacts collection
   * @param {Contact} contact
   * @return {Boolean} Add was successful
   */
  ContactsService.prototype.add = function (contact) {

    var newContact = _.extend(contact, {
      id: _.uniqueId(),
      createTime: (new Date()).toISOString()
    });

    this.contacts.push(newContact);

    return newContact;
  };

})(window, window.angular, window._);
