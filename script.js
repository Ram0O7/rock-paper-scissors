const score = document.querySelector('.score');
const home = document.querySelector('.home');
const resultBody = document.querySelector('.result-body');
const choice = document.querySelectorAll('.choice');
const choosen = document.querySelectorAll('.choosen');
const rules = document.querySelector('.rules');
const start = document.querySelector('.start-again');
const playBtn = document.querySelector('.play-btn');
const m_playBtn = document.querySelector('.mobil-play');
const resultMessage = document.querySelector('.result-type');
const m_resultMessage = document.querySelector('.mobil-result');

let scoreCount = 0;


const user = choosen[0].classList;
const computer = choosen[1].classList;

const computerChoice = ['rock', 'paper', 'scissors'];

// writing game logic
for (let i = 0; i < choice.length; i++){
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
        
        result();
        MobilResult();
        
        score.innerHTML = scoreCount;
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

m_playBtn.addEventListener('click', () => {
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
        playBtn.style.color = 'green';
    } else if (user.contains('rock') && computer.contains('paper')) {
        resultMessage.innerHTML = 'YOU LOSE';
        scoreCount--;
        playBtn.style.color = 'crimson';
    } else if (user.contains('rock') && computer.contains('scissors')) {
        resultMessage.innerHTML = 'YOU WIN';
        scoreCount++;
        playBtn.style.color = 'hsl(229, 64%, 46%)';
    } else if (user.contains('paper') && computer.contains('rock')) {
        resultMessage.innerHTML = 'YOU WIN';
        scoreCount++;
        playBtn.style.color = 'hsl(229, 64%, 46%)';
    } else if (user.contains('paper') && computer.contains('paper')) {
        resultMessage.innerHTML = 'DRAW';
        playBtn.style.color = 'green';
    } else if (user.contains('paper') && computer.contains('scissors')) {
        resultMessage.innerHTML = 'YOU LOSE';
        scoreCount--;
        playBtn.style.color = 'crimson';
    } else if (user.contains('scissors') && computer.contains('rock')) {
        resultMessage.innerHTML = 'YOU LOSE';
        scoreCount--;
        playBtn.style.color = 'crimson';
    } else if (user.contains('scissors') && computer.contains('paper')) {
        resultMessage.innerHTML = 'YOU WIN';
        scoreCount++;
        playBtn.style.color = 'hsl(229, 64%, 46%)';
    } else if (user.contains('scissors') && computer.contains('scissors')) {
        resultMessage.innerHTML = 'DRAW';
        playBtn.style.color = 'green';
    }
}

const MobilResult = () => {
    if (user.contains('rock') && computer.contains('rock')) {
        m_resultMessage.innerHTML = 'DRAW';
        m_playBtn.style.color = 'green';
    } else if (user.contains('rock') && computer.contains('paper')) {
        m_resultMessage.innerHTML = 'YOU LOSE';
        scoreCount--;
        m_playBtn.style.color = 'crimson';
    } else if (user.contains('rock') && computer.contains('scissors')) {
        m_resultMessage.innerHTML = 'YOU WIN';
        scoreCount++;
        m_playBtn.style.color = 'hsl(229, 64%, 46%)';
    } else if (user.contains('paper') && computer.contains('rock')) {
        m_resultMessage.innerHTML = 'YOU WIN';
        scoreCount++;
        m_playBtn.style.color = 'hsl(229, 64%, 46%)';
    } else if (user.contains('paper') && computer.contains('paper')) {
        m_resultMessage.innerHTML = 'DRAW';
        m_playBtn.style.color = 'green';
    } else if (user.contains('paper') && computer.contains('scissors')) {
        m_resultMessage.innerHTML = 'YOU LOSE';
        scoreCount--;
        m_playBtn.style.color = 'crimson';
    } else if (user.contains('scissors') && computer.contains('rock')) {
        m_resultMessage.innerHTML = 'YOU LOSE';
        scoreCount--;
        m_playBtn.style.color = 'crimson';
    } else if (user.contains('scissors') && computer.contains('paper')) {
        m_resultMessage.innerHTML = 'YOU WIN';
        scoreCount++;
        m_playBtn.style.color = 'hsl(229, 64%, 46%)';
    } else if (user.contains('scissors') && computer.contains('scissors')) {
        m_resultMessage.innerHTML = 'DRAW';
        m_m_playBtn.style.color = 'green';
    }
}