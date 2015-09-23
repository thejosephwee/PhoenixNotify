/**
 * Created by jwee on 19/09/2015.
 */
'use strict';

var app = angular
    .module('PhoenixNotifyApp',[
        'ngResource',
        'ngRoute'
    ])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'views/main.html',
                controller: 'TaskController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

app.directive('chart', function() {
    
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '=data'
        },
        template: '<div class="chart"></div>',
        link: function(scope, element, attrs) {
            
            var chart = new google.visualization.LineChart(element[0]);
            var options = {};
            
            scope.$watch('data', function(v) {
                
                var data = google.visualization.arrayToDataTable(v);
                chart.draw(data, options);
                
            });
            
        }
    };
    
});

app.controller('ChartController', function($scope) {
    
    $scope.scoreHistory = [];
    $scope.loadDataFromServer = function() {
        
        var x = [
            ['interval', 'count']
        ];
        
        var scoreHistory = [
            {
                intervalStart: 12,
                count: 20
            },
            {
                intervalStart: 100,
                count: 200
            },
            {
                intervalStart: 200,
                count: 50
            },
            {
                intervalStart: 250,
                count: 150
            }
        ];
        
        angular.forEach(scoreHistory, function(record, key) {
            
            x.push([
                record.intervalStart,
                record.count
            ]);
            
        });
        
        $scope.scoreHistory = x;
        
    };
    
});

google.setOnLoadCallback(function() {
    
    angular.bootstrap(document, ['app']);
    
});

google.load('visualization', '1', {packages: ['corechart']});