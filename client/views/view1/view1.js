'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope, $http) {
	var vm = this;
	// console.log("test");
	// console.log($http);
	$scope.nth = "theres nth";
	/*$http({
		method: 'GET',
		url: 'http://localhost:8083/api/smth'
	}).then(function successCallback(response) {
		$scope.smth = JSON.parse(response.data);
		// console.log(vm.smth);
	}, function errorCallback(response) {
		console.log(response);
	});*/
}]);