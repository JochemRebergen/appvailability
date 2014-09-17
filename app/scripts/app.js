'use strict';

/**
 * @ngdoc overview
 * @name appvailabilityApp
 * @description
 * # appvailabilityApp
 *
 * Main module of the application.
 */
angular
  .module('appvailabilityApp', [
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
        controller: 'OverviewCtrl',
        controllerAs: 'overviewCtrl'
      })
      .when('/members', {
        templateUrl: 'views/members.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
