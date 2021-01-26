var seqA = [];
var seqB = [];
var seqC = [];
var seqD = [];
var seqE = [];



for (var i=0; i<15; i++){
	seqA.push(i+1);
}
alert(seqA);

for (var i=10; i>0; i--){
	seqB.push(i);
}
alert(seqB);

for (var i=0; i<20; i++){
	if(i%2 == 0){
		seqC.push(i);
	}
}
alert(seqC);

for (var i=0; i<20; i++){
	if(i%2 == 1){
		seqD.push(i);
	}
}
alert(seqD);

for (var i=1; i<11; i++){
	seqE.push(i*2 + "k");
}
alert(seqE);
