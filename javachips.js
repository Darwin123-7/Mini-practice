let recordedPlayer = [];

function Player(name, age) {
    this.name = name;
    this.age = age;
}

function addPlayer(name, age) {
    const player = new Player(name, age);
    recordedPlayer.push(player);
}

const container = document.querySelector(".container");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const gridContainer = document.createElement("div");
    const deleteButton = document.createElement("button");
    gridContainer.classList.add("grid-container");

    const playerName = document.querySelector("#Player");
    const playerAge = document.querySelector("#p_Age")

    addPlayer(playerName.value, playerAge.value);

    let displayName = document.createElement("p");
    let displayAge = document.createElement("p");

    displayName.textContent = "Player Name: " + playerName.value;
    displayAge.textContent = "Player Age: " + playerAge.value;
    deleteButton.textContent = "delete";

    gridContainer.appendChild(displayName);
    gridContainer.appendChild(displayAge);
    gridContainer.appendChild(deleteButton);
    container.appendChild(gridContainer);
    playerName.value = "";
    playerAge.value = "";

    deleteButton.addEventListener("click", (e) => {
        container.removeChild(gridContainer);

    });


});



