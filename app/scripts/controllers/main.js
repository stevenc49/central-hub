'use strict';

/**
 * @ngdoc function
 * @name goalsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goalsApp
 */
angular.module('goalsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
