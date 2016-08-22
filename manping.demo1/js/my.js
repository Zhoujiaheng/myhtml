$(document).ready(function() {
	//右边按钮
	var i = 0;
	$('#header ul li').click(function(){
		i = $(this).index();
		$(this).siblings().children().removeClass('on');
		$(this).children().addClass('on');
		$("#content .content-section").stop().animate({top:-i*653},500);
		hide();
	});

	//下边按钮
	$('#scroll').click(function() {
		i++;
		$("#content .content-section").stop().animate({top:-i*653},500);
		$('#header ul li').siblings().children().removeClass('on');
		$('#header ul li').eq(i).children().addClass('on');
		hide();
	});

	//到最低端隐藏下边按钮
	function hide() {
		if( i == 3 ){
			$('#scroll').css('display',"none");
		}else{
			$('#scroll').css('display','block');
		}
	};
	
	//鼠标滚动事件
	var starttime = 0;
	var endtime = 0;
	var shakStaute = 0;
	$('#content').mousewheel(function(event, delta){
		starttime = new Date().getTime();
		console.log("开始时间:"+starttime);
		if(delta < 0){
			if(i > 2){
				return;
			}
			if(shakStaute>=0 &&(starttime == 0 || (starttime - endtime) >= 500)){
				shakStaute=1;
				i++;
				wheel();
				endtime = new Date().getTime();
				console.log("结束时间:"+endtime);
			}
			
		}else if(delta>0 && shakStaute==1 && (starttime == 0 || (endtime - starttime) <= -500)){
			if(i < 1){
				return;
			}
			i--;
			wheel();
			endtime = new Date().getTime();
		}
		function wheel(){
			$("#content .content-section").stop().animate({top:-i*653},500);
			$('#header ul li').siblings().children().removeClass('on');
			$('#header ul li').eq(i).children().addClass('on');
			hide();
		}
	})
});