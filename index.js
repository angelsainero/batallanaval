// crear título de empiece el juego

let myTurn = true;

const boats = [
  { name: "aircraftCarrier", quantity: 1, size: 5, icon: "⛴️" },
  { name: "vessel", quantity: 1, size: 4, icon: "🚢" },
  { name: "submarine", quantity: 2, size: 3, icon: "⚓" },
  { name: "cruise", quantity: 3, size: 2, icon: "🚤" },
  { name: "boat", quantity: 3, size: 1, icon: "🛶" },
];

let boardA = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

let boardB = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

let boardACopy = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

let boardBCopy = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

function printHeading(text) {
  const pad = "=".repeat(text.length);
  console.log(`==========${pad}==========`);
  console.log(`========= ${text} =========`);
  console.log(`==========${pad}==========`);
}

function printBoard(board) {
  console.log("Own Board");
  console.table(board);
}

function printBoard2(board2) {
  console.log("Enemy Board");
  console.table(board2);
}

function canInsertShip(board, size, row, col, direction) {
  if (direction === 0) {
    // Si es Horizontal
    if (row + size > board.length) {
      return false;
    }
    for (var i = row; i < row + size; i++) {
      if (board[i][col] !== " ") {
        return false;
      }
    }
  } else {
    //si es Vertical
    if (col + size > board[0].length) {
      return false;
    }
    for (var i = col; i < col + size; i++) {
      if (board[row][i] !== " ") {
        return false;
      }
    }
  }
  return true;
}

function placeBoats(board) {
  boats.forEach((boat) => {
    for (let i = 0; i < boat.quantity; i++) {
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);
      let direction = Math.floor(Math.random() * 2);
      
      while (!canInsertShip(board, boat.size, row, col, direction)) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        direction = Math.floor(Math.random() * 2);
      }

      
      for (let j = 0; j < boat.size; j++) {
        if (direction === 0) {
          board[row + j][col] = boat.icon;
        } else {
          board[row][col + j] = boat.icon;
        }
      }
    }
  });
}

// //PINTAMOS TITULO
printHeading("The Battleship simulator starts");

// Situar barcos en tablero propio y tablero enemigo aleatoriamente
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

placeBoats(boardA);
placeBoats(boardB);



printBoard(boardA);
printBoard2(boardB);

printHeading("GAME START");

let shootCounterA = 0;
let shootCounterB = 0;
let win = false;

let PlayerAHits = 0;
let PlayerBHits = 0;

function getWinner(board, boardCopy) {
  if (myTurn) {
    PlayerBHits = PlayerBHits + 1;
    if (PlayerBHits === 24) {
      
      win = true; 
      printHeading("PLAYER A: Wins!");
      printBoard(board);
      printBoard2(boardCopy);
    } else {
      shoot(getRandom(9), getRandom(9), myTurn);
    }
  }

  if (!myTurn) {
    PlayerAHits = PlayerAHits + 1;
    if (PlayerAHits === 24) {
      
      win = true; 
      printHeading("PLAYER B: Wins!");
      printBoard(board);
      printBoard2(boardCopy);
    } else {
      shoot(getRandom(9), getRandom(9), myTurn);
    }
  }
}

function changeTurn() {
  if (myTurn === false) {
    myTurn = true;
  } else {
    myTurn = false;
  }
}

// Crear disparar
function shoot(x, y) {
  let board; // board al que se disparará
  let boardCopy; // board donde se pintará el disparo
  if (myTurn) {
    printHeading(
      `SHOOOOOOOT PLAYER A to ${x},${y}:--> turn ${
        shootCounterA + shootCounterB
      }`
    );
  } else {
    printHeading(
      `SHOOOOOOOT PLAYER B to ${x},${y}:--> turn ${
        shootCounterA + shootCounterB
      }`
    );
  }

  if (myTurn) {
    // si es mi turno
    board = boardB; // dispararé al boardB
    boardCopy = boardBCopy; // pintaré en el boardBcopy
    shootCounterA = shootCounterA + 1; //aumento contador de disparos de A
  } else {
    // si no es mi turno
    board = boardA; // disparará al boardA
    boardCopy = boardACopy; // pintará en el boardAcopy
    shootCounterB = shootCounterB + 1; //aumento contador de disparos de B
  }

  if (
    (myTurn && shootCounterA > 99) || // si es mi turno y mi contador llega a 99
    (!myTurn && shootCounterB > 99) // o si no es mi turno y su contador llega a 99
  ) {
    printHeading("GAME OVER");
    if (PlayerAHits > PlayerBHits) {
      printHeading("PAYER A WINS");
    } else {
      printHeading("PLAYER B WINS");
    }
    printBoard(board);
    printBoard2(boardCopy);
  } else {
    
    if (board[x][y] == " ") {
      boardCopy[x][y] = "💧";

      changeTurn();
    } else {
      
      boardCopy[x][y] = "🔥";
      getWinner(board, boardCopy);
    }
    printBoard(board);
    printBoard2(boardCopy);
  }
}

while (win == false) {

  shoot(getRandom(10), getRandom(10));
}

function noRepeatShoot (board, boardCopy, x,y) {
  if (boardCopy[x][y]=="🔥" ||boardCopy[x][y]=="💧") {
  return false
  
}
return true
}

//pendiente que no se superpongan los disparos 