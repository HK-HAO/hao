$(function(){
	var page_1='';
	$.ajax({
		type:"get",
		url:"json/data-1.json",
		async:true,
		success:function(data){
			var jsonObj=typeof data=="string"?JSON.parse(data):data;
			var a=Math.ceil(data.totalCount/data.pageSize);
			$(".product-bottom").Page({
//									
	          	  totalPages: a,//分页总数
		          liNums: 7,//分页的数字按钮数(建议取奇数)
		          activeClass: 'activP', //active 类样式定义
		          callBack : function(page){
		          		console.log(page);	
		          		page_1="jsonObj.data_"+page;
		          		$.each(jsonObj.data_1, function(index,val) {
					var _html='<li>';

					_html+='<dl>';
					_html+='<dt>';
					_html+='<img src='+val.img+'>';
					_html+='</dt>';
					_html+='<dd>';
					_html+='<p class="p-1">';
					_html+='<span class="sp-1">￥'+val.price+'</span><span class="sp-2">参考价：'+val.initprice+'</span>';
					_html+='</p>';
					_html+='<p class="p-2">'+val.name+'</p>';
					_html+='</dd>';
					_html+='</dl>';

					_html+='</li>';
					$('#ul-4').append(_html);
				});
		          }
		    });

				$.each(jsonObj.data_1, function(index,val) {
					var _html='<li>';

					_html+='<dl>';
					_html+='<dt>';
					_html+='<img src='+val.img+'>';
					_html+='</dt>';
					_html+='<dd>';
					_html+='<p class="p-1">';
					_html+='<span class="sp-1">￥'+val.price+'</span><span class="sp-2">参考价：'+val.initprice+'</span>';
					_html+='</p>';
					_html+='<p class="p-2">'+val.name+'</p>';
					_html+='</dd>';
					_html+='</dl>';

					_html+='</li>';
					$('#ul-4').append(_html);
				});
			
			
			
			
			
		}
	});
	$('#ul-4').on("click","li",function(){
		
	console.log($('.sp-1',this).text());
		var a=$('.p-2',this).text();
		console.log(a);
		var connect='photo='+$('img',this).prop('src')+'&';
		connect+='price='+$('.sp-1',this).text()+'&';
		connect+='initprice='+$('.sp-2',this).text()+'&';
		connect+='name='+$('.p-2',this).text();
		window.location.href='details.html?'+encodeURI(connect);
	});
})