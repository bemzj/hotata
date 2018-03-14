var turnplate={
		startAngle:0,				//开始角度
		randomRate:[],              //控制获奖率，百分制(相加需等于100%)，对应restaraunts(顺序需要保持一致)，
		bRotate:false				//false:停止;ture:旋转
};
$(function(){
	turnplate.randomRate = ["100%", '0%', '0%', '0%', '0%', '0%', '0%', '0%'];
	var rotateTimeOut = function (){
		$('#wheelcanvas').rotate({
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
		$('#wheelcanvas').stopRotate();
		$('#wheelcanvas').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:8000,
			callback:function (){
				alert(txt);
				turnplate.bRotate = !turnplate.bRotate;
			}
		});
	};
	//
	$('.pointer').click(function (){
		if(turnplate.bRotate)return;
		turnplate.bRotate = !turnplate.bRotate;
		//获取随机数(奖品个数范围内)
		var item = rnd(turnplate.randomRate);
		//奖品数量等于10,指针落在对应奖品区域的中心角度[252, 216, 180, 144, 108, 72, 36, 360, 324, 288]
		rotateFn(item,"sad ");
	});
});
