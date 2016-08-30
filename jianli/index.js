$(document).ready(function() {


	//顶部导航取消
	$("header nav a:not(':first')").click(function(){
		alert("正在努力建设中...请稍等");
		return false;
	});

	$("#demo_info a").click(function() {
		alert("正在努力建设中...请稍等");
		return false;
	});

	$("#header_p").hover(function() {
		$("#header_p1").html("Resume");
		$("#header_p2").html("前端工程师");
	}, function() {
		$("#header_p1").html("FE");
		$("#header_p2").html("个人简历");
	});

	//侧边导航文字切换
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(300);
	});

	// 头像切换
	$("#home_photo2").hover(function(){
		$(this).fadeTo(800,1);
		},function(){
			$(this).stop(true,false).fadeTo(800,0);
	});

	// 技能明细切换
	$(".skill_icon").click(function(){
		$(".skill_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_scale");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(400);
			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
		}
	});

	//首次加载动画
	$("#home_head").css({"margin-top":"100px"});
	$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home_info2").fadeIn(450,function(){
							$(this).next().fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$("aside").fadeIn(300);
									});
								});
							});
						});
					});
				});

	//右边按钮
	var i = 0;
	$('aside a').click(function(){
		$(".skill_int").slideUp(200);
		$(".skill_flag").removeClass("skill_flag_scale");

		$("#home_head").css({"margin-top":"0px"});
		$("#home_info1").css({"display":"none"});
		$("#home_info_box").css({"width":"0"});
		$("#home_info2").css({"display":"none"});
		$("#home_info3").css({"display":"none"});
		$("#home_info4").css({"display":"none"});
		$("#home_info5").css({"display":"none"});

		$("#about_info").css({width:"0px",marginTop:"0",marginBottom:"0"});
		$("#about_info p").eq(0).css({bottom:"-300px"});
		$("#about_info p").eq(1).css({bottom:"-300px"});
		$("#about_info p").eq(2).css({bottom:"-300px"});
		$("#about_info p").eq(3).css({bottom:"-300px"});

		$(".skill_list_content").removeClass("skill_scale");

		$(".exp_scale").removeClass('b_to_t');

		$(".demo_scale").removeClass('b_to_t');

		$(".contact_scale").removeClass('fade_in');

		$(".title_en").remove();
		i = $(this).index();
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
		$(".section").stop().animate({top:-i*653},500);
		if(i==0){
			$("#home_head").css({"margin-top":"100px"});
			$("#home_info1").fadeIn(700,function(){
							$(this).next().animate({width:"800px"},700,function(){
								$("#home_info2").fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$(this).next().fadeIn(450,function(){
											$(this).next().fadeIn(450,function(){
												$("aside").fadeIn(300);
											});
										});
									});
								});
							});
						});
		}
		if(i==1){
			$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
			$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(800);
				});
			$("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},500,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},500,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},500,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},500,function(){
								$("#about_info p").eq(3).animate({bottom:"0"},500);
							});
						});
					});
				});	
		}
		if(i==2){
			$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
			$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(800);
				});
			$(".skill_list_content").addClass("skill_scale");
		}
		if(i==3){
			$("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
			$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(800);
				});
			var a=-1;
				$(".exp_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						a++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*a);
					}
                });
				$("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
		}
		if(i==4){
			$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
			$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(800);
				});
			var a=-1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						a++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*a);
					}
				})
			var j=-1;
				setTimeout(function(){
						$(".contact_scale").each(function(){
							var $this=$(this);
							if(!$this.hasClass("fade_in")){
								j++;
								setTimeout(function(){
					   				$this.addClass("fade_in");
					   			},350*j);
							}
						});
				},70);
			}
	});

	//鼠标滚动事件
	var starttime = 0;
	var endtime = 0;
	var shakStaute = 0;
	$('.section').mousewheel(function(event, delta){
		starttime = new Date().getTime();
		console.log("开始时间:"+starttime);
		if(delta < 0){
			if(i > 3){
				return;
			}
			if(starttime == 0 || (starttime - endtime) >= 500){
				shakStaute=1;
				i++;
				wheel();
				endtime = new Date().getTime();
				console.log("结束时间:"+endtime);
			}
			
		}else if(delta>0&& (starttime == 0 || (endtime - starttime) <= -500)){
			if(i < 1){
				return;
			}
			i--;
			wheel();
			endtime = new Date().getTime();
		}
		function wheel(){
			$(".skill_int").slideUp(200);
			$(".skill_flag").removeClass("skill_flag_scale");

			$("#home_head").css({"margin-top":"0px"});
			$("#home_info1").css({"display":"none"});
			$("#home_info_box").css({"width":"0"});
			$("#home_info2").css({"display":"none"});
			$("#home_info3").css({"display":"none"});
			$("#home_info4").css({"display":"none"});
			$("#home_info5").css({"display":"none"});

			$("#about_info").css({width:"0px",marginTop:"0",marginBottom:"0"});
			$("#about_info p").eq(0).css({bottom:"-300px"});
			$("#about_info p").eq(1).css({bottom:"-300px"});
			$("#about_info p").eq(2).css({bottom:"-300px"});
			$("#about_info p").eq(3).css({bottom:"-300px"});

			$(".skill_list_content").removeClass("skill_scale");

			$(".exp_scale").removeClass('b_to_t');

			$(".demo_scale").removeClass('b_to_t');

			$(".contact_scale").removeClass('fade_in');

			$(".title_en").remove();
			$(".fp-section").stop().animate({top:-i*653},500);
			$('aside a').siblings().removeClass('selected');
			$('aside a').eq(i).addClass('selected');
			if(i==0){
			$("#home_head").css({"margin-top":"100px"});
			$("#home_info1").fadeIn(700,function(){
							$(this).next().animate({width:"800px"},700,function(){
								$("#home_info2").fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$(this).next().fadeIn(450,function(){
											$(this).next().fadeIn(450,function(){
												$("aside").fadeIn(300);
											});
										});
									});
								});
							});
						});
			}
			if(i==1){
			$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
			$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(800);
				});
			$("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},500,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},500,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},500,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},500,function(){
								$("#about_info p").eq(3).animate({bottom:"0"},500);
							});
						});
					});
				});	
			}
			if(i==2){
			$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
			$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(800);
				});
			$(".skill_list_content").addClass("skill_scale");
			}
			if(i==3){
			$("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
			$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(800);
				});
			var a=-1;
				$(".exp_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						a++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*a);
					}
                });
				$("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
			}
			if(i==4){
			$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
			$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(800);
				});
			var a=-1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						a++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*a);
					}
				})
			var j=-1;
				setTimeout(function(){
						$(".contact_scale").each(function(){
							var $this=$(this);
							if(!$this.hasClass("fade_in")){
								j++;
								setTimeout(function(){
					   				$this.addClass("fade_in");
					   			},350*j);
							}
						});
				},70);
			}
		}
	})


	// 图片轮播
	$("#exp_list_slider").width($(".exp_list").width());
	$("#exp_list_content").width($(".exp_list").width()*3);
	$("#exp_list_slider_content").mouseenter(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,1);
	}).mouseleave(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
	});
	var page=1;
	$("#exp_timeline a").click(function(){
		$("#exp_list_content").stop(true,false).animate({left:-$(".exp_list").width()*$(this).index()},1000,"easeInOutCubic");
		page=$(this).index()+1;
		});
	$("#exp_list_toleft").click(function()
    {
		if(!$("#exp_list_content").is(":animated")){
			if(page==1){
				$("#exp_list_content").animate({left:"+=50"},200,function(){
					$(this).animate({left:"-=50"},200);
				});
				return false;
			}	
			$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
			page--;
		}
	});
	$("#exp_list_toright").click(function(){
		if(!$("#exp_list_content").is(":animated")){
			if(page==3){
				$("#exp_list_content").animate({left:"-=50"},200,function(){
					$(this).animate({left:"+=50"},200);
				});
				return;
			}
			$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
			page++;
		}
	});
// 时光轴
	var x=10;
	var y=20;
	$("#exp_timeline a").mouseover(function(e){
		this.aa=this.title;
		this.title="";
		$("body").append("<div class='exp_timeline_title'>"+this.aa+"</div>");	
		$(".exp_timeline_title").css({
			"top":e.pageY+y+"px",
			"left":e.pageX+x+"px"
		}).show("fast");
	}).mouseout(function(){
		this.title=this.aa;
		$(".exp_timeline_title").remove();
	}).mousemove(function(e){
		$(".exp_timeline_title").css({
			"top":e.pageY+y+"px",
			"left":e.pageX+x+"px"
		});
	}).click(function(){
		return false;
	});
});