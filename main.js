for (let i = 0; i < 9 ; i++){
  document.getElementById("game").innerHTML += "<div class = 'block'></div>"
}


let turn = document.getElementById("turn")
let block = document.getElementsByClassName("block")
let a = 0
let win = 0

for ( let i = 0; i < 9 ; i++){
  block[i].onclick = function(){
    if(this.innerHTML === "" && win === 0){
      if(a % 2 === 0){
        this.innerHTML = "X"
        turn.innerHTML = "O's turn"
        a++
      } else {
        this.innerHTML = "O"
        turn.innerHTML = "X's turn"
        a++
      }
    }
    winFunc()
    drawFunc()
  }
  
}


let winFunc = function(){
  for(i = 0; i < 9; i++){
    // for X Player

    if(block[0].innerHTML === "X" && block[1].innerHTML === "X" && block[2].innerHTML === "X"){turn.innerHTML = "Player X Wins!", win = 1}
    if(block[3].innerHTML === "X" && block[4].innerHTML === "X" && block[5].innerHTML === "X"){turn.innerHTML = "Player X Wins!", win = 1}
    if(block[6].innerHTML === "X" && block[7].innerHTML === "X" && block[8].innerHTML === "X"){turn.innerHTML = "Player X Wins!", win = 1}
    if(block[0].innerHTML === "X" && block[3].innerHTML === "X" && block[6].innerHTML === "X"){turn.innerHTML = "Player X Wins!", win = 1}
    if(block[1].innerHTML === "X" && block[4].innerHTML === "X" && block[7].innerHTML === "X"){turn.innerHTML = "Player X Wins!", win = 1}
    if(block[2].innerHTML === "X" && block[5].innerHTML === "X" && block[8].innerHTML === "X"){turn.innerHTML = "Player X Wins!", win = 1}
    if(block[0].innerHTML === "X" && block[4].innerHTML === "X" && block[8].innerHTML === "X"){turn.innerHTML = "Player X Wins!", win = 1}
    if(block[2].innerHTML === "X" && block[4].innerHTML === "X" && block[6].innerHTML === "X"){turn.innerHTML = "Player X Wins!", win = 1}

    // for O player

    if(block[0].innerHTML === "O" && block[1].innerHTML === "O" && block[2].innerHTML === "O"){turn.innerHTML = "Player O Wins!", win = 1}
    if(block[3].innerHTML === "O" && block[4].innerHTML === "O" && block[5].innerHTML === "O"){turn.innerHTML = "Player O Wins!", win = 1}
    if(block[6].innerHTML === "O" && block[7].innerHTML === "O" && block[8].innerHTML === "O"){turn.innerHTML = "Player O Wins!", win = 1}
    if(block[0].innerHTML === "O" && block[3].innerHTML === "O" && block[6].innerHTML === "O"){turn.innerHTML = "Player O Wins!", win = 1}
    if(block[1].innerHTML === "O" && block[4].innerHTML === "O" && block[7].innerHTML === "O"){turn.innerHTML = "Player O Wins!", win = 1}
    if(block[2].innerHTML === "O" && block[5].innerHTML === "O" && block[8].innerHTML === "O"){turn.innerHTML = "Player O Wins!", win = 1}
    if(block[0].innerHTML === "O" && block[4].innerHTML === "O" && block[8].innerHTML === "O"){turn.innerHTML = "Player O Wins!", win = 1}
    if(block[2].innerHTML === "O" && block[4].innerHTML === "O" && block[6].innerHTML === "O"){turn.innerHTML = "Player O Wins!", win = 1}
  }
}

let drawFunc = function(){
  if(a === 9 && win === 0){
    turn.innerHTML = "Draw, please restart the game"
  }
}

document.getElementById("restart").onclick = function(){
  for(i = 0; i < 9; i++ ){
    block[i].innerHTML = ""
    win = 0
    turn.innerHTML = "Tic-Tac-Toe, X player starts the game"
    a = 0
  }
}