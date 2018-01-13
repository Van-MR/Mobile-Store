var oBtn = document.getElementById("menu");
var uLi = oBtn.getElementsByTagName("a");
var n = uLi.length;
for (var i = 0 ; i<n ; i++)
{
	uLi[i].index = i;
	uLi[i].addEventListener("touchend",function(){
		for (var j = 0 ; j<n ; j++)
		{
			uLi[j].className = "";
		}
	this.className = "red";
	},false)

/*index end*/
}