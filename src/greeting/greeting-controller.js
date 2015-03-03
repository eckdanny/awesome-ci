(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('app.greeting')
    .controller('app.greeting.GreetingController', GreetingController);

  /**
   * [Greeting description]
   * @param {[type]} recipient [description]
   */
  function Greeting (recipient) {

    if (!(this instanceof Greeting)) {
      return new Greeting(recipient);
    }

    angular.extend(this, {
      recipient: recipient,
      UUID: _.uniqueId(),
      timestamp: (new Date()).toISOString()
    });
  }

  /**
   * Make greeting message
   * @return {String}
   */
  Greeting.prototype.message = function () {
    return 'Hello ' + this.recipient + '!';
  };


  function GreetingController () {

    angular.extend(this, {
      greetings: []
    });

    /**
     * Add Greeting
     * @param  {String} recipient
     * @return {void}
     */
    this.greet = function greet (recipient) {
      this.greetings.push(new Greeting(recipient));
    };
  }

})(window, window.angular, window._);
