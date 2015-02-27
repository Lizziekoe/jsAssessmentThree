var newspaperTracker = angular.module("newspaperTracker", ['ui.router']);

newspaperTracker.config(function($stateProvider){
	$stateProvider.state('home',{
    url: "",
    templateUrl: "partials/home.html"
  });
});