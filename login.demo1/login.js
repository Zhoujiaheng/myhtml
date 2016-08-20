$(document).ready(function(){
	$(".box .opacity_submit").hover(
		function(){
			$(this).addClass('go');
		},function(){
			$(this).removeClass('go');
		}
	);
	$("button").click(function longin(){
		// console.info("点击了登录");
	  var userName = $("#uName").val();
	  // console.info(userName)
	  var userPass = $("#uPass").val();
	  // console.info(userPass);
	  if (userName == "" || userName == null) {
	    alert("用户名不能为空");
	    return false;
	  } else if (userPass == "" || userPass == null) {
	    alert("密码不能为空");
	    return false;
	  } else {
	    return true;
	  }	
	})
	
	
})