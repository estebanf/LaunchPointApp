'use strict';

/**
 * @ngdoc function
 * @name launchPointAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the launchPointAppApp
 */
angular.module('launchPointAppApp')
  .controller('MainCtrl', ['$scope','backend','$uibModal',function ($scope,backend,$uibModal) {
    $scope.load = function(){
      backend.getProcessedCases()
        .then(function(data){
          $scope.data = data;
          console.log($scope.data);
        })
    }
    $scope.caseChanged = function(obj){
      backend.submitCaseChanged(obj)
        .then(function(resp){
          var modalInstance = $uibModal.open({
            animation:true,
            ariaLabelBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalConfirmContent.html',
            controller: 'CaseConfirmModal',
            resolve:{
              data:resp
            }
          });
          modalInstance.result.then(null, function(){
          });
        })
    }
    $scope.load();
  }]);
