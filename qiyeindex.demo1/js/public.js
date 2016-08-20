// 备注代码为多种代码实现
$(document).ready(function(){
	//语言版本动画效果
	$("#langs").hover(
		function() {
			$(this).stop().animate({marginRight:'-5px'},"fast");
		},
		function() {
			$(this).stop().animate({marginRight:'-164px'},"fast");
		}
	);
	$("#langs img").hover(
		function() {
			if($(this).attr("src").indexOf('_on.')<0){
				$(this).attr("src",function(x,old) {
			 	return old.replace('.','_on.');
			 });	
			}
		},
		function() {
			$(this).attr("src",function(x,old) {
				return old.replace('_on.','.');
			});
		}
	)

	//导航栏上方样式控件
	var links = $(".nav_ul a"),
        link  = null,
        tag   = 0,
        width = 0,
        left  = 0,
        topmark = $("<li class='topmark'></li>");

    // 初始化当前
    for (var i=0,len=links.length; i<len; i++) {
        link = links.eq(i);
    }
    if (tag === 0) {
        init(links.eq(0));
    }
    function init(link) {
        width = link.width();
        left  = link.position().left + 13;
        $(".nav_ul").append(topmark.animate({"width":width, "left":left}, 500, function() {
                links.hover(hoverOn, hoverOut);
            }));
    }
    function hoverOn() {
        link = $(this);
        control(link.width(), link.position().left+13);
    }
    function hoverOut() {
        control(width, left);
    }
    function control(width, left) {
        topmark.stop().animate({"width":width, "left":left}, 300);
    }

    //搜索栏控件
    
    // (function(){
    // 	var opened = false;
    //     $("#search").find(".inp_btn").on("click", function() {
    //         if (opened) {
    //             $("#search").stop().animate({"width":41}, 300);
    //         } else {
    //             $("#search").stop().animate({"width":149}, 300);
    //         }
    //         opened = !opened;
    //     });
    // }());
    var x = $("#search .inp_btn").width();
    $("#search .inp_btn").click(function(){
    	if(x == 41){
    		$("#search").stop().animate({"width":149}, 300);
    		x = 149;
    	}else{
    		$("#search").stop().animate({"width":41}, 300);
    		x = 41;
    	}
    });

    //轮播
    var begin = $(".pics li").eq(0).stop().fadeIn(500);
    $(".idxs li").first().addClass('on');
    var i=0;
    var size = $(".pics li").size();
    //左按钮
   	$(".btns .left").click(function(){
   		i--;
   		if(i==-1){
   			i=size-1;
   		}
   		fade();
   		// begin.stop().fadeOut(500);
   		// begin = $(".pics li").eq(i).stop().fadeIn(500);
   		// $(".idxs li").eq(i).addClass('on').siblings().removeClass('on');
   		// $(".pics li").eq(i-3).stop().fadeOut(500);
   	});
   	//右按钮
	$(".btns .right").click(function(){
		i++;
		if(i==size){
			i=0;
		}
		fade();
		// begin.stop().fadeOut(500);
    	//	begin = $(".pics li").eq(i).stop().fadeIn(500);
  		//  		$(".idxs li").eq(i).addClass('on').siblings().removeClass('on');
   		// $(".pics li").eq(i-1).stop().fadeOut(500);
	});
	//鼠标划入下标圆点
	$(".idxs li").hover(function() {
		var index = $(this).index();
		i = index;
		fade();
	});
	//公用的fade方法
	function fade(){
		begin.stop().fadeOut(500);
		begin = $(".pics li").eq(i).stop().fadeIn(500);
		$(".idxs li").eq(i).addClass('on').siblings().removeClass('on');
	}
	//左右按钮呼出动画
	$("#banner").hover(
		function(){
			$(".btns .left").stop().animate({"left":100},200);
			$(".btns .right").stop().animate({"right":100},200);
		},
		function(){
			$(".btns .left").stop().animate({"left":-44},200);
			$(".btns .right").stop().animate({"right":-44},200);
		}
		);

	// 新闻
	var beginNew = $(".body a").eq(0).fadeIn();
	var idx = 0;
	$(".news a").hover(function(){
		var index = $(this).index();
		i = index;
		if(i === idx) return;
		idx = i;
		$(".news .abs").stop().animate({"left":$(this).position().left}, 300, function(){
			beginNew.stop().fadeOut(300);
			beginNew = $(".body a").eq(i).stop().fadeIn(300);
		});
	})

	// (function() {
	//        var 
	        
	//            idx   = 0,
	//            li    = $(".news").find(".head a:not(.more)").eq(0),
	//            item  = $(".body a").eq(0).show();

	//        $(".news .head a:not(.more)").hover(function(on, i) {
	//            on = $(this);
	//            i  = on.index();
	//            if (i === idx) return;
	//            idx = i;
	//            $(".news .abs").stop().animate({'left':on.position().left}, 300, function() {
	//                callback(i);
	//            //     item.stop().fadeOut(300);
	//            // item = $(".body a").eq(i).stop().fadeIn(300);
	//            });
	//        });

	// function callback(i) {
	//  //    if (isIE && ieVS<=8) {
	// 	// callback = function(i) {item.hide(); item = items.eq(i).show();}
	//  //    } else {
	// 	callback = function(i) {
	// 	    item.stop().fadeOut(300);
	//             item = $(".body a").eq(i).stop().fadeIn(300);
	// 	}
	//     // }
	//     callback(i);
	// }
	//     }());

	//集团
	$(".group").hover(function(){
		$(".hull").stop(false,true).fadeIn(500);
	},function(){
		$(".hull").stop().fadeOut(500);
	});

	$(".hull a").hover(function(){
		$(".hull .abs").stop(false,true).animate({"width":$(this).outerWidth(),"left":$(this).position().left},200);
	});

	//公司下拉框隐藏显示
    // var    opened = false;
    // var    opened2 = false;
    // // $(".drops").eq(1).attr("style", "height: 0px;");
    // $('#content .wrapper .company .a2').on('click', function() {
    //     if (opened2) {
    //         control2(true);
    //     } else {
    //     	control(true);
    //         control2(false);
    //     }
    // });
    // $('#content .wrapper .company .a3').on('click', function() {
    //     if (opened) {
    //         control(true);
    //     } else {
    //     	control2(true);
    //         control(false);
    //     }
    // });
    // function control2(flag,w){
    //     if (flag) {
    //         w = 0;
    //         // $('#content .wrapper .company .a2').removeClass("on");
    //     } else {
    //         w = 100;
    //         // $('#content .wrapper .company .a2').addClass("on");
    //     }
        
    //     $(".drops").eq(0).stop().animate({"height": w},500);
    //     opened2 = !flag;
    // }
    // function control(flag, w) {
    //     if (flag) {
    //         w = 0;
    //         // $('#content .wrapper .company .a3').removeClass("on");
    //     } else {
    //         w = 90;
    //         // $('#content .wrapper .company .a3').addClass("on");
    //     }
        
    //     $(".drops").eq(1).stop().animate({"height": w},500);
    //     opened = !flag;
    // }
    // $(".drops .wrapper .out").eq(1).on('click',function(){
    // 	control(true);
    // });
    // $(".drops .wrapper .out").eq(0).on('click',function(){
    // 	control2(true);
    // });



    // var h2 = $(".drops").eq(0).height();
    // var h3 = $(".drops").eq(1).height();
    // $(".company .a2").click(function(){
    // 	if(h2 == 0 && h3 ==0){
    // 		$(".drops").eq(0).stop().animate({"height": 100},300);
    // 		$(this).addClass('on');
    // 		h2 = 100;
    // 	}else if(h2 == 0 && h3 !==0){
    // 		$(".drops").eq(1).stop().animate({"height": 0},300);
    // 		$(".company .a3").removeClass('on');
    // 		h3 = 0;
    // 		$(".drops").eq(0).stop().animate({"height": 100},300);
    // 		$(this).addClass('on');
    // 		h2 = 100;
    // 	}else{
    // 		$(".drops").eq(0).stop().animate({"height": 0},300);
    // 		$(this).removeClass('on');
    // 		h2 = 0;
    // 	}
    // });
    // $(".company .a3").click(function(){
    // 	if(h3 == 0 && h2 ==0){
    // 		$(".drops").eq(1).stop().animate({"height": 100},300);
    // 		$(this).addClass('on');
    // 		h3 = 100;
    // 	}else if(h3 == 0 && h2 !== 0){
    // 		$(".drops").eq(0).stop().animate({"height": 0},300);
    // 		$(".company .a2").removeClass('on');
    // 		h2 = 0;
    // 		$(".drops").eq(1).stop().animate({"height": 100},300);
    // 		$(this).addClass('on');
    // 		h3 = 100;
    // 	}else{
    // 		$(".drops").eq(1).stop().animate({"height": 0},300);
    // 		$(this).removeClass('on');
    // 		h3 = 0;
    // 	}
    // });
    // $(".out").eq(0).click(function(){
    // 	$(".drops").eq(0).stop().animate({"height": 0},300);
    // 		$(".company .a2").removeClass('on');
    // 		h2 = 0;
    // })
    // $(".out").eq(1).click(function(){
    // 	$(".drops").eq(1).stop().animate({"height": 0},300);
    // 		$(".company .a3").removeClass('on');
    // 		h3 = 0;
    // })

    var open = false,
    	open2 = false;
	$(".company .a2").click(function(){
		if(open){
			c1(true);
		}else{
			c2(true);
			c1(false);
		}
	})
	$(".company .a3").click(function(){
		if(open2){
			c2(true);
		}else{
			c1(true);
			c2(false);
		}
	})
	function c1(x){
		if(x){
			a = 0;
			$(".company .a2").removeClass('on');
		}else{
			a = 100;
			$(".company .a2").addClass('on');
		}
		$(".drops").eq(0).stop().animate({"height": a},500);
		open = !x;
	}
	function c2(x){
		if(x){
			a = 0;
			$(".company .a3").removeClass('on');
		}else{
			a = 100;
			$(".company .a3").addClass('on');
		}
		$(".drops").eq(1).stop().animate({"height": a},500);
		open2 = !x;
	}
	$(".drops .out").eq(0).click(function(){
		c1(true);
	});
	$(".drops .out").eq(1).click(function(){
		c2(true);
	});

	//版权弹出
	$("#footer .teshu").click(function(){
		$(".copyright").stop(false, true).fadeIn(500);
	});
	$(".copyright").click(function(){
	$(".copyright").stop(false, true).fadeOut(500);
	});
});