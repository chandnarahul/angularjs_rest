var restApiDemo=angular.module('postData');

restApiDemo.component('postData', {
    //templateUrl:'templates/post_data.html'
    template:'<table>'+
    '<tr ng-repeat="post in posts">'+
        '<td>{{post.userId}}</td>'+
        '<td>{{post.id}}</td>'+
        '<td>{{post.title}}</td>'+
        '<td>{{post.body}}</td>'+
        '<td><input type="button" value="delete" ng-click="deletePost(post.id)"></td>'+
    '</tr>'+
    '</table>',
    controller: 
    function postDataController($scope, $http) {
        //this will execute on controller load
        $http.get('https://jsonplaceholder.typicode.com/posts').
            then(function(response) {
                $scope.posts = response.data;
            });
        
        $scope.deletePost = function(id) {
           alert('deleted '+id);
        }
        
    }
});