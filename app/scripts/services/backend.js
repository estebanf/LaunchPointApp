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

    var invokeApi = function(httpCall,url,data){
      var deferred = $q.defer();
      httpCall(url,data)
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
      createSubrogationClaim:function(subrogation_id,claim){
        return invokeApi($http.post,'/api/Subrogations/' + subrogation_id + '/claims',claim);
      }
    };
  }]);
