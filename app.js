var restApiDemo = angular.module('restApiDemo', ['ngRoute', 'postData', 'albumData']);

restApiDemo.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "templates/blank.html"
        })
        .when("/admin/:adminId", {
            templateUrl: "templates/default_view.html",
        })
        .when("/admin", {
            templateUrl: "templates/default_view.html"
        });
});