var A = ["cake", "apple pie", "cookie", "chips", "patties"];


var query = prompt("Welcome to Bombay bakery. What do you want to order?");

var i = -1;

i = A.indexOf(query);

if (i != -1){
	alert(query + " is available at index #" + i + " of our bakery.");
}else{
	alert("We are Sorry that " + query + " is not available in our bakery.");
}