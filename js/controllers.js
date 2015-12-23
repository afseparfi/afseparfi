var afseparfiControllers = angular.module('afseparfiControllers', []);

afseparfiControllers.controller("VehicleIndexController", ['$scope', '$firebaseArray', '$window', '$filter',
  function($scope, $firebaseArray, $window, $filter) {
	
	$scope.ratings = JSON.parse($window.localStorage.getItem("eparatings")) ||  [] ;
	$scope.compare = {};
	$scope.vehicleModels1 = [];
	$scope.vehicleModels2 = [];
	$scope.vehicleModels3 = [];
	
	//TODO fix usage of angular-filter.js instead of doing this manually
	function filterMakes() {
		var unique = {};
		var distinct = [];
		for( var i in $scope.ratings ){
			if( typeof(unique[$scope.ratings[i].make]) == "undefined"){
				distinct.push($scope.ratings[i].make);
			}
			unique[$scope.ratings[i].make] = 0;
		}
		$scope.vehicleMakes = distinct;
	}
	
	//TODO move to service
	if ($scope.ratings.length == 0) {
		var ref = new Firebase("https://dazzling-fire-2583.firebaseio.com/ratings");	 
		$scope.ratings = $firebaseArray(ref);
		$scope.ratings.$loaded().then(function(data) {
			//reverse list to show highest mpg on top
		    $scope.ratings.reverse();
		    //store locally to avoid database hit
		    $window.localStorage.setItem("eparatings", JSON.stringify($scope.ratings));
		    filterMakes();
		})
		.catch(function(error) {
			console.log("Error:", error);
		});
	} else {
		filterMakes();
	}

	$scope.getModelOptions = function(modelIndex) {
		
		switch (modelIndex) {
			case 1:
				$scope.vehicleModels1 = $.grep($scope.ratings, function(e){ return e.make == $scope.compare.vehicleMake1; });
				$scope.vehicleModels1 = $filter('orderBy')($scope.vehicleModels1, 'model');
				break;
			case 2:
				$scope.vehicleModels2 = $.grep($scope.ratings, function(e){ return e.make == $scope.compare.vehicleMake2; });
				$scope.vehicleModels2 = $filter('orderBy')($scope.vehicleModels2, 'model');
				break;
			case 3:
				$scope.vehicleModels3 = $.grep($scope.ratings, function(e){ return e.make == $scope.compare.vehicleMake3; });
				$scope.vehicleModels3 = $filter('orderBy')($scope.vehicleModels3, 'model');
				break;
		}
	}
	
	
}]);


afseparfiControllers.controller("VehicleListController", ['$scope', '$firebaseArray', '$window', '$filter',
  function($scope, $firebaseArray, $window, $filter) {
	$scope.chartData = {'series':[[0]],'labels':['']};
	$scope.chartOptions = {
		reverseData: true,
		horizontalBars: true,
		onlyInteger: true,
		axisX: {
		    showGrid: false,
		    labelInterpolationFnc: function(value) {
		      return value + ' mpg';
		    }
		},
		axisY: {
			offset: 120
		}
	};
	
	$scope.chartEvents = {
			draw: function eventHandler(context) {
				var max = 125;
				if(context.type === 'bar') {
				    context.element.attr({
				      //this coloration would be based on range of bar values. higher would be green, lower would be red
//				      style: 'stroke: hsl(' + Math.floor(Chartist.getMultiValue(context.value) / max * 100) + ', 50%, 50%);'
				    	
				      //instead of using color ranges, use random colors to get some variation in the charts
				      style: 'stroke: hsl(' + Math.floor((Math.random() * 360) + 1) + ', 50%, 50%);'
				    });
				}
			}
	};
	

	//TODO move to service
	$scope.ratings = JSON.parse($window.localStorage.getItem("eparatings")) ||  [] ;
	if ($scope.ratings.length == 0) {
		var ref = new Firebase("https://dazzling-fire-2583.firebaseio.com/ratings");	 
		$scope.ratings = $firebaseArray(ref);
		$scope.ratings.$loaded().then(function(data) {
		    $window.localStorage.setItem("eparatings", JSON.stringify($scope.ratings));
		    buildChartData();
		})
		.catch(function(error) {
			console.log("Error:", error);
		});
	} else {
		buildChartData();
	}
	
	function buildChartData() {
		var topRatings;
		if ($scope.ratings.length > 0) {
			topRatings = $filter('limitTo')($scope.ratings, 5);
		}
		
		for( var i = 0; i < topRatings.length; i++ ){
			$scope.chartData.labels.push(topRatings[i].makeModel);
			$scope.chartData.series[0].push(topRatings[i].comb08);
		}
	}
}]);


