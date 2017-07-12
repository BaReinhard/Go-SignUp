app.controller('EmailController', ['$scope', '$http', '$timeout', '$resource','$sce', function ($scope, $http, $timeout, $resource,$sce) {
    $scope.promo = true;
    $scope.NoError = true;
    $scope.errorMessage = "";
    $scope.resultTitle = '';
    $scope.resultMessage = '';
    $scope.showForm = true;
    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };
    $scope.sendRegistration = function () {
        console.log($scope.email);
        var emailJSON = {
           
            emailAddress: $scope.email,
            name: $scope.name,
            message: `Hello ${$scope.name}, Thank you for your interest in joining our facility. Please click the following link to complete the registration process. http://www.clubready.com/present/3286WGWBWF/0/0/`
        };
        $http.post('https://prod-05.centralus.logic.azure.com:443/workflows/fa37615468aa4ffd9da2ba549e1ce8b8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=aA49qZ8e59z65oZm152xWL9bn4CRe9vJRLR8bYrezoc', emailJSON).then(function (response) {
            $('#checkOutModal').modal({
                backdrop: 'static',
                keyboard: false
            });
            $scope.showForm = false;
            $scope.resultTitle = '<h3 class="app-container-header"><strong>Success <i class="fa fa-check" aria-hidden="true"></i> </strong></h3>';
            $scope.resultMessage = '<div class="app-container-header"><h4>Thank you, ' + $scope.name + '. Your message has been sent.</h4></div><hr />';

            $timeout(function () {
                $scope.name = '';
                $scope.email = '';
                $scope.message = '';
                $scope.userForm.$setPristine();
                $scope.userForm.$setUntouched();
                $scope.showForm = true;
                $('#checkOutModal').modal('toggle');
            }, 3000);
            $timeout(function () {
                location.href = "#!/";
            }, 4000);
        }, function (err) {
            console.log(err);
            $scope.errorMessage = '<div class="app-container-header alert alert-danger"><h4><strong>Error!</strong></h4>Something Went Wrong, please try again.</div>';

        })
    }

}]);//End HomeController