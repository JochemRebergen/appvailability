'use strict';

describe('Directive: availabilityToggle', function () {

  // load the directive's module
  beforeEach(module('appvailabilityApp'));

  var element,
      elementScope,
      scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<span data-state="" class="btn-availability" ng-click="toggle()"></span>');
    element = $compile(element)(scope);
    scope.$digest();
    elementScope = element.isolateScope();
  }));

  it('should toggle state', function() {
    element.attr('data-state', 'available');
    elementScope.toggle();

    expect(elementScope.newState).toBe('not-available');
  });

});
