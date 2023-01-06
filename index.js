var board =[
    ['W','W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
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
    
       

    //crear naves
    // 1 Portaaviones (5 casillas)
    // 1 Buque (4 casillas)
    // 2 Submarinos (3 casillas)
    // 3 Cruceros (2 casillas)
    // 3 lanchas (1 casilla)

   var aircraftCarrier = {
    number: 1,
    size: 5
   }
   var vessel = {
    number: 1,
    size: 4
   }
   var submarine = {
    number: 2,
    size: 3
   }
   var cruise = {
    number: 3,
    size: 2
   }
   var boat = {
    number: 3,
    size: 1
   }

    //funcion para insertar barcos  en el board
   function insertShips (board, ship, row, col) {
    
    for (let i = col; i < col + ship.size; i++){
      //comprueba que no se salga del tablero
      if(col + ship.size < board.length) {
      board[row][i]="X";
      }else{
          return false
          }
        }
  }
  
  console.log(insertShips(board, aircraftCarrier, 2, 3));
  printBoard(board);
