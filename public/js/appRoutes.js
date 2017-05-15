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
      });

  $locationProvider.html5Mode(true);

}]);