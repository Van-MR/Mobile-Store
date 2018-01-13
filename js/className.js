var add_color = document.getElementById("add_color");
var obx_btn = add_color.getElementsByTagName("li");
var leng = obx_btn.length;
for (var i = 0 ; i<leng ; i++)
{
	obx_btn[i].index = i;
	obx_btn[i].addEventListener("touchend",function(){
		for (var j = 0 ; j<leng ; j++)
		{
			obx_btn[j].className = "";
		}
	this.className = "orchard_color";
	},false)

/*index end*/
}