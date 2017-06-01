'use strict';

/**
 * @ngdoc function
 * @name launchPointAppApp.controller:EligibilityCtrl
 * @description
 * # EligibilityCtrl
 * Controller of the launchPointAppApp
 */
angular.module('launchPointAppApp')
  .controller('EligibilityCtrl', ['$scope','backend','$uibModal','bsLoadingOverlayService',function ($scope,backend,$uibModal,bsLoadingOverlayService) {
    $scope.eligibilities = [];
    $scope.openModal = function(){
      var modalInstance = $uibModal.open({
        animation:true,
        ariaLabelBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'EligibilitymodalCtrl',
        controllerAs: '$ctrl',
        size:'lg',
        resolve:{
          active: function(){
            return $scope.activeEligibility;
          },
          editing: function(){
            return $scope.editingEligibility;
          }
        }
      });
      modalInstance.result.then(function(record){
        if(!$scope.editingEligibility){
            $scope.eligibilities.push(record);
        }
        else{
          $scope.eligibilities[$scope.editingEligibilityIndex] = record;
        }
        $scope.resetActive();
      }, function(){
        $scope.resetActive();
      });
    };
    $scope.resetActive = function(){
      $scope.activeEligibilty={
        case:{
          case_type:'ELIGIBILITY'
        },
        eligibilityClaims:[]
      };
    };
    $scope.selectEligibility = function(obj,index){
      $scope.activeEligibility = obj;
      $scope.editingEligibility = true;
      $scope.editingEligibilityIndex = index;
      $scope.openModal();
    };
    $scope.submit = function(eligibility){
      bsLoadingOverlayService.start({
        referenceId:eligibility.id
      })
      backend.submitCase(eligibility).then(function(data){
        bsLoadingOverlayService.stop({
          referenceId:eligibility.id
        })
        var modalInstance = $uibModal.open({
          animation:true,
          ariaLabelBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'myModalConfirmContent.html',
          controller: 'CaseConfirmModal',
          resolve:{
            data:data
          }
        });
        modalInstance.result.then(null, function(){
        });
      })
    }

    backend.getEligibilities()
      .then(function(data){
        if(data){
          $scope.eligibilities = data;
        }
        $scope.resetActive();
        $scope.editingClaim = false;
        $scope.editingEligibilty = false;
      });
  }]);
