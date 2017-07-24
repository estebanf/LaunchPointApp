'use strict';
angular.module('launchPointAppApp')
  .controller('CaseConfirmModal', function ($scope, $uibModalInstance,data) {
    console.log(data);
    var obj = data.Create_CaseResponse;
    if(!data.Create_CaseResponse){
      obj = data.Case_changedResponse;
    }
    $scope.pid = obj["launchpoint:processInstanceId"].$;
    $scope.timestamp = obj["launchpoint:timestamp"].$;
    $scope.dismiss = function(){
      $uibModalInstance.dismiss();
    }
  });
