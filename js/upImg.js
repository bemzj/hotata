$(function(){
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
//	var reader = new FileReader();
//	zzoFile = $('#file').val();
//	reader.onload = function(e) {
//		var base64Img = e.target.result;
//		//压缩前预览
//	
//		//--执行resize。
//		var _ir = ImageResizer({
//			resizeMode: "auto",
//			dataSource: base64Img,
//			dataSourceType: "base64",
//			maxWidth: 750 //允许的最大宽度
//				,
//			maxHeight: 1334 //允许的最大高度。
//				,
//			onTmpImgGenerate: function(img) {
//	
//			},
//			success: function(resizeImgBase64, canvas) {
//				layer.closeAll();
//				$this.uploadImgs.push(resizeImgBase64);
//	
//				if($this.uploadImgs.length >= 6) {
//					$this.addIcon = false;
//				} else {
//					$this.addIcon = true;
//				}
//				console.log(resizeImgBase64);
//				//赋值到隐藏域传给后台
//				// $('#imgOne').val(resizeImgBase64.substr(22));
//			},
//			debug: true
//		});
//	
//	};
//	reader.readAsDataURL(oFile);
});
function buying(){
	$('#myCode').hide();
	$('#buyStep01').show();
	//返回
	$('#buyStep01 .rback').on('click',function(){
		$('#myCode').show();
		$('#buyStep01').hide();
	});
	$('#buyStep01 .nextBtn').on('click',function(){
		popWin(4,"",function(){
			
		},function(){
			buying2();
		})
	});
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
		popWin(5,"",function(){
			$('#buyStep02').hide();
			mycodes();
		});
	});
}