var App = angular.module('services', []);

App.factory('crud', function($http, API){
	return {

		read : function(input){
				return $http.get(API+'read/'+input);
		},
		readAll: function(){
			return $http.get(API+'readAll');
		},
		create: function(data){
			return $http.post(API+'create',data);
		},
		update: function(name, data){
			return $http.put(API+'update/'+name, data);
		},
		delete: function(name){
			return $http.delete(API+'delete/'+name);
		}

	}
});
