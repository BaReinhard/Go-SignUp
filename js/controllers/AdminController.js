app.controller('AdminController',['$scope','$http','$timeout','$resource','ApiService',function($scope,$http,$timeout,$resource,ApiService){
    ApiService.findall().then(function(res){
        $scope.suggestions = res.data
    })
    $scope.NoError = true;
    $scope.errorMessage = "";
    $scope.deleteAll = function(){
        ApiService.deleteall().then(function(res){
            $scope.suggestions.splice(0,$scope.suggestions.length);
        });
    }
    $scope.delete = function(index){
        var id = $scope.suggestions[index]._id;
        console.log(id);
        ApiService.delete(id).then(function(res){
            $scope.suggestions.splice(index,1);
        })

    }
    $scope.update = function(){
        ApiService.update().then(function(res){
            $scope.suggestions = res.data
        })
    }
    
}]);//End HomeController