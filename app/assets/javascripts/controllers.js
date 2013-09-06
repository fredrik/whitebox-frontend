function SearchCtrl($scope, $http) {

  $scope.search = function(query) {
  	if (query != undefined) {
		  $http.get('http://localhost:9200/_search/?q=text:' + query).success(function(data) {
		    $scope.tweets = data.hits.hits
		  }).
		  error(function(data, status, headers, config) {
		  	$scope.tweets = [];
		  });;
		}
		return false;
	}

  $scope.tweets = [];

}