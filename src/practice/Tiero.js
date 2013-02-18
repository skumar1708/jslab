/**
 * This is a test .js file to check
 * the object oriented concept in JavaScript<br>
 * 
 * <b>Author:</b>  <tt>Shravan Kumar Sharma</tt>
 * 
 * @date 15-02-13
 */
function ObjectTiero(){
	this.name = "Michelle Kelly";
	this.age = 18;
	this.projects = [];
}

function Sequence(){
	
	this.rangeCount = 30;
}

Sequence.prototype = new ObjectTiero;

