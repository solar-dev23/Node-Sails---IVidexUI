'use strict';

/**
 * @ngdoc function
 * @name iVidexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iVidexApp
 */
angular.module('iVidexApp')
  .controller('MainCtrl', function (API,$location,$rootScope,$scope) {
	  $rootScope.Users=$scope.Users;
	  $scope.selected = [];
	  $scope.getPatient=function(userObj){
		  var id=userObj['id'];
		  $rootScope.currentPatient=userObj
		  API.getPatient(id).then(function(res){
			  
			  $rootScope.currentPatient.prescriptions=res.data;
			  $location.url('patient/'+id);
		  }, function(reason){console.log(reason)});
		  
	  }
$scope.formatLabel = function(model) {
    for (var i=0; i< $scope.Users.length; i++) {
      if (model === $scope.Users[i].email) {
        return $scope.Users[i].firstName + " "+$scope.Users[i].lastName ;
      }
    }
  }
  });
