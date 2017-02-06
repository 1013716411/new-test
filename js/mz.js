
      //头部
      $(function(){
            $(".nav li").hover(function(){

                $(".bg").stop().animate({height:74+$(this).children(".two").height()},400)
                $(this).children(".two").stop(false,true).slideDown(500)
            },function(){
                $(".bg").stop().animate({height:74},300)
                $(this).children(".two").stop(false,true).slideUp(600)
                
            })
                //第二菜单
            $(".btn").click(function(){
               $(this).find("dl").stop(false,true).slideToggle(600);
         })
           
     })
      //联系按钮
       $('.tail,.tail-dd').click(function(){
                  $('html,body').animate({scrollTop:$('.footer').offset().top},1000);
              })

        //文字
            var Herght_h =$(window).height()*0.7;
            var con1_t = $(".con1 .inner").offset().top-Herght_h;
            var con2_t = $(".con2 .inner").offset().top-Herght_h;
            var con3_t = $(".con3 .inner").offset().top-Herght_h;
            var con4_t = $(".con4 .inner").offset().top-Herght_h;
            $(window).scroll(function(){
                var top_h = $(this).scrollTop();
                if(top_h >= con1_t){
                        $(".con1 .inner").addClass("act")
                }
                if(top_h >= con2_t){
                        $(".con2 .inner").addClass("act")
                }
                if(top_h >= con3_t){
                        $(".con3 .inner").addClass("act")
                }
                if(top_h >= con4_t){
                        $(".con4 .inner").addClass("act")
                }
            })
          //返回顶部
            $(window).scroll(function(){
                if($(window).scrollTop()>100){
                    $("#top").fadeIn(1000)
                }else{
                    $("#top").fadeOut(600)
                }
            })
            $("#top").click(function(){
                if($("html").scrollTop()){
                   $("html").animate({scrollTop:0},1000)
                }else{
                   $("body").animate({scrollTop:0},1000)
                }
            })

       
       
