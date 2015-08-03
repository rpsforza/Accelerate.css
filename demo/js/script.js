var u = 0;
var ballpos = true;
window.onload = oranges();
var change = setInterval(oranges, 1000);

function oranges() {
	if (ballpos == true) {
		ballpos = false;
		document.getElementById("ball1").style.left = "90%";
		document.getElementById("ball2").style.left = "90%";
		document.getElementById("ball3").style.left = "90%";
		document.getElementById("ball4").style.left = "90%";
	}
	else if (ballpos == false) {
		ballpos = true;
		document.getElementById("ball1").style.left = "5%";
		document.getElementById("ball2").style.left = "5%";
		document.getElementById("ball3").style.left = "5%";
		document.getElementById("ball4").style.left = "5%";
	}
}