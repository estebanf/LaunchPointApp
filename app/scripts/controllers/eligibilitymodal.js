'use strict';

/**
 * @ngdoc function
 * @name launchPointAppApp.controller:EligibilitymodalCtrl
 * @description
 * # SubrogatemodalCtrl
 * Controller of the launchPointAppApp
 */
angular.module('launchPointAppApp')
  .controller('EligibilitymodalCtrl', function ($scope, backend, $uibModalInstance,active,editing,$q,bsLoadingOverlayService) {
    console.log(active);
    $scope.activeEligibility = angular.copy(active);

    $scope.editingEligibility = editing;
    $scope.generateData = function(){
      $scope.activeEligibility = backend.generateFakeEligibility();
    }
    $scope.dismiss = function(){
      $uibModalInstance.dismiss('cancel');
    };
    $scope.editActiveClaim = function(claim,index){
      $scope.activeClaim = angular.copy(claim);
      $scope.activeClaimIndex = index;
      $scope.editingClaim = true;
    };
    $scope.saveActiveClaim = function(){
      $scope.activeEligibility.eligibilityClaims[$scope.activeClaimIndex] = angular.copy($scope.activeClaim);
      $scope.activeClaim = {};
      $scope.editingClaim = false;
    };
    $scope.deleteClaim =function(claim,index){
      backend.deleteEligibilityClaim(claim)
        .then(function(){
          $scope.activeEligibility.eligibilityClaims.splice(index,1);
        })
    };
    $scope.addActiveClaim = function(){
      $scope.activeEligibility.eligibilityClaims.push($scope.activeClaim);
      $scope.activeClaim = {};
    };
    $scope.saveEligibility = function(){
      if(!$scope.editingEligibility){
        $scope.activeEligibility.case.case_type = 'Eligibility';
        backend.createCase($scope.activeEligibility.case)
          .then(function(createdCase){
            $scope.activeEligibility.case = createdCase;
            backend.createEligibility($scope.activeEligibility)
              .then(function(createdEligibility){
                $scope.activeEligibility.id = createdEligibility.id;
                $scope.activeEligibility.caseId = createdEligibility.caseId;
                var ops = [];
                angular.forEach($scope.activeEligibility.eligibilityClaims,function(value,key){
                  var deferred = $q.defer();
                  ops.push(deferred.promise);
                  backend.createEligibilityClaim($scope.activeEligibility.id,value)
                    .then(function(createdClaim){
                      $scope.activeEligibility.eligibilityClaims[key] = createdClaim;
                      deferred.resolve();
                    });
                });
                $q.all(ops).then(function(){
                  $uibModalInstance.close($scope.activeEligibility);
                });
              });
          });
      }
      else{
        backend.updateCase($scope.activeEligibility.case)
          .then(function(){
            backend.updateEligibility($scope.activeEligibility)
              .then(function(){
                var ops = [];
                angular.forEach($scope.activeEligibility.eligibilityClaims, function(value,key){
                  var deferred = $q.defer();
                  ops.push(deferred.promise);
                  if(value.hasOwnProperty('id')){
                    backend.updateEligibilityClaim(value)
                      .then(function(){
                        deferred.resolve();
                      });
                  }
                  else{
                    backend.createEligibilityClaim($scope.activeEligibility.id,value)
                      .then(function(createdClaim){
                        $scope.activeEligibility.eligibilityClaims[key] = createdClaim;
                        deferred.resolve();
                      });
                  }
                });
                $q.all(ops).then(function(){
                  $uibModalInstance.close($scope.activeEligibility);
                });
              });
          });
      }
    };


  });
