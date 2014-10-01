'use strict';

/**
 * @ngdoc function
 * @name goalsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the goalsApp
 */
angular.module('goalsApp')
  .controller('ResumeCtrl', function ($scope) {
    
  	$scope.init = function() {
  		console.log('ResumeCtrl initiated');
  	};

    $scope.technicalKnowledge = [
      'angular'
    ];

    $scope.init();
  });
