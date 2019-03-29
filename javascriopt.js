function hover(ele) {
	ele.style.opacity = "0.6";
}

function unhover(ele){
	ele.style.opacity = "1";
}

function request_form(){
	document.getElementsByClassName("form-elements")[0].style.display = "inline";
	document.getElementById("request-button").style.display = "none";
}

function submit_button(){
	document.getElementById("submit-button").style.color = "white";
	document.getElementById("submit-button").style.backgroundColor = "black";
}