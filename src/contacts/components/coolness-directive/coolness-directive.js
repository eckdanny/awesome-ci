(function (window, angular, undefined) { 'use strict';

  angular
    .module('app.contacts')
    .directive('coolness', coolnessDirective);

  function coolnessDirective () {
    return {
      restrict: 'A',
      scope: {
        coolness: '='
      },
      link: function (scope, iElem) {
        iElem.empty().append(strRepeat('&diams;', scope.coolness));
      }
    };

    function strRepeat (string, N) {
      var str = '';
      for (var i = N; i > 0; i--) {
        str += string;
      }
      return str;
    }
  }

})(window, window.angular);
