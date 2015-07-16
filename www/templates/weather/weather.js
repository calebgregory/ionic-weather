angular.module('won.weather', [])

.controller('WeatherCtrl', function($scope, $stateParams, $ionicLoading, Weather, Settings) {

  $scope.params = $stateParams;
  $scope.scale = Settings.scale;
  $scope.precision = Settings.precision;

  $ionicLoading.show();

  Weather.current($stateParams,Settings,function(res) {
    $scope.current = res.currently;
    $ionicLoading.hide();
  });

});
