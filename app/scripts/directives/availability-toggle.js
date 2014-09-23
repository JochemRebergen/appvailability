'use strict';

angular.module('appvailabilityApp')
  .directive('availabilityToggle', function () {
    return {
    	replace: true,
      templateUrl: 'views/templates/toggle-availability.html',
      restrict: 'A',
      scope: {
        newState: '='
      },
      link: function postLink(scope, element) {
        element.attr('data-state', scope.newState);
        scope.toggle = function(){
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
        };
      }
    };
  });
