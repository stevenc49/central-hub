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

  		var myFirebaseRef = new Firebase('https://resplendent-inferno-1477.firebaseio.com/');

		myFirebaseRef.child('myKey').on('value', function(snapshot) {
		  console.log(snapshot.val());  // Alerts "San Francisco"
		});

  	};

    $scope.technicalKnowledge = [
      'angular'
    ];

    $scope.init();
  });
