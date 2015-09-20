'use strict';

app.controller('TaskController', function($scope, $routeParams){
    $scope.criticalBugs = [];
    $scope.criticalBugsCount = $scope.criticalBugs.length | 2;
});