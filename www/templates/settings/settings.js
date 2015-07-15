angular.module('won.settings', [])

.controller('SettingsCtrl', function($scope, Settings) {
  $scope.scale = Settings.scale;
  $scope.precision = Settings.precision;

  $scope.$watch('scale', function() {
    Settings.setScale($scope.scale);
  });
  $scope.$watch('precision', function() {
    Settings.setPrecision($scope.precision);
  });
});
