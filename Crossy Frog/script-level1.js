const resultDisplay = document.querySelector("#results");
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');

console.log(squares);
let currentIndex = 76; // position the frog starts
const width = 9;

function moveFrog(e) {
    // code removes the frog and  prevents a trail of frogs...
    squares[currentIndex].classList.remove("frog"); 

    switch (e.key) {
        case "ArrowLeft":
            if(currentIndex % width !== 0) currentIndex -= 1;
            break;
        case "ArrowRight":
            if(currentIndex % width < width - 1) currentIndex += 1;
            break;
        case "ArrowUp":
            if(currentIndex - width >= 0) currentIndex -= width;
            break;
        case "ArrowDown":
            if(currentIndex + width < width * width) currentIndex += width;
            break;
    }

    squares[currentIndex].classList.add('frog'); // adds the frog back into the next grid after it 'moved'
    win();
    lose();
}




document.addEventListener("keyup", moveFrog);

function moveLogLeft(logLeft) {
    setInterval(() => {
        switch (true) {
            case logLeft.classList.contains("l1"):
                logLeft.classList.remove("l1");
                logLeft.classList.add("l2");
                break;
            case logLeft.classList.contains("l2"):
                logLeft.classList.remove("l2");
                logLeft.classList.add("l3");
                break;
            case logLeft.classList.contains("l3"):
                logLeft.classList.remove("l3");
                logLeft.classList.add("l4");
                break;
            case logLeft.classList.contains("l4"):
                logLeft.classList.remove("l4");
                logLeft.classList.add("l5");
                break;
            case logLeft.classList.contains("l5"):
                logLeft.classList.remove("l5");
                logLeft.classList.add("l1");
                break;
        }
    }, 1000); // adjusting log movement intervals
    
}

function moveLogRight(logRight) {
    setInterval(() => {
        switch (true) {
            case logRight.classList.contains("l1"):
                logRight.classList.remove("l1");
                logRight.classList.add("l5");
                break;
            case logRight.classList.contains("l2"):
                logRight.classList.remove("l2");
                logRight.classList.add("l1");
                break;
            case logRight.classList.contains("l3"):
                logRight.classList.remove("l3");
                logRight.classList.add("l2");
                break;
            case logRight.classList.contains("l4"):
                logRight.classList.remove("l4");
                logRight.classList.add("l3");
                break;
            case logRight.classList.contains("l5"):
                logRight.classList.remove("l5");
                logRight.classList.add("l4");
                break;
        }
    }, 1000); 
}

function moveCarLeft(carLeft) {
    setInterval(() => {
        switch (true) {
            case carLeft.classList.contains("c1"):
                carLeft.classList.remove("c1");
                carLeft.classList.add("c2");
                break;
            case carLeft.classList.contains("c2"):
                carLeft.classList.remove("c2");
                carLeft.classList.add("c3");
                break;
            case carLeft.classList.contains("c3"):
                carLeft.classList.remove("c3");
                carLeft.classList.add("c1");
                break;
        }
    }, 1000); 
}

function moveCarRight(carRight) {
    setInterval(() => {
        switch (true) {
            case carRight.classList.contains("c1"):
                carRight.classList.remove("c1");
                carRight.classList.add("c3");
                break;
            case carRight.classList.contains("c2"):
                carRight.classList.remove("c2");
                carRight.classList.add("c1");
                break;
            case carRight.classList.contains("c3"):
                carRight.classList.remove("c3");
                carRight.classList.add("c2");
                break;
        }
    }, 1000); 
}

function resetGame() {
    // Reset frog position
    squares[currentIndex].classList.remove('frog');
    currentIndex = 76;
    squares[currentIndex].classList.add('frog');

    // Clear result display
    resultDisplay.textContent = '';

    // Add event listener back for frog movement
    document.addEventListener('keyup', moveFrog);
}

function lose() {
    if (
        squares[currentIndex].classList.contains('c1') ||
        squares[currentIndex].classList.contains('L4') ||
        squares[currentIndex].classList.contains('l5')
    ) {
        resultDisplay.textContent = 'You Lose!';
        squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keyup', moveFrog);

        // auto resets the game
        resetGame();
    }
}

function win() {
    if (squares[currentIndex].classList.contains('ending-block')) {
        resultDisplay.textContent = 'You Win!';
        document.removeEventListener('keyup', moveFrog);
        window.location.href = 'level2.html'; 
    }
}

resetGame();
logsLeft.forEach(moveLogLeft);
logsRight.forEach(moveLogRight);
carsLeft.forEach(moveCarLeft);
carsRight.forEach(moveCarRight);


