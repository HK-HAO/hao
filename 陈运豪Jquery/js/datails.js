$(function(){
	
	var parameterArr_1=[];
	var parameterArr_2=[];

	var para=decodeURI(window.location.search);
	
	var para1=para.replace(/\?/,"");
	
	var paraArr=para1.split("&");
	
	
	
	
	for(var i=0;i<paraArr.length;i++){
		var paraArr1=paraArr[i].split("=");
		parameterArr_2.push(paraArr1[1]);
		parameterArr_1.push(paraArr1[0]);
	}
//	console.log(parameterArr_1);
//	console.log(parameterArr_2);
	
	
	for(var i=0;i<parameterArr_1.length;i++){
		if(parameterArr_1[i]=="photo"){
			$('.details-center-left dt img').prop('src',parameterArr_2[i]);
			$('.details-center-left dd .ul-1 li img').prop('src',parameterArr_2[i]);
		}
		if(parameterArr_1[i]=="price"){
			$('.details-center-right .sp-1').text(parameterArr_2[i]);
		}
		if(parameterArr_1[i]=="initprice"){
			$('.details-center-right .sp-2').text(parameterArr_2[i]);
		}
		if(parameterArr_1[i]=="name"){
			$('.details-center-right h3').text(parameterArr_2[i]);
		}
	}
	
	
	$('.details-center-right .div-2 ul li').click(function(){
		$(this).toggleClass('avtiveColor');
		console.log($(this).text());
	});
	
	$('.details-center-right .div-3 ul li').click(function(){
		$(this).toggleClass('avtiveColor');
	});
	
	
	//准备传值到cookie
	
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
		
	$('.details-center-right .div-4 p').eq(0).click(function(){
		
		$(this).css({border:'2px solid #000'})
		var nameImg=$('.details-center-left dt img').prop('src');
		var names=$('.details-center-right h3').text();
		var prices=$('.details-center-right .sp-1').text();
		var nums=$('.details-center-right select').val();
		console.log(names);
		saveGoods(nameImg,names,prices,nums);
	});
		
		function saveGoods(nameImg,names,prices,nums){
			goodNameImgArr.push(nameImg);
			goodNameArr.push(names);
			goodPriceArr.push(prices);
			goodNumArr.push(nums);
			
			var nameImgStr=goodNameImgArr.join("&");
			var nameStr=goodNameArr.join("&");
			var priceStr=goodPriceArr.join("&");
			var numStr=goodNumArr.join("&");
			
//			console.log(nameImg);

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
		}
	
})
