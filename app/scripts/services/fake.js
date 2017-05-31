'use strict';

/**
 * @ngdoc service
 * @name launchPointAppApp.fake
 * @description
 * # fake
 * Factory in the launchPointAppApp.
 */
angular.module('launchPointAppApp')
  .factory('fake', function ($window) {
    return $window.faker;
  });
