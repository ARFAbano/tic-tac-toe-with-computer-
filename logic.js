
// window.addEventListener('load', function() {
   

// const cells = document.querySelectorAll('.cell');
// const message = document.getElementById('message');
// const resetButton = document.getElementById('reset');
// let currentPlayer = 'X';
// let board = ['', '', '', '', '', '', '', '', ''];
// let gameActive = true;

// const winCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// function handleCellClick(event) {
//     const cell = event.target;
//     const index = cell.id;

//     if (board[index] === '' && gameActive) {
//         board[index] = currentPlayer;
//         cell.textContent = currentPlayer;
//         checkWin();
//         switchPlayer();
//         if (gameActive && currentPlayer === 'O') { // Computer's turn
//             computerMove();
//         }

//     }
// }

// function computerMove() {
//     if (!gameActive) return; // Game is over

//     let bestMove = -1;
//     let bestScore = -Infinity;

//      //Minimax algorithm (simplified)
//     for (let i = 0; i < board.length; i++) {
//         if (board[i] === '') {
//             board[i] = 'O';
//             let score = minimax(board, 0, false); // Evaluate the move
//             board[i] = ''; // Undo the move

//             if (score > bestScore) {
//                 bestScore = score;
//                 bestMove = i;
//             }
//         }
//     }

//     if (bestMove !== -1) {
//         board[bestMove] = 'O';
//         cells[bestMove].textContent = 'O';
//         checkWin();
//         switchPlayer();
//     }
// }



// function minimax(currentBoard, depth, isMaximizingPlayer) {
//     let scores = {
//         X: -1,
//         O: 1,
//         tie: 0
//     };

//     let winner = checkWinner(currentBoard);
//     if (winner) {
//         return scores[winner];
//     }

//     if (isMaximizingPlayer) {
//         let bestScore = -Infinity;
//         for (let i = 0; i < currentBoard.length; i++) {
//             if (currentBoard[i] === '') {
//                 currentBoard[i] = 'O';
//                 let score = minimax(currentBoard, depth + 1, false);
//                 currentBoard[i] = '';
//                 bestScore = Math.max(score, bestScore);
//             }
//         }
//         return bestScore;
//     } else {
//         let bestScore = Infinity;
//         for (let i = 0; i < currentBoard.length; i++) {
//             if (currentBoard[i] === '') {
//                 currentBoard[i] = 'X';
//                 let score = minimax(currentBoard, depth + 1, true);
//                 currentBoard[i] = '';
//                 bestScore = Math.min(score, bestScore);
//             }
//         }
//         return bestScore;
//     }
// }



// function checkWinner(currentBoard) {
//     for (let combo of winCombinations) {
//         const [a, b, c] = combo;
//         if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
//             return currentBoard[a];
//         }
//     }
//     if (!currentBoard.includes('')) {
//         return 'tie'; // Check for a tie
//     }
//     return null;
// }

// function checkWin() {
//     const winner = checkWinner(board);
//     if (winner) {
//         gameActive = false;
//         if (winner === 'tie') {
//             message.textContent = "It's a tie!";
//         } else {
//             message.textContent = `${winner} wins!`;
//         }
//     }
// }


// function switchPlayer() {
//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     message.textContent = currentPlayer === 'X' ? "Your turn" : "Computer's turn";

// }

// function resetGame() {
//     board = ['', '', '', '', '', '', '', '', ''];
//     cells.forEach(cell => cell.textContent = '');
//     currentPlayer = 'X';
//     gameActive = true;
//     message.textContent = "Your turn"; // Reset the message
// }

// cells.forEach(cell => cell.addEventListener('click', handleCellClick));
// resetButton.addEventListener('click', resetGame);
// message.textContent = "Your turn"; // Start with player X
// });

window.addEventListener('load', function() {
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
  
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    function handleCellClick(event) {
      const cell = event.target;
      const index = cell.id;
  
      if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWin();
        if(gameActive){
          switchPlayer();
          computerMove();
        }
      }
    }
  
    function computerMove(){
      if (!gameActive) return;
      let emptyCells = [];
      for(let i = 0; i < board.length; i++){
        if(board[i] === ''){
          emptyCells.push(i);
        }
      }
  
      if(emptyCells.length > 0){
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        let computerIndex = emptyCells[randomIndex];
        board[computerIndex] = currentPlayer;
        cells[computerIndex].textContent = currentPlayer;
        checkWin();
        if(gameActive){
          switchPlayer();
        }
      }
    }
  
    function checkWinner(currentBoard) {
      for (let combo of winCombinations) {
        const [a, b, c] = combo;
        if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
          return currentBoard[a];
        }
      }
      if (!currentBoard.includes('')) {
        return 'tie';
      }
      return null;
    }
  
    function checkWin() {
      const winner = checkWinner(board);
      if (winner) {
        gameActive = false;
        if (winner === 'tie') {
          message.textContent = "It's a tie!";
        } else {
          message.textContent = `${winner} wins!`;
        }
      }
    }
  
    function switchPlayer() {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.textContent = currentPlayer === 'X' ? "Your turn" : "Computer's turn";
    }
  
    function resetGame() {
      board = ['', '', '', '', '', '', '', '', ''];
      cells.forEach(cell => cell.textContent = '');
      currentPlayer = 'X';
      gameActive = true;
      message.textContent = "Your turn";
    }
  
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
    message.textContent = "Your turn";
  });