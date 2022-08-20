const score = document.querySelector('.score');
const home = document.querySelector('.home');
const results = document.querySelector('.result');
const resultBody = document.querySelector('.result-body');
const choice = document.querySelectorAll('.choice');
const choosen = document.querySelectorAll('.choosen');
const rules = document.querySelector('.rules');
const rulebtn = document.querySelector('.rule');
const start = document.querySelector('.start-again');
const playBtn = document.querySelector('.play-btn');
const resultMessage = document.querySelector('.result-type');
const u = document.querySelector('.u');
const c = document.querySelector('.c');

const sound1 = new Audio('mix0.wav');
const sound2 = new Audio('mix1.wav');

rulebtn.addEventListener('click', () => {
    rules.style.display = 'block';
})
rules.addEventListener('click', () => {
    rules.style.display = 'none';
})

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
    // u.classList.remove(...u.classList);
    c.classList.remove('circles');
    u.classList.remove('circles');
}

const user = choosen[0].classList;
const computer = choosen[1].classList;

const computerChoice = ['rock', 'paper', 'scissors'];

function c_choice() {
    let index = Math.floor(Math.random() * 3);
    choosen[1].classList.remove('blank');
    choosen[1].classList.add(computerChoice[index]);
}
// writing game logic
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', () => {
        sound1.play();

        choosen[1].classList.add('choosen');
        choosen[0].classList.add('choosen');


        if (choice[i].classList.contains('rock')) {
            choosen[0].classList.add('rock');
            setTimeout(c_choice,2000);
        }
        if (choice[i].classList.contains('paper')) {
            choosen[0].classList.add('paper');
            setTimeout(c_choice,2000);
        }
        if (choice[i].classList.contains('scissors')) {
            choosen[0].classList.add('scissors');
            setTimeout(c_choice,2000);
        }

        if (home.style.display = 'flex') {
            home.style.display = 'none'
            resultBody.style.display = 'flex'
        }

        setTimeout(showResult, 2000);
        results.style.display = 'none';
        draw();
        choosen[1].classList.add('blank');
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
    sound1.pause();
    sound1.currentTime = 0;
    sound2.play();
    result();
    results.style.display = 'flex';
}