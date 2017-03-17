var App = angular.module('controllers',[]);

App.controller('readController', function($scope,crud, $route){
      $scope.data = [];

      $scope.find = function(){
        crud.read($scope.name).then(function(response){
  		        $scope.data = response.data;
  			});
        $scope.name ='';
      }
      $scope.findAll = function(){
        crud.readAll().then(function(response){
  		        $scope.data = response.data;
  			});
      }
});

App.controller('createController', function($scope,crud, $route){
      $scope.send = function(){
          var data = {
            nome     : $scope.name,
            sobrenome: $scope.lastname,
            idade    : $scope.age
          };

          crud.create(data).then(function(response){
              $scope.msg = response.data.msg;
          });


          $scope.name = '';
          $scope.lastname= '';
          $scope.age = '';
      }
});
App.controller('deleteController', function($scope,crud, $route){
            $scope.delete = function(){
              crud.delete($scope.name).then(function(response){
                  $scope.msg = response.data.msg;
              });
              $scope.name = '';

            }
});
App.controller('updateController', function($scope,crud, $route){
            $scope.delete = function(){
              var nome = $scope.name;
              var data = {
                sobrenome: $scope.lastname,
                idade    : $scope.age
              };
              crud.update(nome,data).then(function(response){
                  $scope.msg = response.data.msg;
              });
              $scope.name = '';
              $scope.lastname = '';
              $scope.age = '';
            }
});
