let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';
let gameActive = true;
let movesCount = 0;

function makeMove(row, col) {
    if (board[row][col] === '' && gameActive) {
        board[row][col] = currentPlayer;
        document.getElementById('board').children[row * 3 + col].innerText = currentPlayer;
        movesCount++;

        if (checkWin()) {
            document.getElementById('message').innerText = 'Игрок ' + currentPlayer + ' победил!';
            gameActive = false;
        } else if (movesCount === 9) {
            document.getElementById('message').innerText = 'Ничья!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true;
        }
    }

    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;
    }

    return false;
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    gameActive = true;
    movesCount = 0;

    let cells = Array.from(document.getElementsByClassName('cell'));
    cells.forEach(function(cell) {
        cell.innerText = '';
    });

    document.getElementById('message').innerText = '';
}