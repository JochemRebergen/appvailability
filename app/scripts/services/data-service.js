'use strict';

angular.module('appvailabilityApp')
  .service('dataService', function dataService(localStorageService) {

    this.setData = function(data) {
      return localStorageService.set('appvailability-data', data);
    };

    this.getData = function() {
      var data = localStorageService.get('appvailability-data');
      return angular.isObject(data) ? data : [];
    };
  });
