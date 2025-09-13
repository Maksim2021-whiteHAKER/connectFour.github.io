document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
    const mainMenu = document.getElementById('mainMenu');
    const creativeSettings = document.getElementById('creativeSettings');
    const normalModeBtn = document.getElementById('normalMode');
    const creativeModeBtn = document.getElementById('creativeMode');
    const startCreativeBtn = document.getElementById('startCreativeBtn');
    const container = document.querySelector('.container');
    const gameInfo = document.getElementById('gameInfo');
    const status = document.getElementById('status');
    const board = document.getElementById('board');
    const restartBtn = document.getElementById('restartBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const winModal = document.getElementById('winModal');
    const winMessage = document.getElementById('winMessage');
    const winDescription = document.getElementById('winDescription');
    const playAgainBtn = document.getElementById('playAgainBtn');
    
    // Переменные игры
    let game;
    
    // Обработчики событий
    normalModeBtn.addEventListener('click', () => {
        startGame(6, 7, 2);
    });
    
    creativeModeBtn.addEventListener('click', () => {
        creativeSettings.style.display = 'block';
    });
    
    startCreativeBtn.addEventListener('click', () => {
        const rows = parseInt(document.getElementById('rows').value);
        const columns = parseInt(document.getElementById('columns').value);
        const players = parseInt(document.getElementById('players').value);
        
        if (rows < 4 || rows > 20) {
            alert('Количество строк должно быть от 4 до 20');
            return;
        }
        
        if (columns < 4 || columns > 20) {
            alert('Количество столбцов должно быть от 4 до 20');
            return;
        }
        
        if (players < 1 || players > 4) {
            alert('Количество игроков должно быть от 1 до 4');
            return;
        }
        
        startGame(rows, columns, players);
    });
    
    restartBtn.addEventListener('click', () => {
        if (game) {
            game.restartGame();
        }
    });
    
    settingsBtn.addEventListener('click', () => {
        container.style.display = 'none';
        mainMenu.style.display = 'flex';
        creativeSettings.style.display = 'block';
    });

    // Обработчики для кнопок "Назад в меню"
    backToMainBtn.addEventListener('click', backToMainMenu);
    backToMainFromSettings.addEventListener('click', backToMainMenu);
    backToMainFromWin.addEventListener('click', backToMainMenu);
    
    playAgainBtn.addEventListener('click', () => {
        winModal.style.display = 'none';
        if (game) {
            game.restartGame();
        }
    });

    function backToMainMenu() {
        container.style.display = 'none';
        creativeSettings.style.display = 'none';
        winModal.style.display = 'none';
        mainMenu.style.display = 'flex';
    }
    
    // Функция начала игры
    function startGame(rows, columns, players) {
        mainMenu.style.display = 'none';
        creativeSettings.style.display = 'none';
        container.style.display = 'flex';
        
        game = new ConnectFourGame(rows, columns, players);
    }
    
    // Класс игры
    class ConnectFourGame {
        constructor(rows, columns, players) {
            this.rows = rows;
            this.columns = columns;
            this.players = players;
            this.currentPlayer = 1;
            this.winner = 0;
            this.board = [];
            this.winningCells = [];
            
            this.initGame();
        }
        
        initGame() {
            // Создаем пустую доску
            this.board = Array(this.rows).fill(null).map(() => Array(this.columns).fill(0));
            this.currentPlayer = 1;
            this.winner = 0;
            this.winningCells = [];
            
            // Создаем интерфейс игроков
            this.createPlayersUI();
            
            // Создаем игровое поле
            this.createBoard();
            
            // Обновляем статус
            this.updateStatus();
        }
        
        createPlayersUI() {
            gameInfo.innerHTML = '';
            
            for (let i = 1; i <= this.players; i++) {
                const playerElement = document.createElement('div');
                playerElement.className = `player player${i}`;
                playerElement.id = `player${i}`;
                
                if (i === this.currentPlayer) {
                    playerElement.classList.add('current-turn');
                }
                
                playerElement.innerHTML = `
                    <div class="player-color"></div>
                    <span>Игрок ${i}</span>
                `;
                
                gameInfo.appendChild(playerElement);
            }
        }
        
        createBoard() {
            board.innerHTML = '';
            
            // Настраиваем grid в соответствии с размерами
            board.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
            
            for (let row = 0; row < this.rows; row++) {
                for (let col = 0; col < this.columns; col++) {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.dataset.row = row;
                    cell.dataset.col = col;
                    cell.addEventListener('click', () => this.makeMove(col));
                    board.appendChild(cell);
                }
            }
        }
        
        makeMove(column) {
            if (this.winner !== 0) return;
            
            // Находим первую свободную ячейку в колонке
            for (let row = this.rows - 1; row >= 0; row--) {
                if (this.board[row][column] === 0) {
                    // Делаем ход
                    this.board[row][column] = this.currentPlayer;
                    
                    // Обновляем UI
                    this.updateBoard();
                    
                    // Проверяем победу
                    if (this.checkWin(row, column)) {
                        this.winner = this.currentPlayer;
                        this.showWinModal();
                    } else {
                        // Переходим к следующему игроку
                        this.nextPlayer();
                    }
                    
                    return;
                }
            }
            
            // Если колонка заполнена
            status.textContent = 'Эта колонка заполнена!';
            setTimeout(() => this.updateStatus(), 1500);
        }
        
        updateBoard() {
            const cells = board.querySelectorAll('.cell');
            
            cells.forEach(cell => {
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);
                
                // Убираем все классы игроков
                cell.classList.remove('player1', 'player2', 'player3', 'player4', 'winning-cell');
                
                // Добавляем класс соответствующего игрока
                if (this.board[row][col] !== 0) {
                    cell.classList.add(`player${this.board[row][col]}`);
                }
                
                // Помечаем выигрышные ячейки
                if (this.winningCells.some(c => c.row === row && c.col === col)) {
                    cell.classList.add('winning-cell');
                }
            });
        }
        
        checkWin(row, col) {
            const player = this.board[row][col];
            const directions = [
                {dr: 0, dc: 1},  // Горизонталь
                {dr: 1, dc: 0},  // Вертикаль
                {dr: 1, dc: 1},  // Диагональ ↘
                {dr: 1, dc: -1}  // Диагональ ↙
            ];
            
            for (const {dr, dc} of directions) {
                let count = 1;
                this.winningCells = [{row, col}];
                
                // Проверяем в одном направлении
                let r = row + dr;
                let c = col + dc;
                while (r >= 0 && r < this.rows && c >= 0 && c < this.columns && this.board[r][c] === player) {
                    count++;
                    this.winningCells.push({row: r, col: c});
                    r += dr;
                    c += dc;
                }
                
                // Проверяем в противоположном направлении
                r = row - dr;
                c = col - dc;
                while (r >= 0 && r < this.rows && c >= 0 && c < this.columns && this.board[r][c] === player) {
                    count++;
                    this.winningCells.push({row: r, col: c});
                    r -= dr;
                    c -= dc;
                }
                
                if (count >= 4) {
                    return true;
                }
            }
            
            this.winningCells = [];
            return false;
        }
        
        nextPlayer() {
            this.currentPlayer = this.currentPlayer % this.players + 1;
            this.updateStatus();
            
            // Обновляем выделение текущего игрока
            document.querySelectorAll('.player').forEach((player, index) => {
                if (index + 1 === this.currentPlayer) {
                    player.classList.add('current-turn');
                } else {
                    player.classList.remove('current-turn');
                }
            });
        }
        
        updateStatus() {
            status.textContent = `Ход игрока ${this.currentPlayer}`;
            status.style.color = '#ffff00'
        }
        
        showWinModal() {
            winMessage.textContent = 'Победа!';
            winDescription.textContent = `Игрок ${this.winner} победил!`;
            winModal.style.display = 'flex';
            
            // Помечаем выигрышные ячейки
            this.updateBoard();
        }
        
        restartGame() {
            this.initGame();
        }
    }
});