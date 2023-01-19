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
  console.log("Tablero JUGADOR A");
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
  console.log("Tablero JUGADOR B");
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
function insertShips(board, ship, row, col, direction) {
  // if (direction < 1 ) {

  // }
  for (let i = col; i < col + ship.size; i++) {
    if (col + ship.size < board.length) {
      board[row][i] = ship.icon;
    } else {
      board[row][i - 5] = ship.icon;
    }
  }
}

// //PINTAMOS TITULO
printHeading("The Battleship simulator starts");

// Situar barcos en tablero propio y tablero enemigo aleatoriamente

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

insertShips(boardA, aircraftCarrier, getRandom(9), getRandom(9), "horizontal");
insertShips(boardB, aircraftCarrier, getRandom(9), getRandom(9), "horizontal");

insertShips(boardA, vessel, getRandom(9), getRandom(9), getRandom(1));

insertShips(boardB, vessel, getRandom(9), getRandom(9), getRandom(1));

printBoard(boardA);
printBoard2(boardB);

printHeading("GAME START");

let shootCounterA = 0;
let shootCounterB = 0;

function getWinner() {
  if (false) {
    //"numero de casillas de tocado es igual a la suma de los sizes de todos los barcos"
    winner = !winner;
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
    printHeading(`SHOOOOOOOT PLAYER A --> turno ${shootCounterA + shootCounterB}`);
  } else {
    printHeading(`SHOOOOOOOT PLAYER B --> turno ${shootCounterA + shootCounterB}`);
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
    shootCounterB = shootCounterB + 1;//aumento contador de disparos de B
  }

  if (
    (myTurn && shootCounterA > 99) || // si es mi turno y mi contador llega a 99
    (!myTurn && shootCounterB > 99)
  ) {
    // o si no es mi turno y su contador llega a 99
    printHeading("GAME OVER");
  } else {
    if (board[x][y] == " ") {
      boardCopy[x][y] = "💧";

      changeTurn();
    } else {
      boardCopy[x][y] = "🔥";
      getWinner();
      shoot(getRandom(9), getRandom(9), myTurn);
    }
    printBoard(board);
    printBoard2(boardCopy);
  }
}

while (shootCounterA < 100 && shootCounterB < 100) {
  shoot(getRandom(9), getRandom(9));
}

// // Crear ocultar tablero j1
// //(DANIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII)
// //duplicamos tablero
// console.log("Copia oculta del tablero 1");
// function hiddenboard(valor) {
//   return valor;
// }
// const board1hidden = board.map(hiddenboard);

// //EJECUCION:

///*****buscar opción para no introducir las lineas de insertar  */

//EJEMPLO DE DISPARO A TABLERO
// shoot(board, 4, 3);
// printBoard(board);

// //PINTAMOS ARRAY TABLERO OCULTO
// console.log("Array Tablero oculto");
// console.log(board1hidden);

// //PINTAMOS TABLERO OCULTO
// console.log("Tablero Oculto");
// console.log(printBoard(board1hidden));

//añadir condicion para que si la casilla es barco se oculte pero si es agua o tocado permanezca

// Definir no superposición barcos
// ------- empieza el juego
// inicializar rondas y establecer límite
// mientras no haya terminado el juego

// mostrar la ronda en la que estamos
// Jugador 1 realiza disparo en tablero enemigo
// Mostrar las coordenadas de disparo
// Disparo j1
// Mostrar disparo en tablero J2
// Cambiar de turno
// jugador j2
// Mostrar disparo en tablero J1

// mostrar las cartas seleccionadas descubiertas en el tablero
// si son la misma figura
// mantenemos las cartas descubiertas
// si no son la misma figura
// volverlas a cubrir
// incrementar la ronda
// ------- una vez terminado el juego
// mostrar que ha terminado el juego diciendo cuántas rondas hemos necesitado