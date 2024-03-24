const boxes = document.querySelectorAll(".box");
const winnerElement = document.querySelector(".winner");
let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 6],
    [2, 4, 6],
    [3, 4, 7],
    [6, 7, 8]
];

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                showmsg(p1);
            }
        }
    }
}

const showmsg = (winner) => {
    winnerElement.innerText = `CONGRATULATIONS! player ${winner}`;
    disableBoxes();
}
 const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
 }

 const enableBoxes = () => {
    for(let box of boxes){
        box. disabled = false;
        box.innerText = "";
    }
    winnerElement.innerText = "";
 }
 
 const newGame = () => {
    turnO = true;
    enableBoxes();
 }
 let resetGame = document.querySelector(".reset-btn");
 resetGame.addEventListener('click',newGame);

