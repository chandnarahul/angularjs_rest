var postData = angular.module('postData', ['ngRoute']);

postData.component('postData', {
    templateUrl: 'templates/post_data.html',
    controller:
        function postDataController($scope, $routeParams) {
            //this will execute on controller load
            /*$http.get('https://jsonplaceholder.typicode.com/posts/12').
                then(function(response) {
                    $scope.post = response.data;
                });
                */

            if (!$routeParams.adminId) {
                //$location.path('/somewhereElse');
                console.log('$routeParams is empty');
            } else {
                console.log('$routeParams is ' + $routeParams.adminId);
            }
            $scope.post = {
                "userId": 2,
                "id": 12,
                "title": "in quibusdam tempore odit est dolorem",
                "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
            };

            $scope.updatePost = function (id) {
                $scope.post = {"userId": 12, "id": 112, "title": "updated", "body": "updated on [" + new Date() + "]"};
            }

        }

});

postData.config(function ($routeProvider) {
    $routeProvider
        .when("/admin/:adminId", {
            templateUrl: "templates/default_view.html",
        })
        .when("/admin", {
            templateUrl: "templates/default_view.html"
        });
});