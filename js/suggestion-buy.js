//评价
function sug01(){
	$('#suggestion').show();
	//分数
	var serStar = 0;
	var proStar = 0;
	$('#suggestion').find('.sbPro').find('img').on('click',function(){
		var index = $(this).index();
		proStar = index;
		for(var i=0;i<=4;i++)
		{
			if(i<=index)
			{
				$('#suggestion').find('.sbPro').find('img').eq(i).attr('src','img/sg03.png');
			}else{
				$('#suggestion').find('.sbPro').find('img').eq(i).attr('src','img/sg02.png');
			}
			
		}
	});
	$('#suggestion').find('.svSer').find('img').on('click',function(){
		var index = $(this).index();
		serStar = index;
		for(var i=0;i<=4;i++)
		{
			if(i<=index)
			{
				$('#suggestion').find('.svSer').find('img').eq(i).attr('src','img/sg03.png');
			}else{
				$('#suggestion').find('.svSer').find('img').eq(i).attr('src','img/sg02.png');
			}
			
		}
	});
	//返回
	$('#suggestion .rback').on('click',function(){
		$('#suggestion').hide();
		$('#myCode').show();
	});
	//提交
	$('#suggestion .nextBtn').on('click',function(){
		$('#suggestion').hide();
		$('#suggestSuccess').show();
		$('#suggestSuccess button').on('click',function(){
			$('#suggestSuccess').hide();
		});
	});
//	//上传图片
	var _upFile = document.getElementById("file1");
	_upFile.addEventListener("change", function() {
	
		if(_upFile.files.length === 0) {
			popWin(3,"请拍照");
			return;
		}
		var oFile = _upFile.files[0];
		//if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }
	
		/*  if(oFile.size>5*1024*1024){
		 message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})
	
		 return;
		 }*/
		if(!new RegExp("(jpg|jpeg|png)+", "gi").test(oFile.type)) {
			alert("照片上传：文件类型必须是JPG、JPEG、PNG");
			return;
		}
		upLoading();
		var reader = new FileReader();
		reader.onload = function(e) {
			var base64Img = e.target.result;
			//压缩前预览
			
			//--执行resize。
			var _ir = ImageResizer({
				resizeMode: "auto",
				dataSource: base64Img,
				dataSourceType: "base64",
				maxWidth: 714 //允许的最大宽度
					,
				maxHeight: 1334 //允许的最大高度。
					,
				onTmpImgGenerate: function(img) {
	
				},
				success: function(resizeImgBase64, canvas){
					closeLoading();
					var html = "";
						html += '<div class="floatl"><img src="img/bf02.png" /><div class="setIn"><img src="'+resizeImgBase64+'" />';
						html += '"/></div><button></button></div>';
					$('#suggestion .setImg').append(html);
					$('#suggestion .setIn').nextAll('button').on('click',function(){
						$(this).parent('.floatl').remove();
						if($('#suggestion .setImg').children('.floatl').length<6)
						{
							$('#suggestion .sgup').show();
						}
					});
					$('#suggestion .setIn').on('click',function(){
						var self = $(this);
						bigImg(self.find('img').attr('src'));
					});
					if($('#suggestion .setImg').children('.floatl').length>=6)
					{
						$('#suggestion .sgup').hide();
					}
					//赋值到隐藏域传给后台
					// $('#imgOne').val(resizeImgBase64.substr(22));
				},
				debug: true
			});
	
		};
		reader.readAsDataURL(oFile);
	}, false);
}
//使用第一步
function useStep1(){
	$('#use1').show();
	$('#use1 .use102 .inputBox .imageBox .floatl > img:nth-child(2)').on('click', function() {
		bigImg($(this).attr('src'));
	});
	//使用
	$('#use1').find('.rback').on('click',function(){
		$('#use1').hide();
		$('#myCode').show();
	});
	//确定使用
	$('#use1 .nextBtn').on('click',function(){
		if(proIndex==1)
		{
			$('#use2 .use2').children('img').attr('src','img/use03.png');
		}else if(proIndex==2){
			$('#use2 .use2').children('img').attr('src','img/use04.png');
		}
		$('#use2').show();
		
		$('#use2 .usNo').on('click',function(){
			$('#use2').hide();
		});
		$('#use2 .usYes').on('click',function(){
			useStep3();
		});
	});
}
function useStep3(){
	$('#use1').hide();
	$('#use2').hide();
	$('#use3').show();
	//使用
	$('#use3').find('.rback').on('click',function(){
		$('#use1').show();
		$('#use3').hide();
	});
	//确定使用
	$('#use3 .nextBtn').on('click',function(){
		useStep4();
	});
}
function useStep4(){
	$('#use3').hide();
	$('#use4').show();
	if(proIndex==1)
	{
		$('#use4 .use4').children('img').attr('src','img/use08.png');
	}else if(proIndex==2){
		$('#use4 .use4').children('img').attr('src','img/use07.png');
	}
	$('#use4 button').on('click',function(){
		$('#use4').hide();
		$('#myCode').show();
		if(proIndex==1)
		{
			$('#myCode .fiveYuan').attr('index',2);
			$('#myCode .fiveYuan').find('p').text("评价");
		}else if(proIndex==2){
			$('#myCode .threeYuan').attr('index',2);
			$('#myCode .threeYuan').find('p').text("评价");
		}
	});
}