	window.onload=function(){
		var obox=document.getElementById('check9');
		var odiv=document.getElementById('shopp_cart');	
		var label_con =odiv.getElementsByTagName('label');
		var oleng = label_con.length;
		obox.addEventListener("touchend",function(){
			console.log("yang");
			for(var i=0; i<oleng; i++){
				if(obox.checked==true){
					label_con[i].style.display = "none";
					alert("yang");
				}else{
					label_con[i].style.display = "block";
				}
				label_con[i].onclick=function(){
					var a=0;
					for(var i=0; i<oleng;i++){
						if(label_con[i].checked==true){
							a++;
						}
					}
					if(a==oleng){
						obox.checked=true;
					}else{
						obox.checked=false;	
					}
				}
			}
		},false);
	};
		/*
			for(var i=0;i<oinpt.length;i++){
				if(obox.checked==true){
					oinpt[i].checked=true;
				}else{
					oinpt[i].checked=false;	
				}
				oinpt[i].onclick=function(){
					var a=0;
					for(var i=0; i<oinpt.length;i++){
						if(oinpt[i].checked==true){
							a++;
						}
					}
					if(a==oinpt.length){
						obox.checked=true;
					}else{
						obox.checked=false;	
					}
				}
			};	
		};
		*/