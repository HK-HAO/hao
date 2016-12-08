$(function(){
	
	var price_1=0;
	
	var GOODNAMEIMGS="GOODNAMEIMGS"
	var GOODMAMES="GOODNAMES";
	var GOODPRICES="GOODPRICE";
	var GOODNUMS="GOODNUM";
	
	var goodNameImgStr=getCookie(GOODNAMEIMGS);
	var goodNameStr=getCookie(GOODMAMES);
	var goodPriceStr=getCookie(GOODPRICES);
	var goodNumStr=getCookie(GOODNUMS);
	
	
	var goodNameImgArr=[];
	var goodNameArr=[];
	var goodPriceArr=[];
	var goodNumArr=[];
	if(goodNameStr){
		
		goodNameImgArr=goodNameImgStr.split("&");
		goodNameArr=goodNameStr.split("&");
		goodPriceArr=goodPriceStr.split("&");
		goodNumArr=goodNumStr.split("&");
		
	}
	
//	<tr>
//		<td><img src="images/01.jpg"\></img\><span>1111111111111111111111111111111111111111<span></td>
//		<td class="td-2">
//			<div class="div-1">
//				<span>-</span>
//				<input type="text" name="" id="" value="1" />
//				<span>+</span>
//			</div>
//		</td>
//		<td class="td-3">3</td>
//		<td class="td-4"><a href="#">删除</a></td>
//	</tr>
//	console.log(goodNameArr);
	for(var i=0;i<goodNameArr.length;i++){
		var _html='<tr>';
		_html+='<td><img src='+goodNameImgArr[i]+'><span>'+goodNameArr[i]+'</span></td>';
		_html+='<td><div class="div-1"><span class="sp-1">'+"-"+'</span><input type="type" value='+goodNumArr[i]+'><span class="sp-2">'+"+"+'</span></div></td>'
		_html+='<td class="td-3">'+goodPriceArr[i]+'</td>';
		_html+='<td><a href="javascript:">删除</a></td>';
		_html+='</tr>';
		$('tbody').append(_html);
	}
	
	
	
	$("tbody a").click(function(){
		
		var a=$(this).parents('tr').index();
		goodNameImgArr.splice(a,1);
		goodNameArr.splice(a,1);
		goodPriceArr.splice(a,1);
		goodNumArr.splice(a,1);
		
		
		var nameImgStr=goodNameImgArr.join("&");
		var nameStr=goodNameArr.join("&");
		var priceStr=goodPriceArr.join("&");
		var numStr=goodNumArr.join("&");
		
		removeCookie(GOODNAMEIMGS);
		removeCookie(GOODMAMES);
		removeCookie(GOODPRICES);
		removeCookie(GOODNUMS);
		
		var d=new Date();
		d.setDate(d.getDate()+7);
		setCookie(GOODNAMEIMGS,nameImgStr,d);
		setCookie(GOODMAMES,nameStr,d);
		setCookie(GOODPRICES,priceStr,d);
		setCookie(GOODNUMS,numStr,d);
		
		
		console.log($(this).parents('tr').index());
		$(this).parents('tr').remove();
		
	});
//	console.log($('.div-1 .sp-2').text());
	$('.div-1 .sp-1').click(function(){
		var num=parseInt($(this).next().val()) ;
		if(num>0){
			$(this).next().val(num-1);
		}
	});
	$('.div-1 .sp-2').click(function(){
		var num=parseInt($(this).prev().val()) ;
		
		$(this).prev().val(num+1);
		
	});
	
	
	$('.shopping-bottom .sp-3').click(function(){

		var price=getCookie(GOODPRICES);		 
		
		var num=getCookie(GOODNUMS);
		
		var priceArr=price.split("&");
		var numArr=num.split("&");
		console.log(priceArr);
		console.log(numArr);
		var priceArr_1=[];
		var numArr_1=[];
		var reg=0;
		var jian=0;
		for(var i=0;i<priceArr.length;i++){
				
			
				priceArr_1.push(parseInt(priceArr[i].replace(/￥/g,"")));
				numArr_1.push(parseInt(numArr[i]));
				jian+=numArr_1[i];
				reg +=priceArr_1[i]*numArr_1[i];
			
				console.log(reg);
		}
		$('.shopping-bottom .sp-1').eq(0).text(reg);
		$('.shopping-bottom .sp-1').eq(1).text(jian);
	});
})