angular.module('won.search', [])

.controller('SearchCtrl', function($scope, $http) {
  $scope.results = [];
  $scope.queryChanged = _.debounce(function() {
    $http
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: { address: $scope.query }
      })
      .success(function(res) {
        $scope.results = res.results;
      });
    }, 2000);
});
