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
	//
	showHome();
});
//显示首页
function showHome(){
	//时间控制
	var sTime = 250;
	var eTime = 500;
	var oTime = 1000;
	$('.home2').show().find('img').addClass('animated bounceIn');
	setTimeout(function(){
		$('.home4').show().find('img').addClass('animated bounceIn');
		setTimeout(function(){
			$('.home5').show().find('img').addClass('animated bounceIn');
			setTimeout(function(){
				$('.home3').show().find('img').addClass('animated rotateInDownRight');
				$('.oldNew').show().addClass('animated rotateInDownLeft');
				$('.look').show().addClass('animated rotateInUpRight');
				setTimeout(function(){
					$('.home1').show().find('img').addClass('animated fadeIn');
					$('.homep').show().addClass('animated fadeInDown');
				},oTime);
			},sTime);
		},sTime);
	},sTime);
	
}
