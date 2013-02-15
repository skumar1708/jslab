/**
 * js file contains the methods tobe called from
 * 
 * html file at run time
 * 
 * to check the mouseover event behaviour
 * 
 */ 
function setName(){
	
	var person = new ObjectTiero();
	// person.name = "Shravan";
	person.age = 25;
	
	
	document.getElementById('textShow').innerHTML = "Name:"+person.name +"\n"+"Age:"+person.age;	

}



