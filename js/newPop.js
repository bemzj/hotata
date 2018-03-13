$(function(){
	setTimeout(function(){
//		newpop6(function(){
//			alert(1);
//		});
		newpop7('img/gift1.png',"安迪人偶");
//		newpop1("王文杰","13872653625","广东省 广州市 海珠区","琶洲商业广场11栋琶洲商业广场11栋琶洲商业广场11栋","包装好一点");
	},2000)
	

});
//查看信息
function newpop1(name,phone,city,address,content){
	$('#newPop1').remove();
	
	var html = "";
	html += '<div id="newPop1" class="newPop" ><div class="newPop1">';
	html += ('<p>'+name+'</p>');
	html += ('<p>'+phone+'</p>');
	html += ('<p>'+city+'</p>');
	html += ('<p>'+address+'</p>');		
	html += ('<div class="msg"><p>'+content+'</p></div><img src="img/newpop01.png" /><button></button></div></div>');			
	console.log(html);
	$('body').append(html);
	$('#newPop1 button').on('click',function(){
		$('#newPop1').remove();
	});
}
//是否提交信息
function newpop2(fun){
	var html = "";
	$('#newPop2').remove();
	html += '<div id="newPop2" class="newPop" ><div class="newPop2">';
	html += '<img src="img/newpop02.png" /><button class="npYes"></button><button class="npNo"></button></div></div>';
	$('body').append(html);
	if(typeof(fun) == 'function')
	{
		$('#newPop2 .npYes').on('click', function() {
			$('#newPop2').remove();
			fun();
		});
		
	}
	$('#newPop2 .npNo').on('click', function() {
		$('#newPop2').remove();
	});
}
//积分不足
function newpop5(fun){
	var html = "";
	$('#newPop5').remove();
	html += '<div id="newPop5" class="newPop"><div class="newPop5">';
	html += '<img src="img/newpop05.png" /><button class="np5Yes"></button>';
	html += '<button class="np5No"></button></div></div>'
	$('body').append(html);
	if(typeof(fun) == 'function')
	{
		$('#newPop5 .np5Yes').on('click', function() {
			$('#newPop5').remove();
			fun();
		});
	}
	$('#newPop5 .np5No').on('click', function() {
		$('#newPop5').remove();
	});
}
//礼品已经兑换完
function newpop6(){
	
	$('#newPop6').remove();
	var html = "";
	html += '<div id="newPop6" class="newPop"><div class="newPop6">';
	html += '<img src="img/newpop06.png" /><button></button></div></div>';
	$('body').append(html);
	$('#newPop6 button').on('click', function() {
		$('#newPop6').remove();
	});
}
//兑换获得奖品
function newpop7(src,name,fun){
	var html = "";
	$('#newPop7').remove();
	html += '<div id="newPop7" class="newPop"><div class="newPop7">';
	html += '<img src="img/newpop07.png" /><div class="np7Box">';
	html += '<img src="'+src+'"/>';
	html += '<p>恭喜您获得了'+name+'</p>'	;
	html += '<p>奖品已经放入我的奖品</p></div><button></button></div></div>'	;		
	$('body').append(html);
	$('#newPop7 button').on('click', function() {
		$('#newPop7').remove();
		if(typeof(fun) == 'function')
		{
			fun();
		}				
	});					
}
