app.controller('SuggestionController',['$scope','$http','$timeout','$resource','ApiService',function($scope,$http,$timeout,$resource,ApiService){
    $scope.name = "(optional)";
    $scope.suggestion = "";
    $scope.NoError = true;
	$scope.NoMessage = true;
	$scope.submitMessage ="";
    $scope.errorMessage = "";
    $scope.getDate = function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        return today = mm+'/'+dd+'/'+yyyy;
    }
	$scope.checkName = function(){
		if($scope.name == ""){
			$scope.name = "(optional)";
		}		
	}
    $scope.submitForm = function(){
		// Check for Proper Length
		if($scope.suggestion.length >=5){
		
    	// Create JSON to send
    	var postJSON = { name: $scope.name, suggestion: $scope.suggestion, date: $scope.getDate()};
    	ApiService.post(postJSON).then(function(req,res){
    		$scope.name = "(optional)";
    		$scope.suggestion = "";
            $scope.NoMessage=false;
            $scope.submitMessage="Thank you for your suggestion, it has been submitted";
            $timeout(function(){
                $scope.NoMessage=true;
                $scope.submitMessage="";
            },3000);
            
    	})
		}else{
			$scope.NoError=false;
            $scope.errorMessage="Your suggestion was too short, please add a bit more detail";
            $timeout(function(){
                $scope.NoError=true;
                $scope.errorMessage="";
            },3000);
		}
    }
}]);//End HomeController