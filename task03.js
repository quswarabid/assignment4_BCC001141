var colour_names = ["red", "blue", "green"];

var color_1 = prompt("what color you want to add to the beginning of array?");
colour_names.unshift(color_1);
alert(colour_names);

var color_2 = prompt("what color you want to add to the END of the array?");
colour_names.push(color_2);
alert(colour_names);

alert("Now I am going to add " + color_1 + " & " + color_2 + " to the beginning of the array, again.");
colour_names.unshift(color_1);
colour_names.unshift(color_2);
alert(colour_names);

alert("Deleting first color of the array and displaying it.");
colour_names.shift();
alert(colour_names);

alert("Deleting last color of the array and displaying it.");
colour_names.pop();
alert(colour_names);


var index = prompt("At which index you want to add a color?");
color_3 = prompt("What color you want to add?");
colour_names.splice(index, 0, color_3);
alert(colour_names);

var index_2 = prompt("At which index you want to delete colours?");
var how_many = prompt("How many colours you want to delete?");
colour_names.splice(index_2, how_many);
alert(colour_names);