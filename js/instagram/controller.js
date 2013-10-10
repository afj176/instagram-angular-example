'use strict';

app.controller('InstagramCtrl', ['$scope', 'Instagram', 
	function($scope, Instagram) {

		$scope.example1 = {
			hash: 'angular'
		};

		$scope.example2 = {
			hash: 'instago'
		};

		$scope.example3 = {
			hash: 'examples'
		};

	    Instagram.get(9, $scope.example1.hash)
		    .success(function(response, status, headers, config) {
		    	if(response.meta.code !== 200){
		    		$scope.example1.error = response.meta.error_type + ' | ' + response.meta.error_message;
		    		return;
		    	}		    
		    	if(response.data.length > 0){
		    		$scope.example1.items = response.data;
		    	}else{
		    		$scope.example1.error = "This hashtag has returned no results";	
		    	}				
		    });

	    Instagram.get(9, $scope.example2.hash)
		    .success(function(response, status, headers, config) {
		    	console.log('response', response);
		    	if(response.meta.code !== 200){
		    		$scope.example2.error = response.meta.error_type + ' | ' + response.meta.error_message;
		    		return;
		    	}	
		    	if(response.data.length > 0){
		    		$scope.example2.items = response.data;
		    	}else{
		    		$scope.example2.error = "This hashtag has returned no results";	
		    	}
		    });

	    Instagram.get(9, $scope.example3.hash)
		    .success(function(response, status, headers, config) {
		    	if(response.meta.code !== 200){
		    		$scope.example3.error = response.meta.error_type + ' | ' + response.meta.error_message;
		    		return;
		    	}
		    	if(response.data.length > 0){
		    		$scope.example3.items = response.data;
		    	}else{
		    		$scope.example3.error = "This hashtag has returned no results";	
		    	}		    	
		    })
		    .error(function(response, status, headers, config) {
		    	$scope.example3.error = 'Something went terrible wrong { '+ angular.toJson(response) + '}';
		    });

  	}
]);