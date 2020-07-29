let configData = {
    "card1": {
        "value": 1,
        "color": "#6F98A8"
    },
    "card2": {
        "value": 2,
        "color": "#2B8EAD"
    },
    "card3": {
        "value": 3,
        "color": "#2F454E"
    },
    "card4": {
        "value": 4,
        "color": "#2B8EAD"
    },
    "card5": {
        "value": 5,
        "color": "#2F454E"
    },
    "card6": {
        "value": 6,
        "color": "#BFBFBF"
    },
    "card7": {
        "value": 7,
        "color": "#BFBFBF"
    },
    "card8": {
        "value": 8,
        "color": "#6F98A8"
    },
    "card9": {
        "value": 9,
        "color": "#2F454E"
    }
}
function domReady() {
    const cards = Object.keys(configData);
    renderCards(cards);
}
function renderCards(cards) {
    const leftContentDiv = document.querySelector("#left-content");
    leftContentDiv.innerHTML = "";
    cards.forEach(key => {
        let newDiv = document.createElement("div");
        newDiv.className += "square";
        newDiv.style = "background:" + configData[key].color + ";";
        let span = document.createElement("span");
        span.textContent = configData[key].value;
        span.className += "card-content";
        newDiv.appendChild(span);
        leftContentDiv.appendChild(newDiv);
    });
}
function shuffle() {
    let cards = Object.keys(configData);
    cards = cards.sort(randomSort);
    renderCards(cards);
}
function sort() {
    let cards = Object.keys(configData);
    cards = cards.sort();
    renderCards(cards);
}
function randomSort(val1, val2) {
    return 0.5 - Math.random();
}
if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    domReady();
} else {
    document.addEventListener("DOMContentLoaded", domReady);
}