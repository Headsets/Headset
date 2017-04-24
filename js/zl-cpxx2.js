
$(function(){
	var way='down';
	window.addEventListener('mousewheel',cw);
	window.addEventListener('DOMMouseScroll',cw);
	function cw(e){
		var wayz=e.wheelDelta||e.detail;
		if(wayz===120||wayz===-3){
			way='up';
		}else if(wayz===-120||wayz===3){
			way='down';
		}
	}
	var w=$('body').width();
	$(window).resize(function(){
		// w=$('body').width();
		// if(w<750){
		// 	$(window).off()
		// }
		location.reload()
	})
		

	if(w>750){


	$(window).scroll(function(){
		// console.log(way)
		var scrollT=$(window).scrollTop();
		var content1T=$('.zl-content1').offset().top;
		var content2T=$('.zl-content2').offset().top;
		var content3T=$('.zl-content3').offset().top;
		if(way=='down'){

			if((scrollT>content1T-200)&&(scrollT<content2T-100)){
				$('.zl-csimg').addClass('zl-reset').on('transitionend',function(){
					$('.zl-cs1,.zl-cs2').addClass('zl-reset')
				})
			}else{
				$('.zl-csimg').removeClass('zl-reset').on('transitionend',function(){
					$('.zl-cs1,.zl-cs2').removeClass('zl-reset')
				})
			}
			if((scrollT>content2T-200)&&(scrollT<content3T-100)){		
				$('.zl-gn1,.zl-gn2,.zl-gn3').addClass('zl-reset')
			}else{
				$('.zl-gn1,.zl-gn2,.zl-gn3').removeClass('zl-reset')

			}
			if((scrollT>content3T-200)&&(scrollT<content3T+700)){
				$('.zl-zsimg').addClass('zl-reset').on('transitionend',function(){
					$('.zl-zs1,.zl-zs2,.zl-zs3').addClass('zl-reset')
					})
			}else{
				$('.zl-zsimg').removeClass('zl-reset').on('transitionend',function(){
					$('.zl-zs1,.zl-zs2,.zl-zs3').removeClass('zl-reset')
					})
			}
		}else{
			if((scrollT>content1T-630)&&(scrollT<content1T+200)){
				$('.zl-csimg').addClass('zl-reset').on('transitionend',function(){
					$('.zl-cs1,.zl-cs2').addClass('zl-reset')
				})
			}else{
				$('.zl-csimg').removeClass('zl-reset').on('transitionend',function(){
					$('.zl-cs1,.zl-cs2').removeClass('zl-reset')
				})
			}
			if((scrollT>content2T-830)&&(scrollT<content2T+200)){		
				$('.zl-gn1,.zl-gn2,.zl-gn3').addClass('zl-reset')
			}else{
				$('.zl-gn1,.zl-gn2,.zl-gn3').removeClass('zl-reset')

			}
			if((scrollT>content3T-700)&&(scrollT<content3T+200)){
				$('.zl-zsimg').addClass('zl-reset').on('transitionend',function(){
					$('.zl-zs1,.zl-zs2,.zl-zs3').addClass('zl-reset')
					})
			}else{
				$('.zl-zsimg').removeClass('zl-reset').on('transitionend',function(){
					$('.zl-zs1,.zl-zs2,.zl-zs3').removeClass('zl-reset')
					})
			}
		}

	})
	}else{
		$('.zl-csimg').on('click',function(){
			$('.zl-cs1,.zl-cs2').slideToggle(400)
		})
		$('.zl-gn1,.zl-gn2,.zl-gn3').slideUp(0)
		$('.zl-content2 >span').on('click',function(){
			$('.zl-gn1,.zl-gn2,.zl-gn3').eq($(this).index()).slideToggle(400).siblings('.zl-gn1,.zl-gn2,.zl-gn3').slideUp()

		})
	}
	
})
