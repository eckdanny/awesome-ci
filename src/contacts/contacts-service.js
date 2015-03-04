(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('app.contacts')
    .service('ContactsService', ContactsService);

  /**
   * Creates a Contact
   * @constructor
   * @param {Object} contactData
   * @example
   * new Contact({
   *   name: 'Alice',
   *   coolness: 3
   * });
   */
  function Contact (contactData) {

    if (!(this instanceof Contact)) {
      return new Contact(contactData);
    }

    _.assign(this, {
      name:       contactData.name,
      coolness:   contactData.coolness,
      id:         _.uniqueId(),
      createTime: (new Date()).toISOString()
    });
  }

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
   * @param {Object} contactData POJO
   */
  ContactsService.prototype.add = function (contactData) {
    this.contacts.push(new Contact(contactData));
  };

})(window, window.angular, window._);
