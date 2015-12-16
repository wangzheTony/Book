

// 标签控制器
labelApp.controller("labelsCtrl",function($scope,$http){ 
   $http({
    url:'data.json',
    method:'GET'
    }).success(function(data,header,config,status){ console.log(1);
        //响应成功

    }).error(function(data,header,config,status){console.log(11);
        $scope.names = ts_lables;
    });
});