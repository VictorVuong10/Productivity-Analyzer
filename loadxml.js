function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200){
			readScore(this);
		}
	};
	xhttp.open("GET", "productivity.xml", true);
	xhttp.send();
}

function readScore(xml){
	var i;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>date</th><th>time</th><th>date</th></tr>";
	var x = xmlDoc.getElementsByTagName("test");
	
	var score = xmlDoc.getElementsByTagName("date");

	for (i = 0; i < x.length; i++) { 
    	
    	table += "<tr><td>" +
    	x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
    	"</td><td>" +
    	x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue+
    	"</td><td>"+
    	x[i].getElementsByTagName("score")[0].childNodes[0].nodeValue +
    	"</td></tr>";
  	}

  	document.getElementById("demo").innerHTML = table;
  	document.getElementById("demo").innerHTML += score[0].childNodes[0].nodeValue;	
}

function writeDoc(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200){
			document.getElementById("clear").innerHTML = "11111";
		}
	};

	xmlhttp.open("GET", "save.php", true);
	xmlhttp.send();
}






