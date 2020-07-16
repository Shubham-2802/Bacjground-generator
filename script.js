var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul=document.querySelector("ul");

function inputlen(){
	return input.value.length;
}

function createlement(){
	var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
}

button.addEventListener("click",function(){
	if(inputlen() > 0){
		createlement();
	}
})

input.addEventListener("keypress",function(event){
	if(inputlen() > 0 && event.keyCode === 13){
		createlement();
	}
})


var css=document.querySelector("h2");
var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.getElementById("gradient");

function changegradient(){
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changegradient);

color2.addEventListener("input", changegradient);