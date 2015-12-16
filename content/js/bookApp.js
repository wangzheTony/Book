
// 标签模块
var labelApp = angular.module("labelsApp",[]);

labelApp.controller("labelsCtrl",function($scope,$http){ 
   $http({
    url:'',
    method:'GET'
    }).success(function(){ console.log('success');
        //响应成功

    }).error(function(){console.log('error');
        $scope.names = ts_lables;
        $scope.friends = ts_book_friends;
    });
});





/************************************虚拟数据*************************************/

//标签
var ts_lables = [
	{"name":"推理","url":"labels.html"},
	{"name":"国学","url":"labels.html"},
	{"name":"潮流文学","url":"labels.html"},
	{"name":"浪漫主义","url":"labels.html"},
	{"name":"互联网思维","url":"labels.html"},
	{"name":"自由","url":"labels.html"},
	{"name":"青春文学","url":"labels.html"},
	{"name":"爱情","url":"labels.html"},
	{"name":"自由国度","url":"labels.html"},
	{"name":"爱情","url":"labels.html"},
	{"name":"魅力","url":"labels.html"},
	{"name":"国学","url":"labels.html"}
];

//书友
var ts_book_friends = [
	{"name":"爱啥饭的逗逼",
	"url":"my-home.html",
	"img":"../content/images/test/head-0.png",
	"gzh":"booksoil123",
	"label":"323"},
	{"name":"爱啥饭的逗逼",
	"url":"my-home.html",
	"img":"../content/images/test/head-0.png",
	"gzh":"booksoil123",
	"label":"323"},
	{"name":"爱啥饭的逗逼",
	"url":"my-home.html",
	"img":"../content/images/test/head-0.png",
	"gzh":"booksoil123",
	"label":"323"},
	{"name":"爱啥饭的逗逼",
	"url":"my-home.html",
	"img":"../content/images/test/head-0.png",
	"gzh":"booksoil123",
	"label":"323"},
	{"name":"爱啥饭的逗逼",
	"url":"my-home.html",
	"img":"../content/images/test/head-0.png",
	"gzh":"booksoil123",
	"label":"323"},
];