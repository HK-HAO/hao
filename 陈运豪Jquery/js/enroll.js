$(function(){
	var judge=false;
	var judge1=false;
	var judge2=false;
	var judge3=false;
	var name1=0;
	var pass1=0;
	$('input').eq(0).focus(function(){
		$(this).next().text("请输入用户名");
	});
	$('input').eq(0).keyup(function(){
		$(this).next().text("");
	});
	$('input').eq(0).blur(function(){
		var pattern= /^1\d{10}$/;
		var pattern1= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var username=pattern.test($(this).val());
		var mail=pattern1.test($(this).val());
//		console.log(username);
		if(username||mail){
			$(this).next().text("格式正确");
			getCookie()
			judge=true;
			var name=$(this).val();
			name1=name;
			console.log(name1);
		}else{
			$(this).next().text("用户名格式不对请重新输入");
		}

	});
	
	$('input').eq(1).focus(function(){
		$(this).next().text("请输入登录密码");
	});
	$('input').eq(1).keyup(function(){
		
		$(this).next().text('');
		$(this).prevAll('input').next().text("");
//		console.log($(this).prevAll('input').next().text(""));
	});
	$('input').eq(1).blur(function(){
		var pass=$(this).val();
		pass1=pass;
//		console.log(pass.length);
		if(pass.length>6&&pass.length<20){
			$(this).next().eq(0).text('密码格式正确');
			judge1=true;
		}else if(pass.length<6){
			$(this).next().eq(0).text('密码不能少于6位');
		}else if(pass.length>20){
			$(this).next().eq(0).text('密码不能多于20位');
		}
	});
	
	$('input').eq(2).focus(function(){
		$(this).next().text("请再次输入密码");
	});
	
	$('input').eq(2).keyup(function(){
		
		$(this).next().text('');
		$(this).prevAll('input:eq(0)').next().text("");
	});
	var pass=$('input').eq(1).val();
	$('input').eq(2).blur(function(){
		var confirmpass=$(this).val();
		if(pass1==confirmpass){
			$(this).next().text("密码相同");
			judge2=true;
		}else{
			$(this).next().text("两次密码不相同");
		}
	});
	
	//随机数
	var num=parseInt(Math.random()*9000)+1000;
	
	$('input').eq(3).next().text(num);
	
	$('input').eq(3).keyup(function(){
		
		$(this).prevAll('input:eq(0)').next().text("");
//		console.log($(this).prevAll('input:eq(0)').next().text(""));
	});
	$('input').eq(3).blur(function(){
		var proving=$(this).val();
		if(proving == num){
			$(this).nextAll('span').text("验证码正确");
			judge3=true;
		}else{
			$(this).nextAll('span').text("验证码错误");
		}
	});
	
	
	$('input').eq(4).click(function(){
		

		if(judge&&judge1&&judge2&&judge3){
			var a=confirm("注册成功是否需要登录");
			console.log(a);
			valueName();
			if(a){
				console.log("你好");
				window.location.href="login.html";			
			}else{
				window.location.reload();
				
			}
			
		}
		
		return false;
	});
	
	
	function valueName(){
		console.log("传cooking");
		var d=new Date();
		d.setDate(d.getDate()+7);
		setCookie("username",name1,d);
		setCookie("pass",pass1,d);
	}
	
})