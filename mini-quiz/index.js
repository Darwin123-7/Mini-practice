const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const answer = document.querySelector('input[name="question1"]:checked');
    const answer2 = document.querySelector('input[name="question2"]:checked');
    const answer3 = document.querySelector('input[name="question3"]:checked');


    const isCorrect = document.createElement("p");
    const isCorrect2 = document.createElement("p");
    const isCorrect3 = document.createElement("p");

    const isRight = "Correct";
    const isWrong = "Wrong"

    const cor1 = "World Wide Web";
    const cor2 = "Guido Rossum";
    const cor3 = "HyperText MarkUp Language";

    let score = 0;
    if (answer.value === cor1) {
        isCorrect.textContent = isRight;


    } else {
        isCorrect.textContent = isWrong;
    }

    if (answer2.value === cor2) {
        isCorrect2.textContent = isRight;

    } else {
        isCorrect2.textContent = isWrong;
    }

    if (answer3.value === cor3) {
        isCorrect3.textContent = isRight;

    } else {
        isCorrect3.textContent = isWrong;
    }


    let scored = 0;

    // Check answers
    if (answer.value === cor1) {
        scored++;
    }

    if (answer2.value === cor2) {
        scored++;
    }

    if (answer3.value === cor3) {
        scored++;
    }

    // Display final score
    const addScore = document.createElement("p");
    addScore.textContent = scored;
    form.appendChild(addScore);

    form.textContent = "";


    form.appendChild(isCorrect);
    form.appendChild(isCorrect2);
    form.appendChild(isCorrect3);
    form.appendChild(addScore);

});