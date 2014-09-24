'use strict';

angular.module('appvailabilityApp')
  .directive('availabilityToggle', function () {
    return {
    	replace: true,
      templateUrl: 'views/templates/toggle-availability.html',
      restrict: 'A',
      scope: { // public members of isolated directive scope 
        newState: '=', // Two way data-binding for e.g. vars
        stateUpdated: '&' // Functional data-binding e.g. function(){}
      },
      link: function postLink(scope, element) {
        element.attr('data-state', scope.newState);
        scope.toggle = function(){ //Toggle in isolated directive scope
          switch(scope.newState) {
            case 'available':
              scope.newState = 'not-available';
              break;
            case 'not-available':
              scope.newState = 'not-available-am';
              break;
            case 'not-available-am':
              scope.newState = 'not-available-pm';
              break;
            case 'not-available-pm':
              scope.newState = 'available';
              break;
          }
          element.attr('data-state', scope.newState);

          scope.stateUpdated();
        };
      }
    };
  });
