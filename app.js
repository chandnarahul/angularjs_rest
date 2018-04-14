var restApiDemo = angular.module('restApiDemo', ['ngRoute', 'postData', 'albumData']);

postData.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "templates/blank.html"
        });
});