// crear título de empiece el juego  

function printHeading(text) {
  const pad = '='.repeat(text.length)
  console.log(`==========${pad}==========`)
  console.log(`========= ${text} =========`)
  console.log(`==========${pad}==========`)
  
}

// Crear tablero propio y tablero enemigo
var board =[
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

function printBoard(board) {
    console.log("┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐")
    console.log("│index│ 0   │ 1   │ 2   │ 3   │ 4   │ 5   │ 6   │ 7   │ 8   │ 9   │")
    console.log("├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤")
    for (var i = 0; i < board.length; i++) {
      console.log(`│${i}    │${board[i].join("    │")}`)        
    }
    console.log("└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴")  
  }
  
  var board2 =[
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ];
  
  function printBoard2(board2) {
    console.log("┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐")
    console.log("│index│ 0   │ 1   │ 2   │ 3   │ 4   │ 5   │ 6   │ 7   │ 8   │ 9   │")
    console.log("├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤")
    for (var i = 0; i < board2.length; i++) {
      console.log(`│${i}    │${board2[i].join("    │")}`)        
    }
    console.log("└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴")  
  }   
  

// Crear barcos
  
  var aircraftCarrier = {
    number: 1,
    size: 5,
    icon:"⛴️"
  }
  
  var vessel = {
    number: 1,
    size: 4,
    icon:"🚢"
  }
  var submarine = {
    number: 2,
    size: 3,
    icon:"⚓"
  }
  var cruise = {
    number: 3,
    size: 2,
    icon:"🚤"
   }
   var boat = {
     number: 3,
     size: 1,
     icon:"🛶"
    }
    
    
//funcion para insertar barcos  en el board (vertical y horizontal)
    function insertShips (board, ship, row, col, direct) {
      if (direct==="horizontal"){  
        for (let i = col; i < col + ship.size; i++){
          //comprueba que no se salga del tablero        
          if(col + ship.size < board.length) {
            board[row][i]=ship.icon;
          }else{
            return false
          }
        }
      }else{
        for (let i = row; i < row + ship.size; i++ ){
          if(row + ship.size < 11) {
            board[i][col]=ship.icon;
          }
        }
      }
    }
    
    // Situar barcos en tablero propio y tablero enemigo aleatoriamente
    
    function getRandomIntRow(max) {
      return Math.floor(Math.random() * max);
    }
    function getRandomIntCol(max) {
      return Math.floor(Math.random() * max);
    }
    function getRandomIntOri(max) {
      if(Math.floor(Math.random() * max) === 0) {
        return "horizontal"
      } else {
        return "vertical"
      }
    }

    // function getRandom(row,col,ori) {
    //   var rows=Math.floor(Math.random() * row);
    //   var cols=Math.floor(Math.random() * col);
    //   if(Math.floor(Math.random() * ori) === 0) {
    //     return rows, cols, "horizontal"
    //   } else {
      //     return rows, cols, "vertical"
      //   }
      // }
      // console.log(insertShips(board, aircraftCarrier, getRandom(9,9,2)));
      
    // Crear disparar
    function shoot(board,x,y) {
    if (board[x][y] == " ") {
      board[x][y]="💧"    
    } else {
      board[x][y]="🔥"
    }
  }

  // Crear ocultar tablero j1 
  //(DANIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII)
        //duplicamos tablero
  function hiddenboard(valor){
      return valor}
  const board1hidden = board.map(hiddenboard)
  console.log("Copia del tablero 1")
  
  
  
  //EJECUCION:
  console.log(insertShips(board, aircraftCarrier, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
  console.log(insertShips(board, vessel, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
  console.log(insertShips(board, submarine, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
  console.log(insertShips(board, cruise, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
    console.log(insertShips(board, boat, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
    
    console.log(insertShips(board2, aircraftCarrier, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
    console.log(insertShips(board2, vessel, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
    console.log(insertShips(board2, submarine, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
    console.log(insertShips(board2, cruise, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
    console.log(insertShips(board2, boat, getRandomIntRow(9), getRandomIntCol(9), getRandomIntOri(2)));
    ///*****buscar opción para no introducir las lineas de insertar  */
    
    //PINTAMOS TITULO
    printHeading("The Battleship simulator starts")
    //PINTAMOS TABLEROS
    printBoard(board);
    printBoard2(board2); 

    //EJEMPLO DE DISPARO A TABLERO
    shoot(board, 4,3)
    printBoard(board);
    
    //TABLERO OCULTO 
    console.log("Tablero oculto")
   
  
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

