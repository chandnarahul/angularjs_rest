var restApiDemo = angular.module('albumData');

restApiDemo.component('albumData', {
    templateUrl: 'templates/album_data.html',
    controller:
        function albumDataController($scope, $http) {
            //this will execute on controller load
            /*$http.get('https://jsonplaceholder.typicode.com/albums/12').
                then(function(response) {
                    $scope.album = response.data;
                });
            */
            $scope.album = { "userId": 2, "id": 12, "title": "consequatur autem doloribus natus consectetur" };
            $scope.updateAlbum = function (id) {
                $scope.album = { "userId": 2, "id": 12, "title": "updated on [" + new Date() + "]" };
            }

        }
});