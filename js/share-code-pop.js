//我的活动码
function mycodes(){
	$('#myCode').show();
	//按钮状态
	var status = ["购买","使用","查看","评价"];
	$.get('json/code.json',function(data){
		var arr = data.allCode;
		//数组的第一个参数为5元活动码的状态。第二个参数为3元活动码的状态
		$('.fiveYuan').attr('index',parseInt(arr[0]));
		$('.threeYuan').attr('index',parseInt(arr[1]));
		$('.fiveYuan').find('p').text(status[parseInt(arr[0])]);
		$('.threeYuan').find('p').text(status[parseInt(arr[1])]);
	});
	//分享
	$('#myCode .shareBtn').on('click',function(){
		sharing();
	});
	//5元按钮
	$('.fiveYuan').on('click',function(){
		var index = parseInt($(this).attr('index'));
		switch(index){
			//购买
			case 0:
				popWin(1,"",function(){
					
				});
				break;
		}
	});
}
//分享
function sharing(){
	var html = "";
	html += '<div id="share"><div class="sa"><img src="img/shareArrow.png" /></div><div class="gift">';
	html += '<img src="img/sGift.png" /></div><div class="star"><img src="img/star.png" /></div></div>';	
	$('body').append(html);
	$('#share').on('click',function(event){
		event.stopPropagation();
		$(this).remove();
	});
}
//弹窗
function popWin(id,text,callfun1,callfun2)
{
	var html = "";
	html += '<div id="pop"></div>';
	$('body').append(html);
	var innerHtml = "";
	switch(id)
	{
		case 1:
			innerHtml+='<div class="pop1"><img src="img/pop01.png" /><button class="cancel"></button></div>';
			break;
		case 2:
			innerHtml += '<div class="pop2"><img src="img/pop02.png" /><button class="cancel"></button></div>';
			break;
		case 3:
			innerHtml += '<div class="pop3"><img src="img/pop03.png" /><div class="popP"><p>'+text+'</p></div><button class="cancel"></button></div>';
			break;
		case 4:
			innerHtml += '<div class="pop4"><button class="comfirm"></button><button class="cancel"></button><img src="img/pop04.png" /></div>';
			break;
		case 5:
			innerHtml += '<div class="pop5"><img src="img/pop05.png" /><button class="cancel"></button></div>';
			break;
		case 6:
			innerHtml += '<div class="pop6"><img src="img/pop06.png" /><button class="cancel"></button></div>';
			break;
	}
	$('#pop').append(innerHtml);
	$('.cancel').on('click',function(){
		$('#pop').remove();
		if (typeof(callfun1) == 'function') {
			callfun1();
		}
	});
	//如果是第四种弹窗
	if(id==4)
	{
		$('.comfirm').on('click',function(){
			$('#pop').remove();
			if (typeof(callfun1) == 'function') {
				callfun2();
			}
		});
	}
}
