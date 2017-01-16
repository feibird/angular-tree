var app = angular.module('app', []);
app.controller('Ctrl', function ($scope) {
    $scope.list = [
        {name: '水果', id: 1, children: [{name:'水果1',id:2},{name:'水果2',id:2}]},
        {name: '水果', id: 1, children: [{name:'水果1',id:2},{name:'水果2',id:2}]},
        {name: '水果', id: 1, children: [{name:'水果1',id:2},{name:'水果2',id:2}]},
        {name: '水果', id: 1, children: [{name:'水果1',id:2},{name:'水果2',id:2}]},
        {name: '水果', id: 1, children: [{name:'水果1',id:2},{name:'水果2',id:2}]},
        {name: '水果', id: 1, children: [{name:'水果1',id:2},{name:'水果2',id:2}]}
    ]
})