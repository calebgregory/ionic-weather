angular.module('won.services', [])

.factory('Geolocation', function($http) {
  var geolocation = {
    latLong : function(param, cb) {
      $http
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: { address: param }
        })
        .success(cb);
    }
  };
  return geolocation;
})

.factory('Weather', function($http) {
  var weather = {
    current : function(params,cb) {
      $http.get('api/forecast/'
             + params.lat
             + ','
             + params.long)
      .success(cb);
    }
  }
  return weather;

});
