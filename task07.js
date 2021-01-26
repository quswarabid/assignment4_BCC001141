var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]

alert(a);
alert(b);

a = a.concat(b);

a.sort((a, b) => a - b);

for (var i=0; i<a.length; i++){
	for (var j=i+1; j<a.length; j++){
		if (a[j] == a[i]){
			a.splice(j,1);
			//alert(array);
		}
	}
}

alert(a);
