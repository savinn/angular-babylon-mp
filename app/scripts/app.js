var app = angular.module('myApp', []);

app.controller('mainController', function($scope) {
    $scope.message = 'OH NO!';  
});

//app configs
app.constant('appsettings', {
  'apiurl' : 'http://localhost:3000/',
  'apptitle' : ''
});
