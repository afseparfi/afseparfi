var afseparfiControllers = angular.module('afseparfiControllers', []);

afseparfiControllers.controller("VehicleIndexController", ['$scope', '$filter', '$routeParams', '$location', 'vehicleDataService',
  function($scope, $filter, $routeParams, $location, vehicleDataService) {
	$scope.ratings = [];

	vehicleDataService.getData().then(function(data){
      $scope.ratings = data;
      //TODO fix usage of angular-filter.js instead of doing this manually
      var unique = {};
		var distinct = [];
		for( var i in $scope.ratings ){
			if( typeof(unique[$scope.ratings[i].make]) == "undefined"){
				if (unique[$scope.ratings[i].make] != "") {
					distinct.push($scope.ratings[i].make);
				}
			}
			unique[$scope.ratings[i].make] = 0;
		}
		$scope.vehicleMakes = distinct;
    });

	$scope.compare = {};
	$scope.vehicleModels1 = [];
	$scope.vehicleModels2 = [];
	$scope.vehicleModels3 = [];



	$scope.getModelOptions = function(modelIndex) {
        switch (modelIndex) {
            case 1:
                $scope.vehicleModels1 = $.grep($scope.ratings, function(e){ return e.make == $scope.compare.vehicleMake1; });
                $scope.vehicleModels1 = $filter('orderBy')($scope.vehicleModels1, 'model');
                break;
            case 2:
                $scope.vehicleModels2 = $.grep($scope.ratings, function(e){ return e.make == $scope.compare.vehicleMake2; });
                $scope.vehicleModels2 = $filter('orderBy')($scope.vehicleModels2, 'model');
	            if ($scope.thisVehicle && $scope.thisVehicle.VClass) {
                    $scope.vehicleModels2 = $filter('filter')($scope.vehicleModels2, { 'VClass': $scope.thisVehicle.VClass });
	            }
                break;
            case 3:
                $scope.vehicleModels3 = $.grep($scope.ratings, function(e){ return e.make == $scope.compare.vehicleMake3; });
                $scope.vehicleModels3 = $filter('orderBy')($scope.vehicleModels3, 'model');
	            if ($scope.thisVehicle && $scope.thisVehicle.VClass) {
	            	$scope.vehicleModels3 = $filter('filter')($scope.vehicleModels3, { 'VClass': $scope.thisVehicle.VClass });
	            }
                break;
        }


	$scope.compareVehicles = function() {
		var id1 = $scope.compare.vehicleModel1 ? $scope.compare.vehicleModel1.$id : $routeParams.vehicleId;

		if (id1 && $scope.compare.vehicleModel2 && $scope.compare.vehicleModel3) {
			$location.path('/compare/' + id1 + '/to/' + $scope.compare.vehicleModel2.$id + '/and/' + $scope.compare.vehicleModel3.$id);
		} else if (id1 && $scope.compare.vehicleModel2 && !$scope.compare.vehicleModel3) {
			$location.path('/compare/' + id1 + '/to/' + $scope.compare.vehicleModel2.$id);
		} else if (id1 && $scope.compare.vehicleModel3  && !$scope.compare.vehicleModel2){
			$location.path('/compare/' + id1 + '/to/' + $scope.compare.vehicleModel3.$id);
		} else if($scope.compare.vehicleModel2 && $scope.compare.vehicleModel3  && !$scope.compare.vehicleModel1) {
			$location.path('/compare/' + $scope.compare.vehicleModel2.$id + '/to/' + $scope.compare.vehicleModel3.$id);
		} else if (id1) {
			alert("Please select at least one additional make and model for the comparison.");
		} else {
			alert("Please select at least two options");
		}
	}

	$scope.getImage = function(imageId) {
		return vehicleDataService.getImage(imageId);
	}
}]);


afseparfiControllers.controller("VehicleListController", ['$scope', 'vehicleDataService', '$filter',
  function($scope, vehicleDataService, $filter) {
	$scope.chartData = {'series':[[0]],'labels':['']};
	$scope.chartOptions = {
		reverseData: true,
		horizontalBars: true,
		axisX: {
		    showGrid: false,
			onlyInteger: true,
		    labelInterpolationFnc: function(value) {
		      return value + ' mpg';
		    }
		},
		axisY: {
			offset: 120
		},
		plugins: [
	    	Chartist.plugins.ctBarLabels({
	    		 labelInterpolationFnc: function(text) { 
	    			 return Math.round(text) + ' mpg' 
	    		 },
	    		 labelOffset: {
	    		        y: 3
	    	     },
	    	})
	    ]
		
	};

	$scope.chartEvents = {
			draw: function eventHandler(context) {
//				var max = 125;
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

	vehicleDataService.getData().then(function(data){
		$scope.ratings = data;
		$scope.topRatings;
		if ($scope.ratings.length > 0) {
			$scope.topRatings = $filter('limitTo')($scope.ratings, 5);
		}

		for( var i = 0; i < $scope.topRatings.length; i++ ){
			$scope.chartData.labels.push($scope.topRatings[i].makeModel);
			$scope.chartData.series[0].push($scope.topRatings[i].comb08);
		}
	});

	$scope.getImage = function(imageId) {
		return vehicleDataService.getImage(imageId);
	}
}]);


afseparfiControllers.controller("VehicleDetailController", ['$scope', '$routeParams', 'vehicleDataService',
  function($scope, $routeParams, vehicleDataService) {
	var vehicleId = $routeParams.vehicleId;
	$scope.thisVehicle = {};
	$scope.similarVehicles = [];
	$scope.chartOptions = {
		reverseData: true,
		horizontalBars: true,
		axisX: {
		    showGrid: false,
			onlyInteger: true,
		    labelInterpolationFnc: function(value) {
		      return value + ' mpg';
		    }
		},
		axisY: {
			offset: 120
		},
		plugins: [
	    	Chartist.plugins.ctBarLabels({
	    		 labelInterpolationFnc: function(text) { 
	    			 return Math.round(text) + ' mpg' 
	    		 },
	    		 labelOffset: {
	    		        y: 3
	    	     },
	    	})
	    ]
	};
	$scope.ghgChartOptions = {
			high: 10,
			low: 0,
			reverseData: true,
			horizontalBars: true,
			axisX: {
			    showGrid: false,
				onlyInteger: true
			},
			axisY: {
				offset: 120
			},
			plugins: [
		    	Chartist.plugins.ctBarLabels({
		    		 labelInterpolationFnc: function(text) { 
		    			 return Math.round(text); 
		    		 },
		    		 labelOffset: {
		    		        y: 3
		    	     },
		    	})
		    ]
	};
	$scope.chartEvents = {
			draw: function eventHandler(context) {
//				var max = 125;
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

	vehicleDataService.getData().then(function(data){
		$scope.ratings = data;
		//identify this vehicle based on vehicleId
		$scope.thisVehicle = vehicleDataService.findById(vehicleId);

		//build data for charts
		var count = 0;
		var combSum = 0;
		var citySum = 0;
		var hwySum = 0;		
		var allCitySum = 0;
		var allHwySum = 0;
		var allCombSum = 0;
		var ghgSum = 0;
		var allGhgSum = 0;

		for( var i in $scope.ratings ){
			if($scope.ratings[i].VClass == $scope.thisVehicle.VClass){
				combSum += $scope.ratings[i].comb08;
				citySum += $scope.ratings[i].city08;
				hwySum += $scope.ratings[i].highway08;
				ghgSum += $scope.ratings[i].ghgScore;
				$scope.similarVehicles.push($scope.ratings[i]);
				count++;
			}

			allCombSum += $scope.ratings[i].comb08;
			allCitySum += $scope.ratings[i].city08;
			allHwySum += $scope.ratings[i].highway08;
			allGhgSum += $scope.ratings[i].ghgScore;			
		}

		var vehicleClassAverageCity = citySum / count;
		var vehicleClassAverageHwy = hwySum / count;
		var vehicleClassAverageComb = combSum / count;
		var vehicleClassAverageGhg = ghgSum / count;

		var allAverageCity = allCitySum / $scope.ratings.length;
		var allAverageHwy = allHwySum / $scope.ratings.length;
		var allAverageComb = allCombSum / $scope.ratings.length;
		var allAverageGhg = allGhgSum / $scope.ratings.length;

		$scope.cityChartData = {'series':[[$scope.thisVehicle.city08, vehicleClassAverageCity, allAverageCity]],'labels': [$scope.thisVehicle.makeModel, 'All ' + $scope.thisVehicle.VClass, 'All MPG Data']};
		$scope.hwyChartData = {'series':[[$scope.thisVehicle.highway08, vehicleClassAverageHwy, allAverageHwy]],'labels': [$scope.thisVehicle.makeModel, 'All ' + $scope.thisVehicle.VClass, 'All MPG Data']};
		$scope.combChartData = {'series':[[$scope.thisVehicle.comb08, vehicleClassAverageComb, allAverageComb]],'labels': [$scope.thisVehicle.makeModel, 'All ' + $scope.thisVehicle.VClass, 'All MPG Data']};
		$scope.ghgChartData = {'series':[[$scope.thisVehicle.ghgScore, vehicleClassAverageGhg, allAverageGhg]],'labels': [$scope.thisVehicle.makeModel, 'All ' + $scope.thisVehicle.VClass, 'All GHG Data']};


		$scope.getImage = function(imageId) {
			return vehicleDataService.getImage(imageId);
		}
	});

	//fix charts in hidden divs
	$(document).ready(function() {
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		  //call chartist update to re-render graphs
		  $($(e.target).data("target") + " .ct-chart").each(function() {
			 this.__chartist__.update();
		  });
		});
	});


}]);

afseparfiControllers.controller("VehicleCompareController", ['$scope', '$routeParams', 'vehicleDataService',
  function($scope, $routeParams, vehicleDataService) {
	var vehicle1Id = $routeParams.vehicleOne;
	var vehicle2Id = $routeParams.vehicleTwo;
	var vehicle3Id = $routeParams.vehicleThree;

	$scope.chartOptions = {
		reverseData: true,
		horizontalBars: true,
		axisX: {
		    showGrid: false,
			onlyInteger: true,
		    labelInterpolationFnc: function(value) {
		      return value + ' mpg';
		    }
		},
		axisY: {
			offset: 120
		},
		plugins: [
	    	Chartist.plugins.ctBarLabels({
	    		 labelInterpolationFnc: function(text) { 
	    			 return Math.round(text) + ' mpg' 
	    		 },
	    		 labelOffset: {
	    		        y: 3
	    	     },
	    	})
	    ]
	};
	$scope.fuelChartOptions = {
		reverseData: true,
		horizontalBars: true,
		axisX: {
		    showGrid: false,
			onlyInteger: true,
		    labelInterpolationFnc: function(value) {
		      return '$' + value;
		    }
		},
		axisY: {
			offset: 120
		},
		plugins: [
	    	Chartist.plugins.ctBarLabels({
	    		 labelInterpolationFnc: function(text) { 
	    			 return '$' + Math.round(text)
	    		 },
	    		 labelOffset: {
	    		        y: 3
	    	     },
	    	})
	    ]
	};
	$scope.ghgChartOptions = {
			reverseData: true,
			horizontalBars: true,
			axisX: {
			    showGrid: false,
				onlyInteger: true
			},
			axisY: {
				offset: 120
			},
			seriesBarDistance: 35,
			plugins: [
		    	Chartist.plugins.ctBarLabels({
		    		 labelInterpolationFnc: function(text) { 
		    			 return Math.round(text); 
		    		 },
		    		 labelOffset: {
		    		        y: 3
		    	     },
		    	})
		    ]
	};
	$scope.chartEvents = {
			draw: function eventHandler(context) {
//				var max = 125;
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

	$scope.getImage = function(imageId) {
		return vehicleDataService.getImage(imageId);
	}

	$scope.compare3 = (vehicle3Id) ? true : false;

	$scope.vehicle1 = {};
	$scope.vehicle2 = {};
	$scope.vehicle3 = {};
//	$scope.similarVehicles = [];

	vehicleDataService.getData().then(function(data){
		$scope.ratings = data;
		//identify the vehicles to be compared by checking routeParam values
		$scope.vehicle1 = vehicleDataService.findById(vehicle1Id);
		$scope.vehicle2 = vehicleDataService.findById(vehicle2Id);
		if ($scope.compare3) {
			$scope.vehicle3 = vehicleDataService.findById(vehicle3Id);
		}

		//build out charts data
		var count = 0;
//		var combSum = 0;
//		var citySum = 0;
//		var hwySum = 0;
		var allCitySum = 0;
		var allHwySum = 0;
		var allCombSum = 0;
//		var ghgSum = 0;
		var allGhgSum = 0;
//		var fuelSavingsSum = 0;
		var allFuelSavings = 0;
		var allFuelCosts = 0;

		//loop over vehicle records to calculate comparative chart data
		for( var i in $scope.ratings ){
			//only use this if we can compare vehicle classes. at this point just using all data
//			if($scope.ratings[i].VClass == $scope.vehicle1.VClass){
//				combSum += $scope.ratings[i].comb08;
//				citySum += $scope.ratings[i].city08;
//				hwySum += $scope.ratings[i].highway08;
//				ghgSum += $scope.ratings[i].ghgScore;
//				fuelSavingsSum += $scope.ratings[i].youSaveSpend;
//				$scope.similarVehicles.push($scope.ratings[i]);
//				count++;
//			}

			allCombSum += $scope.ratings[i].comb08;
			allCitySum += $scope.ratings[i].city08;
			allHwySum += $scope.ratings[i].highway08;
			allGhgSum += $scope.ratings[i].ghgScore;
			allFuelSavings += $scope.ratings[i].youSaveSpend;
			allFuelCosts += $scope.ratings[i].fuelCost08;
		}

//		var vehicleClassAverageCity = citySum / count;
//		var vehicleClassAverageHwy = hwySum / count;
//		var vehicleClassAverageComb = combSum / count;
//		var vehicleClassAverageGhg = ghgSum / count;

		var allAverageCity = allCitySum / $scope.ratings.length;
		var allAverageHwy = allHwySum / $scope.ratings.length;
		var allAverageComb = allCombSum / $scope.ratings.length;
		var allAverageGhg = allGhgSum / $scope.ratings.length;
//		var vehicleClassAverageFuelSavings = fuelSavingsSum / count;
		var allAverageFuelSavings = allFuelSavings / $scope.ratings.length;
		var allAverageFuelCosts = allFuelCosts / $scope.ratings.length;

		if ($scope.compare3) {
			$scope.cityChartData = {'series':[[$scope.vehicle1.city08, $scope.vehicle2.city08, $scope.vehicle3.city08, allAverageCity]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, $scope.vehicle3.makeModel,'All MPG Data']};
			$scope.hwyChartData = {'series':[[$scope.vehicle1.highway08, $scope.vehicle2.highway08, $scope.vehicle3.highway08,allAverageHwy]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, $scope.vehicle3.makeModel,'All MPG Data']};
			$scope.combChartData = {'series':[[$scope.vehicle1.comb08, $scope.vehicle2.comb08, $scope.vehicle3.comb08,allAverageComb]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, $scope.vehicle3.makeModel,'All MPG Data']};
			$scope.ghgChartData = {'series':[[$scope.vehicle1.ghgScore, $scope.vehicle2.ghgScore, $scope.vehicle3.ghgScore,allAverageGhg]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, $scope.vehicle3.makeModel,'All GHG Data']};
			$scope.fuelSavingsChartData = {'series':[[$scope.vehicle1.youSaveSpend, $scope.vehicle2.youSaveSpend, $scope.vehicle3.youSaveSpend, allAverageFuelSavings]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, $scope.vehicle3.makeModel,'Average Fuel Saving']};
			$scope.fuelCostsChartData = {'series':[[$scope.vehicle1.fuelCost08, $scope.vehicle2.fuelCost08, $scope.vehicle3.fuelCost08, allAverageFuelCosts]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, $scope.vehicle3.makeModel,'Average Fuel Cost']};

		} else {
			$scope.cityChartData = {'series':[[$scope.vehicle1.city08, $scope.vehicle2.city08, allAverageCity]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, 'All MPG Data']};
			$scope.hwyChartData = {'series':[[$scope.vehicle1.highway08, $scope.vehicle2.highway08, allAverageHwy]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, 'All MPG Data']};
			$scope.combChartData = {'series':[[$scope.vehicle1.comb08, $scope.vehicle2.comb08, allAverageComb]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, 'All MPG Data']};
			$scope.ghgChartData = {'series':[[$scope.vehicle1.ghgScore, $scope.vehicle2.ghgScore, allAverageGhg]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, 'All GHG Data']};
			$scope.fuelSavingsChartData = {'series':[[$scope.vehicle1.youSaveSpend, $scope.vehicle2.youSaveSpend, allAverageFuelSavings]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, 'Average Fuel Saving']};
			$scope.fuelCostsChartData = {'series':[[$scope.vehicle1.fuelCost08, $scope.vehicle2.fuelCost08, allAverageFuelCosts]],'labels': [$scope.vehicle1.makeModel, $scope.vehicle2.makeModel, 'Average Fuel Cost']};
		}
	});
}]);

afseparfiControllers.controller("EPALabelController", ['$scope',
  function($scope, $routeParams) {
	$(document).ready(function() {
	    $('map').imageMapResize();
	});
}]);
