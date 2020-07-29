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

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    domReady();
} else {
    document.addEventListener("DOMContentLoaded", domReady);
}

function domReady() {
    const cards = Object.keys(configData);
    createCards(cards);
}

function createCards(cards) {
    const leftContentDiv = document.querySelector("#left-content");
    leftContentDiv.innerHTML = "";
    cards.forEach(key => {
        let newDiv = document.createElement("div");
        newDiv.className += "square";
        newDiv.style.backgroundColor = configData[key].color;
        let span = document.createElement("span");
        span.textContent = configData[key].value;
        span.className += "card-content";
        newDiv.appendChild(span);
        leftContentDiv.appendChild(newDiv);
    });
}

function rerenderCards(cards) {
    const leftContentDiv = document.querySelector("#left-content");
    const cardsDOM = leftContentDiv.children;
    cards.forEach((key, index) => {
        cardsDOM[index].style.backgroundColor = configData[key].color;
        cardsDOM[index].children[0].textContent = configData[key].value;
    });
}

function shuffle() {
    let cards = Object.keys(configData);
    cards = cards.sort(randomSort);
    rerenderCards(cards);
}

function sort() {
    let cards = Object.keys(configData);
    cards = cards.sort();
    rerenderCards(cards);
}

function randomSort(val1, val2) {
    return 0.5 - Math.random();
}