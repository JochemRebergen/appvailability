'use strict';

angular.module('appvailabilityApp')
  .directive('availabilityToggle', function () {
    return {
    	replace: true,
      template: '<span data-state=""></span>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
     	//    element.on('click', function() {
			// 			element.setAttribute('data-state', 'na');
     	//    });
      
      }
    };
  });
