// scripts/bots.js

const WIN_SCORE = 100000
const DEPTH = 6;

function evaluateWindow(window, player, opponent){
    const playerCount = window.filter(cell => cell === player).length;
    const opponentCount = window.filter(cell => cell === opponent).length;
    const emptyCount = window.filter(cell => cell === 0).length;

    if (playerCount === 4) return WIN_SCORE;
    if (opponentCount === 4) return -WIN_SCORE;

    if (playerCount === 3 && emptyCount === 1) return 100
    if (opponentCount === 3 && emptyCount === 1) return -100
    
    if (playerCount === 2 && emptyCount === 2) return 10
    if (opponentCount === 2 && emptyCount === 2) return -10

    if (playerCount === 1 && emptyCount === 3) return 1
    if (opponentCount === 1 && emptyCount === 3) return -1

    return 0;
};

function evaluatePosition(board, rows, cols, player){
    const opponent = player === 1 ? 2 : 1;
    let score = 0;
    
      // Горизонтали
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c <= cols - 4; c++) {
            const window = [board[r][c], board[r][c+1], board[r][c+2], board[r][c+3]];
            score += evaluateWindow(window, player, opponent);
        }
    }

    // Вертикали
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r <= rows - 4; r++) {
            const window = [board[r][c], board[r+1][c], board[r+2][c], board[r+3][c]];
            score += evaluateWindow(window, player, opponent);
        }
    }

    // Диагонали ↘
    for (let r = 0; r <= rows - 4; r++) {
        for (let c = 0; c <= cols - 4; c++) {
            const window = [board[r][c], board[r+1][c+1], board[r+2][c+2], board[r+3][c+3]];
            score += evaluateWindow(window, player, opponent);
        }
    }

    // Диагонали ↙
    for (let r = 0; r <= rows - 4; r++) {
        for (let c = 3; c < cols; c++) {
            const window = [board[r][c], board[r+1][c-1], board[r+2][c-2], board[r+3][c-3]];
            score += evaluateWindow(window, player, opponent);
        }
    }

    return score;
};

function isTerminalNode(gameInstance){
    for (let col = 0; col < gameInstance.columns; col++){
        if (gameInstance.getLowestEmptyRow(col) !== -1) return false;
    }
    return true;
};

function minimax(gameInstance, depth, alpha, beta, maximizingPlayer, player) {
    const opponent = player === 1 ? 2 : 1;
    const validCols = [];
    for (let col = 0; col < gameInstance.columns; col++) {
        if (gameInstance.getLowestEmptyRow(col) !== -1) {
            validCols.push(col);
        }
    }

    const isTerminal = isTerminalNode(gameInstance) || depth === 0;

    if (isTerminal) {
        if (depth === 0) {
            return { score: evaluatePosition(gameInstance.board, gameInstance.rows, gameInstance.columns, player), col: null };
        } else {
            return { score: 0, col: null }; // ничья
        }
    }

    if (maximizingPlayer) {
        let maxEval = -Infinity;
        let bestCol = validCols[0];
        for (const col of validCols) {
            const row = gameInstance.getLowestEmptyRow(col);
            gameInstance.board[row][col] = player;
            const score = minimax(gameInstance, depth - 1, alpha, beta, false, player).score;
            gameInstance.board[row][col] = 0;

            if (score > maxEval) {
                maxEval = score;
                bestCol = col;
            }
            alpha = Math.max(alpha, score);
            if (beta <= alpha) break;
        }
        return { score: maxEval, col: bestCol };
    } else {
        let minEval = Infinity;
        let bestCol = validCols[0];
        for (const col of validCols) {
            const row = gameInstance.getLowestEmptyRow(col);
            gameInstance.board[row][col] = opponent;
            const score = minimax(gameInstance, depth - 1, alpha, beta, true, player).score;
            gameInstance.board[row][col] = 0;

            if (score < minEval) {
                minEval = score;
                bestCol = col;
            }
            beta = Math.min(beta, score);
            if (beta <= alpha) break;
        }
        return { score: minEval, col: bestCol };
    }
};


