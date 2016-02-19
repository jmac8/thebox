angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {  
	$scope.onSlideMove = function(data){
		console.log("You have selected " + data.index + " tab");
	};
});