'use strict';

angular.module('appvailabilityApp')
  .controller('MembersCtrl', function (dataService, $filter) {
    var self = this;

    self.init = function() {
      self.users = dataService.getData();
    };

    self.addUser = function() {
      // add empty user object
      var user = {};

      // fill new name node with username from view
      user.name = self.newUser;
      user.availability = [];

      for( var i=0; i<5; i++) {
        user.availability.push({ state: 'available' });        
      }

      // push new
      
      self.users.push(user);

      // ordering by filter
      var orderBy = $filter('orderBy');
      self.users = orderBy(self.users, 'name');

      // save
      dataService.setData(self.users);
    };

    self.deleteUser = function (user) {
      // delete specific user
      self.users.splice(self.users.indexOf(user), 1);
      
      //save
      dataService.setData(self.users);
    };


  });

