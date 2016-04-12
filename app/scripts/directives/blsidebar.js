'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:blSidebar
 * @description
 * # blSidebar
 */
angular.module('bugLab')
  .directive('blSidebar', function () {
    return {
      templateUrl: '/views/directives/blSidebar.html',
      restrict: 'E'
    };
  });