afseparfiControllers.controller("VehicleDetailController", ['$scope', '$routeParams', '$window', '$firebaseObject',
  function($scope, $routeParams, $window, $firebaseObject) {
	var vehicleId = $routeParams.vehicleId;
	$scope.thisVehicle = {};
	
	//TODO move to service
	$scope.ratings = JSON.parse($window.localStorage.getItem("eparatings")) ||  [] ;
	if ($scope.ratings.length == 0) {
		var ref = new Firebase("https://dazzling-fire-2583.firebaseio.com/ratings/" + vehicleId);	
		$scope.thisVehicle = $firebaseObject(ref);
		buildChartsData();
	} else {
//		var searchVehicles = $.grep($scope.ratings, function(e){ return e.$id == vehicleId; });
		$scope.thisVehicle = $scope.ratings.reduce(function(a, b){
			return (a.$id==vehicleId && a) || (b.$id == vehicleId && b)
		});
		buildChartsData();
	}
	
	function buildChartsData() {
		var count = 0;
		var combSum = 0;
		var citySum = 0;
		var hwySum = 0;
		var allCitySum = 0;
		var allHwySum = 0;
		var allCombSum = 0;
		for( var i in $scope.ratings ){
			if($scope.ratings[i].VClass == $scope.thisVehicle.VClass){
				combSum += $scope.ratings[i].comb08;
				citySum += $scope.ratings[i].city08;
				hwySum += $scope.ratings[i].highway08;
				count++;
			}
			
			allCombSum += $scope.ratings[i].comb08;
			allCitySum += $scope.ratings[i].city08;
			allHwySum += $scope.ratings[i].highway08;
		}
		var vehicleClassAverageCity = citySum / count;
		var vehicleClassAverageHwy = hwySum / count;
		var vehicleClassAverageComb = combSum / count;
		var allAverageCity = allCitySum / $scope.ratings.length;
		var allAverageHwy = allHwySum / $scope.ratings.length;
		var allAverageComb = allCombSum / $scope.ratings.length;
		
		$scope.cityChartData = {'series':[[$scope.thisVehicle.city08, vehicleClassAverageCity, allAverageCity]],'labels': [$scope.thisVehicle.makeModel, 'All ' + $scope.thisVehicle.VClass, 'All MPG Data']};
		$scope.hwyChartData = {'series':[[$scope.thisVehicle.highway08, vehicleClassAverageHwy, allAverageHwy]],'labels': [$scope.thisVehicle.makeModel, 'All ' + $scope.thisVehicle.VClass, 'All MPG Data']};
		$scope.combChartData = {'series':[[$scope.thisVehicle.comb08, vehicleClassAverageComb, allAverageComb]],'labels': [$scope.thisVehicle.makeModel, 'All ' + $scope.thisVehicle.VClass, 'All MPG Data']};
		
		$scope.chartOptions = {
			reverseData: true,
			horizontalBars: true,
			onlyInteger: true,
			axisX: {
			    showGrid: false,
			    labelInterpolationFnc: function(value) {
			      return value + ' mpg';
			    }
			},
			axisY: {
				offset: 120
			}
		};
		
		$scope.chartEvents = {
				draw: function eventHandler(context) {
					var max = 125;
					if(context.type === 'bar') {
					    context.element.attr({
					      //this coloration would be based on range of bar values. higher would be green, lower would be red
//					      style: 'stroke: hsl(' + Math.floor(Chartist.getMultiValue(context.value) / max * 100) + ', 50%, 50%);'
					    	
					      //instead of using color ranges, use random colors to get some variation in the charts
					      style: 'stroke: hsl(' + Math.floor((Math.random() * 360) + 1) + ', 50%, 50%);'
					    });
					}
				}
		};
	}
}]);