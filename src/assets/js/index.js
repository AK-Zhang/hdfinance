$(function(){
	$('#nav_u > li ').click(function(){
		// 点击菜单页面导航样式和返回顶部
		// $('html,body').animate({scrollTop:0},500);
		$(this).children('a').css({'color':'#efc816','border-top':'3px solid #efc816'});
		$(this).siblings().children('a').css({'color':'#fff','border-top':'3px solid #262626'});
	})
	// 返回顶部
	$('#top').click(function(){
		$('html,body').animate({scrollTop:0},500);
	})
})
