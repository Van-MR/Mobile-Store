/*Orchard_fragrance start*/
window.onload = function(){
	var oAdd = document.getElementById("add_color");
	var oLi = oAdd.getElementsByTagName("li");
	var oP = oAdd.getElementsByTagName("p");
	var sea = document.getElementsByClassName("seasonal_con");
	var m = oP.length;
	var leng = oLi.length;
	for (var i=0 ; i<leng ; i++){
		oLi[i].add = i;
		oLi[i].addEventListener("touchend",function(){
			for (var j=0 ; j<leng ; j++){
				oLi[j].className = "";
				//console.log(oLi[j].lastChild);
				oLi[j].lastChild.style.opacity = "0";
				//sea[j].style.display = "none";
				sea[j].style.display = "none";
			}
		this.className ="orchard_color";
		this.lastChild.style.opacity = "1";
		sea[this.add].style.display = "block";
		},false);
	}
}
/*Orchard_fragrance end*/