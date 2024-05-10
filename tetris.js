const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const scale = 20;
context.scale(scale, scale);

// Function to draw a square
function drawSquare(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, 1, 1);
}

// Tetris board
const board = {
    width: 10,
    height: 20,
    matrix: Array.from({ length: 20 }, () => Array(10).fill(0))
};

// Current piece
const piece = {
    pos: { x: 0, y: 0 },
    matrix: [
        [1, 1],
        [1, 1]
    ],
    color: 'cyan'
};

// Draw current piece on the board
function drawPiece() {
    piece.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                drawSquare(piece.pos.x + x, piece.pos.y + y, piece.color);
            }
        });
    });
}

// Update the game
function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawPiece();
}

// Game loop
function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
