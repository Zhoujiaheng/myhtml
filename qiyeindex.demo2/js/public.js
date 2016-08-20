$(document).ready(function(){
	//输入框判断
	$(".search a").click(function() {
		var a = $("#search").val();
		if(a == ""){
			alert("请输入关键字");
		}
	});

	//serch下拉显示隐藏
	$(".select_0").click(function() {
		$(".select_0 dd").toggle();
	});

	//nav二级菜单显示隐藏
	$("nav li").hover(function() {
		$(this).find('dl').show();
	}, function() {
		$(this).find('dl').hide();
	});

	//轮播
	var begin = $(".slider6 div").eq(0).stop().fadeIn(500);
	$(".bx-pager li").eq(0).addClass('active');
	var i = 0;
	$(".bx-prev").click(function() {
		i--;
		if(i == -1){
			i = 4;
		}
		fade();
		clearInterval(interval);
	});
	$(".bx-next").click(function() {
		i++
		if(i == 5){
			i = 0;
		}
		fade();
		clearInterval(interval);
	});
	//鼠标划入圆点
	$(".bx-pager li").click(function() {
		var index = $(this).index();
		i = index;
		fade();
		clearInterval(interval);
	});
	//公用fade动画方法
	function fade(){
		begin.stop().fadeOut(500);
		begin = $(".slider6 div").eq(i).stop().fadeIn(500);
		$(".bx-pager li").eq(i).addClass('active').siblings().removeClass('active');
	};
	//自动轮播
	function automatic(){
		i++
		if(i == 5){
			i = 0;
		}
		fade();
	};
	interval = setInterval(automatic,5000);
})