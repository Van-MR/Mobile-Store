$(function(){
	var $li_btn = $(".inner_pages .seasonal li");
	var $ul_box = $(".inner_top ul");
	var $season_border = $(".orchard_main_con ul li p.season_border");
	var index = 0;
		$li_btn.bind("click",function(){
			index = $(this).index();
			$(this).addClass("orchard_color").siblings().removeClass("orchard_color");
			$ul_box.eq(index).show().siblings().hide();
			$(this).find("p.season_border").show().parent().siblings().find("p.season_border").hide();
		})
})
$(function(){
	var $inner_con = $(".inner_pages ul.inner_nav li.inner_con");
	var $inner = $(".best_top ul");
	var $inner_border_con = $(".inner_pages ul.inner_nav li.inner_con span.inner_border_con");
	var index = 0;
		$inner_con.bind("click",function(){
			index = $(this).index();
			$(this).addClass("inner_con_style").siblings().removeClass("inner_con_style");
			$(this).find("span.inner_border_con").show().parent().siblings().find("span.inner_border_con").hide();
			$inner.eq(index).fadeIn(50).siblings().fadeOut(50);
		});
});