'use strict';

/**
 * @ngdoc service
 * @name launchPointAppApp.backend
 * @description
 * # backend
 * Service in the launchPointAppApp.
 */
angular.module('launchPointAppApp')
  .factory('backend', ['$http','$q',function ($http,$q) {

    var invokeApi = function(httpCall,url,data,config){
      var deferred = $q.defer();
      httpCall(url,data,config)
        .then(function(response){
          deferred.resolve(response.data);
        },function(response){
          deferred.reject(response);
        });
      return deferred.promise;
    };

    return {
      getSubrogations: function(){
        return invokeApi($http.get,'/api/Subrogations?filter[include]=claims&filter[include]=case');
      },
      createCase: function(data){
        return invokeApi($http.post,'/api/Cases',data);
      },
      createSubrogation: function(subrogation){
        return invokeApi($http.post,'/api/Cases/' + subrogation.case.id + '/subrogations',subrogation);
      },
      createSubrogationClaim:function(subrogationId,claim){
        return invokeApi($http.post,'/api/Subrogations/' + subrogationId + '/claims',claim);
      },
      updateCase: function(data){
        return invokeApi($http.put,'/api/Cases/' + data.id,data);
      },
      updateSubrogation: function(subrogation){
        return invokeApi($http.put,'/api/Subrogations/' + subrogation.id, subrogation);
      },
      updateSubrogationClaim:function(claim){
        return invokeApi($http.put,'/api/SubrogationClaims/' + claim.id,claim);
      },
      generateFakeData:function(){
        var data = {
          case:{
            case_ref: getStr(10),
            case_type:'SUBROGATION'
          },
          claims:[],
          client:''
        }
        function makeStr(possible){
          var text = "";
          for( var i=0; i < 5; i++ )
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
        }
        function getStr(size){ return makeStr("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",size); }
        function getNum(size){ return makeStr("0123456789",size); }
        function getLet(size){ return makeStr("ABCDEFGHIJKLMNOPQRSTUVWXYZa",size); }
        function makeClaim(){
          var deferred = $q.defer();
          var claim = {
            claim_reference: getStr(8),
            claim_member:'',
            claim_provider:'',
            claim_amount:Math.floor(Math.random() * 85000)
          }
          $http.get('http://faker.hook.io?property=company.companyName')
            .then(function(response){
              claim.claim_provider = response.data.replace(/\"/g,'');
              $http.get('http://faker.hook.io?property=name.findName')
                .then(function(response){
                  claim.claim_member = response.data.replace(/\"/g,'');
                  data.claims.push(claim);
                  deferred.resolve();
                })
            })
          return deferred.promise;
        }
        var deferred = $q.defer();
        var ops = [];
        var clientDeferred = $q.defer();
        ops.push(clientDeferred.promise)
        $http.get('http://faker.hook.io?property=company.companyName')
          .then(function(response){
              data.client = response.data.replace(/\"/g,'');
              clientDeferred.resolve();
          })
        var nClaims = Math.floor(Math.random() * 7) + 2;
        for (var i = 0; i < nClaims; i++) {
          var p = makeClaim();
          ops.push(p);
        }
        $q.all(ops).then(function(){
          deferred.resolve(data);
        })
        return deferred.promise;
      },
      submitCase:function(subrogation){
        var data = {
          "proc:Create_CaseRequest":{
            "@xmlns":{
              "proc":"http:\/\/launchpoint.everteam.com\/Processes\/Core\/workflow\/process",
              "laun":"http:\/\/launchpoint.everteam.com"
            },
            "laun:caseId":{
              "$":subrogation.caseId
            }
          }
        }
        return invokeApi(
          $http.post,
          '/everteam/ode/processes/LaunchPoint_Processes_Core_workflow_process_data_records',
          data,{
          headers:{
            'Content-Type':'application/json/badgerfish'
          }
        });
      }
    };
  }]);
