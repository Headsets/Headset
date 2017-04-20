$(document).ready(function(){
	$('.yzf-list1').hover(function(){
		$(this).css({
			background:'#F6F5F5',
			transform:'translateX(-45px)',
			width:'1020px',
		});
	},function(){
		$(this).css({
			background:'#fff',
			transform:'translateX(0)',
			transition:'transform .5s',
			width:'873px',
		});
	})
	$('.yzf-list2').hover(function(){
		$(this).css({
			background:'#F6F5F5',
			transform:'translateX(-45px)',
			width:'1020px',
		});
	},function(){
		$(this).css({
			background:'#fff',
			transform:'translateX(0)',
			transition:'transform .5s',
			width:'873px',
		});
	})
	
	
	$('.yzf-list3').hover(function(){
		$(this).css({
			background:'#F6F5F5',
			transform:'translateX(-45px)',
			width:'1020px',
		});
		$(this).animate({
			width:'1020px',
		},300);
	},function(){
		$(this).css({
			background:'#fff',
			transform:'translateX(0)',
			transition:'transform .5s',
			width:'873px',
		});
	})
	
	$('.yzf-list4').hover(function(){
		$(this).css({
			background:'#F6F5F5',
			transform:'translateX(-45px)',
			width:'1020px',
//			transition:'transform 5s',
		});
		$(this).animate({
			width:'1020px',
		},300);
	},function(){
		$(this).css({
			background:'#fff',
			transform:'translateX(0)',
			transition:'transform .5s',
			width:'873px',
		});
		$(this).animate({
			width:'873px',
		},300);
	})
})
