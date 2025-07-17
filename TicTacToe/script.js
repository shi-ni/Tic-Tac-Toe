let audio = new Audio("sound1.mp3");
let audio2 = new Audio("sound2.wav");
let turn = "X";
let isGameOver = false;

// Function to change turn
const changeturn = () => {
    return turn === 'X' ? 'O' : 'X';
}

// Function to declare winner
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxItem");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && 
            (boxText[e[2]].innerText === boxText[e[1]].innerText) && 
            (boxText[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + ' won';
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxItem");
    element.addEventListener("click", () => {
        if (boxText.innerText === '' && !isGameOver) {
            boxText.innerText = turn;
            turn = changeturn();
            audio.play();
            checkWin();    
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset game
document.getElementById('reset').addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxItem');
    Array.from(boxTexts).forEach(element => {
        element.innerText = '';
    });
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
});