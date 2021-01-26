var inputPassword = prompt("Enter an alphanumeric of length 8:");

while(!isValid(inputPassword)){
	inputPassword = prompt("Enter an alphanumeric of length 8:");
}

function isValid(inputText){
	var alphabetPresent=false, numberPresent=false, startsWithAlphabet=false;
	
	if(inputText.length>=8){
		if(parseInt(inputText[0])>=0 && parseInt(inputText[0])<=9){
			startsWithAlphabet = false;
		}else{
			startsWithAlphabet = true;
		}

		for (int i=0; i<inputText.length(); i++){
			if(parseInt(inputText[i])>=0 && parseInt(inputText[i])<=9 ){
				numberPresent = true;
			}
			if(alphanumeric(inputText[i])){
				alphabetPresent = true;
			}
		}	
	}
}


// Function to check letters and numbers
function isAlphabet(inputtxt){
	var letterNumber = /^[a-zA-Z]+$/;
	if((inputtxt.value.match(letterNumber)){
		return true;
	}else{
		alert("message"); 
		return false; 
	}
}
function isNumber(inputtxt){
	var letterNumber = /^[0-9]+$/;
	if((inputtxt.value.match(letterNumber)){
		return true;
	}else{
		alert("message"); 
		return false; 
	}
}
  