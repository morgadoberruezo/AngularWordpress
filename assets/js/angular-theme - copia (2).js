var miApp = angular.module('wpAngularTheme', ['ngRoute']);
/*

miApp.config( ['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl: 'templates/inicio.html',
        controller: 'inicio'
    })

//var wpApp = angular.module("wpAngularTheme");


/* creamos el servicio Posts */
/*
wpApp.factory( 'Posts', function( $resource ){
    return $resource( appInfo.api_url + 'posts/:ID', {
        ID: '@id'
    })
});
/*
wpApp.controller('ListCtrl', ['$scope', 'Posts', function( $scope, Posts){
    console.log('controller');
    $scope.page_title = 'Blog Lisnting';
    
    Posts.query(function(res){
        $scope.posts = res; 
    });
}]);

/*
wpApp.config( function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwhise('/');
    $stateProvider
        .state( 'list', {
            url: '/',
            controller: 'ListCtrl',
            templateUrl: appInfo.template_directory + 'templates/list.html'
    })
});