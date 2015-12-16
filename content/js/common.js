/**
 * Created by Administrator on 15-4-18.
 */

 $(document).ready(function () {
    //返回顶部
    $.goup({
        trigger: 100,
        bottomOffset: 30,
        locationOffset: 100,
        title: '',
        titleAsText: true
    });
});
 
$(function(){

    //导航栏切换
    $(".top-bar-nav a").click(function(){
        $(this).parents(".top-bar-nav").find("a").removeClass("current");
        $(this).addClass("current");
    });

    //热门标签切换
    $(".item-title li").click(function(){
        $(this).siblings("li").removeClass("current");
        $(this).addClass("current");
    });

    //标签导航栏切换
    $(".tag-nav li").click(function(){
        $(this).siblings("li").removeClass("current");
        $(this).addClass("current");
    });

    //大家常去的标签切换
    $(".tag-list .tag").click(function(){
        $(this).siblings(".tag").removeClass("tag-current");
        $(this).addClass("tag-current");
    });

    //
    $("#top-bar-user,.user-setup").mouseover(function(){
        $(".user-setup").show();
    }).mouseleave(function(){
        $(".user-setup").hide();
    });


    //子导航切换
    $(".item-nav li").click(function() {
        $(this).parents("ul").find(".current").removeClass('current');
        $(this).addClass('current');
    });

    /*******************************消息*********************************/
    
    $("body").delegate("#li-answer","click",function(){
        $(".message-list ul,.message-list dl").hide();
        $(".msg-nav").hide();
        $(".message-list").show();
        $(".answer-list").show();
    });
    $("body").delegate("#li-approve","click",function(){
        $(".message-list ul,.message-list dl").hide();
        $(".msg-nav").hide();
        $(".message-list").show();
        $(".appro-list").show();
    });
    $("body").delegate("#li-invite","click",function(){
        $(".message-list ul,.message-list dl").hide();
        $(".msg-nav").hide();
        $(".message-list").show();
        $(".invite-list").show();
    });
    $("body").delegate("#li-attention","click",function(){
        $(".message-list ul,.message-list dl").hide();
        $(".msg-nav").hide();
        $(".message-list").show();
        $(".attention-list").show();
    });
    $("body").delegate("#li-seed","click",function(){
        $(".message-list ul,.message-list dl").hide();
        $(".msg-nav").hide();
        $(".message-list").show();
        $(".seed-list").show();
    });

    //返回
    $("body").delegate("#btn-return","click",function(){
        $(".msg-nav").show();
        $(".message-list").hide();

    });

    //消息栏显示
    $("body").delegate("#top-bar-message","click",function(){
        $("#message").show();
        $("#triangle").show();
        
        $(this).find(".info").removeClass("msg").text("信");
    });

    //点击其他地方时，隐藏弹出框
    $(document).bind("click",function(event){
        var e = event || window.event; 
        var elem = e.srcElement||e.target; 
        while(elem) 
        { 
            if(elem.id == "top-bar-message" || elem.id == "message" || elem.id == "login-box" || elem.id == "register-box") 
            { 
                return; 
            } 
            elem = elem.parentNode;      
        } 
       
       $('#message').hide();
       $("#triangle").hide();
       $("#login-box").hide();
       $("#register-box").hide();
       
     });  
     

    // 跟踪问题
   $(".tracking-problem").click(function(){
        if(!$(this).hasClass("current")){
            $(this).addClass("current").text("- 取消跟踪");
        }else{
            $(this).removeClass("current").text("+ 跟踪问题");
        }
   });
   //回答问题列表
   $(".relay-list").click(function(){
        $(this).parents("dl").find(".reply-box").slideToggle(500);
   });

   $(".search-box input").focus(function(){
        $(this).addClass("current");
   }).blur(function(){
        $(this).removeClass("current");
   });

   //导航栏自动伸缩
   $(window).scroll(function(){
        var _scrollTop = $(document).scrollTop();
        if (_scrollTop>300) {

            $(".top-bar").animate({top:"-100px"},10);
            $(".top-bar").css("position","absolute");
        }
        else{
            $(".top-bar").css("position","fixed");
            $(".top-bar").animate({top:"0px"},10);
        }
   });

   //搜索框操作
   $(".search-box span").click(function(){
        location.href="search.html";
   });

   //回车搜索
   $(".search-box input").keyup(function(){
    if (event.keyCode == 13) {
         location.href="search.html";
    }
   });

   //添加标签
   $("body").on("mouseenter",".tag-mini",function(){ 
        $(this).append("<em class='close' title='关闭'></em>");
        $(this).find("em").click(function(){
            $(this).parents(".tag-mini").remove();
        })
   });

   $("body").on("mouseleave",".tag-mini",function(){ 
        $(this).find("em").remove();
   });


   //未登录
   $(".j-unlogin").mouseenter(function(){
      
      $(".j-login-box").show();
      
      // $(".j-login-box").mouseleave(function(){
      //   $(".j-login-box").hide();
      // })
   });

   //未注册
   $(".j-unregister").mouseenter(function(){
      $(".j-register-box").show();

      // $(".j-register-box").mouseleave(function(){
      //   $(".j-register-box").hide();
      // });
   });


   //下拉框
   $("body").on("click",".drop-down",function(){
        if (!$(this).hasClass("current")) {
            $(this).find("ul").show();
            $(this).addClass("current");
            $(this).find("em").css("transform","rotate(180deg)");
        }else{
            $(this).find("ul").hide();
            $(this).removeClass("current");
            $(this).find("em").css("transform","rotate(0deg)");
        }
        
        var _txt = $(this).find(".val");
         
        $(this).on("click","li",function(){
            _txt.text($(this).text());
        })
   });

   $("body").on("click",".youcai",function(){
        if($(this).hasClass("current")){
            $(this).removeClass("current");
        }else{
            $(this).addClass("current");
        }

   })

});

/** 弹框 **/
function dialog(id){

    $("body").append("<div class='fullbg' style='width:100%; height:100%; background:#000; opacity:0.5; position:fixed; top:0; left:0; z-index:1001;'></div>")

    var bw = $(window).width(),
        bh = $(window).height();
    var _left = bw/2-id.width()/2;
    var _top = bh/2-id.height()/2; 

    id.css({left:_left,top:_top});

    id.show();

    $(".dialog-close").bind("click",function(){
        id.hide(); 
        $(".fullbg").remove(); 
    })

}



