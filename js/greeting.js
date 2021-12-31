const loginForm = document.getElementById("loginForm");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(submitEvent) {
	submitEvent.preventDefault();
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello ${username}`;
}

// event
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}