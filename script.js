let boxes = document.querySelectorAll(".box")
let msg = document.querySelector("#msg")
let hideClass = document.querySelector(".msgContainer")
let reset = document.querySelector("#reset-btn")
let newGame = document.querySelector("#new-game")

let patterns=[
    [ 0 ,1 , 2],
    [ 0 ,3 , 6],
    [ 0 ,4 , 8], 
    [ 1 ,4 , 7],
    [ 2 ,5 , 8],
    [ 2 ,4 , 6],
    [ 3 ,4 , 5],
    [ 6 ,7 , 8],
];

let turnX = true;
let btnCount = 0;
let displayWinner = (Winner)=>{
    msg.innerHTML = `Congratulations Winner is ${Winner}`
    hideClass.classList.remove("hide")
    
    boxes.forEach((box)=>{
        box.disabled = true
    })
}

let checkWinner = ()=>{
    
    for(let pattern of  patterns){

        let pos1Val = boxes[pattern[0]].innerHTML
        let pos2Val = boxes[pattern[1]].innerHTML
        let pos3Val = boxes[pattern[2]].innerHTML
       
        if(pos1Val === pos2Val  && pos1Val === pos3Val && pos1Val === "X") {
            displayWinner(pos1Val)
        }
        if(pos1Val === pos2Val  && pos1Val === pos3Val && pos1Val === "O"){
            displayWinner(pos1Val)
        }

    }

}

let displayDraw = () =>{
    msg.innerHTML = "Thats a DRAW !!"
}

boxes.forEach((box) =>{
    box.addEventListener("click" ,()=>{
        // console.log("Box was Clicked :)")
        if( turnX){
            box.innerHTML = "X";
            turnX = false;
        }
        else {
            box.innerHTML = "O";
            turnX = true
        }
        btnCount++;
        box.disabled = true
        checkWinner();
        if(btnCount === 9) displayDraw();
    } )
    
})

const resetFunc = ()=>{
    turnX = true;

    // Enable Boxes && empty inner text
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled = false
    })

    hideClass.classList.add("hide")
}

reset.addEventListener("click" , resetFunc)
newGame.addEventListener("click" , resetFunc)
