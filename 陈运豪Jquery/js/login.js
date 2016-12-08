$(function(){
	
	var name=0;
	var pass1=0;
	$('input').eq(0).focus(function(){	
	//			表单必填项
			var val=$(this).val();
			if(val==""||val==null){
				$(this).next().text("请输入电子邮箱或手机号");
			}
	});
	$('input').eq(0).keyup(function(){
		
		$(this).next().text('');
	});
	$('input').eq(0).blur(function(){
		var pattern= /^1\d{10}$/;
		var pattern1= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var username=pattern.test($(this).val());
		var mail=pattern1.test($(this).val());
		console.log(username);
		if(username||mail){
			$(this).next().text("格式正确");
			name=$(this).val();
		}else{
			$(this).next().text("用户名格式不对请重新输入");
		}
	})
	
	//密码表单
	
	$('input').eq(1).focus(function(){	
			console.log("手机号");
	//			表单必填项
			var val=$(this).val();
			if(val==""||val==null){
				$(this).nextAll("p").eq(0).text("请输入6~20位密码");
			}
	});
	
	$('input').eq(1).keyup(function(){
		
		$(this).nextAll("p").eq(0).text('');
	});
	$('input').eq(1).blur(function(){
		var pass=$(this).val();
		if(pass.length>6&&pass.length<20){
			$(this).nextAll("p").eq(0).text('密码格式正确');
			pass1=pass;
		}else{
			$(this).nextAll("p").eq(0).text('密码格式错误');
		}
	});
	
	//是否保存密码？cooking
//	$('input').eq(2).
	
	$('input').eq(4).click(function(){
		console.log("登录页面获取到了")
		var goodsNameStr=getCookie("username");
		var goodsPassstr=getCookie("pass");
//		console.log(goodsNameStr);
		if(name==goodsNameStr){
			var a=confirm("登录成功");
			if(a){
				window.location.href="main.html";
			}else{
				window.location.reload();
			}
						
		}else if(name!=goodsNameStr){
			var b=confirm("没有此用户需要注册");
			if(b){
				window.location.href="enroll.html";
			}else{
				window.location.reload();
			}
		}
		return false;
	});
})