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
    console.log($uibModal);
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

    $scope.selectSubrogation = function(obj){
      $scope.activeSubrogation = obj;
      $scope.editingSubrogation = true;
    };
    $scope.editActiveClaim = function(claim){
      $scope.activeClaim = claim;
      $scope.editingClaim = true;
    };
    $scope.saveActiveClaim = function(){
    };
    $scope.deleteActiveClaim =function(){

    };
    $scope.addActiveClaim = function(){
      $scope.activeSubrogation.claims.push($scope.activeClaim);
      $scope.activeClaim = {};
    };
    $scope.saveSubrogation = function(){
      if(!$scope.editingSubrogation){
        $scope.activeSubrogation.case.case_type = 'SUBROGATION';
        backend.createCase($scope.activeSubrogation.case)
          .then(function(createdCase){
            $scope.activeSubrogation.case = createdCase;
            backend.createSubrogation($scope.activeSubrogation)
              .then(function(createdSubrogation){
                $scope.activeSubrogation.id = createdSubrogation.id;
                $scope.activeSubrogation.caseId = createdSubrogation.caseId;
                angular.forEach($scope.activeSubrogation.claims,function(value,key){
                  backend.createSubrogationClaim($scope.activeSubrogation.id,value)
                    .then(function(createdClaim){
                      $scope.activeSubrogation.claims[key] = createdClaim;
                    });
                });
              });
          });
      }
    };
  }]);
