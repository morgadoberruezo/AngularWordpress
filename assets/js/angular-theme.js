var wpApp = angular.module('wpAngularTheme', ['ui.router', 'ngResource']);


wpApp.factory( 'Posts', function( $resource ){
    return $resource( appInfo.api_url + 'posts/:ID', {
        ID: '@id'
    })
});

wpApp.controller('ListCtrl', ['$scope', 'Posts', function( $scope, Posts){
    console.log('controller');
    $scope.page_title = 'Blog Lisnting';
    
    Posts.query(function(res){
        $scope.posts = res; 
        console.log(res);
    });
}]);

wpApp.controller( 'DetailCtrl', ['$scope', '$stateParams', 'Posts', 
        function( $scope, $stateParams, Posts){
            console.log('detalle');
            console.log("-->".$stateParams);
            Posts.get( { ID: $stateParams.id }, function (res) {
                    console.log('edit');
                    $scope.post = res;
                    console.log(res);
                }
            )
}]);


wpApp.config(function($stateProvider, $urlRouterProvider){
    console.log('ruta');
    $stateProvider
        .state( 'list', {
            url: '/',
            controller: 'ListCtrl',
            templateUrl: appInfo.template_directory + 'templates/list.html'
        })
        .state ( 'detail', {
            url: '/posts/:id',
            controller: 'DetailCtrl',
            templateUrl: appInfo.template_directory + 'templates/details.html'
        });
   // $urlRouterProvider.otherwise('/');
});

//filtro para que se devuelva las entradas con el contenidos html formateado correctamente de WP
wpApp.filter('to_trusted', ['$sce', function ($sce){
    return function (text) {
        return $sce.trustAsHtml (text);
    }
}]);

/*
wpApp.config( ['$routeProvider', function($routeProvider){
   console.log('controller1');
    $routeProvider
    .when('/',{
        templateUrl: appInfo.template_directory + 'templates/list.html',
        controller: 'ListCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
*/