'use strict';
angular.module('launchPointAppApp')
  .controller('CaseConfirmModal', function ($scope, $uibModalInstance,data) {
    console.log(data);
    $scope.pid = data.Create_CaseResponse["launchpoint:processInstanceId"].$;
    $scope.timestamp = data.Create_CaseResponse["launchpoint:timestamp"].$;
    $scope.dismiss = function(){
      $uibModalInstance.dismiss();
    }
  });
