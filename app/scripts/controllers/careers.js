'use strict';

/**
 * @ngdoc function
 * @name goalsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the goalsApp
 */
angular.module('goalsApp')
  .controller('CareersCtrl', function ($scope) {
    $scope.interviewSites = [
      'http://www.geeksforgeeks.org/',
      'careercup'
    ];
  });
