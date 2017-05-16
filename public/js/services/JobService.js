angular.module('JobService', []).factory('Job', ['$http', function($http) {
  return {
    // get all jobs from database
    get : function() {
      return $http.get('/api/jobs');
    },

    create : function(jobData) {
      return $http.post('/api/jobs', jobData);
    },

    delete : function(id) {
      return $http.delete('/api/jobs/' + id);
    }
  }
}]);