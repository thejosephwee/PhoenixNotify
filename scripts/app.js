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