const cells = document.querySelectorAll(".cell");
const statuss = document.querySelector("#status");
const reset = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;

const winningCombination = [
    [0, 1, 2],//horizontal
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],//vertical
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
]


function getWinner() {
    for (let pattern of winningCombination) {

        const a = cells[pattern[0]].textContent;
        const b = cells[pattern[1]].textContent;
        const c = cells[pattern[2]].textContent;

        if (a !== "" && a === b && b === c) {
            statuss.textContent = `Player ${a} wins`;
            gameActive = false;
            return;
        }
    }

    let full = true;

    cells.forEach(cell => {
        if (cell.textContent === "") {
            full = false;
        }
    });

    if (full) {
        statuss.textContent = "It's a draw";
        gameActive = false;
    }
}


reset.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.textContent = "";
    });
    currentPlayer = "X";
    gameActive = true;
    statuss.textContent = `Player ${currentPlayer}'s Turn`;
})

cells.forEach(cell => {
    cell.addEventListener("click", (e) => {

        if (cell.textContent !== "" || !gameActive) {
            return;
        }

        cell.textContent = currentPlayer;
        getWinner();

        if (gameActive) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statuss.textContent = `Player ${currentPlayer}`;
        }
    })
})