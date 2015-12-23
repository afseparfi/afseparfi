var afseparfiServices= angular.module('afseparfiServices', []);

afseparfiServices.factory("vehicleDataService", ['$firebaseArray', '$q', '$window',
  function($firebaseArray, $q, $window) {
	var ref = new Firebase("https://dazzling-fire-2583.firebaseio.com/ratings");	
	var vehicleRatings = JSON.parse($window.localStorage.getItem("eparatings")) ||  [] ;
	return{
	      getData: function(){
	    	// Creating a deferred object
	        var deferred = $q.defer();
    		if (vehicleRatings.length == 0) {
    			 
    			vehicleRatings = $firebaseArray(ref);
    			vehicleRatings.$loaded().then(function(data) {
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
	    		return vehicleRatings.reduce(function(a, b){return (a.$id==id && a) || (b.$id == id && b)})
	    	}
	    }
	  }
}]);