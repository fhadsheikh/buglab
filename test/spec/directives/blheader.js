'use strict';

describe('Directive: blHeader', function () {

  // load the directive's module
  beforeEach(module('mytodoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bl-header></bl-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the blHeader directive');
  }));
});