/*Функция для определения хода бота Easy. 
  @param {ConnectFourGame} gameInstance - Экземпляр текущей игры.
  @returns {{row: number, col: number} | null} - Объект с координатами хода или null. */

export function botEasyMove(gameInstance) {
    // console.log("botEasyMove: gameInstance (игра) получена:", gameInstance);
    // console.log("botEasyMove: gameInstance.board:", JSON.parse(JSON.stringify(gameInstance.board)));
    // console.log("botEasyMove: gameInstance.rows:", gameInstance.rows);
    // console.log("botEasyMove: gameInstance.columns:", gameInstance.columns);
    // console.log("botEasyMove: gameInstance.currentPlayer (бот):", gameInstance.currentPlayer);

    // простая стратегия, ставим в любое место
    const availableColumns = [];
    for (let col = 0; col < gameInstance.columns; col++) {
        if (gameInstance.getLowestEmptyRow(col) !== -1) {
            availableColumns.push(col);
        }
    }

    if (availableColumns.length > 0) {
        const randomCol = availableColumns[Math.floor(Math.random() * availableColumns.length)];
        const row = gameInstance.getLowestEmptyRow(randomCol);
        
        return { row, col: randomCol }
    }
    return null;
}

/*
  Функция для определения хода бота Medium.
  @param {ConnectFourGame} gameInstance - Экземпляр текущей игры.
  @returns {{row: number, col: number} | null} - Объект с координатами хода или null. */

export function botMediumMove(gameInstance) {
    // Логика из вашего текущего makeBotMove, адаптированная
    const currentPlayer = gameInstance.currentPlayer; // ID бота
    const allActivePlayers = [];

    for (let i = 1; i <= gameInstance.players; i++){
        allActivePlayers.push(i);
    }

    Object.values(gameInstance.bots || {}).forEach(bot => {
            if (bot.isActive) allActivePlayers.push(bot.id); 
        })

    // Исключаем самого бота
    const opponents = allActivePlayers.filter(id => id !== gameInstance.currentPlayer);

    // 1. Проверим, можем ли мы выиграть на следующем ходу
    for (let col = 0; col < gameInstance.columns; col++) {
        const row = gameInstance.getLowestEmptyRow(col);
        if (row !== -1 && gameInstance.checkWinHypothetical(row, col, currentPlayer)) return { row, col }; // Найден выигрышный ход
    }
    

    // 2. Проверим, может ли выиграть *любой* другой игрок (не бот) на следующем ходу и заблокируем его
    // Найдем ID обычного игрока (не бота)
    for (const opponentId of opponents){
        for (let col = 0; col < gameInstance.columns; col++){
            const row = gameInstance.getLowestEmptyRow(col)
            if (row !== -1 && gameInstance.checkWinHypothetical(row, col, opponentId)) return {row, col};
        }
    }

    // 3. Если нет срочных ходов, сделаем случайный ход в неполную колонку
    return botEasyMove(gameInstance); // Используем логику Easy как запасной вариант
}

/*
 Функция для определения хода бота Hard.
 @param {ConnectFourGame} gameInstance - Экземпляр текущей игры.
 @returns {{row: number, col: number} | null} - Объект с координатами хода или null.
 */
export function botHardMove(gameInstance) {
    const player = gameInstance.currentPlayer;
    const { col } = minimax(gameInstance, DEPTH, -Infinity, Infinity, true, player);
    if (col === null) return null;
    const row = gameInstance.getLowestEmptyRow(col);
    return { row, col };
}

/*
 Универсальная функция для вызова хода бота в зависимости от его сложности.
 @param {ConnectFourGame} gameInstance - Экземпляр текущей игры.
 @param {string} difficulty - Уровень сложности ('easy', 'medium', 'hard').
 @returns {{row: number, col: number} | null} - Объект с координатами хода или null.
 */

export function getBotMove(gameInstance, difficulty) {
    switch (difficulty.toLowerCase()) {
        case 'easy':
            return botEasyMove(gameInstance);
        case 'medium':
            return botMediumMove(gameInstance);
        case 'hard':
            return botHardMove(gameInstance);
        default:
            console.warn(`Неизвестная сложность бота: ${difficulty}. Используется medium.`);
            return botMediumMove(gameInstance);
    }
}