(function (window, angular, undefined) { 'use strict';

  angular
    .module(
      'app.contacts',
      [],
      angular.noop
    )
    .constant(
      'COOLNESSES',
      [
        {
          value: 0,
          display: 'Not at all'
        },
        {
          value: 1,
          display: 'Not Very'
        },
        {
          value: 2,
          display: 'Kinda Cool'
        },
        {
          value: 3,
          display: 'Super Cool'
        }
      ]
    );

})(window, window.angular);
