'use strict';

/**
 * @ngdoc overview
 * @name iVidexApp
 * @description
 * # iVidexApp
 *
 * Main module of the application.
 */
angular
  .module('iVidexApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
	  'ui.bootstrap',
	  'ui.bootstrap.popover',
	  'ui.bootstrap.typeahead',
	  'ui.bootstrap.dropdown',
	  'ui.bootstrap.modal'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/patient', {
        templateUrl: 'views/patient.html',
        controller: 'PatientCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
