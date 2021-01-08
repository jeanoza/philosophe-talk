const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("span");



function getTime() {

    const date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes();
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    console.log("reloaded");
    
}

function init() {
    getTime();
    setInterval(getTime, (1000 * 60));
}

init();