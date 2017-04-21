$(document).ready(function(){
	$(window).resize(function(){
		let height=parseInt($('article').css('height'))
		console.log(height)
		$('.zhc-footer').css('marginTop','height')
	})
	
	$('.navmin > div').last().click(function(){
		$('.navmin > div ul').toggle(200)
	})
	//	banner
	let lis=$('header ul li')
	let imgs=$('.ly-banner>div')
	let n=0;
	let t;
	let flag=true;
	t=setInterval(move,3000);
	function move(){
		n++;
		if(n>=imgs.length){
			n=0;
		}
		lis.eq(n).addClass('licolor').siblings().removeClass('licolor');
		imgs.eq(n).addClass('ly-op').siblings().removeClass('ly-op')
	}
	
	$('.ly-banner').hover(function(){
		clearInterval(t)
	},
	function(){
		t=setInterval(move,3000);
	})
	
	addEventListener("transitionend",function(){
		flag=true;
	})
		
})