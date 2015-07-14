angular.module('won.search', [])

.controller('SearchCtrl', function($scope, $http, Geolocation) {
  $scope.results = [];
  $scope.queryChanged = _.debounce(function() {
    Geolocation.latLong($scope.query, function(res) {
      $scope.results = res.results;
    })
  }, 2000);
});
