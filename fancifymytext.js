function helloWorld() {
	const text = document.querySelector("#text");
	text.style.fontSize = "24pt";
}

function fancy() {
	const text = document.querySelector("#text");
	text.style.fontWeight = "700";
	text.style.color = "blue";
	text.style.textDecoration = "bold";
}

function boring() {
	const text = document.querySelector("#text");
	text.style = "";
}

function moo() {
	const text = document.querySelector("#text");
	const upperCaseText = text.value.toUpperCase();
	const splitUpper = upperCaseText.split(".");
	text.value = splitUpper.join("-Moo");
}