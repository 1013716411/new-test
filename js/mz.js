
      //头部
      $(function(){
            $(".nav li").hover(function(){

                $(".bg").stop().animate({height:74+$(this).children(".two").height()},400)
                $(this).children(".two").stop(false,true).slideDown(300)
            },function(){
                $(".bg").stop().animate({height:74},300)
                $(this).children(".two").stop(false,true).slideUp(300)
                
            })
        })

        //魅族
        $(function(){
            var win_h =$(window).height()*0.7;
            var con1_t = $(".con1 .inner").offset().top-win_h;
            var con2_t = $(".con2 .inner").offset().top-win_h;
            var con3_t = $(".con3 .inner").offset().top-win_h;
            var con4_t = $(".con4 .inner").offset().top-win_h;
            $(window).scroll(function(){
                var s_top = $(this).scrollTop();
                if(s_top >= con1_t){
                        $(".con1 .inner").addClass("act")
                }
                if(s_top >= con2_t){
                        $(".con2 .inner").addClass("act")
                }
                if(s_top >= con3_t){
                        $(".con3 .inner").addClass("act")
                }
                if(s_top >= con4_t){
                        $(".con4 .inner").addClass("act")
                }
            })
        })
          //返回顶部
           $(function(){
            $(window).scroll(function(){
                if($(window).scrollTop()>100){
                    $("#top").fadeIn(1500)
                }else{
                    $("#top").fadeOut(1500)
                }
            })
            $("#top").click(function(){
                if($("html").scrollTop()){
                   $("html").animate({scrollTop:0},1000)
                }else{
                   $("body").animate({scrollTop:0},1000)
                }
            })
           })
       
       
