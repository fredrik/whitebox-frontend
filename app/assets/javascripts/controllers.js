function SearchCtrl($scope, $http) {

	$scope.fb = getCookie('fb');

  $scope.search = function(query) {
  	
  	// Twitter search
  	if (query != undefined && query.length) {
		  $http.get('http://localhost:9200/_search/?q=text:' + query).success(function(data) {
		    $scope.tweets = data.hits.hits
		  }).
		  error(function(data, status, headers, config) {
		  	$scope.tweets = [];
		  });
		} else {
			$http.get('http://localhost:9200/_search/?q=_type:tweet').success(function(data) {
		    $scope.tweets = data.hits.hits
		  }).
		  error(function(data, status, headers, config) {
		  	$scope.tweets = [];
		  });
		}

		// Facebook search
		if ($scope.fb != null) {
	  	if (query != undefined && query.length) {
			  $http.get('http://localhost:9200/_search/?q=fb:' + $scope.fb + '&q=text:' + query).success(function(data) {
			    $scope.fbFeed = data.hits.hits
			  }).
			  error(function(data, status, headers, config) {
			  	$scope.fbFeed = [];
			  });
			} else {
				$http.get('http://localhost:9200/_search/?q=_type:tweet').success(function(data) {
			    $scope.fbFeed = data.hits.hits
			  }).
			  error(function(data, status, headers, config) {
			  	$scope.fbFeed = [];
			  });
			}
		}
		else
		{
			$scope.fbFeed = [];
		}

		return false;
	}

  $scope.tweets = [];
	$scope.fbFeed = [];

  $scope.search();

}

function getCookie(c_name)
{
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1)
	{
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1)
	{
		c_value = null;
	}
	else
	{
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1)
		{
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}