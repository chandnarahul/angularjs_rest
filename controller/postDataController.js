var restApiDemo=angular.module('postData');

restApiDemo.component('postData', {
    template:'<table>'+
    '<tr ng-repeat="post in posts">'+
        '<td>{{post.userId}}</td>'+
        '<td>{{post.id}}</td>'+
        '<td>{{post.title}}</td>'+
        '<td>{{post.body}}</td>'+
        '<td><input type="button" value="delete"></td>'+
    '</tr>'+
    '</table>',
    controller: function postDataController($scope, $http) {
        $http.get('https://jsonplaceholder.typicode.com/posts').
            then(function(response) {
                $scope.posts = response.data;
            });
    }
});