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
      var units = (settings.scale === 'C') ? 'si' : 'us';
      $http.get(
            'api/forecast/'
             + params.lat
             + ','
             + params.long
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
})

.factory('Locations', function() {
  var defaultFav = [{
    city : 'Nashville, TN, USA',
    lat : '36.162664',
    long : '-86.781602'
  }];
  if (!localStorage.favorites) {
    localStorage.favorites = JSON.stringify(defaultFav);
  }

  var data = {
    get favorites() { return JSON.parse(localStorage.favorites); },
    set favorites(f) { localStorage.favorites = JSON.stringify(f); },
    addFavorite : function(f) {
      this.favorites = this.favorites.concat(f);
    },
    removeFavorite : function(f) {
      var index = -1;
      this.favorites.forEach(function(fav,i) {
        if( _.isEqual(f,fav) ) {
          index = i;
        }
      });
      if (index > -1 && this.favorites.length > 1) {
        this.favorites = JSON.stringify(this.favorites.splice(index,1));
      }
    }
  }
  return data;
});
