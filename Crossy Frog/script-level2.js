const resultDisplay = document.querySelector("#result");
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');

console.log(squares);
let currentIndex = 76;
const width = 9;

function moveFrog(e) {
    squares[currentIndex].classList.remove("frog");

    switch (e.key) {
        case "ArrowLeft":
            if (currentIndex % width !== 0) currentIndex -= 1;
            break;
        case "ArrowRight":
            if (currentIndex % width < width - 1) currentIndex += 1;
            break;
        case "ArrowUp":
            if (currentIndex - width >= 0) currentIndex -= width;
            break;
        case "ArrowDown":
            if (currentIndex + width < width * width) currentIndex += width;
            break;
    }

    squares[currentIndex].classList.add('frog');
    win();
    lose();
}

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
    }, 500); 
    
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
    }, 500);
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
    }, 500); 
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
    }, 500); 
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

        
        resetGame();
    }
}

function win() {
    if (squares[currentIndex].classList.contains('ending-block')) {
        resultDisplay.textContent = 'You Win!';
        document.removeEventListener('keyup', moveFrog);
    
    }
}

resetGame();
logsLeft.forEach(moveLogLeft);
logsRight.forEach(moveLogRight);
carsLeft.forEach(moveCarLeft);
carsRight.forEach(moveCarRight);



