'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:blHeader
 * @description
 * # blHeader
 */
angular.module('bugLab')
  .directive('blHeader', function () {
    return {
      templateUrl: '/views/directives/blHeader.html',
      restrict: 'E'
    };
  });
