// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
    window.plugins.googleplus.login(
    	    {
    	      'iOSApiKey': '1077293768213-8unnin1ulmi0vv5vi1434av200rrv5ra.apps.googleusercontent.com'
    	      // there is no API key for Android; you app is wired to the Google+ API by listing your package name in the google dev console and signing your apk (which you have done in chapter 4)
    	    },
    	    function (obj) {
    	      alert(JSON.stringify(obj)); // do something useful instead of alerting
    	    },
    	    function (msg) {
    	      alert('error: ' + msg);
    	    }
    	);
    
    /*facebookConnectPlugin.login(['email'], function(response){
    	alert(JSON.stringify(response));
    }, function(error){
    	alert(JSON.stringify(error));
    });*/
    /*
    $('#lnkHome').bind('click', function(event) {
	    alerta();
    });
    
    
    navigator.notification.activityStart("Enviando alerta....", "Conectando");
    setTimeout(function loadMyUrl(){ navigator.notification.activityStop(); }, 3000 );     
    */
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
    url: "/home",
    templateUrl: "home.html"
  })
    .state('sospecha', {
    url: "/sospecha",
    templateUrl: "sospecha.html",
    controller:'sospecha'
  })
    .state('grupos', {
    url: "/",
    templateUrl: "grupos.html",
    controller:'grupos'
  })
  $urlRouterProvider.otherwise('/');

});
