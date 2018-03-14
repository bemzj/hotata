var cTween;
$(function(){
	//礼品查看
	$('#myGift .giftChild button').on('click',function(){
		//是否已经填写信息
		$.get('json/personMessage.json',function(data){
			if(data.has==0)
			{
				$('#newPop3').show();
				//取消
				$('#newPop3 input').val("");
				$('#newPop3 textarea').val("");
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
			}else{
				//查看信息
				newpop1("王文杰","13872653625","广东省 广州市 海珠区","琶洲商业广场11栋琶洲商业广场11栋琶洲商业广场11栋","包装好一点");
			}
		});
	});
	//我的礼品和积分商城兑换
	$('#myGift .mg02 button').on('click',function(){
		$(this).addClass('btnhas');
		$(this).siblings('button').removeClass('btnhas');
		if($(this).index()==0)
		{
			$('.giftBox').show();
			$('.mg01 img').attr('src','img/mg02.png');
			$('.shopBox').hide();
			$('.mg03').hide();
		}else{
			$('.giftBox').hide();
			$('.mg01 img').attr('src','img/mg05.png');
			$('.shopBox').show();
			$('.mg03').show();
		}
	});
	//兑换产品
	$('#myGift .shopBox button').on('click',function(){
		//有足够积分
		var self = $(this);
		var me = parseInt($('.jifen p').text());
		var pro = parseInt($('#myGift .shopBox .stenBox p:nth-child(2) span').text());
		if(me>=pro)
		{
			$.get('json/proNumber.json',function(data){
				if(data.sum==0)
				{
					newpop6();
				}else{
					$('#newPop3').show();
					$('#newPop3 input').val("");
					$('#newPop3 textarea').val("");
					//取消
				    $('.newPop3 .np3No').on('click',function(){
				    	$('#newPop3').hide();
				    });
				    //提交
				    $('.newPop3 .np3Yes').on('click',function(){
				    	$('#newPop3').hide();
				    	newpop2(function(){
				    		//提交到后台$.get();
				    		newpop7('img/gift1.png',"安迪人偶",function(){
				    			self.parents('.shopChild').removeClass('noshop').addClass('hasShop');
				    			self.parents('.shopChild').children('img').attr('src','img/mg06.png');
				    			self.attr('disabled','disabled');
				    			self.remove();
				    		});
				    	});
				    });
				}
			});
		}else{
			newpop5();
		}
	});
	//选择省市区
	!function () {
        var $target = $('#gcity');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    $('#gcity').focus(function(){
    	$(this).blur();
    });
   	qd(5,function(){
   		$('#homepage').show();
   		//弹幕
   		clearInterval(cTween);
   		$('#danmu').children().remove();
		$.get('wx.json',function(data){
			mydata = data;
			addDanmu('#danmu','danmuBox',mydata,25);
		});
		$('.startBtn').addClass('animated bounceIn');
		$('.gameTitle').addClass('animated fadeInDown');
		$('.jfbox').addClass('animated fadeInLeft');
		$('.cgBox').addClass('animated fadeInRight');
		//
		$('.mygifts').on('click',function(){
			$('#homepage').hide();
			$('#myGift').show();
			$('.startBtn').removeClass('animated bounceIn');
			$('.gameTitle').removeClass('animated fadeInDown');
			$('.jfbox').removeClass('animated fadeInLeft');
			$('.cgBox').removeClass('animated fadeInRight');
		});
		$('#myGift .rback').on('click',function(){
			$('.startBtn').addClass('animated bounceIn');
			$('.gameTitle').addClass('animated fadeInDown');
			$('.jfbox').addClass('animated fadeInLeft');
			$('.cgBox').addClass('animated fadeInRight');
			$('#homepage').show();
			$('#myGift').hide();
			clearInterval(cTween);
   			$('#danmu').children().remove();
			$.get('wx.json',function(data){
				mydata = data;
				addDanmu('#danmu','danmuBox',mydata,25);
			});
		});
   	});
	
});

//游戏提示
function gameTips(fun){
	var html = "";
	$('#tips').remove();
	html += '<div id="tips"><div class="tips"><img src="img/tips.png" />';
	html += '<button></button></div></div>';
	$('body').append(html);
	$('#tips button').on('click',function(){
		$('#tips').remove();
		if((typeof fun)=='function')
		{
			fun();
		}
	});
}
//分享
function sharing2(){
	$('#share').remove();
	var html = "";
	html += '<div id="share"><div class="sa"><img src="img/shareArrow.png" /></div><div class="gift">';
	html += '<img src="img/sGift1.png" /></div><div class="star"><img src="img/star.png" /></div></div>';	
	$('body').append(html);
	$('#share').on('click',function(event){
		event.stopPropagation();
		$(this).remove();
	});
}
//活动结束
function gameOver(fun){
	$('#gOver').remove();
	var html = "";
	html += '<div id="gOver"><div class="gOver"><img src="img/game02.png" />';
	html += '<button></button></div></div>';
	$('body').append(html);
	$('#gOver button').on('click',function(event){
		$('#gOver').remove();
		if((typeof fun)=='function')
		{
			fun();
		}
	});
}
//邀请好友
function cOver(){
	$('#changeOver').remove();
	var html = "";
	html += '<div id="changeOver"><div class="changeOver"><img src="img/game01.png" />';
	html += '<button class="invite"></button>';
	html += '<button class="cancel"></button></div></div>';
	$('body').append(html);
	$('#changeOver .cancel').on('click',function(event){
		$('#changeOver').remove();
	});
	$('#changeOver .invite').on('click',function(event){
		$('#changeOver').remove();
		sharing2();
	});
}
//闯关成功
function shareSuccess(fun){
	$('#shareSuccess').remove();
	var html = '<div id="shareSuccess"><div class="shareSuccess"><img src="img/game03.png" /><button></button></div></div>';
	$('body').append(html);
	$('#shareSuccess button').on('click',function(event){
		$('#shareSuccess').remove();
		if((typeof fun)=='function')
		{
			fun();
		}
	});
}
//签到
function qd(num,fun){
	//num为第几天
	var html = "";
	html += '<div id="qiandao"><div class="qiandao">';
	html += '<div><img src="img/game04.png"/><button></button></div></div></div>';
	$('body').append(html);
	for(var i=0;i<num;i++)
	{
		$('.qiandao').prepend('<img src="img/game05.png" class="animated bounceIn"/>');
	}
	$('#qiandao button').on('click',function(){
		$('#qiandao').remove();
		if((typeof fun)=='function')
		{
			fun();
		}
	});

				
}
//添加弹幕

function addDanmu(id,className,data,time){
	$(id).append('<div class="ab '+className+'"></div>');
	var length = 0;
	for(var i=0;i<data.length;i++)
	{
		var html = "";
		html += '<div class="danmu floatl"><nobr><p>'+data[i].open.open_name+'：刚刚抽取了'+data[i].content+'</p></nobr>';
		html += '<div class="head"></div></div>';
		$('.'+className).append(html);
		
		length += (parseInt($('.'+className).find('.danmu').eq(i).width())+32);
	}
	for(var i=0;i<data.length;i++)
	{
		var html = "";
		html += '<div class="danmu floatl"><nobr><p>'+data[i].open.open_name+'：刚刚抽取了'+data[i].content+'</p></nobr>';
		html += '<div class="head"></div></div>';
		$('.'+className).append(html);
		
		length += (parseInt($('.'+className).find('.danmu').eq(i).width())+32);
	}
	$('.'+className).append('<div class="clearl"></div>');
	$('.'+className).width(length);
	$('.'+className).css('left',$(window).width());
	var start = $(window).width();
	cTween = setInterval(function(){
		start-=0.5;
		if(start==(-length/2)){
			start=0;
			$('.'+className).css('left',start+'px');
		}else{
			$('.'+className).css('left',start+'px');
		}
	},time);
}
