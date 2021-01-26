var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i=0; i<A.length; i++){
	if (A[i] > largest){
		largest = A[i];
	}
}

alert(largest);

document.write("Array Items: " + A + "<br>");
document.write("Largest Item: " + largest + "<br>");



document.write("<br><br><br>");