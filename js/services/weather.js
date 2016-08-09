app.factory('weather', ['$http', function($http) {
  return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=London,gb&APPID=6d76c4bd1bf7b7ac4b1f38023ace75b3&mode=json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
