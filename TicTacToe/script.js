
let boxes=document.querySelectorAll(".game-box")
let restartBtn=document.querySelector("#restart-btn")
let newGameBtn=document.querySelector("#new-game-btn")
let messageContainer=document.querySelector(".message-container")
let gameMessage=document.querySelector("#game-message")

let count=0;
let turn0=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O"
            turn0=false;
        }
        else{
            box.innerText="X"
            turn0=true;
        }
        box.disable=true;
        count++;

        let isWinner=checkWinner();
        if(count===9 && !isWinner)
        {
            gameDraw();
        }
    })
})

const gameDraw=()=>{
    gameMessage.innerText=`Game was a Draw`;
    messageContainer.classList.remove("hide");
    disableBoxes=true;
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    gameDraw.Message.innerText=`Congrates,winne is ${winner}`
    messageContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    messageContainer.classList.add("hide");
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;


        if(pos1Val!="" &&pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val===pos3Val)
            {
                showWinner(pos1Val);
                 return true;
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
restartBtn.addEventListener("click",resetGame)

