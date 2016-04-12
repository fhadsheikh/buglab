'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('bugLab')
  .controller('MainCtrl', function () {
    this.todos = [
      'HTML5 Boilerplate',
      'AngularJS'
    ];
  });
