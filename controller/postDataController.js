var restApiDemo=angular.module('postData');

restApiDemo.component('postData', {
    template:'/views/post_data.html',
    controller: function postDataController($scope, $http) {
        $http.get('https://jsonplaceholder.typicode.com/posts').
            then(function(response) {
                $scope.posts = response.data;
            });
    }
});