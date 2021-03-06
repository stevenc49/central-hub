'use strict';

/**
 * @ngdoc overview
 * @name goalsApp
 * @description
 * # goalsApp
 *
 * Main module of the application.
 */
angular
  .module('goalsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/careers', {
        templateUrl: 'views/careers.html',
        controller: 'CareersCtrl'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
