angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

      // dashboard home page
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
      })

      // job list page
      .when('/jobs', {
        templateUrl: 'views/job.html',
        controller: 'JobController'
      })

      .when('/abilities', {
        templateUrl: 'views/ability.html',
        controller: 'AbilityController'
      })

      .when('/abilities/edit', {
        templateUrl: 'views/ability-form.html',
        controller: 'AbilityController'
      });

  $locationProvider.html5Mode(true);

}]);