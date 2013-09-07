function SearchCtrl($scope, $http) {

	$scope.fb = getCookie('fb');
	$scope.twitter = getCookie('twitter');

  $scope.search = function(query) {
  	
  	// Twitter search
  	if ($scope.twitter != null) {
	  	if (query != undefined && query.length) {
			  $http.get('http://localhost:9200/_search/?q=screen_name:' + $scope.twitter + ' AND text:*"' + query + '"*').success(function(data) {
			    $scope.tweets = data.hits.hits
			  }).
			  error(function(data, status, headers, config) {
			  	console.log('twitter error 1');
			  	$scope.tweets = [];
			  });
			} else {
				$http.get('http://localhost:9200/_search/?q=screen_name:' + $scope.twitter).success(function(data) {
			    $scope.tweets = data.hits.hits
			  }).
			  error(function(data, status, headers, config) {
			  	$scope.tweets = [];
			  	console.log('twitter error');
			  });
			}
		}
		else
		{
			$scope.tweets = [];
		}

		// Facebook search
		if ($scope.fb != null) {
	  	if (query != undefined && query.length) {
			  $http.get('http://localhost:9200/_search/?q=fb:' + $scope.fb + ' AND message:*"' + query + '"*').success(function(data) {
			    $scope.fbFeed = data.hits.hits
			  }).
			  error(function(data, status, headers, config) {
			  	console.log('facebook error');
			  	$scope.fbFeed = [];
			  });
			} else {
				$http.get('http://localhost:9200/_search/?q=fb:' + $scope.fb).success(function(data) {
			    $scope.fbFeed = data.hits.hits
			  }).
			  error(function(data, status, headers, config) {
			  	console.log('facebook error');
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