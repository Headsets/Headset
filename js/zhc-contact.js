$(document).ready(function(){
//	鼠标一入一出
	$(window).resize(function(){
		let width=$(window).width()
		if(width>750){
			$('.col-lg-4 img').each(function(index,val){
				$(this).hover(function(){
					$(this).css({
						transform:'scale(1.2)'
					})
				},function(){
					$(this).css({
						transform:'scale(1)'
					})
				})
			})
		}
	})
	
})