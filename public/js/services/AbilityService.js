angular.module('AbilityService', []).factory('Ability', ['$http', function($http) {
  return {
    // get all abilities from database
    get : function() {
      return $http.get('/api/abilities');
    },

    create : function(abilityData) {
      return $http.post('/api/abilities', abilityData);
    },

    delete: function(id) {
      return $http.delete('/api/abilities/' + id);
    }
  }
}]);