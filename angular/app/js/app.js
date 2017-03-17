var App = angular.module('App',[
  'ngRoute',
  'controllers',
  'services'
]);
App.config(function($routeProvider){

	$routeProvider
	.when('/', {
    templateUrl: '/views/index.html',
    controller: 'readController'
	})
  .when('/read/:nome',{
    	templateUrl: '/views/read.html',
  		controller: 'readController'
  })
  .when('/read',{
      templateUrl: '/views/read.html',
      controller: 'readController'
  })
  .when('/create',{
      templateUrl: '/views/create.html',
      controller: 'createController'
  })
  .when('/delete',{
      templateUrl: '/views/delete.html',
      controller: 'deleteController'
  })
  .when('/update',{
      templateUrl: '/views/update.html',
      controller: 'updateController'
  })
});
App.value('API', 'http://localhost:4200/')
