app.service('ApiService',['$http','$resource',function($http,$resource){
	
	this.findall = function(){
		return $http.get('/api/suggestions/findall');
	}
	this.post = function(JSON){
		return $http.post('/api/suggestions/add', JSON);
	}
	this.delete = function(ID){
		return $http.delete('/api/suggestions/remove/'+ID);
	}
	this.deleteall = function(){
		return $http.delete('/api/suggestions/removeall');
	}
	this.update = function(){
		return $http.get('/api/showall');
	}

}]);