M.AutoInit();

let difficulty = document.getElementById('difficulty');
let time = document.getElementById('time');
let score = document.getElementById('score');
let word = document.getElementById('word');
let typeWord = document.getElementById('type_word');
let modal = document.getElementById('modal');
let reload = document.getElementById('reload');

let words = ["ahmad", "bassam", "abd", "javascript",
            "mongodb", "symfony", "html", "sql", "target", 
            "assert", "form","length","security","isgranted", 
             "jwt","token","user","admin"];
let randomWord;
let timer = 10;
let difficultyValue = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medum';





const random = () => {
    randomWord = words[Math.floor(Math.random() * words.length)];
    word.innerText = randomWord;
}

const gameOver = () => {
    modal.click();
}

const initTime = () => {
    timer--;
    let timeCounter = setInterval(() => {
        time.innerText = timer;
        timer--;
        if (timer == 0) {
            clearInterval(timeCounter);
            gameOver();
        }
    }, 1000);

}

const setScore = () => {

}

initTime()
random();
typeWord.focus();

const handleTyper = (e) => {
    if (e.target.value === randomWord) {
        if (difficultyValue == 'easy') {
            timer = timer + 5;
        } else if (difficultyValue == 'medum') {
            timer = timer + 3;
        } else if (difficultyValue == 'hard') {
            timer = timer + 1;
        }

        score.innerText = +score.innerText + 1;
        e.target.value = "";
        random();
    }
}

typeWord.addEventListener('input', handleTyper);
reload.addEventListener('click', () => location.reload());
difficulty.addEventListener('change', (e) => {
    localStorage.setItem('difficulty', e.target.value);
    location.reload()
});