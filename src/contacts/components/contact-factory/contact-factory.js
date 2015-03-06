(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('app.contacts')
    .service('ContactFactory', ContactFactory);

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
  function Contact (spec) {

    if (!(this instanceof Contact)) {
      return new Contact(spec);
    }

    _.assign(this, {
      name:       spec.name,
      coolness:   spec.coolness
      // id:         _.uniqueId(),
      // createTime: (new Date()).toISOString()
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

  function ContactFactory () {

    return {
      create: create
    };

    function create (spec) {
      return new Contact(spec);
    }
  }

})(window, window.angular, window._);
