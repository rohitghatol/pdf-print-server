/**
 * Created by rohitghatol on 9/30/15.
 */

angular.module('app',[])
    .controller('LoginCtrl',['$scope',function($scope){
        $scope.loggedIn = false;
        $scope.login = function(){
            $scope.loggedIn = true;
        }

        $scope.cancel = function(){
            $scope.loggedIn = false;

            $scope.username = '';
            $scope.password = '';

        }
    }])
    .controller('PrintCtrl',['$scope','$interval',function($scope,$interval){
        $scope.ready = false;
        $scope.title = 'Loading';

        var count = (Math.floor(Math.random() * 5) + 10);

        $scope.counter = count;
        $interval(function(){
            $scope.counter--;
            if($scope.counter == 0 ){
                $scope.ready = true;
                $scope.title = 'done';
            }
        }, 1000, count);


    }])