$(function(){
	$.ajax({
		type:"get",
		url:"json/data.json",
		success:function(data){
			console.log(data);
			var obj=typeof data=="string"?JSON.parse(data):data;
			console.log(obj.data);
			
			$.each(obj.data, function(index,val) {
				console.log(val.img);
//				_html='<li><dl>';
//				_html+='<dt><a href="#"><img src='+val.img+'/></a></dt>';
//				_html+='<dd><p>'+val.id+'</p><div class="dd-span"><b>'+val.price+'</b><span>'+val.initprice+'</span></div></dd>';
//				_html+='</dl></li>';
				$('.content01-right .content01-right-bottom ul').append('<li><dl><dt><a href="#"><img src='+val.img+'></a></dt><dd><p>'+val.name+'</p><div class="dd-span"><b>'+val.price+'</b><span>'+val.initprice+'</span></div></dd></dl></li>');
			});
			
		}
	});
})
	 