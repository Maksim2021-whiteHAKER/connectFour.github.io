// scripts/logic.js 
import { logicSlider, sliderLanguages, flagImages, updateVersionDisplay } from "./translations.js";
import { GAME_CONFIG } from './config.js'

const availableThemes = GAME_CONFIG.themes;
const availableColors = GAME_CONFIG.colors;

document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
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
    logicSlider();
    console.log("Слайдер языков инициализирован.");

    console.log('Применение перевода')
    applyTranslations()
    updateVersionDisplay()

    console.log('Перевод применён')
    let originalPlayerColors = ['#ff0000', '#f1c40f', '#1ca9c9', '#00fa91'];
    let playerColors = [...originalPlayerColors];

    // Добавляем параметр playerNumber для определения, какая тема должна быть выбрана
    function populateThemeOptions(containerSelector, playerNumber = null) {
        const container = document.querySelector(containerSelector);
        if (!container) return;
        container.innerHTML = ''; // Очищаем существующие опции

        // Определяем, какая тема должна быть выбрана для этого игрока
        let selectedThemeKey = 'default'; // По умолчанию
        if (playerNumber !== null && playerThemesInCreative[playerNumber]) {
            selectedThemeKey = playerThemesInCreative[playerNumber];
        }

        availableThemes.forEach(theme => {
            const themeDiv = document.createElement('div');
            themeDiv.className = 'theme-option';
            // Добавляем класс 'selected', если это текущая тема игрока или тема по умолчанию (если у игрока тема не задана)
            if (theme.key === selectedThemeKey) {
                themeDiv.classList.add('selected');
            }
            themeDiv.dataset.theme = theme.key;
            themeDiv.textContent = theme.symbol;
            // Добавить title с названием темы, если нужно
            // themeDiv.title = t(`theme_${theme.key}`) || theme.key; // Предполагается функция перевода t
            container.appendChild(themeDiv);
        });
    }

    // Добавляем параметр playerNumber для определения, какой цвет должен быть выбран
    function populateColorOptions(containerSelector, playerNumber) {
        const container = document.querySelector(containerSelector);
        if (!container) return;
        container.innerHTML = ''; // Очищаем существующие опции

        // Определяем, какой цвет должен быть выбран для этого игрока
        const selectedColorCode = playerColors[playerNumber - 1]; // playerColors[0] для игрока 1 и т.д.

        availableColors.forEach(color => {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'color-option';
            // Добавляем класс 'selected', если это текущий цвет игрока
            if (selectedColorCode && color.code === selectedColorCode) {
                colorDiv.classList.add('selected');
            }
            colorDiv.style.backgroundColor = color.code;
            colorDiv.dataset.color = color.code;
            // Для модального окна настройки игрока data-player не нужен
            container.appendChild(colorDiv);
        });
    }

    populateThemeOptions('#customizationPanel .theme-options');

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

    // Единое модальное окно для настроек игроков
    const playerSettingsModal = document.getElementById('playerSettingsModal');
    const playerModalTitle = document.getElementById('playerModalTitle');
    const playerNicknameInput = document.getElementById('playerNickname');
    const playerSaveBtn = document.getElementById('playerSaveBtn');

    // Проверяем, что элементы существуют
    if (!playerSettingsModal || !playerModalTitle || !playerNicknameInput || !playerSaveBtn) {
        console.log(`1:${!!playerSettingsModal}, 2: ${!!playerModalTitle}, 3: ${!!playerNicknameInput}, 4: ${!!playerSaveBtn}`)
        console.error('Не найдены элементы модального окна настроек игрока')
    };

    let currentPlayerBeingConfigured = 0; // Текущий игрок, настройки которого редактируются

    function toggleButtonsMenu(hide, callback) {
        const buttonsMenu = document.querySelector('.buttons-menu');
        if (!buttonsMenu) {
            console.warn('Элемент .buttons-menu не найден');
            if (callback && typeof callback === 'function') callback();
            return;
        }
    
        if (hide) {
            buttonsMenu.classList.add('fade-transition');
            setTimeout(() => {
                if (callback && typeof callback === 'function') callback();
            }, 400);
        } else {
            buttonsMenu.classList.remove('fade-transition');
            requestAnimationFrame(() => {
                 setTimeout(() => {
                     if (callback && typeof callback === 'function') callback();
                 }, 0);
            });
        }
    }

    // Переменные игры
    let game;
    let playerScores = [0, 0, 0, 0];
    let currentTheme = 'default';
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

    let bots = {};

    const themeSymbols = {
        'default': '●',
        'skull': '💀',
        'hearts': '❤',
        'turtles': '🐢',
        'stars': '★',
        'squares': '■',
        'sun': '☀',
        'moon': '🌙'
    };
    const creativeModeThemes = ['default', 'skull', 'hearts', 'turtles', 'stars', 'squares'];
    let isCreativeMode = false;
    let playerThemesInCreative = {}; 

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
        
        isCreativeMode = true;
        
        // Открываем модальные окна для настройки игроков
        openPlayerModals(players);
    });

    saveCustomizationBtn.addEventListener('click', () => {
        // Сохранение выбранной темы (для обычного режима)
        const selectedTheme = document.querySelector('.theme-option.selected');
        if (selectedTheme) {
            currentTheme = selectedTheme.dataset.theme;
        }
        // Сохраняем оригинальные цвета
        document.querySelectorAll('.color-option.selected').forEach(option => {
            const playerIndex = parseInt(option.dataset.player) - 1;
            originalPlayerColors[playerIndex] = option.dataset.color;
            playerColors[playerIndex] = option.dataset.color;
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

        if (game.players === 2 && (gameMode === 'single' || gameMode === 'test')) {
            const botId = game.players + 1;
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
            if (playerNum) {
                document.querySelectorAll(`.color-option[data-player="${playerNum}"]`).forEach(opt => {
                    opt.classList.remove('selected');
                });
            }
            option.classList.add('selected');
        });
    });

    // Обработчики для модального окна игрока
    playerSaveBtn.addEventListener('click', (e) => {
        const playerNumber = currentPlayerBeingConfigured;
        
        // Сохраняем никнейм
        if (playerNicknameInput.value.trim() !== ''){
            playerNicknames[playerNumber] = playerNicknameInput.value.trim();
        } else {
            playerNicknames[playerNumber] = `${t('defaultNamePlayer')} ${playerNumber}`;
        }

        playerNicknameInput.value = ''; // сброс имени 
        
        // Сохраняем настройки игрока
        const selectedTheme = playerSettingsModal.querySelector('.player-theme-options .theme-option.selected');
        const selectedColor = playerSettingsModal.querySelector('.player-color-options .color-option.selected');
        
        if (selectedTheme) {
            playerThemesInCreative[playerNumber] = selectedTheme.dataset.theme;
        }
        
        if (selectedColor) {
            playerColors[playerNumber - 1] = selectedColor.dataset.color;
            document.documentElement.style.setProperty(`--player${playerNumber}`, selectedColor.dataset.color);
        }
        
        // Закрываем модальное окно
        playerSettingsModal.style.display = 'none';
        
        // Проверяем, все ли игроки настроены
        const players = parseInt(document.getElementById('players').value);
        if (currentPlayerBeingConfigured < players) {
            // Переходим к следующему игроку
            currentPlayerBeingConfigured++;
            showPlayerModal(currentPlayerBeingConfigured);
        } else {
            // Все игроки настроены, начинаем игру
            const rows = parseInt(document.getElementById('rows').value);
            const columns = parseInt(document.getElementById('columns').value);
            startGame(rows, columns, players);
        }
    });

    // Обработчики выбора темы и цвета в модальном окне игрока
    playerSettingsModal.querySelectorAll('.player-theme-options .theme-option').forEach(option => {
        option.addEventListener('click', () => {
            playerSettingsModal.querySelectorAll('.player-theme-options .theme-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            option.classList.add('selected');
        });
    });

    playerSettingsModal.querySelectorAll('.player-color-options .color-option').forEach(option => {
        option.addEventListener('click', () => {
            playerSettingsModal.querySelectorAll('.player-color-options .color-option').forEach(opt => {
                opt.classList.remove('selected');
            });
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
        // Закрываем модальное окно настроек игрока
        playerSettingsModal.style.display = 'none';
        mainMenu.style.display = 'flex';
        toggleButtonsMenu(false);
        playerColors = [...originalPlayerColors];
        for (let i = 0; i < originalPlayerColors.length; i++) {
            document.documentElement.style.setProperty(`--player${i + 1}`, playerColors[i]);
        }
        playerScores = [0, 0, 0, 0];
        playerThemesInCreative = {};
        bots = {};
    }

    // Функция начала игры
    function startGame(rows, columns, players) {
        mainMenu.style.display = 'none';
        creativeSettings.style.display = 'none';
        customizationPanel.style.display = 'none';
        playerSettingsModal.style.display = 'none';
        container.style.display = 'flex';
        playerColors = [...originalPlayerColors];

        bots = {};

        if ((gameMode === 'single' || gameMode === 'test') && players === 1) {
            const botId = players + 1; 
            bots[botId] = {
                id: botId,
                name: "Бот",
                symbol: symbolBot,
                color: "#808080",
                isActive: true,
            };
            console.log("StartGAME: Бот добавлен:", bots[botId]);
        } else {
            console.log("StartGame Бот не добавлен:");
        }

        game = new ConnectFourGame(rows, columns, players);
    }

    // Функция для открытия модальных окон игроков
    function openPlayerModals(playersCount) {
        currentPlayerBeingConfigured = 1;
        showPlayerModal(currentPlayerBeingConfigured);
    }

    // Функция для отображения модального окна для конкретного игрока
    function showPlayerModal(playerNumber) {
        // ... (проверки и установка заголовка)

        // Очищаем и заполняем опции тем и цветов для текущего игрока
        populateThemeOptions('#playerSettingsModal .player-theme-options');
        populateColorOptions('#playerSettingsModal .player-color-options', playerNumber); // Передаем playerNumber

        // --- НОВОЕ: Назначаем обработчики событий клика для ВНОВЬ СОЗДАННЫХ элементов ---
        const modalContent = playerSettingsModal; // Или document.getElementById('playerSettingsModal'); если playerSettingsModal не определен в этой области видимости

        // Обработчики выбора темы внутри модального окна
        modalContent.querySelectorAll('.player-theme-options .theme-option').forEach(option => {
            option.addEventListener('click', () => {
                // Убираем выделение у всех тем в этом модальном окне
                modalContent.querySelectorAll('.player-theme-options .theme-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                // Выделяем выбранную тему
                option.classList.add('selected');
            });
        });

        // Обработчики выбора цвета внутри модального окна
        modalContent.querySelectorAll('.player-color-options .color-option').forEach(option => {
            option.addEventListener('click', () => {
                // Убираем выделение у всех цветов в этом модальном окне
                modalContent.querySelectorAll('.player-color-options .color-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                // Выделяем выбранный цвет
                option.classList.add('selected');
            });
        });

        // ПОЯСНЕНИЕ: Теперь мы выделяем элементы, у которых уже есть обработчики
        if (playerThemesInCreative[playerNumber]) {
            const currentThemeOption = playerSettingsModal.querySelector(`.player-theme-options .theme-option[data-theme="${playerThemesInCreative[playerNumber]}"]`);
            if (currentThemeOption) {
                currentThemeOption.classList.add('selected');
            }
        } else {
            // Выделяем тему по умолчанию
            const defaultThemeOption = playerSettingsModal.querySelector('.player-theme-options .theme-option[data-theme="default"]');
            if (defaultThemeOption) {
                defaultThemeOption.classList.add('selected');
            }
        }

        // Выделяем текущий цвет игрока, если он есть (код остался прежним)
        const currentColor = playerColors[playerNumber - 1];
        if (currentColor) {
            const currentColorOption = playerSettingsModal.querySelector(`.player-color-options .color-option[data-color="${currentColor}"]`);
            if (currentColorOption) {
                currentColorOption.classList.add('selected');
            }
        }

        // Показываем модальное окно
        playerSettingsModal.style.display = 'flex';
    }

    // Функция для генерации меток строк
    function generateRowLabels(numRows) {
        const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
        const labels = [];
        for (let i = 0; i < numRows; i++) {
            const indexFromBottom = numRows - 1 - i;

            if (indexFromBottom < letters.length) {
                labels.push(letters[indexFromBottom]);
            } else {
                let label = '';
                let tempIndex = indexFromBottom;
                while (tempIndex >= 0) {
                    label = letters[tempIndex % letters.length] + label;
                    tempIndex = Math.floor(tempIndex / letters.length) - 1;
                    if (tempIndex < 0) break;
                }
                labels.push(label || 'А');
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
            this.winner = 0;
            this.board = [];
            this.winningCells = [];
            this.movesCount = 0;
            this.maxMoves = rows * columns;
            this.initGame();
        }

        initGame() {
            this.board = Array(this.rows).fill(null).map(() => Array(this.columns).fill(0));

            const activeBotsIds = Object.values(bots).filter(bot => bot.isActive).map(bot => bot.id);
            const allParticipantIds = [...Array(this.players).keys()].map(i => i + 1).concat(activeBotsIds);

            let isFirstPlayerDetermined = false;

            if (lastLoser !== null && allParticipantIds.includes(lastLoser)) {
                this.currentPlayer = lastLoser;
                console.log(`Первым ходит проигравший: ${lastLoser}`);
                isFirstPlayerDetermined = true;
            }

            if (!isFirstPlayerDetermined) {
                 this.currentPlayer = 1;
                 if (lastLoser === null) {
                     console.log("Первым ходит Игрок 1 по умолчанию (lastLoser=null)");
                 } else {
                     console.log(`Первым ходит Игрок 1 по умолчанию (lastLoser=${lastLoser} не участвует в этой игре)`);
                 }
            }

            this.winner = 0;
            this.winningCells = [];
            this.movesCount = 0;

            this.createPlayersUI();
            this.createScoreBoard();
            this.createColumnNumbers();
            this.createRowLetters();
            this.createBoard();
            this.updateStatus();

            status.textContent = t('status')

            const isCurrentPlayerBot = Object.values(bots).some(bot =>
                bot.isActive && bot.id === this.currentPlayer
            );
            console.log(`initGame: currentPlayer=${this.currentPlayer}, isBot=${isCurrentPlayerBot}`);
            if (isCurrentPlayerBot && this.winner === 0) {
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
                let playerSymbol = themeSymbols[currentTheme];
                if (isCreativeMode && playerThemesInCreative[i]) {
                    playerSymbol = themeSymbols[playerThemesInCreative[i]] || themeSymbols['default'];
                }
                playerElement.innerHTML = `
                    <div class="player-color"></div>
                    <span>${playerNicknames[i] || `Игрок ${i}`} ${playerSymbol}</span>
                `;
                gameInfo.appendChild(playerElement);
            }

             Object.values(bots).forEach(bot => {
                if (bot.isActive) {
                    const botElement = document.createElement('div');
                    botElement.className = `player bot`;
                    botElement.id = `bot${bot.id}`;
                    
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
                let playerSymbol = themeSymbols[currentTheme];
                if (isCreativeMode && playerThemesInCreative[i]) {
                    playerSymbol = themeSymbols[playerThemesInCreative[i]] || themeSymbols['default'];
                }
                scoreItem.innerHTML = `
                    <div class="player-color" style="background-color: ${playerColors[i-1]}"></div>
                    <span>${playerSymbol} ${playerNicknames[i] || `Игрок ${i}`}: ${playerScores[i-1]}</span>`;
                scoreBoard.appendChild(scoreItem);
            }

            Object.values(bots).forEach(bot => {
                if (bot.isActive) {
                    const scoreItem = document.createElement('div');
                    scoreItem.className = 'score-item bot-score';
                    const botScoreIndex = bot.id - 1;
                    scoreItem.innerHTML = `
                        <div class="player-color" style="background-color: ${bot.color};"></div>
                        <span>${bot.symbol} ${bot.name}: ${playerScores[botScoreIndex] || 0}</span>`;
                    scoreBoard.appendChild(scoreItem);
                }
            });
        }

        createColumnNumbers() {
            columnNumbers.innerHTML = '';
            const empty = document.createElement('div');
            empty.style.width = '25px';
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
            const isCurrentPlayerBot = Object.values(bots).some(bot => 
                bot.isActive && bot.id === this.currentPlayer
            );
            
            if (this.winner !== 0 || isCurrentPlayerBot) {
                return;
            }

            for (let row = this.rows - 1; row >= 0; row--) {
                if (this.board[row][column] === 0) {
                    this.board[row][column] = this.currentPlayer;
                    this.movesCount++;
                    this.updateBoard();
                    if (this.checkWin(row, column)) {
                        this.winner = this.currentPlayer;
                        if (this.currentPlayer >= 1 && this.currentPlayer <= maxPlayers){
                            playerScores[this.currentPlayer - 1]++;
                        } else {
                            console.warn(`Не удалось обновить счет для игрока/бота с ID ${this.currentPlayer}`);
                        }
                        this.showWinModal();
                    } else if (this.movesCount === this.maxMoves) {
                        this.showDrawModal();
                    } else {
                        this.nextPlayer();
                    }
                    return;
                }
            }
            status.textContent = 'Эта колонка заполнена!';
            setTimeout(() => this.updateStatus(), 1500);
        }

        makeBotMove() {
            const isCurrentPlayerBot = Object.values(bots).some(bot => 
                bot.isActive && bot.id === this.currentPlayer
            );

            if (!isCurrentPlayerBot || this.winner !== 0) return;

            for (let col = 0; col < this.columns; col++) {
                const row = this.getLowestEmptyRow(col);
                if (row !== -1) {
                    this.board[row][col] = this.currentPlayer;
                    if (this.checkWinForBot(row, col, this.currentPlayer)) {
                        this.board[row][col] = 0;
                        this.executeBotMove(row, col);
                        return;
                    }
                    this.board[row][col] = 0;
                }
            }

            let humanPlayerId = 1;
            for (let i = 1; i <= this.players; i++) {
                if (!Object.values(bots).some(bot => bot.id === i)) {
                    humanPlayerId = i;
                    break;
                }
            }
            
            for (let col = 0; col < this.columns; col++) {
                const row = this.getLowestEmptyRow(col);
                if (row !== -1) {
                    this.board[row][col] = humanPlayerId;
                    if (this.checkWinForBot(row, col, humanPlayerId)) {
                        this.board[row][col] = 0;
                        this.executeBotMove(row, col);
                        return;
                    }
                    this.board[row][col] = 0;
                }
            }

            const availableColumns = [];
            for (let col = 0; col < this.columns; col++) {
                if (this.getLowestEmptyRow(col) !== -1) {
                    availableColumns.push(col);
                }
            }

            if (availableColumns.length > 0) {
                const randomCol = availableColumns[Math.floor(Math.random() * availableColumns.length)];
                const row = this.getLowestEmptyRow(randomCol);
                this.executeBotMove(row, randomCol);
            }
        }

        getLowestEmptyRow(column) {
            for (let row = this.rows - 1; row >= 0; row--) {
                if (this.board[row][column] === 0) {
                    return row;
                }
            }
            return -1;
        }

        checkWinForBot(row, col, player) {
            const directions = [
                { dr: 0, dc: 1 },
                { dr: 1, dc: 0 },
                { dr: 1, dc: 1 },
                { dr: 1, dc: -1 }
            ];

            for (const { dr, dc } of directions) {
                let count = 1;
                let r = row + dr;
                let c = col + dc;
                while (r >= 0 && r < this.rows && c >= 0 && c < this.columns && this.board[r][c] === player) {
                    count++;
                    r += dr;
                    c += dc;
                }
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
            const isCurrentPlayerBot = Object.values(bots).some(bot => 
                bot.isActive && bot.id === this.currentPlayer
            );
            if (!isCurrentPlayerBot || this.winner !== 0) return;

            this.board[row][col] = this.currentPlayer;
            this.movesCount++;
            this.updateBoard();
            if (this.checkWin(row, col)) {
                this.winner = this.currentPlayer;
                if (this.currentPlayer >= 1 && this.currentPlayer <= 4) {
                     playerScores[this.currentPlayer - 1]++; 
                } else {
                     console.warn(`Не удалось обновить счет для бота с ID ${this.currentPlayer}`);
                }
                this.showWinModal();
            } else if (this.movesCount === this.maxMoves) {
                this.showDrawModal();
            } else {
                this.nextPlayer();
            }
        }

        updateBoard() {
            const cells = board.querySelectorAll('.cell');
            cells.forEach(cell => {
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);
                cell.classList.remove('player1', 'player2', 'player3', 'player4', 'winning-cell');
                cell.textContent = '';

                const playerNumber = this.board[row][col];
                if (playerNumber !== 0) {
                    cell.classList.add(`player${playerNumber}`);

                    const bot = Object.values(bots).find(b => b.isActive && b.id === playerNumber);
                    if (bot){
                        cell.textContent = `${bot.symbol}`;
                    } else {
                        let playerSymbol = themeSymbols[currentTheme];
                        if (isCreativeMode && playerThemesInCreative[playerNumber]) {
                            playerSymbol = themeSymbols[playerThemesInCreative[playerNumber]] || themeSymbols['default'];
                        }
                        cell.textContent = playerSymbol;
                    }
                }

                if (this.winningCells.some(c => c.row === row && c.col === col)) {
                    cell.classList.add('winning-cell');
                }
            });
        }

        checkWin(row, col) {
            const player = this.board[row][col];
            const directions = [
                { dr: 0, dc: 1 },
                { dr: 1, dc: 0 },
                { dr: 1, dc: 1 },
                { dr: 1, dc: -1 }
            ];
            for (const { dr, dc } of directions) {
                let count = 1;
                this.winningCells = [{ row, col }];
                let r = row + dr;
                let c = col + dc;
                while (r >= 0 && r < this.rows && c >= 0 && c < this.columns && this.board[r][c] === player) {
                    count++;
                    this.winningCells.push({ row: r, col: c });
                    r += dr;
                    c += dc;
                }
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
            const allPlayersAndBots = [];
            for (let i = 1; i <= this.players; i++) {
                allPlayersAndBots.push(i);
            }
            Object.values(bots).forEach(bot => {
                if (bot.isActive) {
                    allPlayersAndBots.push(bot.id);
                }
            });
            allPlayersAndBots.sort((a, b) => a - b);
            const currentIndex = allPlayersAndBots.indexOf(this.currentPlayer);
            if (currentIndex !== -1) {
                const nextIndex = (currentIndex + 1) % allPlayersAndBots.length;
                this.currentPlayer = allPlayersAndBots[nextIndex];
            } else {
                this.currentPlayer = 1;
            }

            this.updateStatus();
            document.querySelectorAll('.player').forEach(playerElement => {
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

            const isCurrentPlayerBot = Object.values(bots).some(bot => 
                bot.isActive && bot.id === this.currentPlayer
            );
            
            if (isCurrentPlayerBot && this.winner === 0) {
                setTimeout(() => {
                    this.makeBotMove();
                }, 500);
            } else {
                console.log("nextPlayer: Ход человека или игра окончена");
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
                winDescription.textContent = t('winDescriptionBot', {winnerBot: winnerBot.name})
            } else {
                const winnerName = playerNicknames[this.winner] || t('playerName', {number: this.winner})
                winDescription.textContent = t('winDescriptionPlayer', {winnerName: winnerName})
            }

            winModal.style.display = 'flex';
            this.updateBoard();

            if (this.players === 1) {
                const activeBots = Object.values(bots).filter(bot => bot.isActive);
                if (activeBots.length > 0) {
                    lastLoser = this.winner === 1 ? activeBots[0].id : 1;
                } else {
                    lastLoser = null; 
                }
            } else if (this.players === 2) {
                lastLoser = this.winner === 1 ? 2 : 1;
            } else {
                lastLoser = null; 
            }
            console.log(`Победитель: ${this.winner}, Проигравший (для следующей игры): ${lastLoser}`);

            if (this.players >= 2) {
                const tempColors = [...playerColors];
                if (this.players === 2) {
                     playerColors[0] = tempColors[1];
                     playerColors[1] = tempColors[0];
                } else {
                    for (let i = 0; i < this.players; i++) {
                        const nextIndex = (i + 1) % this.players;
                        playerColors[i] = tempColors[nextIndex];
                    }
                }
                for (let i = 0; i < this.players; i++) {
                    document.documentElement.style.setProperty(`--player${i + 1}`, playerColors[i]);
                }
                document.querySelectorAll('.player').forEach((player, index) => {
                    if (index + 1 === this.winner) {
                        player.classList.add('winner');
                    } else {
                        player.classList.add('loser');
                    }
                });
                document.querySelectorAll('.score-item').forEach((scoreItem, index) => {
                    const playerColorElement = scoreItem.querySelector('.player-color');
                    if (playerColorElement && index < this.players) {
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
    
    if (window.game) {
        window.game.updateStatus(); 
        console.log("  - Статус обновлен");
        window.game.createPlayersUI();
        window.game.createScoreBoard();
        console.log("  - Информация об игроках и счет обновлены");

        const winModalElement = document.getElementById('winModal');
        if (winModalElement && winModalElement.style.display !== 'none') {
            console.log("  - Обновление модального окна победы");
            const winMsgEl = document.getElementById('winMessage');
            const playAgainBtnEl = document.getElementById('playAgainBtn');
            const backToMainBtnEl = document.getElementById('backToMainFromWin');

            if (winMsgEl) {
                winMsgEl.textContent = t('modals.win.title');
            }
            if (playAgainBtnEl) {
                playAgainBtnEl.textContent = t('PlayAgainBtn');
            }
            if (backToMainBtnEl) {
                backToMainBtnEl.textContent = t('BackToMainFromWin');
            }
            
            if (window.game.winner) {
                 const winDescEl = document.getElementById('winDescription');
                 if (winDescEl) {
                     const winnerBot = Object.values(window.bots || {}).find(bot => bot.id === window.game.winner);
                     if (winnerBot) {
                         winDescEl.textContent = t('modals.win.description_bot', { winnerName: winnerBot.name });
                     } else {
                         const winnerName = (window.playerNicknames && window.playerNicknames[window.game.winner]) || 
                                            t('game.player', { number: window.game.winner });
                         winDescEl.textContent = t('modals.win.description_player', { winnerName: winnerName });
                     }
                 }
            }
        }

        const drawModalElement = document.getElementById('drawModal');
        if (drawModalElement && drawModalElement.style.display !== 'none') {
             console.log("  - Обновление модального окна ничьей");
             const drawTitleEl = document.getElementById('drawModalTitle');
             const drawDescEl = document.getElementById('drawModalDescription');
             const playAgainDrawBtnEl = document.getElementById('playAgainAfterDrawBtn');
             const backToMainDrawBtnEl = document.getElementById('backToMainAfterDrawBtn');

             if (drawTitleEl) {
                 drawTitleEl.textContent = t('modals.draw.title');
             }
             if (drawDescEl) {
                 drawDescEl.textContent = t('modals.draw.description');
             }
             if (playAgainDrawBtnEl) {
                 playAgainDrawBtnEl.textContent = t('playAgainAfterDrawBtn');
             }
             if (backToMainDrawBtnEl) {
                 backToMainDrawBtnEl.textContent = t('backToMainAfterDrawBtn');
             }
        }
    } else {
        console.log("  - Игра не запущена, обновление только статических элементов");
    }

    console.log("  - Статические элементы обновлены (предполагается вызов applyTranslations)");
}

window.updateGameLanguage = updateGameLanguage;