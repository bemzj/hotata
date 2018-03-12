var proIndex = 0;
//我的活动码
function mycodes(){
	$('#myCode').show();
	//按钮状态
	var status = ["购买","使用","评价","查看"];
	$.get('json/code.json',function(data){
		var arr = data.allCode;
		//数组的第一个参数为5元活动码的状态。第二个参数为3元活动码的状态
		$('#myCode .fiveYuan').attr('index',parseInt(arr[0]));
		$('#myCode .threeYuan').attr('index',parseInt(arr[1]));
		$('#myCode .fiveYuan').find('p').text(status[parseInt(arr[0])]);
		$('#myCode .threeYuan').find('p').text(status[parseInt(arr[1])]);
	});
	//返回
	$('#myCode .rback').on('click',function(){
		$('#myCode').hide();
		showHome();
	});
	//分享
	$('#myCode .shareBtn').on('click',function(event){
		event.stopPropagation();
		sharing();
	});
	//5元按钮
	$('#myCode .fiveYuan').on('click',function(){
		var index = parseInt($(this).attr('index'));
		proIndex = 1;
		$('#buyStep01 .buystep01 .inputBox input').val("");
		$('#buyStep01 .ibIn').children().remove();
		switch(index){
			//购买
			case 0:
				popWin(1,"",function(){
					buying();
				});
				break;
			//使用
			case 1:
				$('#myCode').hide();
				useStep1();
				break;
			//评价
			case 2:
				$('#myCode').hide();
				sug01();
				break;
			//查看
			case 3:
				$('#myCode').hide();
				$('#lookCode').show();
				$('#lookCode .rback').on('click',function(){
					$('#myCode').show();
					$('#lookCode').hide();
				});
				$('#lookCode .lc03 .inputBox .imageBox .floatl > img:nth-child(2)').on('click',function(){
					bigImg($(this).attr('src'));
				});
				break;
		}
	});
	//3元按钮
	$('#myCode .threeYuan').on('click',function(){
		var index = parseInt($(this).attr('index'));
		proIndex = 2;
		$('#buyStep01 .buystep01 .inputBox input').val("");
		$('#buyStep01 .ibIn').children().remove();
		switch(index){
			//购买
			case 0:
				popWin(1,"",function(){
					buying();
				});
				break;
			//使用
			case 1:
				$('#myCode').hide();
				useStep1();
				break;
			//评价
			case 2:
				$('#myCode').hide();
				sug01();
				break;
			case 3:
				$('#myCode').hide();
				$('#lookCode').show();
				$('#lookCode .rback').on('click',function(){
					$('#myCode').show();
					$('#lookCode').hide();
				});
				$('#lookCode .lc03 .inputBox .imageBox .floatl > img:nth-child(2)').on('click',function(){
					bigImg($(this).attr('src'));
				});
				break;
		}
	});
}
//分享
function sharing(){
	$('#share').remove();
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
	$('#pop').remove();
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
//加载
function upLoading(){
	var html = '';
	html += '<div id="popLoading"><img src="img/loading-1.gif" /></div>';
	$('body').append(html);	
}
function closeLoading(){
	$('#popLoading').remove();
}
//图片扩大
function bigImg(src){
	$('#imgBig').remove();
	var html = '';
	html += '<div id="imgBig" style="display:none;"><img src="'+src+'" /></div>';
	$('body').append(html);	
	$('#imgBig').fadeIn(500);
	$('#imgBig').on('click',function(){
		$('#imgBig').fadeOut(500,function(){
			$('#imgBig').remove();
		});
	})
}
