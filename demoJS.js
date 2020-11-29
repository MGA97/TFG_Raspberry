window.onload = function()
{
	var updateInterval = 500 //in ms	
	var cont = 0;
	var img = document.createElement("img");
	var src = document.getElementById("x");
	
	function getData(data)
	{
		if(data){	
			if((data.Dedo1 < 40000) && (data.Dedo2 < 40000) && (data.Dedo3 > 50000) && (data.Dedo4 > 50000) && (data.Dedo5 < 40000) && (data.AccY < 5 )){
				img.src="1.png";
				src.appendChild(img);
			}
			if((data.Dedo1 < 40000) && (data.Dedo3 > 50000) && (data.Dedo4 > 50000) && (data.Dedo5 > 50000)&& (data.AccY > 0)){
				img.src="2.png";
				src.appendChild(img);
			}
			if((data.Dedo1 < 40000) && (data.Dedo3 > 50000) && (data.Dedo4 > 50000) && (data.Dedo5 > 50000) && (data.AccY < 0)){
				img.src="3.png";
				src.appendChild(img);
			}
			if((data.Dedo1 < 40000) && (data.Dedo3 > 50000) && (data.Dedo4 > 50000) && (data.Dedo5 < 40000) && (data.AccY > 5)){
				img.src="4.png";
				src.appendChild(img);
			} 
			if((data.Dedo1 < 40000) && (data.Dedo3 < 40000) && (data.Dedo4 < 40000) && (data.Dedo5 < 40000)){
				img.src="5.png";
				src.appendChild(img);
			} 
			if((data.Dedo1 > 50000) && (data.Dedo3 < 40000) && (data.Dedo4 > 50000) && (data.Dedo5 > 50000)){
				img.src="6.png";
				src.appendChild(img);
			}
		}
	}	
	function updateData() 
	{
		console.log("Update Data");
		$.getJSON("http://172.16.0.100:80/archivo.json", getData);
        	setTimeout(updateData,updateInterval);
		if (cont==10) {
			img.src="blanco.png";
			src.appendChild(img);
			cont = 0;
		}
		else {
			cont ++;
		}
		

	}
	updateData();
}
