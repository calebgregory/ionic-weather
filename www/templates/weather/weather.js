angular.module('won.weather', [])

.controller('WeatherCtrl', function($scope, $stateParams, $http, $ionicLoading, Weather) {

  $scope.city = $stateParams.city;

  $ionicLoading.show();

  Weather.current($stateParams,function(res) {
    $scope.current = res.currently;
    $ionicLoading.hide();
  })
});
