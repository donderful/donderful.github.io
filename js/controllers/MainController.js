app.controller("myCtrl", ['$scope', 'weather', function($scope, weather)
{
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    // Connect to weather.js to get weather data
    weather.success(function(data) { $scope.weather = data; });
}]);
