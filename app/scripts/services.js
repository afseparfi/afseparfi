'use strict';

var afseparfiServices= angular.module('afseparfiServices', []);

afseparfiServices.factory("vehicleDataService", ['$firebaseArray', '$q', '$window',
  function($firebaseArray, $q, $window) {
	var ref = new Firebase("https://dazzling-fire-2583.firebaseio.com/ratings");
	var vehicleRatings = JSON.parse($window.localStorage.getItem("eparatings")) ||  [] ;
	return{
		getImage: function(imageId) {
			// workaround for demo purposes to retrieve images for at least top 5 vehicles
			var topVehicles = [36996,36834,37066,37156,37067];
			if (topVehicles.indexOf(parseInt(imageId)) >= 0) {
				return "images/" + imageId + ".png";
			} else {
				return "images/default-vehicle.png";
			}
		},
	    getData: function(){
	    	// Creating a deferred object
	        var deferred = $q.defer();
			if (vehicleRatings.length === 0) {

				var vehicleRatingsData = $firebaseArray(ref);
				vehicleRatingsData.$loaded().then(function(data) {

					if (vehicleRatings.length === 0) {
						//reverse array to store top fuel efficient vehicles at top
						vehicleRatings = data.reverse();
					}
					// store locally to avoid database hit
				    $window.localStorage.setItem("eparatings", JSON.stringify(vehicleRatings));
				    deferred.resolve(data);
				})
				.catch(function(error) {
					console.log("Error:", error);
				});
			} else {
				deferred.resolve(vehicleRatings);
			}
			return deferred.promise;
	    },
	    findById: function(id) {
	    	if (vehicleRatings.length > 0) {
	    		return vehicleRatings.reduce(function(a, b){return (a.$id===id && a) || (b.$id === id && b);});
	    	}
	    }
    };
}]);
