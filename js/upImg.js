//购买
function buying(){
	$('#myCode').hide();
	$('#buyStep01').show();
	//返回
	$('#buyStep01 .rback').on('click',function(){
		$('#myCode').show();
		$('#buyStep01').hide();
	});
	//下一步
	$('#buyStep01 .nextBtn').on('click',function(){
		if($('#buyStep01 .name').val()=="")
		{
			popWin(3,"姓名不能为空！");
		}else{
			popWin(4,"",function(){
			
			},function(){
				buying2();
			})
		}
		
	});
	//上传图片
	var _upFile = document.getElementById("file");
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
						html += '<div class="floatl"><div class="imgIn"><img src="'+resizeImgBase64+'" /></div><img src="img/bf02.png" />';
						html += '<button></button></div>';
					$('#buyStep01 .ibIn').append(html);
					$('#buyStep01 .imgIn').nextAll('button').on('click',function(){
						$(this).parent('.floatl').remove();
						if($('#buyStep01 .ibIn').children('.floatl').length<6)
						{
							$('#buyStep01 .bsup').show();
						}
					});
					$('#buyStep01 .imgIn').on('click',function(){
						console.log(1);
						bigImg($(this).find('img').attr('src'));
					});
					if($('#buyStep01 .ibIn').children('.floatl').length>=6)
					{
						$('#buyStep01 .bsup').hide();
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
function buying2(){
	$('#buyStep01').hide();
	$('#buyStep02').show();
	//返回
	$('#buyStep02 .rback').on('click',function(){
		$('#buyStep01').show();
		$('#buyStep02').hide();
	});
	//上一步
	$('#buyStep02 .btPrev').on('click',function(){
		$('#buyStep01').show();
		$('#buyStep02').hide();
	});
	//下一步
	$('#buyStep02 .btNext').on('click',function(){
		if(proIndex==1)
		{
			popWin(6,"",function(){
				$('#buyStep02').hide();
				$('#myCode').show();
				$('#myCode .fiveYuan').attr('index',1);
				$('#myCode .fiveYuan').find('p').text("使用");

			});
		}else if(proIndex==2){
			popWin(5,"",function(){
				$('#buyStep02').hide();
				$('#myCode').show();
				$('#myCode .threeYuan').attr('index',1);
				$('#myCode .threeYuan').find('p').text("使用");
			});
		}
		
	});
	//勾选事件
	$('#checkbox').on('click',function(){
		if($(this).is(':checked')==true)
		{
			$(this).attr('checked','checked');
			$(this).prev('img').attr('src','img/bt03.png');
		}else{
			$(this).removeAttr('checked');
			$(this).prev('img').attr('src','img/bt02.png');
		}
	});
}