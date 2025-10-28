const cells = document.querySelectorAll('.cell');
const turnText = document.getElementById('turn');
const restartBtn = document.getElementById('restart');

let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

const winningCombinations = [
    [0,1,2],[3,4,5],[6,7,8], 
    [0,3,6],[1,4,7],[2,5,8], 
    [0,4,8],[2,4,6]          
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);

function handleCellClick(e) {
    const index = e.target.dataset.index;
    if (board[index] || !gameActive) return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWinner()) {
        turnText.textContent = `¡Jugador ${currentPlayer} gana!`;
        gameActive = false;
        return;
    }

    if (board.every(cell => cell)) {
        turnText.textContent = 'Empate!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnText.textContent = `Turno de: ${currentPlayer}`;
}

function checkWinner() {
    return winningCombinations.some(combo => {
        return combo.every(index => board[index] === currentPlayer);
    });
}

function restartGame() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    turnText.textContent = `Turno de: ${currentPlayer}`;
    gameActive = true;
}