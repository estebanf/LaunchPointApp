'use strict';

/**
 * @ngdoc function
 * @name launchPointAppApp.controller:SubrogationCtrl
 * @description
 * # SubrogationCtrl
 * Controller of the launchPointAppApp
 */
angular.module('launchPointAppApp')
  .controller('SubrogationCtrl', ['$scope','backend','$uibModal',function ($scope,backend,$uibModal) {
    $scope.openModal = function(){
      var modalInstance = $uibModal.open({
        animation:true,
        ariaLabelBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'SubrogatemodalCtrl',
        controllerAs: '$ctrl',
        resolve:{
          active: function(){
            return $scope.activeSubrogation;
          },
          editing: function(){
            return $scope.editingSubrogation;
          }
        }
      });
      modalInstance.result.then(function(record){
        if(!$scope.editingSubrogation){
            $scope.subrogations.push(record);
        }
        else{
          $scope.subrogations[$scope.editingSubrogationIndex] = record;
        }
        $scope.resetActive();
      }, function(){
        $scope.resetActive();
      });
    };
    $scope.resetActive = function(){
      $scope.activeSubrogation={
        case:{},
        claims:[]
      };
    };
    backend.getSubrogations()
      .then(function(data){
        $scope.subrogations = data;
        $scope.resetActive();
        $scope.editingClaim = false;
        $scope.editingSubrogation = false;
      });

    $scope.selectSubrogation = function(obj,index){
      $scope.activeSubrogation = obj;
      $scope.editingSubrogation = true;
      $scope.editingSubrogationIndex = index;
      $scope.openModal();
    };
    $scope.submit = function(subrogation){
      backend.submitCase(subrogation).then(function(data){
        console.log(data);
      })
    }
  }]);
