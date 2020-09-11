const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser";
const SHOW_CL = "show";

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem(USER_LS, currentValue);
    paintGreeting(currentValue);
}

function askForName() {
    form.classList.add(SHOW_CL);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOW_CL);
    greeting.classList.add(SHOW_CL);
    greeting.innerText = `Hello, ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();