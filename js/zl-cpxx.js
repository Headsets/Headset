
$(function(){
	var h=$('.zl-show').height();
	var titles=$('ul.zl-hot >li');
	var box1=$('ul.zl-imgs');
	var box2=$('ul.zl-contents');
	$(window).resize(function(){
		// h=$('.zl-show').height();
		// console.log(h)
		location.reload();
	})
	if(h==640){
			console.log(1)
			box1.css('left',0)
			box2.css('right',0)
			titles.off().on('click',function(){
				$(this).addClass('zl-current').siblings().removeClass('zl-current')
				box1.css('top',-$(this).index()*h)
				box2.css('bottom',-$(this).index()*h)
			})
		}else if(h==907){
			var w=$('.zl-show').width();
			
			box1.css('top',0)
			box2.css('bottom',0)
			titles.off().on('click',function(){
				$(this).addClass('zl-current').siblings().removeClass('zl-current')
				box1.css('left',-$(this).index()*w)
				box2.css('right',-$(this).index()*w)
			})
		}else if(h==453){
			var w=$('.zl-show').width();
			
			box1.css('top',0)
			box2.css('bottom',0)
			titles.off().on('touchstart',function(){
				$(this).addClass('zl-current').siblings().removeClass('zl-current')
				box1.css('left',-$(this).index()*w)
				box2.css('right',-$(this).index()*w)
			})
		}
	// console.log(titles,box1,box2,w)
	
})
