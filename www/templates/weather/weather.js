angular.module('won.weather', [])

.controller('WeatherCtrl', function($scope, $stateParams, $http, $ionicLoading) {

  $scope.city = $stateParams.city;

  $ionicLoading.show();

  $http.get('api/forecast/'
           + $stateParams.lat
           + ','
           + $stateParams.long)
    .success(function(res) {
      // display some data
      // extract http calls into a factory
      console.log(res);
      $scope.current = res.currently;
      $ionicLoading.hide();
    })
});
