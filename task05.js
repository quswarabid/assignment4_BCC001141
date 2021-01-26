var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


alert(array);

for (var i=0; i<array.length; i++){
	for (var j=i+1; j<array.length; j++){
		if (array[j] == array[i]){
			array.splice(j,1);
			//alert(array);
		}
	}
}

alert(array);