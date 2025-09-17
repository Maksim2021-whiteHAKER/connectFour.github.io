import { logicSlider, sliderLanguages, flagImages, updateVersionDisplay } from "./translations.js";

document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
     // Проверка наличия необходимых элементов и функций
     if (typeof window.changeLanguage !== 'function') {
        console.warn('Функция changeLanguage не определена. Слайдер языков не будет работать.');
        return;
    }
    if (typeof sliderLanguages === 'undefined' || typeof flagImages === 'undefined') {
        console.warn('Данные sliderLanguages или flagImages не определены. Слайдер языков не будет работать.');
        return;
    }
    if (!document.getElementById('languageSliderContainer')) {
         console.warn('Контейнер слайдера #languageSliderContainer не найден в DOM. Слайдер языков не будет отображаться.');
         return;
    }

    console.log("Инициализация слайдера языков...");
    // Вызов функции инициализации слайдера
    logicSlider();
    console.log("Слайдер языков инициализирован.");

    console.log('Применение перевода')
    applyTranslations()
    updateVersionDisplay()

    console.log('Перевод применён')

    const mainMenu = document.getElementById('mainMenu');
    const creativeSettings = document.getElementById('creativeSettings');
    const customizationPanel = document.getElementById('customizationPanel');
    const normalModeBtn = document.getElementById('normalMode');
    const creativeModeBtn = document.getElementById('creativeMode');
    const customizationBtn = document.getElementById('customizationBtn');
    const startCreativeBtn = document.getElementById('startCreativeBtn');
    const saveCustomizationBtn = document.getElementById('saveCustomizationBtn');
    const addPlayerBtn = document.getElementById('addPlayerBtn');
    const removePlayerBtn = document.getElementById('removePlayerBtn');
    const container = document.querySelector('.container');
    const scoreBoard = document.getElementById('scoreBoard');
    const gameInfo = document.getElementById('gameInfo');
    const status = document.getElementById('status');
    const columnNumbers = document.getElementById('columnNumbers');
    const rowLetters = document.getElementById('rowLetters');
    const board = document.getElementById('board');
    const restartBtn = document.getElementById('restartBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const backToMainBtn = document.getElementById('backToMainBtn');
    const backToMainFromSettings = document.getElementById('backToMainFromSettings');
    const backToMainFromCustomization = document.getElementById('backToMainFromCustomization');
    const winModal = document.getElementById('winModal');
    const drawModal = document.getElementById('drawModal');
    const winMessage = document.getElementById('winMessage');
    const winDescription = document.getElementById('winDescription');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const playAgainAfterDrawBtn = document.getElementById('playAgainAfterDrawBtn');
    const backToMainFromWin = document.getElementById('backToMainFromWin');
    const backToMainAfterDrawBtn = document.getElementById('backToMainAfterDrawBtn');

    function toggleButtonsMenu(hide, callback) {
        const buttonsMenu = document.querySelector('.buttons-menu');
        if (!buttonsMenu) {
            console.warn('Элемент .buttons-menu не найден');
            if (callback && typeof callback === 'function') callback();
            return;
        }
    
        if (hide) {
            // Начинаем анимацию исчезновения
            buttonsMenu.classList.add('fade-transition');
            // Ждем завершения анимации, затем вызываем callback
            setTimeout(() => {
                if (callback && typeof callback === 'function') callback();
            }, 400); // 400ms = длительность transition в CSS
        } else {
            // Убираем класс анимации, чтобы элемент стал видимым
            buttonsMenu.classList.remove('fade-transition');
            // Ждем один кадр (или немного больше), чтобы CSS применился, затем callback
            requestAnimationFrame(() => {
                 // setTimeout с 0 или requestAnimationFrame гарантирует, 
                 // что callback выполнится после обновления стилей
                 setTimeout(() => {
                     if (callback && typeof callback === 'function') callback();
                 }, 0);
            });
            // Или просто вызвать callback сразу, если анимация появления не нужна:
            // if (callback && typeof callback === 'function') callback();
        }
    }

    // Модальные окна для игроков в творческом режиме
    const playerModals = {
        1: document.getElementById('player1Modal'),
        2: document.getElementById('player2Modal'),
        3: document.getElementById('player3Modal'),
        4: document.getElementById('player4Modal')
    };

    // Переменные игры
    let game;
    let playerScores = [0, 0, 0, 0];
    let currentTheme = 'default'; // Для обычного режима и как запасной вариант
    // --- ИЗМЕНЕНО: Храним оригинальные цвета и рабочую копию ---
    let originalPlayerColors = ['#e74c3c', '#f1c40f', '#3498db', '#2ecc71'];
    let playerColors = [...originalPlayerColors]; // Рабочая копия для обмена
    let gameMode = 'single';
    let lastLoser = null;
    let maxPlayers = 4;
    let symbolBot = '👾'

    let playerNicknames = {
        1: "Игрок 1",
        2: "Игрок 2",
        3: "Игрок 3",
        4: "Игрок 4"
    }

    let bots = {
        // Пример структуры:
        /** 5: { 5 - уникальный ID для бота
         * id: 5,
         * name: "Бот".
         * symbol: "🤖"
         * color: "#808080" - серый
         * isActive: false,
         * difficulty: "easy"
        }
        */
    }
    
    // --- НОВОЕ: Для разных фигурок в творческом режиме ---
    const themeSymbols = {
        'default': '●',
        'skull': '💀',
        'hearts': '❤',
        'turtles': '🐢',
        'stars': '★',
        'squares': '■'
    };
    const creativeModeThemes = ['default', 'skull', 'hearts', 'turtles', 'stars', 'squares'];
    let isCreativeMode = false; // Флаг для отслеживания режима
    let playerThemesInCreative = {}; // Хранит тему для каждого игрока в творческом режиме

    // Обработчики событий
    normalModeBtn.addEventListener('click', () => {
        isCreativeMode = false;
        if (isCreativeMode === false){
            alert(`В разработке...`)
            return;
        }
        gameMode = 'single';
        bots = {};
        toggleButtonsMenu(true, () => {
            startGame(6, 7, 2);
        })
    });

    creativeModeBtn.addEventListener('click', () => {
        toggleButtonsMenu(true, () => {
            creativeSettings.style.display = 'block';
            customizationPanel.style.display = 'none';
        })
    });

    customizationBtn.addEventListener('click', () => {
        toggleButtonsMenu(true, () => {
            creativeSettings.style.display = 'none';
            customizationPanel.style.display = 'block';
        })
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
        
        const gameModeSelect = document.getElementById('gameMode');
        if (gameModeSelect) {
            gameMode = gameModeSelect.value;
        }
        
        isCreativeMode = true; // Устанавливаем флаг творческого режима
        
        // Открываем модальные окна для настройки игроков
        openPlayerModals(players);
    });

    saveCustomizationBtn.addEventListener('click', () => {
        // Сохранение выбранной темы (для обычного режима)
        const selectedTheme = document.querySelector('.theme-option.selected');
        if (selectedTheme) {
            currentTheme = selectedTheme.dataset.theme;
        }
        // --- ИЗМЕНЕНО: Сохраняем оригинальные цвета ---
        document.querySelectorAll('.color-option.selected').forEach(option => {
            const playerIndex = parseInt(option.dataset.player) - 1;
            originalPlayerColors[playerIndex] = option.dataset.color;
            playerColors[playerIndex] = option.dataset.color; // Синхронизируем рабочую копию
            // Обновление CSS переменных
            document.documentElement.style.setProperty(`--player${playerIndex + 1}`, playerColors[playerIndex]);
        });
        alert('Настройки сохранены!');
        backToMainMenu();
    });

    addPlayerBtn.addEventListener('click', () => {
        // Проверяем, не превышено ли максимальное количество игроков
        if (game.players >= maxPlayers){
            alert(`Максимальное количество игроков - ${maxPlayers}`)
            return;
        }

        if (Object.keys(bots).length > 0){
            bots = {};
            console.log("Бот убран при добавлении игрока");
        }
        
        // Увеличиваем кол. игроков
        game.players++;

        // Пересоздаём интерфейс игроков и счет
        game.createPlayersUI();
        game.createScoreBoard();

        // Обновляем статус
        game.updateStatus();
    })

    removePlayerBtn.addEventListener('click', () => {
        if (game.players <= 1){
            alert(`Минимальное количество игроков - 1`)
            return;
        }

        // --- НОВОЕ: При удалении до 1 игрока, можно снова добавить бота ---
        // Это опционально, зависит от желаемой логики
        if (game.players === 2 && (gameMode === 'single' || gameMode === 'test')) {
            const botId = game.players + 1; // ID для бота
            bots[botId] = {
                id: botId,
                name: "Бот",
                symbol: symbolBot,
                color: "#808080",
                isActive: true,
                difficulty: gameMode === 'single' ? "medium" : "easy"
            };
            console.log("Бот снова добавлен:", bots[botId]);
        }

        // Уменьшаем кол. игроков
        game.players--;

        // Пересоздаём интерфейс игроков и счет
        game.createPlayersUI();
        game.createScoreBoard();

        // Обновляем статус
        game.updateStatus();
    })

    // Обработчики выбора темы
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // Обработчики выбора цвета
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', () => {
            const playerNum = option.dataset.player;
            // Убираем выделение у всех цветов для этого игрока
            if (playerNum) { // Только для общих настроек
                document.querySelectorAll(`.color-option[data-player="${playerNum}"]`).forEach(opt => {
                    opt.classList.remove('selected');
                });
            }
            // Выделяем выбранный цвет
            option.classList.add('selected');
        });
    });

    // Обработчики для модальных окон игроков
    document.querySelectorAll('.save-player-settings').forEach(button => {
        button.addEventListener('click', (e) => {
            const playerNumber = parseInt(e.target.dataset.player);
            const modal = playerModals[playerNumber];

            const nicknameInput = modal.querySelector(`#player${playerNumber}Nickname`)
            if (nicknameInput && nicknameInput.value.trim() !== ''){
                playerNicknames[playerNumber] = nicknameInput.value.trim();
            } else if (nicknameInput){
                // playerNicknames[playerNumber] = `Игрок ${playerNumber}`;
                playerNicknames[playerNumber] = `${t('defaultNamePlayer')} ${playerNumber}`;
            }
            
            // Сохраняем настройки игрока
            const selectedTheme = modal.querySelector('.player-theme-options .theme-option.selected');
            const selectedColor = modal.querySelector('.player-color-options .color-option.selected');
            
            if (selectedTheme) {
                playerThemesInCreative[playerNumber] = selectedTheme.dataset.theme;
            }
            
            if (selectedColor) {
                playerColors[playerNumber - 1] = selectedColor.dataset.color;
                // Обновляем CSS переменную
                document.documentElement.style.setProperty(`--player${playerNumber}`, selectedColor.dataset.color);
            }
            
            // Закрываем модальное окно
            modal.style.display = 'none';
            
            // Проверяем, все ли модальные окна закрыты
            checkAllModalsClosed();
        });
    });

    // Обработчики выбора темы и цвета в модальных окнах игроков
    document.querySelectorAll('.player-theme-options .theme-option').forEach(option => {
        option.addEventListener('click', () => {
            // Убираем выделение у всех тем в этом модальном окне
            const modalContent = option.closest('.modal-content');
            modalContent.querySelectorAll('.player-theme-options .theme-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Выделяем выбранную тему
            option.classList.add('selected');
        });
    });

    document.querySelectorAll('.player-color-options .color-option').forEach(option => {
        option.addEventListener('click', () => {
            // Убираем выделение у всех цветов в этом модальном окне
            const modalContent = option.closest('.modal-content');
            modalContent.querySelectorAll('.player-color-options .color-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Выделяем выбранный цвет
            option.classList.add('selected');
        });
    });

    document.getElementById('players').addEventListener('input', (e) => {
        const playersCount = parseInt(e.target.value);
        const gameModeGroup = document.getElementById('gameModeGroup');
        if (playersCount === 1){
            gameModeGroup.style.display = 'block';
        } else {
            gameModeGroup.style.display = 'none';
            gameMode = 'single';
            if (document.getElementById('gameMode')){
                document.getElementById('gameMode').value = 'single';
            }
        }
    })

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
    backToMainFromCustomization.addEventListener('click', backToMainMenu);
    backToMainFromWin.addEventListener('click', backToMainMenu);
    backToMainAfterDrawBtn.addEventListener('click', backToMainMenu);

    playAgainBtn.addEventListener('click', () => {
        winModal.style.display = 'none';
        if (game) {
            game.restartGame();
        }
    });

    playAgainAfterDrawBtn.addEventListener('click', () => {
        drawModal.style.display = 'none';
        if (game) {
            game.restartGame();
        }
    });

    // Функция возврата в главное меню
    function backToMainMenu() {
        container.style.display = 'none';
        creativeSettings.style.display = 'none';
        customizationPanel.style.display = 'none';
        winModal.style.display = 'none';
        drawModal.style.display = 'none';
        // Закрываем все модальные окна игроков
        Object.values(playerModals).forEach(modal => {
            modal.style.display = 'none';
        });
        mainMenu.style.display = 'flex';
        toggleButtonsMenu(false);
        // --- НОВОЕ: Сбрасываем цвета при выходе в меню ---
        playerColors = [...originalPlayerColors];
        for (let i = 0; i < originalPlayerColors.length; i++) {
            document.documentElement.style.setProperty(`--player${i + 1}`, playerColors[i]);
        }
        // Сбрасываем настройки творческого режима
        playerThemesInCreative = {};
        bots = {};
    }

    // Функция начала игры
    function startGame(rows, columns, players) {
        mainMenu.style.display = 'none';
        creativeSettings.style.display = 'none';
        customizationPanel.style.display = 'none';
        // Закрываем все модальные окна игроков
        Object.values(playerModals).forEach(modal => {
            modal.style.display = 'none';
        });
        container.style.display = 'flex';
        // --- НОВОЕ: Сбрасываем цвета перед началом новой игры ---
        playerColors = [...originalPlayerColors];

        bots = {};

        // Если выбран режим с ботом и 1 игрок, добавляем бота
        if ((gameMode === 'single' || gameMode === 'test') && players === 1) {
            // Создаем объект бота
            // ID бота будет players + 1 (т.е. 2 в данном случае)
            const botId = players + 1; 
            bots[botId] = {
                id: botId,
                name: "Бот",
                symbol: symbolBot, // Можно выбрать другую иконку
                color: "#808080", // Серый цвет по умолчанию
                isActive: true,
                // difficulty: gameMode === 'single' ? "medium" : "easy" // Пример сложности
            };
            console.log("StartGAME: Бот добавлен:", bots[botId]); // Для отладки
        } else {
            console.log("StartGame Бот не добавлен:"); // Для отладки
        }

        game = new ConnectFourGame(rows, columns, players);
    }

    // --- НОВОЕ: Функция для открытия модальных окон игроков ---
    function openPlayerModals(playersCount) {
        // Сначала закрываем все модальные окна
        Object.values(playerModals).forEach(modal => {
            modal.style.display = 'none';
        });
        
        // Открываем модальные окна для каждого игрока
        for (let i = 1; i <= playersCount; i++) {
            if (playerModals[i]) {
                playerModals[i].style.display = 'flex';
            }
        }
    }

    // --- НОВОЕ: Функция для проверки, все ли модальные окна закрыты ---
    function checkAllModalsClosed() {
        const allClosed = Object.values(playerModals).every(modal => {
            return modal.style.display === 'none';
        });
        
        if (allClosed) {
            // Все модальные окна закрыты, можно начинать игру
            const rows = parseInt(document.getElementById('rows').value);
            const columns = parseInt(document.getElementById('columns').value);
            const players = parseInt(document.getElementById('players').value);
            startGame(rows, columns, players);
        }
    }

    // --- НОВОЕ: Функция для генерации меток строк (снизу вверх, АА, АБ...) ---
    function generateRowLabels(numRows) {
        const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
        const labels = [];
        for (let i = 0; i < numRows; i++) {
            // Индекс считается снизу: последняя строка (нижняя) - 0, предпоследняя - 1 и т.д.
            const indexFromBottom = numRows - 1 - i;

            if (indexFromBottom < letters.length) {
                // Для первых 33 строк используем одну букву
                labels.push(letters[indexFromBottom]);
            } else {
                // Для строк свыше 33 используем комбинации (упрощенная логика)
                // Это пример: AA, AB, AC... BA, BB... (по аналогии с Excel)
                let label = '';
                let tempIndex = indexFromBottom;
                while (tempIndex >= 0) {
                    label = letters[tempIndex % letters.length] + label;
                    tempIndex = Math.floor(tempIndex / letters.length) - 1;
                    if (tempIndex < 0) break;
                }
                labels.push(label || 'А'); // На случай переполнения
            }
        }
        return labels;
    }

    // Класс игры
    class ConnectFourGame {
        constructor(rows, columns, players) {
            this.rows = rows;
            this.columns = columns;
            this.players = players;
            // this.currentPlayer = 1;
            this.winner = 0;
            this.board = [];
            this.winningCells = [];
            this.movesCount = 0;
            this.maxMoves = rows * columns;
            this.initGame();
        }

        initGame() {
            // Создаем пустую доску
            this.board = Array(this.rows).fill(null).map(() => Array(this.columns).fill(0));

            const activeBotsIds = Object.values(bots).filter(bot => bot.isActive).map(bot => bot.id);
            const allParticipantIds = [...Array(this.players).keys()].map(i => i + 1).concat(activeBotsIds);

            let isFirstPlayerDetermined = false; // Флаг для отладки

            // Проверяем, является ли lastLoser одним из текущих участников
            if (lastLoser !== null && allParticipantIds.includes(lastLoser)) {
                this.currentPlayer = lastLoser; // Проигравший (бот или человек) ходит первым
                console.log(`Первым ходит проигравший: ${lastLoser}`); // Для отладки
                isFirstPlayerDetermined = true;
            }

            // Если первый игрок еще не определен, начинает Игрок 1
            if (!isFirstPlayerDetermined) {
                 this.currentPlayer = 1;
                 if (lastLoser === null) {
                     console.log("Первым ходит Игрок 1 по умолчанию (lastLoser=null)");
                 } else { // lastLoser !== null, но не входит в allParticipantIds
                     console.log(`Первым ходит Игрок 1 по умолчанию (lastLoser=${lastLoser} не участвует в этой игре)`);
                 }
            }

            this.winner = 0;
            this.winningCells = [];
            this.movesCount = 0;

            // Создаем интерфейс игроков
            this.createPlayersUI();
            // Создаём счет игроков
            this.createScoreBoard();
            // Создаём номера колонок и буквы строк
            this.createColumnNumbers();
            this.createRowLetters(); // Использует новую функцию
            // Создаем игровое поле
            this.createBoard();
            // Обновляем статус
            this.updateStatus();

            status.textContent = t('status')

            const isCurrentPlayerBot = Object.values(bots).some(bot =>
                bot.isActive && bot.id === this.currentPlayer
            );
            console.log(`initGame: currentPlayer=${this.currentPlayer}, isBot=${isCurrentPlayerBot}`); // Отладка
            if (isCurrentPlayerBot && this.winner === 0) {
                 console.log("initGame: Инициация первого хода бота"); // Отладка
                 // Используем setTimeout 0, чтобы дать время отрисоваться UI
                 setTimeout(() => {
                      this.makeBotMove(); 
                 }, 0); 
            }
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
                // --- ИЗМЕНЕНО: Отображение фигурки игрока ---
                let playerSymbol = themeSymbols[currentTheme]; // По умолчанию
                if (isCreativeMode && playerThemesInCreative[i]) {
                    // В творческом режиме используем уникальную тему игрока
                    playerSymbol = themeSymbols[playerThemesInCreative[i]] || themeSymbols['default'];
                }
                playerElement.innerHTML = `
                    <div class="player-color"></div>
                    <span>${playerNicknames[i] || `Игрок ${i}`} ${playerSymbol}</span> <!-- Используем ник -->
                `;
                gameInfo.appendChild(playerElement);
            }

             // --- НОВОЕ: Отображаем ботов, если они есть и активны ---
             Object.values(bots).forEach(bot => {
                if (bot.isActive) {
                    const botElement = document.createElement('div');
                    botElement.className = `player bot`; // Добавляем класс bot для стилизации
                    botElement.id = `bot${bot.id}`;
                    // Выделяем бота, если он текущий игрок (это нужно протестировать)
                    // if (bot.id === this.currentPlayer) {
                    //     botElement.classList.add('current-turn');
                    // }
                    
                    botElement.innerHTML = `
                        <div class="player-color" style="background-color: ${bot.color};"></div>
                        <span>${bot.name} ${bot.symbol}</span>
                    `;
                    gameInfo.appendChild(botElement);
                }
            });
        }

        createScoreBoard() {
            scoreBoard.innerHTML = '';
            for (let i = 1; i <= this.players; i++) {
                const scoreItem = document.createElement('div');
                scoreItem.className = 'score-item';
                // --- ИЗМЕНЕНО: Отображение фигурки игрока в счете и используем рабочую копию цветов ---
                let playerSymbol = themeSymbols[currentTheme]; // По умолчанию
                if (isCreativeMode && playerThemesInCreative[i]) {
                    // В творческом режиме используем уникальную тему игрока
                    playerSymbol = themeSymbols[playerThemesInCreative[i]] || themeSymbols['default'];
                }
                scoreItem.innerHTML = `
                    <div class="player-color" style="background-color: ${playerColors[i-1]}"></div>
                    <span>${playerSymbol} ${playerNicknames[i] || `Игрок ${i}`}: ${playerScores[i-1]}</span>`; // Добавляем символ
                scoreBoard.appendChild(scoreItem);
            }

            // --- НОВОЕ: Отображаем счет ботов, если они есть и активны ---
            Object.values(bots).forEach(bot => {
                if (bot.isActive) {
                    const scoreItem = document.createElement('div');
                    scoreItem.className = 'score-item bot-score'; // Добавляем класс для стилизации

                    // Предположим, что счет бота хранится отдельно или в playerScores
                    // Для простоты, пока используем playerScores[bot.id - 1], но это может быть не совсем корректно
                    // Лучше завести отдельный массив для счета ботов или использовать общий массив playerScores
                    // с учетом ID ботов.
                    const botScoreIndex = bot.id - 1; // Простое сопоставление
                    scoreItem.innerHTML = `
                        <div class="player-color" style="background-color: ${bot.color};"></div>
                        <span>${bot.symbol} ${bot.name}: ${playerScores[botScoreIndex] || 0}</span>`;
                    scoreBoard.appendChild(scoreItem);
                }
            });
        }

        createColumnNumbers() {
            columnNumbers.innerHTML = '';
            // Добавляем пустой элемент для выравнивания с буквами строк
            const empty = document.createElement('div');
            empty.style.width = '25px'; // Ширина .row-letter
            empty.style.marginRight = '5px';
            columnNumbers.appendChild(empty);
            for (let col = 1; col <= this.columns; col++) {
                const colNumber = document.createElement('div');
                colNumber.className = 'column-number';
                colNumber.textContent = col;
                columnNumbers.appendChild(colNumber);
            }
        }

        createRowLetters() {
            rowLetters.innerHTML = '';
            // --- ИЗМЕНЕНО: Используем новую функцию для генерации меток ---
            const labels = generateRowLabels(this.rows);
            for (let i = 0; i < this.rows; i++) {
                const rowLetter = document.createElement('div');
                rowLetter.className = 'row-letter';
                rowLetter.textContent = labels[i];
                rowLetters.appendChild(rowLetter);
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
              // Проверяем, является ли текущий игрок активным ботом
              const isCurrentPlayerBot = Object.values(bots).some(bot => 
                bot.isActive && bot.id === this.currentPlayer
            );
            
            if (this.winner !== 0 || isCurrentPlayerBot) {
                // Если игра окончена или ходит бот, человек не может сделать ход
                return;
            }

            // Находим первую свободную ячейку в колонке
            for (let row = this.rows - 1; row >= 0; row--) {
                if (this.board[row][column] === 0) {
                    // Делаем ход
                    this.board[row][column] = this.currentPlayer;
                    this.movesCount++;
                    // Обновляем UI
                    this.updateBoard();
                    // Проверяем победу
                    if (this.checkWin(row, column)) {
                        this.winner = this.currentPlayer;
                        if (this.currentPlayer >= 1 && this.currentPlayer <= maxPlayers){
                            playerScores[this.currentPlayer - 1]++;
                        } else {
                            console.warn(`Не удалось обновить счет для игрока/бота с ID ${this.currentPlayer}`);
                        }
                        this.showWinModal();
                    } else if (this.movesCount === this.maxMoves) {
                        // Ничья все клетки заполнены
                        this.showDrawModal();
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

        makeBotMove() {
            // Убираем проверку this.isBotGame
            // if (!this.isBotGame || this.currentPlayer !== 2 || this.winner !== 0) return;
            // Добавляем проверку, что текущий игрок - активный бот
            const isCurrentPlayerBot = Object.values(bots).some(bot => 
                bot.isActive && bot.id === this.currentPlayer
            );

            // console.log('mBM: шаг 1')
            if (!isCurrentPlayerBot || this.winner !== 0) return;

            // console.log('mBM: шаг 2')
            // 1. Проверим, можем ли мы выиграть на следующем ходу
            for (let col = 0; col < this.columns; col++) {
                const row = this.getLowestEmptyRow(col);
                if (row !== -1) {
                    this.board[row][col] = this.currentPlayer; // Используем this.currentPlayer
                    if (this.checkWinForBot(row, col, this.currentPlayer)) { // Используем this.currentPlayer
                        this.board[row][col] = 0;
                        this.executeBotMove(row, col); // Выполняем ход
                        return;
                    }
                    this.board[row][col] = 0;
                }
            }
            // console.log('mBM: шаг 3')

            // 2. Проверим, может ли выиграть *любой* другой игрок (не бот) на следующем ходу и заблокируем его
            // Найдем ID обычного игрока (не бота)
            let humanPlayerId = 1; // Предположим, что первый обычный игрок - это 1
            for (let i = 1; i <= this.players; i++) {
                if (!Object.values(bots).some(bot => bot.id === i)) {
                    humanPlayerId = i;
                    break;
                }
            }
            // console.log('mBM: шаг 4')
            
            for (let col = 0; col < this.columns; col++) {
                const row = this.getLowestEmptyRow(col);
                if (row !== -1) {
                    this.board[row][col] = humanPlayerId; // Предполагаем ход человека
                    if (this.checkWinForBot(row, col, humanPlayerId)) { // Проверяем его победу
                        this.board[row][col] = 0;
                        this.executeBotMove(row, col); // Заблокировать
                        return;
                    }
                    this.board[row][col] = 0;
                }
            }
            // console.log('mBM: шаг 5')

            // 3. Если нет срочных ходов, сделаем случайный ход в неполную колонку
            const availableColumns = [];
            for (let col = 0; col < this.columns; col++) {
                if (this.getLowestEmptyRow(col) !== -1) {
                    availableColumns.push(col);
                }
            }

            // console.log('mBM: шаг 6')

            if (availableColumns.length > 0) {
                const randomCol = availableColumns[Math.floor(Math.random() * availableColumns.length)];
                const row = this.getLowestEmptyRow(randomCol);
                this.executeBotMove(row, randomCol);
            }

            // console.log('mBM: шаг 7 финал')
            // Если нет доступных колонок, игра уже должна была закончиться по ничьей
        }

        // Вспомогательная функция для поиска нижней пустой строки в колонке (остаётся без изменений)
        getLowestEmptyRow(column) {
            for (let row = this.rows - 1; row >= 0; row--) {
                if (this.board[row][column] === 0) {
                    return row;
                }
            }
            return -1; // Колонка полная
        }

        // Вспомогательная функция для проверки победы (для бота) (остаётся без изменений)
        checkWinForBot(row, col, player) {
            const directions = [
                { dr: 0, dc: 1 },  // Горизонталь
                { dr: 1, dc: 0 },  // Вертикаль
                { dr: 1, dc: 1 },  // Диагональ /
                { dr: 1, dc: -1 }  // Диагональ \
            ];

            for (const { dr, dc } of directions) {
                let count = 1;
                // Проверяем в одном направлении
                let r = row + dr;
                let c = col + dc;
                while (r >= 0 && r < this.rows && c >= 0 && c < this.columns && this.board[r][c] === player) {
                    count++;
                    r += dr;
                    c += dc;
                }
                // Проверяем в противоположном направлении
                r = row - dr;
                c = col - dc;
                while (r >= 0 && r < this.rows && c >= 0 && c < this.columns && this.board[r][c] === player) {
                    count++;
                    r -= dr;
                    c -= dc;
                }
                if (count >= 4) {
                    return true;
                }
            }
            return false;
        }

        executeBotMove(row, col) {
            // Убираем жесткое присваивание this.board[row][col] = 2;
            // Используем текущего игрока (который является ботом)
            const isCurrentPlayerBot = Object.values(bots).some(bot => 
                bot.isActive && bot.id === this.currentPlayer
            );
            if (!isCurrentPlayerBot || this.winner !== 0) return;

            this.board[row][col] = this.currentPlayer; // Бот делает ход от своего имени
            this.movesCount++;
            this.updateBoard();
            if (this.checkWin(row, col)) { // Используем оригинальную проверку
                this.winner = this.currentPlayer; // Победитель - текущий (бот)
                
                // Обновляем счет бота. Нужно определить индекс.
                // Поскольку playerScores рассчитан на игроков 1-4, 
                // для бота с ID=2 (при 1 игроке) используем индекс 1.
                // Это работает для текущей простой логики.
                // Для более сложных случаев нужна отдельная структура счета.
                if (this.currentPlayer >= 1 && this.currentPlayer <= 4) {
                     playerScores[this.currentPlayer - 1]++; 
                } else {
                     console.warn(`Не удалось обновить счет для бота с ID ${this.currentPlayer}`);
                }
                this.showWinModal();
            } else if (this.movesCount === this.maxMoves) {
                this.showDrawModal();
            } else {
                this.nextPlayer(); // Передаем ход следующему игроку/боту
            }
        }

        updateBoard() {
            const cells = board.querySelectorAll('.cell');
            cells.forEach(cell => {
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);
                // Убираем все классы игроков и выигрышные
                cell.classList.remove('player1', 'player2', 'player3', 'player4', 'winning-cell');
                cell.textContent = ''; // Очищаем содержимое

                const playerNumber = this.board[row][col];
                if (playerNumber !== 0) {
                    // Добавляем класс соответствующего игрока
                    cell.classList.add(`player${playerNumber}`);

                    const bot = Object.values(bots).find(b => b.isActive && b.id === playerNumber);
                    if (bot){
                        cell.textContent = `${bot.symbol}`;
                    } else {

                        // --- ИЗМЕНЕНО: Определяем символ игрока ---
                        let playerSymbol = themeSymbols[currentTheme]; // По умолчанию
                        if (isCreativeMode && playerThemesInCreative[playerNumber]) {
                            // В творческом режиме используем уникальную тему игрока
                            playerSymbol = themeSymbols[playerThemesInCreative[playerNumber]] || themeSymbols['default'];
                        }
                        cell.textContent = playerSymbol; // Устанавливаем символ
                    }
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
                { dr: 0, dc: 1 },  // Горизонталь ↔
                { dr: 1, dc: 0 },  // Вертикаль  ↨
                { dr: 1, dc: 1 },  // Диагональ ↘
                { dr: 1, dc: -1 }  // Диагональ ↙
            ];
            for (const { dr, dc } of directions) {
                let count = 1;
                this.winningCells = [{ row, col }];
                // Проверяем в одном направлении
                let r = row + dr;
                let c = col + dc;
                while (r >= 0 && r < this.rows && c >= 0 && c < this.columns && this.board[r][c] === player) {
                    count++;
                    this.winningCells.push({ row: r, col: c });
                    r += dr;
                    c += dc;
                }
                // Проверяем в противоположном направлении
                r = row - dr;
                c = col - dc;
                while (r >= 0 && r < this.rows && c >= 0 && c < this.columns && this.board[r][c] === player) {
                    count++;
                    this.winningCells.push({ row: r, col: c });
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
            // Сначала определяем всех участников игры (игроки + активные боты)
            const allPlayersAndBots = [];

            // Добавляем обычных игроков
            for (let i = 1; i <= this.players; i++) {
                allPlayersAndBots.push(i);
            }

            // Добавляем активных ботов
            Object.values(bots).forEach(bot => {
                if (bot.isActive) {
                    allPlayersAndBots.push(bot.id);
                }
            });

            // Сортируем по ID для определения порядка хода
            allPlayersAndBots.sort((a, b) => a - b);

            // Находим индекс текущего игрока в этом списке
            const currentIndex = allPlayersAndBots.indexOf(this.currentPlayer);

            if (currentIndex !== -1) {
                // Переходим к следующему игроку/боту по кругу
                const nextIndex = (currentIndex + 1) % allPlayersAndBots.length;
                this.currentPlayer = allPlayersAndBots[nextIndex];
            } else {
                // На случай, если что-то пошло не так, возвращаемся к игроку 1
                this.currentPlayer = 1;
            }

            this.updateStatus();
            // Обновляем выделение текущего игрока
            document.querySelectorAll('.player').forEach(playerElement => {
                // --- ИЗМЕНЕНО: Обновление выделения с учетом ботов ---
                // Получаем ID из id элемента (player1, player2, bot3 и т.д.)
                const elementId = playerElement.id;
                let elementPlayerId;

                if (elementId.startsWith('player')) {
                    elementPlayerId = parseInt(elementId.replace('player', ''));
                } else if (elementId.startsWith('bot')) {
                    elementPlayerId = parseInt(elementId.replace('bot', ''));
                }

                if (elementPlayerId === this.currentPlayer) {
                    playerElement.classList.add('current-turn');
                    playerElement.classList.remove('winner', 'loser');
                } else {
                    playerElement.classList.remove('current-turn');
                }
            });

            // --- НОВОЕ: Проверка, не ходит ли теперь бот ---
            const isCurrentPlayerBot = Object.values(bots).some(bot => 
                bot.isActive && bot.id === this.currentPlayer
            );
            
            if (isCurrentPlayerBot && this.winner === 0) {
                setTimeout(() => {
                    this.makeBotMove();
                }, 500);
            } else {
                console.log("nextPlayer: Ход человека или игра окончена"); // Отладка
            }
        }

        updateStatus() {
            const isCurrentPlayerBot = Object.values(bots).some(bot => 
                bot.isActive && bot.id === this.currentPlayer
            );
            
            if (isCurrentPlayerBot) {
                const botName = Object.values(bots).find(b => b.id === this.currentPlayer)?.name || 'Бот'

                status.textContent = t('statusBotTurn', {botName : botName});
            } else {
                const playerName = playerNicknames[this.currentPlayer] || t('playerName', {number: this.currentPlayer})
                status.textContent = t('statusTurn', {playerName : playerName});
            }
        }

        showWinModal() {
            winMessage.textContent = t('winModalTitle');
            const winnerBot = Object.values(bots).find(bot => bot.id === this.winner);
            
            if (winnerBot) {
                winDescription.textContent = t('winDescriptionBot', {winnerBot: winnerBot.name}) //`${winnerBot.name} выиграл!`;
            } else {
                const winnerName = playerNicknames[this.winner] || t('playerName', {number: this.winner})
                winDescription.textContent = t('winDescriptionPlayer', {winnerName: winnerName}) //`${playerNicknames[this.winner] || `Игрок ${this.winner}`} победил!`;
            }

            winModal.style.display = 'flex';
            // Помечаем выигрышные ячейки
            this.updateBoard();

            // --- ИЗМЕНЕНО: Устанавливаем lastLoser сразу после победы ---
            // Определяем проигравшего для следующей игры
            if (this.players === 1) {
                // Если 1 игрок, проигравший - это он сам? Или следующий по порядку?
                // В контексте "ходит проигравший", если он выиграл, возможно, 
                // следующий по порядку ходит первым. Но если он выиграл, он не проигравший.
                // Проще всего сбросить, чтобы начинал Игрок 1.
                // ИЛИ, если бот участвовал, проигравший - бот, если победил человек, и наоборот.
                // Предположим, в режиме "1 игрок" бот всегда есть (ID=2).
                // Если победил игрок 1, проигравший - бот (2). Если победил бот (2), проигравший - игрок (1).
                // Нужно проверить, есть ли активный бот.
                const activeBots = Object.values(bots).filter(bot => bot.isActive);
                if (activeBots.length > 0) {
                    // Предполагаем игру "1 игрок против бота"
                    lastLoser = this.winner === 1 ? activeBots[0].id : 1;
                } else {
                    // Нет бота, сбросим
                    lastLoser = null; 
                }
            } else if (this.players === 2) {
                // Для 2 игроков проигравший - тот, кто не выиграл
                lastLoser = this.winner === 1 ? 2 : 1;
            } else {
                // Для 3+ игроков, логика сложнее. 
                // Можно считать "проигравшим" следующего по порядку, или сбросить.
                // Пока сбросим, как в оригинале.
                lastLoser = null; 
            }
            console.log(`Победитель: ${this.winner}, Проигравший (для следующей игры): ${lastLoser}`); // Для отладки
            // --- КОНЕЦ ИЗМЕНЕНИЙ ---

            // --- НОВОЕ: Меняем цвета игроков на противоположные (если игроков >= 2) ---
            if (this.players >= 2) {
                // Создаем временную копию массива цветов
                const tempColors = [...playerColors];

                // Меняем цвета: победитель получает цвет проигравшего, проигравший - цвет победителя
                // Для простоты, обмениваем цвета первого и второго игрока.
                // Для 3+ игроков логика может быть сложнее, например, все получают цвет следующего.
                // Здесь реализована логика: цвета игроков сдвигаются влево (1->2, 2->3, 3->4, 4->1)
                if (this.players === 2) {
                     // Для 2 игроков просто меняем местами
                     // lastLoser уже установлен выше
                     playerColors[0] = tempColors[1];
                     playerColors[1] = tempColors[0];
                } else {
                    // Для 3+ игроков: сдвигаем влево
                    for (let i = 0; i < this.players; i++) {
                        const nextIndex = (i + 1) % this.players;
                        playerColors[i] = tempColors[nextIndex];
                    }
                    // lastLoser уже сброшен в null выше
                }

                // Обновляем CSS переменные
                for (let i = 0; i < this.players; i++) {
                    document.documentElement.style.setProperty(`--player${i + 1}`, playerColors[i]);
                }

                // Обновляем цвета в интерфейсе игроков
                document.querySelectorAll('.player').forEach((player, index) => {
                    if (index + 1 === this.winner) {
                        player.classList.add('winner');
                    } else {
                        player.classList.add('loser');
                    }
                });

                // Обновляем цвета в счете
                document.querySelectorAll('.score-item').forEach((scoreItem, index) => {
                    const playerColorElement = scoreItem.querySelector('.player-color');
                    if (playerColorElement && index < this.players) {
                        // Используем рабочую копию цветов
                        playerColorElement.style.backgroundColor = playerColors[index];
                    }
                });
            }
        }

        showDrawModal() {
            drawModal.style.display = 'flex';
            lastLoser = null;
        }

        restartGame() {
            this.initGame();
        }

        getPlayerInfo(playerId){
            if (playerId >= 1 && playerId <= this.players){
                return {
                    id: playerId,
                    name: playerNicknames[playerId] || `Игрок ${playerId}`,
                    symbol: isCreativeMode && playerThemesInCreative[playerId] ?
                    themeSymbols[playerThemesInCreative[playerId]] : themeSymbols[currentTheme],
                    color: playerColors[playerId - 1] || "#000000",
                    isBot: false
                };
            }

            return null;
        }
    }
});

function updateGameLanguage() {
    console.log("Обновление языка интерфейса игры...");
    
    // 1. Если игра запущена, обновляем динамические элементы
    if (window.game) {
        // a. Обновляем статус игры
        window.game.updateStatus(); 
        console.log("  - Статус обновлен");

        // b. Обновляем имена игроков и ботов в панелях game-info и score-board
        window.game.createPlayersUI();
        window.game.createScoreBoard();
        console.log("  - Информация об игроках и счет обновлены");

        // c. Обновляем текст в модальном окне победы, если оно открыто
        const winModalElement = document.getElementById('winModal');
        if (winModalElement && winModalElement.style.display !== 'none') {
            console.log("  - Обновление модального окна победы");
            // Получаем элементы внутри модального окна
            const winMsgEl = document.getElementById('winMessage'); // Заголовок "Победа!"
            // winDescription обновляется динамически в showWinModal, но мы можем обновить заголовок
            const playAgainBtnEl = document.getElementById('playAgainBtn');
            const backToMainBtnEl = document.getElementById('backToMainFromWin');

            // Обновляем статический текст
            if (winMsgEl) {
                winMsgEl.textContent = t('modals.win.title'); // "Победа!" / "Victory!"
            }
            if (playAgainBtnEl) {
                playAgainBtnEl.textContent = t('PlayAgainBtn'); // "Играть снова" / "Play Again"
            }
            if (backToMainBtnEl) {
                backToMainBtnEl.textContent = t('BackToMainFromWin'); // "Назад в меню" / "Back to Menu"
            }
            
            // Текст описания победителя (например, "Игрок 1 победил!") обновляется
            // динамически внутри game.showWinModal() или при вызове этого метода.
            // Если вы хотите обновить его немедленно, не закрывая модалку,
            // вам нужно знать, кто победил (window.game.winner) и тип победителя (игрок/бот).
            // Это сложнее, так как требует повторного формирования сообщения.
            // Проще всего пересоздать сообщение, вызвав showWinModal снова, 
            // но это может быть не идеально, если модалка анимирована.
            // Альтернатива: хранить состояние победителя и обновлять описание отдельно.
            // Пока оставим динамическое обновление на момент вызова showWinModal.
            // Но если игра уже закончена, можно обновить описание:
            if (window.game.winner) {
                 const winDescEl = document.getElementById('winDescription');
                 if (winDescEl) {
                     // Повторяем логику из showWinModal для формирования текста
                     const winnerBot = Object.values(window.bots || {}).find(bot => bot.id === window.game.winner);
                     if (winnerBot) {
                         winDescEl.textContent = t('modals.win.description_bot', { winnerName: winnerBot.name });
                     } else {
                         // Предполагаем, что playerNicknames доступен глобально или через window.game
                         const winnerName = (window.playerNicknames && window.playerNicknames[window.game.winner]) || 
                                            t('game.player', { number: window.game.winner });
                         winDescEl.textContent = t('modals.win.description_player', { winnerName: winnerName });
                     }
                 }
            }
        }

        // d. Обновляем текст в модальном окне ничьей, если оно открыто
        const drawModalElement = document.getElementById('drawModal');
        if (drawModalElement && drawModalElement.style.display !== 'none') {
             console.log("  - Обновление модального окна ничьей");
             // В текущем HTML у <h2> и <p> нет id, добавим их в HTML или найдем по тегу/позиции
             // Предположим, вы добавили id="drawModalTitle" и id="drawModalDescription"
             const drawTitleEl = document.getElementById('drawModalTitle'); // <h2>
             const drawDescEl = document.getElementById('drawModalDescription'); // <p>
             const playAgainDrawBtnEl = document.getElementById('playAgainAfterDrawBtn');
             const backToMainDrawBtnEl = document.getElementById('backToMainAfterDrawBtn');

             if (drawTitleEl) {
                 drawTitleEl.textContent = t('modals.draw.title'); // "Ничья!" / "Draw!"
             }
             if (drawDescEl) {
                 drawDescEl.textContent = t('modals.draw.description'); // "Все ячейки..."
             }
             if (playAgainDrawBtnEl) {
                 playAgainDrawBtnEl.textContent = t('playAgainAfterDrawBtn'); // "Играть снова"
             }
             if (backToMainDrawBtnEl) {
                 backToMainDrawBtnEl.textContent = t('backToMainAfterDrawBtn'); // "Назад в меню"
             }
        }
    } else {
        console.log("  - Игра не запущена, обновление только статических элементов");
    }

    // 2. Обновляем статические текстовые элементы на странице (кнопки, заголовки и т.д.)
    // Предполагается, что функция applyTranslations() уже существует и делает это.
    // Если она не глобальная или не была вызвана, можно вызвать её здесь.
    // applyTranslations(); // Убедитесь, что эта функция доступна
    console.log("  - Статические элементы обновлены (предполагается вызов applyTranslations)");
}
// Делаем функцию доступной глобально, если она еще не такая
window.updateGameLanguage = updateGameLanguage;