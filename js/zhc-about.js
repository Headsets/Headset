$(document).ready(function(){
	$(window).resize(function(){
		let height=parseInt($('article').css('height'))
		console.log(height)
		$('.zhc-footer').css('marginTop','height')
	})
	
	$('.navmin > div').last().click(function(){
		$('.navmin > div ul').toggle(200)
	})
	
})