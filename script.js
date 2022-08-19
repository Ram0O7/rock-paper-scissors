const score = document.querySelector('.score');
const home = document.querySelector('.home');
const results = document.querySelector('.result');
const resultBody = document.querySelector('.result-body');
const choice = document.querySelectorAll('.choice');
const choosen = document.querySelectorAll('.choosen');
const rules = document.querySelector('.rules');
const start = document.querySelector('.start-again');
const playBtn = document.querySelector('.play-btn');
const resultMessage = document.querySelector('.result-type');
const u = document.querySelector('.u');
const c = document.querySelector('.c');

let scoreCount = 0;

function userWins() {
    c.classList.remove('circles');
    u.classList.add('circles');
}
function cWins() {
    u.classList.remove('circles');
    c.classList.add('circles');
}
function draw() {
    // c.classList.remove(...c.classList);
    c.classList.remove('circles');
    u.classList.remove('circles');
}

const user = choosen[0].classList;
const computer = choosen[1].classList;

const computerChoice = ['rock', 'paper', 'scissors'];

// writing game logic
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', () => {

        let index = Math.floor(Math.random() * 3);
        choosen[1].classList.add('choosen');
        choosen[0].classList.add('choosen');


        if (choice[i].classList.contains('rock')) {
            choosen[0].classList.add('rock');
            choosen[1].classList.add(computerChoice[index]);
        }
        if (choice[i].classList.contains('paper')) {
            choosen[0].classList.add('paper');
            choosen[1].classList.add(computerChoice[index]);
        }
        if (choice[i].classList.contains('scissors')) {
            choosen[0].classList.add('scissors');
            choosen[1].classList.add(computerChoice[index]);
        }

        if (home.style.display = 'flex') {
            home.style.display = 'none'
            resultBody.style.display = 'flex'
        }

        setTimeout(showResult, 2000);
        results.style.display = 'none';
        draw();
    })
}

playBtn.addEventListener('click', () => {
    if (resultBody.style.display = 'flex') {
        resultBody.style.display = 'none'
        home.style.display = 'flex'
        choosen[1].classList.remove(...choosen[1].classList);
        choosen[0].classList.remove(...choosen[0].classList);
    }
})

const result = () => {
    if (user.contains('rock') && computer.contains('rock')) {
        resultMessage.innerHTML = 'DRAW';
        draw();

    } else if (user.contains('rock') && computer.contains('paper')) {
        resultMessage.innerHTML = 'YOU LOSE';
        cWins();
        scoreCount--;

    } else if (user.contains('rock') && computer.contains('scissors')) {
        resultMessage.innerHTML = 'YOU WIN';
        userWins();
        scoreCount++;

    } else if (user.contains('paper') && computer.contains('rock')) {
        resultMessage.innerHTML = 'YOU WIN';
        userWins();
        scoreCount++;

    } else if (user.contains('paper') && computer.contains('paper')) {
        resultMessage.innerHTML = 'DRAW';
        draw();

    } else if (user.contains('paper') && computer.contains('scissors')) {
        resultMessage.innerHTML = 'YOU LOSE';
        cWins();
        scoreCount--;

    } else if (user.contains('scissors') && computer.contains('rock')) {
        resultMessage.innerHTML = 'YOU LOSE';
        cWins();
        scoreCount--;

    } else if (user.contains('scissors') && computer.contains('paper')) {
        resultMessage.innerHTML = 'YOU WIN';
        userWins();
        scoreCount++;

    } else if (user.contains('scissors') && computer.contains('scissors')) {
        resultMessage.innerHTML = 'DRAW';
        draw();

    }
    score.innerHTML = scoreCount;
}

function showResult() {
    result();
    results.style.display = 'flex';
}