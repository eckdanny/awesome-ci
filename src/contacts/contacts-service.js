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

    this.validate();
  }

  /**
   * Validate Contact Object
   * @throws {TypeError} If invalid
   * @return {void}
   */
  Contact.prototype.validate = function () {
    var self = this;
    if (
      _.some(['name', 'coolness'], function (key) {
        return _.isUndefined(self[key]);
      })
    ) {
      throw new TypeError('Invalid Contact');
    }
  };

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
   * @return {Boolean} Add was successful
   */
  ContactsService.prototype.add = function (contactData) {
    return this.contacts.length < this.contacts.push(new Contact(contactData));
  };

})(window, window.angular, window._);
