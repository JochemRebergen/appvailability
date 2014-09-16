'use strict';

describe('Directive: availabilityToggle', function () {

  // load the directive's module
  beforeEach(module('appvailabilityApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<availability-toggle></availability-toggle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the availabilityToggle directive');
  }));
});
