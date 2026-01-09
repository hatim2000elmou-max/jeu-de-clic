let score = 0;
let time = 10;
let interval;

const button = document.getElementById("click-button");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const restartButton = document.getElementById("restart");
const gameArea = document.querySelector(".game-area");

function randomPosition() {
    const maxX = gameArea.clientWidth - button.offsetWidth;
    const maxY = gameArea.clientHeight - button.offsetHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function startGame() {
    score = 0;
    time = 10;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;
    button.disabled = false;
    randomPosition();

    clearInterval(interval);
    interval = setInterval(() => {
        time--;
        timeDisplay.textContent = time;
        if(time <= 0){
            clearInterval(interval);
            button.disabled = true;
            alert(`⏰ Temps écoulé ! Votre score est ${score}`);
        }
    }, 1000);
}

// عند النقر على الزر
button.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    randomPosition(); // يتحرك الزر بعد كل نقرة
});

// إعادة التشغيل
restartButton.addEventListener("click", startGame);

// بدء اللعبة تلقائيًا
startGame();
