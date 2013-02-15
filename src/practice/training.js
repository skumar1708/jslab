/**
 * @author sharvankumar
 */
function MyObject(name,age){

this.name = name;
this.age = age;

}

MyObject.prototype.getName = function(){
return this.name;
}

MyObject.prototype.setName = function(newName){
 this.name = newName;
}

MyObject.prototype.getAge = function(){
return this.age;
}


var testObj = new MyObject("Skumar","26");

console.log("old name==="+testObj.getName());

testObj.setName("Shravan");

console.log("new name==="+testObj.getName());


function ConsTest(){

this.address = "";

}

ConsTest.prototype = new MyObject;

ConsTest.prototype.getAddress = function(){
return this.address;
}

ConsTest.prototype.setAddress = function(newAddress){
}


//can we check the XMl in browser console practice

var person = new XML('<root><name>Bob Smith</name><likes><os>Linux</os><browser>Firefox</browser><language>JavaScript</language><language>Python</language></likes></root>');

//var xml = person.toXMLString();

console.log(person.name);
