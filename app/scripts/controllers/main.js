'use strict';

/**
 * @ngdoc function
 * @name expawesomeCiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expawesomeCiApp
 */
angular.module('expawesomeCiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
