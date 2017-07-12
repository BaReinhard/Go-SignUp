app.controller('HomeController',['$scope','$http','$timeout','$resource',function($scope,$http,$timeout,$resource){
    $scope.promo = true;
    $scope.NoError = true;
    $scope.errorMessage = "";
}]);//End HomeController