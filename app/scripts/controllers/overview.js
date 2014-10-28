'use strict';

angular.module('appvailabilityApp')
  .controller('OverviewCtrl', function (dataService) {
    var self = this;

    self.users = [{
      name: 'John Doe',
      availability: [{
        state: 'not-available'
      },
      {
        state: 'not-available-am' 
      }]
    },
    {
      name: 'Jane Smith',
      availability: [{
        state: 'available'
      },
      {
        state: 'not-available' 
      }]
    }];

    self.saveState = function() {
      dataService.setData(self.users);
    };
  });
