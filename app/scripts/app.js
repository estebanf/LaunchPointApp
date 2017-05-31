'use strict';

/**
 * @ngdoc overview
 * @name launchPointAppApp
 * @description
 * # launchPointAppApp
 *
 * Main module of the application.
 */
angular
  .module('launchPointAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/subrogation', {
        templateUrl: 'views/subrogation.html',
        controller: 'SubrogationCtrl',
        controllerAs: 'subrogation'
      })
      .when('/eligibility', {
        templateUrl: 'views/eligibility.html',
        controller: 'EligibilityCtrl',
        controllerAs: 'eligibility'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
