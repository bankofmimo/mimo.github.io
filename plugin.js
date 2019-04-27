var num1 = "txtbox1";
var num2 = "txtbox2";
var checkHours = function (){
console.log("checkHours");
value1 = document.getElementById("txtbox1").value;
value2 = document.getElementById("txtbox2").value;

if (value1 === ""){
document.getElementById("output1").innerHTML = "Please enter valid value!";
}

else if (value2 === ""){
document.getElementById("output1").innerHTML = "Please enter valid value!";
}

else{
// document.getElementById("output1").innerHTML ="Require "+Math.round(value2 / value1)+" hours of work to earn back the money... ";
document.getElementById("output2").innerHTML = Math.round(539.97 / value2)+" "+value1  
document.getElementById("output2-1").innerHTML =Math.round(150.59 / value2)+" "+value1
document.getElementById("output2-2").innerHTML =Math.round(269.00 / value2)+" "+value1

}}
