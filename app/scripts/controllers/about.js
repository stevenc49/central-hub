'use strict';

/**
 * @ngdoc function
 * @name goalsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the goalsApp
 */
angular.module('goalsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
