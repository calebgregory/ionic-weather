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
    current : function(params,settings,cb) {
      var units = (settings.scale === 'C') ? 'si' : 'us',
          precision = parseInt(settings.precision);
      $http.get(
            'api/forecast/'
             + parseFloat(params.lat).toFixed(precision)
             + ','
             + parseFloat(params.long).toFixed(precision)
             + '?units='
             + units
               )
      .success(cb);
    }
  };
  return weather;
})

.factory('Settings', function() {
  var settings = {
    get scale() { return localStorage.scale || 'F'; },
    set scale(value) { localStorage.scale = value; },
    get precision() { return localStorage.precision || 1; },
    set precision(value) { localStorage.precision = value; }
  };
  return settings;
});
