'use strict';

/**
 * @ngdoc function
 * @name launchPointAppApp.controller:SubrogatemodalCtrl
 * @description
 * # SubrogatemodalCtrl
 * Controller of the launchPointAppApp
 */
angular.module('launchPointAppApp')
  .controller('SubrogatemodalCtrl', function ($scope, backend, $uibModalInstance,active,editing,$q,bsLoadingOverlayService) {
    console.log(active);
    $scope.activeSubrogation = angular.copy(active);

    $scope.editingSubrogation = editing;
    $scope.generateData = function(){
      $scope.activeSubrogation = backend.generateFakeSubrogation();
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
      $scope.activeSubrogation.claims[$scope.activeClaimIndex] = angular.copy($scope.activeClaim);
      $scope.activeClaim = {};
      $scope.editingClaim = false;
    };
    $scope.deleteClaim =function(claim,index){
      backend.deleteSubrogationClaim(claim)
        .then(function(){
          $scope.activeSubrogation.claims.splice(index,1);
        })

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
                var ops = [];
                angular.forEach($scope.activeSubrogation.claims,function(value,key){
                  var deferred = $q.defer();
                  ops.push(deferred.promise);
                  backend.createSubrogationClaim($scope.activeSubrogation.id,value)
                    .then(function(createdClaim){
                      $scope.activeSubrogation.claims[key] = createdClaim;
                      deferred.resolve();
                    });
                });
                $q.all(ops).then(function(){
                  $uibModalInstance.close($scope.activeSubrogation);
                });
              });
          });
      }
      else{
        backend.updateCase($scope.activeSubrogation.case)
          .then(function(){
            backend.updateSubrogation($scope.activeSubrogation)
              .then(function(){
                var ops = [];
                angular.forEach($scope.activeSubrogation.claims, function(value,key){
                  var deferred = $q.defer();
                  ops.push(deferred.promise);
                  if(value.hasOwnProperty('id')){
                    backend.updateSubrogationClaim(value)
                      .then(function(){
                        deferred.resolve();
                      });
                  }
                  else{
                    backend.createSubrogationClaim($scope.activeSubrogation.id,value)
                      .then(function(createdClaim){
                        $scope.activeSubrogation.claims[key] = createdClaim;
                        deferred.resolve();
                      });
                  }
                });
                $q.all(ops).then(function(){
                  $uibModalInstance.close($scope.activeSubrogation);
                });
              });
          });
      }
    };


  });
