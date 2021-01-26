var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];


for (var i=1; i<aCities.length; i++){
	document.write(i + o[i] + " choice is " + aCities[i-1] + "<br>");
}


document.write("<br><br><br>");