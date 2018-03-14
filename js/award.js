
$(function(){
	//删除不良信息
	$('.delete1').prevAll().remove();
	$('.delete2').nextAll().remove();
	var turnplate={
		startAngle:0,				//开始角度
		randomRate:[],              //控制获奖率，百分制(相加需等于100%)，对应restaraunts(顺序需要保持一致)，
		bRotate:false				//false:停止;ture:旋转
	};
	var sum;
	turnplate.randomRate = ["0%", '0%', '0%', '0%', '0%', '0%', '0%', '0%'];
	var rotateTimeOut = function (){
		$('.awardGift').rotate({
			angle:0,
			animateTo:2160,
			duration:8000,
			callback:function (){
				alert('网络超时，请检查您的网络设置！');
			}
		});
	};
	//
	var rotateFn = function (item, txt){
		var angles = item * (360 / turnplate.randomRate.length) - (360 / (turnplate.randomRate.length*2));
		if(angles<270){
			angles = 270 - angles; 
		}else{
			angles = 360 - angles + 270;
		}
		$('.awardGift').stopRotate();
		console.log(txt);
		$('.awardGift').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:8000,
			callback:function (){
				popGift(txt.giftCode,txt.score,function(){
					if(sum>0)
					{
						turnplate.bRotate = !turnplate.bRotate;
					}
					
				});
				
			}
		});
	};
	//
	$('.start').click(function (){
		
		if(turnplate.bRotate)return;
		turnplate.bRotate = !turnplate.bRotate;
		
		sum = parseInt($('.awardTitle').find('p').text());
		$('.awardTitle').find('p').text(--sum);
		
		/*
		 * 0：抱枕
		 * 1：欢乐大礼包
		 * 2：人偶
		 * 3：安迪大礼
		 * 4：晒被架
		 * 5：微信红包
		 * 6：不定额积分
		 * 7：代金券
		 */
		$.get('json/award.json',function(data){
			turnplate.randomRate[data.giftCode] = "100%";
			//获取随机数(奖品个数范围内)
			var item = rnd(turnplate.randomRate);
			//奖品数量等于10,指针落在对应奖品区域的中心角度[252, 216, 180, 144, 108, 72, 36, 360, 324, 288]
			rotateFn(item,data);
		});
		
	});
	//设置字体大小
	if(parseInt($('.awardTitle').find('p').text())<10)
	{
		$('.awardTitle').find('p').css('font-size','0.46rem');
	}
	//选择省市区
	!function () {
        var $target = $('#acity');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    $('#acity').focus(function(){
    	$(this).blur();
    });
    //取消
    $('.newPop3 .np3No').on('click',function(){
    	$('#newPop3').hide();
    });
    //提交
    $('.newPop3 .np3Yes').on('click',function(){
    	$('#newPop3').hide();
    	newpop2(function(){
    		//提交到后台$.get();
    		alert("已提交");
    	});
    });
});
function rnd(rate){
	var random = Math.floor(Math.random() * 100);
	var myRandom = [];
	var randomList = [];
	var randomParent = [];
	for(var i = 0; i < 100; i++){
		myRandom.push(parseInt([i]) + 1);
	}
	for(var i = 0; i < rate.length; i++){
		var temp = [];
		var start = 0;
		var end = 0;
		randomList.push(parseInt(rate[i].split('%')[0]));
		for(var j = 0; j < randomList.length; j++){
			start += randomList[j-1] || 0
			end += randomList[j]
		}
		temp = myRandom.slice(start, end);
		randomParent.push(temp)
	}
	for(var i = 0; i < randomParent.length; i++){
		if($.inArray(random, randomParent[i]) > 0){
			return(i+1)
		}
	}
	
}
function popGift(id,text,fun){
	$('#gpop').remove();
	var html = "";
	switch(id){
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 7:
			html += '<div id="gpop"><div class="gpopBox">';
			html += '<img src="img/g0'+id+'.png" />';
			html += '<button></button></div></div>';
			break;
		case 5:
			html += '<div id="gpop"><div class="gpopBox">';
			html += '<img src="img/g0'+id+'.png" />';
			html += '<p class="wx1">微信红包'+text+'元</p>';
			html += '<p class="wx2">'+text+'元</p>';
			html += '<button></button></div></div>';
			break;
		case 6:
			html += '<div id="gpop"><div class="gpopBox">';
			html += '<img src="img/g0'+id+'.png" />';
			html += '<p class="jf">积分'+text+'</p>';
			html += '<button></button></div></div>';
			break;
	}
	$('body').append(html);
	$('#gpop button').on('click',function(){
		$('#gpop').remove();
		
		if(typeof(fun) == 'function')
		{
			fun();
		}
		$.get('json/personMessage.json',function(data){
			if(data.has==0)
			{
				$('#newPop3').show();
			}
		});
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