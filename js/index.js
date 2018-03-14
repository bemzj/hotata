$(function(){
	//删除不良信息
	$('.delete1').prevAll().remove();
	$('.delete2').nextAll().remove();
	//音乐
	var music = 0;
	var musicOpen = true;
	var musicTween = setInterval(function() {
		music += 2;
		$('#music').css('transform', "rotate(" + music + "deg)");
		if(music == 360) {
			music = 0;
		}
	}, 10);
	$('#music').on('click', function() {
		if(musicOpen == true) {
			musicOpen = false;
			clearInterval(musicTween);
			$('#bg')[0].pause();
		} else {
			musicOpen = true;
			musicTween = setInterval(function() {
				music += 2;
				$('#music').css('transform', "rotate(" + music + "deg)");
				if(music == 360) {
					music = 0;
				}
			}, 10);
			$('#bg')[0].play();
		}
	});
	//加载
	var re = 0;
	var reTween = setInterval(function(){
		re++;
		if(re==101)
		{
			clearInterval(reTween);
			$('#reload').hide();
			showHome();
		}else{
			$('#reload ul li:nth-child(2) .up').css('width',re+'%');
			$('#reload ul li:nth-child(2) p').text(re+'%');
		}
		
	},30);
});
//显示首页
function showHome(){
	$('#homepage').show();
	//时间控制
	$('.flower').remove();
	var sTime = 250;
	var oTime = 1000;
//	$('.home2').show().find('img').addClass('animated bounceIn');
//	setTimeout(function(){
//		$('.home4').show().find('img').addClass('animated bounceIn');
//		setTimeout(function(){
//			$('.home5').show().find('img').addClass('animated bounceIn');
//			setTimeout(function(){
//				$('.home3').show().find('img').addClass('animated rotateInDownRight');
//				$('.oldNew').show().addClass('animated rotateInDownLeft');
//				$('.look').show().addClass('animated rotateInUpRight');
//				setTimeout(function(){
//					$('.home1').show().find('img').addClass('animated fadeIn');
//					$('.homep').show().addClass('animated fadeInDown');
//				},oTime);
//			},sTime);
//		},sTime);
//	},sTime);
	$('.home1').show().find('img').addClass('animated fadeIn');				
	$('.home2').show().find('img').addClass('animated fadeIn');
	$('.home4').show().find('img').addClass('animated fadeIn');
	$('.home5').show().find('img').addClass('animated fadeIn');
	$('.home3').show().find('img').addClass('animated fadeIn');
	$('.oldNew').show().addClass('animated rotateInDownLeft');
	$('.look').show().addClass('animated rotateInUpRight');
	$('.homep').show().addClass('animated fadeInDown');
	setTimeout(function(){
		
		setTimeout(function(){
			
			setTimeout(function(){
				
				
				setTimeout(function(){
					
				},oTime);
			},sTime);
		},sTime);
	},sTime);
	var nIndex = 1;
	var numb = 0;
	var eTime = setInterval(function(){
		flower('#homepage',nIndex,numb,3000);
		nIndex++;
		numb++;
		if(nIndex==4)
		{
			nIndex=1;
		}
	},750);
	$('.oldNew').on('click',function(){
		$('#homepage').hide();
		$('.flower').remove();
		clearInterval(eTime);
		$('.home').hide().find('img').removeClass();
		$('.homep').hide().removeClass('animated fadeInDown');
		$('.oldNew').hide().removeClass('animated rotateInDownLeft');
		$('.look').hide().removeClass('animated rotateInUpRight');
		$('#old').show();
		$("#old .btn1").on('click',function(){
			$('#old').hide();
			mycodes();
		});
		$("#old .btn2").on('click',function(){
			
		});
		//返回
		$('#old .rback').on('touchstart',function(){
			$('#old').hide();
			showHome();
		});
//		window.frames["oldNew"].document.getElementById("btn2").on('click',function(){
//			$('#oldNew').hide();
//			mycodes();
//		});
//		window.frames["oldNew"].document.getElementById("btn-return").on('click',function(){
//			$('#oldNew').hide();
//			showHome();
//		});
	});
	$('.look').on('click',function(){
		$('#homepage').hide();
		$('.flower').remove();
		clearInterval(eTime);
		$('.home').hide().find('img').removeClass();
		$('.homep').hide().removeClass('animated fadeInDown');
		$('.oldNew').hide().removeClass('animated rotateInDownLeft');
		$('.look').hide().removeClass('animated rotateInUpRight');
		$('#llk').show();
	});
//	$('.oldNew').on('click',function(){
//		$('#homepage').hide();
//		$('.flower').remove();
//		clearInterval(eTime);
//		$('.home').hide().find('img').removeClass();
//		$('.homep').hide().removeClass('animated fadeInDown');
//		$('.oldNew').hide().removeClass('animated rotateInDownLeft');
//		$('.look').hide().removeClass('animated rotateInUpRight');
//		mycodes();
//	});
//	$('.look').on('click',function(){
//		$('#homepage').hide();
//		$('.flower').remove();
//		clearInterval(eTime);
//		$('.home').hide().find('img').removeClass();
//		$('.homep').hide().removeClass('animated fadeInDown');
//		$('.oldNew').hide().removeClass('animated rotateInDownLeft');
//		$('.look').hide().removeClass('animated rotateInUpRight');
//		showHome();
//	});
	$('#homepage button').on('click',function(){
		$('#homepage').hide();
		$('.flower').remove();
		clearInterval(eTime);
		$('.home').hide().find('img').removeClass();
		$('.homep').hide().removeClass('animated fadeInDown');
		$('.oldNew').hide().removeClass('animated rotateInDownLeft');
		$('.look').hide().removeClass('animated rotateInUpRight');
		$('#rule').show();
		$('#rule .rule1').on('click',function(){
			$('.rule img').attr('src','img/ac01.png');
		});
		$('#rule .rule2').on('click',function(){
			$('.rule img').attr('src','img/ac02.png');
		});
		$('#rule .rback').on('touchstart',function(){
			$('#rule').hide();
			showHome();
		});
	});
}
//烟花
function flower(id,n,numb,time){
	var html = '<div class="flower flower'+n+' flower'+numb+'"><div class="flIn"><img src="img/fl1.png" /></div></div>'
	$(id).append(html);
	setTimeout(function(){
		$('.flower'+numb).remove();
	},time);
	
}
