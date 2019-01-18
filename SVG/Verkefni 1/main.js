let old_selected = ""
let selected = "";
let done = false;
let svg = document.getElementsByTagName("svg");

let timer = window.setInterval(function next(){
	old_selected = selected;

	if (selected === "J"){
		done++;
		selected = "O"
	}

	else if (selected === "O"){
		selected = "N"
	}

	else if (selected === "N"){
		selected = "A"
	}

	else if (selected === "A"){
		selected = "S"
	}

	else if (selected === "S"){
		selected = "J"
		
	}
	else if (selected === ""){
		selected = "J"
	}
	

	transition();
}, 1000);

let stafir = {
	"J": {"dom":document.getElementById("J"), "pos":{x:195, y: 0}},
	"O": {"dom":document.getElementById("O"), "pos":{x:180, y: 0}},
	"N": {"dom":document.getElementById("N"), "pos":{x:185, y: 0}},
	"A": {"dom":document.getElementById("A"), "pos":{x:185, y: 0}},
	"S": {"dom":document.getElementById("S"), "pos":{x:190, y: 0}},
}

function transition(){
	if (old_selected !== "" && done !== 2) {
		TweenMax.to(stafir[old_selected]["dom"], 1, {x:-195, y: 0});
	}

	if(done !== 2){
		TweenMax.to(stafir[selected]["dom"], 1, stafir[selected]["pos"]);
	}
	if(done == 2){
		TweenMax.to(document.getElementById("nafn"), 1, {fill:"black"});
		TweenMax.to(document.getElementById("snafn"), 1, {fill:"black"});
		window.clearTimeout(timer);
	}

}
