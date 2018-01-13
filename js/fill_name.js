$(function(){
	var $btn = $(".fill_name li.fill");
	var $name_box = $(".name_perf .name_box");
	
	var $seaso = $(".inner_pages .seasonal li");
	var $se_con = $(".inner_top ul");
	
	var $video_text_con = $(".video_text_box .video_text_con");
	var index = 0;
	show($btn,$name_box);
	show($seaso,$se_con);
	show($btn,$video_text_con);
	function show(btn,name_box)
	{
		btn.bind("click",function(){
			index = $(this).index();
			$(this).addClass("name_color").siblings().removeClass("name_color");
			$(this).find("span.name_border").fadeIn(100).parent().siblings().find("span.name_border").fadeOut(100);
			name_box.eq(index).fadeIn(10).siblings().fadeOut(10);
		});
	}
});
$(function(){
	var $libtn = $(".quick_content .video_text_con ul li");
	var $quick_span = $(".quick_content .video_text_con ul li p.quick_p span.quick_span");
	$libtn.bind("click",function(){
		$(this).find("div.quick_box").show().parent().siblings().find("div.quick_box").hide();
		$quick_span.css("-webkit-transform","rotate(0deg)");
		$(this).find("span.quick_span").css("-webkit-transform","rotate(90deg)");
	});
})
//$(function(){
//	var $li_btn = $(".inner_pages .seasonal li");
//	var $ul_box = $(".inner_top ul");
//	var $season_border = $(".orchard_main_con ul li p.season_border");
//	var index = 0;
//	main($li_btn,$ul_box);
//	function main(li_btn,ul_box)
//	{
//		$li_btn.bind("click",function(){
//			index = $(this).index();
//			$(this).addClass("orchard_color").siblings().removeClass("orchard_color");
//			$ul_box.eq(index).show().siblings().hide();
//			$(this).find("p.season_border").show().parent().siblings().find("p.season_border").hide();
//		})
//	}
//})
$(function(){
	var $integral = $("a.account_integral");
	var $account_txt = $("li.account_li a.account_integral span.account_txt");
	var leng  = $integral.length;
	var i = 0;
	var make = true;
	var $acc_a_pic = $("dl.acc_width dt.acc_pic a");
		$integral.bind("click",function(){
			for (i = 0 ; i<leng ; i++){
				$integral[i].className = "account_integral";
			}
			$(this).addClass("account_gray");
			$(this).find("span.account_txt").addClass("account_color").parent().parent().siblings().find("span.account_txt").removeClass("account_color")
		})
	$acc_a_pic.bind("click",function(){
		if(make){
			$(this).addClass("acc_a_border");
		}
		else
		{
			$(this).removeClass("acc_a_border");
		}
		make = ! make;
	});
});
$(function(){
	var $perfor_box = $("a.perfor_box");
	$perfor_box.bind("click",function(){
		$(this).addClass("perfor_style").siblings().removeClass("perfor_style");
	});
});
$(function(){
	var $li_btn = $(".Integral_mall .integ_box .integ_left ul.integ_ul li.integ_li");
	var $ul_box = $(".Integral_mall .integ_box .integ_right ul.integ_main");
	var $p_con = $(".Integral_mall .integ_box .integ_left ul.integ_ul li.integ_li p");
	var index = 0;
	$li_btn.bind("click",function(){
		$(this).addClass("integ_back").siblings().removeClass("integ_back");
		index = $(this).index();
		$p_con.hide();
		$(this).find("p").show();
		$ul_box.eq(index).fadeIn().siblings().fadeOut();
	});
})
$(function(){
	var $on_img = $(".online .online_main .online_m_box .online_m_box_ls span.online_page font.on_img");
	var $src_img = $(".online .online_main .online_m_box .online_m_box_ls span.online_page font.on_img img");
	
	var leng = $src_img.length;
	
	for(var i=0;i< $src_img.length;i++){
		$src_img.eq(i).make=true;

		$src_img.eq(i).bind("click",function(){
		
			if(this.make){
				$(this).attr("src","images/xuanzuo/online_"+2+".png");
			}
			else 
			{
				$(this).attr("src","images/xuanzuo/online_"+1+".png");
			}
			this.make = !this.make;
		
		})
	}
	
	
})







