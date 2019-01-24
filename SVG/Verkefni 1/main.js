let litir = ["#FE00FF", "#E8005C", "#FF1000", "#E83800", "#FF6B00", "#E88A00", "#FFB700", "#E8C300", "#FFF600", "#A1E800", "#44FF00", "#00E81E", "#00FF79", "#00E8BE", "#00D7FF", "#0079E8", "#0033FF", "#1E00E8", "#7600FF", "#B900E8", "#FF00C2"]
let old_selected = ""
let selected = "";
let done = false;
let timer = 2000;
let kolli_timer = 2000;
let tel = 0;
let kolli_tel = 1

let kolli = window.setInterval(function kolli_hreyfa() {
	if (kolli_tel % 2 == 0){
		TweenMax.to(document.getElementById("kolli"), kolli_timer/1000, {x: 500})
	}
	else{
		TweenMax.to(document.getElementById("kolli"), kolli_timer/1000, {x: 0})
	}

	kolli_tel++
},kolli_timer);

let ani = window.setInterval(function next(){
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
		window.clearTimeout(ani);
		window.setInterval(change, timer);
	}

}

function change(){
	let litur = litir[Math.floor(Math.random() * litir.length)];
	TweenMax.to(document.getElementById("c"), timer/1000, {fill: litur});
	TweenMax.to(document.getElementById("nafn"), timer/1000, {fill: litur});
	TweenMax.to(document.getElementById("snafn"), timer/1000, {fill: litur});
	tel++

	if(tel === litir.length){
		tel = 0
	}

}