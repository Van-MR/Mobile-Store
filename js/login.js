$(function(){
	var $login = $(".wf-search header div.login");
	var $login_box = $(".wf-search header div.login a p.login_box");
	var $font = $(".wf-search header div.login a font");
	var make = true
	$login.bind("click",function(){
		if(make)
		{
			$font.css({"transform":"rotate(180deg)","top":"15"+"px"});
			make = false;
		}
		else
		{
			$font.css({"transform":"rotate(0deg)","top":"19"+"px"});
			make = true;
		}
	})
});
