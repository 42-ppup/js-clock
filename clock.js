const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    countDown = document.querySelector(".js-countDown");

const endDate = new Date();
endDate.setDate(endDate.getDate() + 1);
endDate.setHours(18);
endDate.setMinutes(0);
endDate.setSeconds(0);


function setLeaveTimer(date) {
    const endTime = endDate.getTime();
    const timeCounter = endTime - date;
    var hours = Math.floor((timeCounter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeCounter % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeCounter % (1000 * 60)) / 1000);
    
    countDown.classList.add("show");
    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
    countDown.innerText = `퇴근 ${time} 전`;
}

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
    if(hours < 18 && hours >= 9) {
        setLeaveTimer(date);
    } else {
        countDown.classList.remove("show");
    }
    clockTitle.innerText = time;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();