/* ============================================================
	耕 模块
   ===========================================================*/
//测试的url
var apiKey = 'https://secure.npr.org/account/verify?id=21492904&code=35ae305d94ee5d55f29a5ef473e935a3',
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';
 
var viewModel = {
	getQuestionList: function(){
		// $http({
		// 	method:'JSONP',
		// 	url:nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
		// }).success(function(data,status){ 
		// 	$scope.question_list = question_list;
			
		// }).error(function(data,status){
		// 	alert("error");
		// });
	},
	question_list: ko.observableArray([
		{
			title:"在《红楼梦》这部文学名著中，你如何评价林黛玉？",
			url:"question-detail.html",
			time:"2015-12-12",
			userName:"小兵1",
			userUrl:"my-home.html",
			imgUrl:"../content/images/test/head-0.png",
			isTrack:0,
		},
		{
			title:"在《红楼梦》这部文学名著中，你如何评价林黛玉？",
			url:"question-detail.html",
			time:"2015-12-12",
			userName:"小兵11",
			userUrl:"my-home.html",
			imgUrl:"../content/images/test/head-0.png",
			isTrack:0,
		},
		{
			title:"在《红楼梦》这部文学名著中，你如何评价林黛玉？",
			url:"question-detail.html",
			time:"2015-12-12",
			userName:"小兵11",
			userUrl:"my-home.html",
			imgUrl:"../content/images/test/head-0.png",
			isTrack:0,
		}
	])
}






//问题
// var questions = {
// 	title:"在《红楼梦》这部文学名著中，你如何评价林黛玉？",
// 	url:"question-detail.html",
// 	time:"2015-12-12",
// 	userName:"小兵",
// 	userUrl:"my-home.html",
// 	imgUrl:"../content/images/test/head-0.png",
// 	isTrack:0,
// }
ko.applyBindings(viewModel);