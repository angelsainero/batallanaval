// crear título de empiece el juego

let winner = false;
let myTurn = true;

const aircraftCarrier = {
  number: 1,
  size: 5,
  icon: "⛴️",
};
const vessel = {
  number: 1,
  size: 4,
  icon: "🚢",
};
const submarine = {
  number: 2,
  size: 3,
  icon: "⚓",
};
const cruise = {
  number: 3,
  size: 2,
  icon: "🚤",
};
const boat = {
  number: 3,
  size: 1,
  icon: "🛶",
};

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
  console.log("Tablero PROPIO");
  console.log(
    "┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐"
  );
  console.log(
    "│index│ 0   │ 1   │ 2   │ 3   │ 4   │ 5   │ 6   │ 7   │ 8   │ 9   │"
  );
  console.log(
    "├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤"
  );
  for (var i = 0; i < board.length; i++) {
    console.log(`│${i}    │${board[i].join("    │")}`);
  }
  console.log(
    "└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴"
  );
}

function printBoard2(board2) {
  console.log("Tablero OPONENTE");
  console.log(
    "┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐"
  );
  console.log(
    "│index│ 0   │ 1   │ 2   │ 3   │ 4   │ 5   │ 6   │ 7   │ 8   │ 9   │"
  );
  console.log(
    "├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤"
  );
  for (var i = 0; i < board2.length; i++) {
    console.log(`│${i}    │${board2[i].join("    │")}`);
  }
  console.log(
    "└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴"
  );
}

//funcion para insertar barcos  en el board (vertical y horizontal)
function insertShips(board, ship, direction) {
  if (direction == 1) {
    //si es horizontal
    let isValid = false;
    while (!isValid) {
      let startRow = Math.floor(Math.random() * 10);
      let startCol = Math.floor(Math.random() * 10);
      for (let i = startCol; i < startCol + ship.size; i++) {
        if (startCol + ship.size < board.length && board[startRow][i] == " ") {
          board[startRow][i] = ship.icon;
          isValid = true;
        } else {
          isValid = false;
          break;
        }
      }
    }
  } else {
    //si es vertical
    let isValid = false;
    while (!isValid) {
      let startRow = Math.floor(Math.random() * 10);
      let startCol = Math.floor(Math.random() * 10);
      for (let i = startRow; i < startRow + ship.size; i++) {
        if (startRow + ship.size < board.length && board[i][startCol] == " ") {
          board[i][startRow] = ship.icon;
          isValid = true;
        } else {
          isValid = false;
          break;
        }
      }
    }

    //   }
    // }
  }
}

// //PINTAMOS TITULO
printHeading("The Battleship simulator starts");

// Situar barcos en tablero propio y tablero enemigo aleatoriamente
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

insertShips(boardA, aircraftCarrier, getRandom(2));
insertShips(boardA, vessel, getRandom(2));
insertShips(boardA, submarine, getRandom(2));
insertShips(boardA, submarine, getRandom(2));
insertShips(boardA, cruise, getRandom(2));
insertShips(boardA, cruise, getRandom(2));
insertShips(boardA, cruise, getRandom(2));
insertShips(boardA, boat, getRandom(2));
insertShips(boardA, boat, getRandom(2));
insertShips(boardA, boat, getRandom(2));
insertShips(boardB, aircraftCarrier, getRandom(2));
insertShips(boardB, vessel, getRandom(2));
insertShips(boardB, submarine, getRandom(2));
insertShips(boardB, submarine, getRandom(2));
insertShips(boardB, cruise, getRandom(2));
insertShips(boardB, cruise, getRandom(2));
insertShips(boardB, cruise, getRandom(2));
insertShips(boardB, boat, getRandom(2));
insertShips(boardB, boat, getRandom(2));
insertShips(boardB, boat, getRandom(2));

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
      //aqui el 24 habría que calcularlo
      win = true; //habría ganado el player A y aqui habría que poder decir quien ha ganado
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
      //aqui el 24 habría que calcularlo
      win = true; //habría ganado el player B y aqui habría que poder decir quien ha ganado
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
      `SHOOOOOOOT PLAYER A --> turno ${shootCounterA + shootCounterB}`
    );
  } else {
    printHeading(
      `SHOOOOOOOT PLAYER B --> turno ${shootCounterA + shootCounterB}`
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
    printBoard(board);
    printBoard2(boardCopy);
  } else {
    if (board[x][y] == " ") {
      boardCopy[x][y] = "O";

      changeTurn();
    } else {
      boardCopy[x][y] = "X";
      getWinner(board, boardCopy);
    }
    printBoard(board);
    printBoard2(boardCopy);
  }
}

while (win == false) {
  shoot(getRandom(9), getRandom(9));
}
