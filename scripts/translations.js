// scripts/translations.js

// 1. Объект с переводами
// Ключи - это id элементов или произвольные ключи для динамического текста
// Значения - объекты с кодами языков и соответствующими переводами
const translations = {
    // --- Статические тексты из HTML (по id элементов) ---
    // Заголовок и версия
    "gameTitle": {
        "ru": "4 в ряд",
        "en": "4 in row",
        "es": "4 en una fila",
        "zh-CN": "连续4个",
        "fr": "4 dans une rangée",
        "de": "4 in einer Reihe",
        "ja": "4列に並んでいます。",
        "pt-BR": "4 seguidas",
        "ar": "4 على التوالي",
        "tr": "4 bir sırada",
        "udm": "4 в ряд"
    },
    "versionSpan": {
        "ru": "ВЕРСИЯ {{version}}",
        "en": "VERSION {{version}}",
        "es": "VERSIÓN {{version}}",
        "zh-CN": "版本 {{version}}",
        "fr": "VERSION {{version}}",
        "de": "VERSION {{version}}",
        "ja": "バージョン {{version}}",
        "pt-BR": "VERSÃO {{version}}",
        "ar": "الإصدار {{version}}",
        "tr": "SÜRÜM {{version}}",
        "udm": "ВЕРСИЯ {{version}}"
    },
    // Кнопки главного меню
    "normalMode": {
        "ru": "Обычная",
        "en": "Normal",
        "es": "Normal",
        "zh-CN": "普通模式",
        "fr": "Normal",
        "de": "Normal",
        "ja": "ノーマル",
        "pt-BR": "Normal",
        "ar": "عادي",
        "tr": "Normal",
        "udm": "Тупатым"
    },
    "creativeMode": {
        "ru": "Творческая",
        "en": "Creative",
        "es": "Creativo",
        "zh-CN": "创造模式",
        "fr": "Créatif",
        "de": "Kreativ",
        "ja": "クリエイティブ",
        "pt-BR": "Criativo",
        "ar": "إبداعي",
        "tr": "Yaratıcı",
        "udm": "Творческой"
    },
    "customizationTitle": {
        "ru": "Настройки внешнего вида",
        "en": "Appearance Settings",
        "es": "Configuración de apariencia",
        "zh-CN": "外观设置",
        "fr": "Paramètres d'apparence",
        "de": "Erscheinungsbild-Einstellungen",
        "ja": "外観設定",
        "pt-BR": "Configurações de aparência",
        "ar": "إعدادات المظهر",
        "tr": "Görünüm Ayarları",
        "udm": ""
    },

    "creativeSettingsTitle": {
        "ru": "Настройки творческого режима",
        "en": "Creative Mode Settings",
        "es": "Configuración del modo creativo",
        "zh-CN": "创造模式设置",
        "fr": "Paramètres du mode créatif",
        "de": "Kreativmodus-Einstellungen",
        "ja": "クリエイティブモード設定",
        "pt-BR": "Configurações do modo criativo",
        "ar": "إعدادات الوضع الإبداعي",
        "tr": "Yaratıcı Mod Ayarları",
        "udm": "Творческой режим настройкаос"
    },
    "rowsLabel": {
        "ru": "Количество строк:",
        "en": "Number of rows:",
        "es": "Número de filas:",
        "zh-CN": "行数：",
        "fr": "Nombre de lignes :",
        "de": "Anzahl der Zeilen:",
        "ja": "行数：",
        "pt-BR": "Número de linhas:",
        "ar": "عدد الصفوف:",
        "tr": "Satır sayısı:",
        "udm": "Рядъёс количествой:"
    },
    "columnsLabel": {
        "ru": "Количество столбцов:",
        "en": "Number of columns:",
        "es": "Número de columnas:",
        "zh-CN": "列数：",
        "fr": "Nombre de colonnes :",
        "de": "Anzahl der Spalten:",
        "ja": "列数：",
        "pt-BR": "Número de colunas:",
        "ar": "عدد الأعمدة:",
        "tr": "Sütun sayısı:",
        "udm": "Столбцъёс количествой:"
    },
    "playersLabel": {
        "ru": "Количество игроков (1-4):",
        "en": "Number of players (1-4):",
        "es": "Número de jugadores (1-4):",
        "zh-CN": "玩家数量 (1-4)：",
        "fr": "Nombre de joueurs (1-4) :",
        "de": "Anzahl der Spieler (1-4):",
        "ja": "プレイヤー数 (1-4)：",
        "pt-BR": "Número de jogadores (1-4):",
        "ar": "عدد اللاعبين (1-4):",
        "tr": "Oyuncu sayısı (1-4):",
        "udm": "Игрокъёс количествой (1-4):"
    },
    "gameModeLabel": {
        "ru": "Режим игры в одного(режим творчества):",
        "en": "Single Player Mode (Creative):",
        "es": "Modo de un jugador (Creativo):",
        "zh-CN": "单人模式（创造）：",
        "fr": "Mode solo (Créatif) :",
        "de": "Einzelspieler-Modus (Kreativ):",
        "ja": "シングルプレイヤーモード（クリエイティブ）：",
        "pt-BR": "Modo de um jogador (Criativo):",
        "ar": "وضع لاعب واحد (إبداعي):",
        "tr": "Tek Oyuncu Modu (Yaratıcı):",
        "udm": "Бер игрок режим (Творческой):"
    },
    "gameModeSingle": {
        "ru": "Игрок против бота",
        "en": "Player vs Bot",
        "es": "Jugador vs Bot",
        "zh-CN": "玩家对机器人",
        "fr": "Joueur contre Bot",
        "de": "Spieler gegen Bot",
        "ja": "プレイヤー vs ボット",
        "pt-BR": "Jogador vs Bot",
        "ar": "لاعب ضد روبوت",
        "tr": "Oyuncu vs Bot",
        "udm": "Игрок бот вылын"
    },
    "gameModeTest": {
        "ru": "Тестирование",
        "en": "Testing",
        "es": "Pruebas",
        "zh-CN": "测试",
        "fr": "Test",
        "de": "Testen",
        "ja": "テスト",
        "pt-BR": "Teste",
        "ar": "اختبار",
        "tr": "Test",
        "udm": "Тестирований"
    },
    "startCreativeBtn": {
        "ru": "Начать игру",
        "en": "Start Game",
        "es": "Iniciar juego",
        "zh-CN": "开始游戏",
        "fr": "Démarrer le jeu",
        "de": "Spiel starten",
        "ja": "ゲーム開始",
        "pt-BR": "Iniciar jogo",
        "ar": "بدء اللعبة",
        "tr": "Oyunu Başlat",
        "udm": "Играть начать"
    },
    "backToMainFromSettings": {
        "ru": "Назад в меню",
        "en": "Back to Menu",
        "es": "Volver al menú",
        "zh-CN": "返回菜单",
        "fr": "Retour au menu",
        "de": "Zurück zum Menü",
        "ja": "メニューに戻る",
        "pt-BR": "Voltar ao menu",
        "ar": "العودة إلى القائمة",
        "tr": "Menüye Dön",
        "udm": "Меню вылын"
    },

    // Панель настройки внешнего вида
    "customizationPanelTitle": {
        "ru": "Настройки внешнего вида",
        "en": "Appearance Settings",
        "es": "Configuración de apariencia",
        "zh-CN": "外观设置",
        "fr": "Paramètres d'apparence",
        "de": "Erscheinungsbild-Einstellungen",
        "ja": "外観設定",
        "pt-BR": "Configurações de aparência",
        "ar": "إعدادات المظهر",
        "tr": "Görünüm Ayarları",
        "udm": "Внешний вид настройкаос"
    },
    "themeLabel": {
        "ru": "Выберите фигурки:",
        "en": "Choose pieces:",
        "es": "Elegir piezas:",
        "zh-CN": "选择棋子：",
        "fr": "Choisir les pièces :",
        "de": "Figuren auswählen:",
        "ja": "駒を選択：",
        "pt-BR": "Escolher peças:",
        "ar": "اختر القطع:",
        "tr": "Taşları seç:",
        "udm": "Фигуркаос выберите:"
    },
    "colorLabel": {
        "ru": "Выберите цвета игроков:",
        "en": "Choose player colors:",
        "es": "Elegir colores de jugadores:",
        "zh-CN": "选择玩家颜色：",
        "fr": "Choisir les couleurs des joueurs :",
        "de": "Spielerfarben auswählen:",
        "ja": "プレイヤーの色を選択：",
        "pt-BR": "Escolher cores dos jogadores:",
        "ar": "اختر ألوان اللاعبين:",
        "tr": "Oyuncu renklerini seç:",
        "udm": "Игрокъёс цветъёс выберите:"
    },
    "saveCustomizationBtn": {
        "ru": "Сохранить",
        "en": "Save",
        "es": "Guardar",
        "zh-CN": "保存",
        "fr": "Enregistrer",
        "de": "Speichern",
        "ja": "保存",
        "pt-BR": "Salvar",
        "ar": "حفظ",
        "tr": "Kaydet",
        "udm": "Сохранить"
    },
    "backToMainFromCustomization": {
        "ru": "Назад в меню",
        "en": "Back to Menu",
        "es": "Volver al menú",
        "zh-CN": "返回菜单",
        "fr": "Retour au menu",
        "de": "Zurück zum Menü",
        "ja": "メニューに戻る",
        "pt-BR": "Voltar ao menu",
        "ar": "العودة إلى القائمة",
        "tr": "Menüye Dön",
        "udm": "Меню вылын"
    },
    // Модальные окна игроков
    "player1ModalTitle": {
        "ru": "Настройки Игрока 1",
        "en": "Player 1 Settings",
        "es": "Configuración del Jugador 1",
        "zh-CN": "玩家1设置",
        "fr": "Paramètres du Joueur 1",
        "de": "Spieler 1 Einstellungen",
        "ja": "プレイヤー1設定",
        "pt-BR": "Configurações do Jogador 1",
        "ar": "إعدادات اللاعب 1",
        "tr": "1. Oyuncu Ayarları",
        "udm": "Игрок 1 настройкаос"
    },
    "player1NicknameLabel": {
        "ru": "Ник Игрока 1:",
        "en": "Player 1 Nickname:",
        "es": "Apodo del Jugador 1:",
        "zh-CN": "玩家1昵称：",
        "fr": "Pseudo du Joueur 1 :",
        "de": "Spieler 1 Nickname:",
        "ja": "プレイヤー1のニックネーム：",
        "pt-BR": "Apelido do Jogador 1:",
        "ar": "اسم اللاعب 1:",
        "tr": "1. Oyuncu Takma Adı:",
        "udm": "Игрок 1 ник:"
    },
    "player1ThemeLabel": {
        "ru": "Выберите фигурку:",
        "en": "Choose piece:",
        "es": "Elegir pieza:",
        "zh-CN": "选择棋子：",
        "fr": "Choisir la pièce :",
        "de": "Figur auswählen:",
        "ja": "駒を選択：",
        "pt-BR": "Escolher peça:",
        "ar": "اختر القطعة:",
        "tr": "Taş seç:",
        "udm": "Фигуркаос выберите:"
    },
    "player1ColorLabel": {
        "ru": "Выберите цвет:",
        "en": "Choose color:",
        "es": "Elegir color:",
        "zh-CN": "选择颜色：",
        "fr": "Choisir la couleur :",
        "de": "Farbe auswählen:",
        "ja": "色を選択：",
        "pt-BR": "Escolher cor:",
        "ar": "اختر اللون:",
        "tr": "Renk seç:",
        "udm": "Цветос выберите:"
    },
    "player1SaveBtn": {
        "ru": "Сохранить",
        "en": "Save",
        "es": "Guardar",
        "zh-CN": "保存",
        "fr": "Enregistrer",
        "de": "Speichern",
        "ja": "保存",
        "pt-BR": "Salvar",
        "ar": "حفظ",
        "tr": "Kaydet",
        "udm": "Сохранить"
    },
    "player2ModalTitle": {
        "ru": "Настройки Игрока 2",
        "en": "Player 2 Settings",
        "es": "Configuración del Jugador 2",
        "zh-CN": "玩家2设置",
        "fr": "Paramètres du Joueur 2",
        "de": "Spieler 2 Einstellungen",
        "ja": "プレイヤー2設定",
        "pt-BR": "Configurações do Jogador 2",
        "ar": "إعدادات اللاعب 2",
        "tr": "2. Oyuncu Ayarları",
        "udm": "Игрок 2 настройкаос"
    },
    "player2NicknameLabel": {
        "ru": "Ник Игрока 2:",
        "en": "Player 2 Nickname:",
        "es": "Apodo del Jugador 2:",
        "zh-CN": "玩家2昵称：",
        "fr": "Pseudo du Joueur 2 :",
        "de": "Spieler 2 Nickname:",
        "ja": "プレイヤー2のニックネーム：",
        "pt-BR": "Apelido do Jogador 2:",
        "ar": "اسم اللاعب 2:",
        "tr": "2. Oyuncu Takma Adı:",
        "udm": "Игрок 2 ник:"
    },
    "player2ThemeLabel": {
        "ru": "Выберите фигурку:",
        "en": "Choose piece:",
        "es": "Elegir pieza:",
        "zh-CN": "选择棋子：",
        "fr": "Choisir la pièce :",
        "de": "Figur auswählen:",
        "ja": "駒を選択：",
        "pt-BR": "Escolher peça:",
        "ar": "اختر القطعة:",
        "tr": "Taş seç:",
        "udm": "Фигуркаос выберите:"
    },
    "player2ColorLabel": {
        "ru": "Выберите цвет:",
        "en": "Choose color:",
        "es": "Elegir color:",
        "zh-CN": "选择颜色：",
        "fr": "Choisir la couleur :",
        "de": "Farbe auswählen:",
        "ja": "色を選択：",
        "pt-BR": "Escolher cor:",
        "ar": "اختر اللون:",
        "tr": "Renk seç:",
        "udm": "Цветос выберите:"
    },
    "player2SaveBtn": {
        "ru": "Сохранить",
        "en": "Save",
        "es": "Guardar",
        "zh-CN": "保存",
        "fr": "Enregistrer",
        "de": "Speichern",
        "ja": "保存",
        "pt-BR": "Salvar",
        "ar": "حفظ",
        "tr": "Kaydet",
        "udm": "Сохранить"
    },
    "player3ModalTitle": {
        "ru": "Настройки Игрока 3",
        "en": "Player 3 Settings",
        "es": "Configuración del Jugador 3",
        "zh-CN": "玩家3设置",
        "fr": "Paramètres du Joueur 3",
        "de": "Spieler 3 Einstellungen",
        "ja": "プレイヤー3設定",
        "pt-BR": "Configurações do Jogador 3",
        "ar": "إعدادات اللاعب 3",
        "tr": "3. Oyuncu Ayarları",
        "udm": "Игрок 3 настройкаос"
    },
    "player3NicknameLabel": {
        "ru": "Ник Игрока 3:",
        "en": "Player 3 Nickname:",
        "es": "Apodo del Jugador 3:",
        "zh-CN": "玩家3昵称：",
        "fr": "Pseudo du Joueur 3 :",
        "de": "Spieler 3 Nickname:",
        "ja": "プレイヤー3のニックネーム：",
        "pt-BR": "Apelido do Jogador 3:",
        "ar": "اسم اللاعب 3:",
        "tr": "3. Oyuncu Takma Adı:",
        "udm": "Игрок 3 ник:"
    },
    "player3ThemeLabel": {
        "ru": "Выберите фигурку:",
        "en": "Choose piece:",
        "es": "Elegir pieza:",
        "zh-CN": "选择棋子：",
        "fr": "Choisir la pièce :",
        "de": "Figur auswählen:",
        "ja": "駒を選択：",
        "pt-BR": "Escolher peça:",
        "ar": "اختر القطعة:",
        "tr": "Taş seç:",
        "udm": "Фигуркаос выберите:"
    },
    "player3ColorLabel": {
        "ru": "Выберите цвет:",
        "en": "Choose color:",
        "es": "Elegir color:",
        "zh-CN": "选择颜色：",
        "fr": "Choisir la couleur :",
        "de": "Farbe auswählen:",
        "ja": "色を選択：",
        "pt-BR": "Escolher cor:",
        "ar": "اختر اللون:",
        "tr": "Renk seç:",
        "udm": "Цветос выберите:"
    },
    "player3SaveBtn": {
        "ru": "Сохранить",
        "en": "Save",
        "es": "Guardar",
        "zh-CN": "保存",
        "fr": "Enregistrer",
        "de": "Speichern",
        "ja": "保存",
        "pt-BR": "Salvar",
        "ar": "حفظ",
        "tr": "Kaydet",
        "udm": "Сохранить"
    },
    "player4ModalTitle": {
        "ru": "Настройки Игрока 4",
        "en": "Player 4 Settings",
        "es": "Configuración del Jugador 4",
        "zh-CN": "玩家4设置",
        "fr": "Paramètres du Joueur 4",
        "de": "Spieler 4 Einstellungen",
        "ja": "プレイヤー4設定",
        "pt-BR": "Configurações do Jogador 4",
        "ar": "إعدادات اللاعب 4",
        "tr": "4. Oyuncu Ayarları",
        "udm": "Игрок 4 настройкаос"
    },
    "player4NicknameLabel": {
        "ru": "Ник Игрока 4:",
        "en": "Player 4 Nickname:",
        "es": "Apodo del Jugador 4:",
        "zh-CN": "玩家4昵称：",
        "fr": "Pseudo du Joueur 4 :",
        "de": "Spieler 4 Nickname:",
        "ja": "プレイヤー4のニックネーム：",
        "pt-BR": "Apelido do Jogador 4:",
        "ar": "اسم اللاعب 4:",
        "tr": "4. Oyuncu Takma Adı:",
        "udm": "Игрок 4 ник:"
    },
    "player4ThemeLabel": {
        "ru": "Выберите фигурку:",
        "en": "Choose piece:",
        "es": "Elegir pieza:",
        "zh-CN": "选择棋子：",
        "fr": "Choisir la pièce :",
        "de": "Figur auswählen:",
        "ja": "駒を選択：",
        "pt-BR": "Escolher peça:",
        "ar": "اختر القطعة:",
        "tr": "Taş seç:",
        "udm": "Фигуркаос выберите:"
    },
    "player4ColorLabel": {
        "ru": "Выберите цвет:",
        "en": "Choose color:",
        "es": "Elegir color:",
        "zh-CN": "选择颜色：",
        "fr": "Choisir la couleur :",
        "de": "Farbe auswählen:",
        "ja": "色を選択：",
        "pt-BR": "Escolher cor:",
        "ar": "اختر اللون:",
        "tr": "Renk seç:",
        "udm": "Цветос выберите:"
    },
    "player4SaveBtn": {
        "ru": "Сохранить",
        "en": "Save",
        "es": "Guardar",
        "zh-CN": "保存",
        "fr": "Enregistrer",
        "de": "Speichern",
        "ja": "保存",
        "pt-BR": "Salvar",
        "ar": "حفظ",
        "tr": "Kaydet",
        "udm": "Сохранить"
    },
    // Игровой интерфейс
    "status": {
        "ru": "Подготовка к игре...",
        "en": "Preparing game...",
        "es": "Preparando juego...",
        "zh-CN": "准备游戏...",
        "fr": "Préparation du jeu...",
        "de": "Spiel vorbereiten...",
        "ja": "ゲーム準備中...",
        "pt-BR": "Preparando jogo...",
        "ar": "تحضير اللعبة...",
        "tr": "Oyun hazırlanıyor...",
        "udm": "Игра подготовкаос..."
    },
    "restartBtn": {
        "ru": "Новая игра",
        "en": "New Game",
        "es": "Nuevo juego",
        "zh-CN": "新游戏",
        "fr": "Nouvelle partie",
        "de": "Neues Spiel",
        "ja": "新しいゲーム",
        "pt-BR": "Novo jogo",
        "ar": "لعبة جديدة",
        "tr": "Yeni Oyun",
        "udm": "У игра"
    },
    "settingsBtn": {
        "ru": "Изменить настройки",
        "en": "Change Settings",
        "es": "Cambiar configuración",
        "zh-CN": "更改设置",
        "fr": "Modifier les paramètres",
        "de": "Einstellungen ändern",
        "ja": "設定を変更",
        "pt-BR": "Alterar configurações",
        "ar": "تغيير الإعدادات",
        "tr": "Ayarları Değiştir",
        "udm": "Настройкаос понять"
    },
    "addPlayerBtn": {
        "ru": "Добавить игрока",
        "en": "Add Player",
        "es": "Agregar jugador",
        "zh-CN": "添加玩家",
        "fr": "Ajouter un joueur",
        "de": "Spieler hinzufügen",
        "ja": "プレイヤーを追加",
        "pt-BR": "Adicionar jogador",
        "ar": "إضافة لاعب",
        "tr": "Oyuncu Ekle",
        "udm": "Игрокос лэзьы"
    },
    "removePlayerBtn": {
        "ru": "Удалить игрока",
        "en": "Remove Player",
        "es": "Eliminar jugador",
        "zh-CN": "移除玩家",
        "fr": "Supprimer un joueur",
        "de": "Spieler entfernen",
        "ja": "プレイヤーを削除",
        "pt-BR": "Remover jogador",
        "ar": "إزالة اللاعب",
        "tr": "Oyuncu Kaldır",
        "udm": "Игрокос сюйы"
    },
    "backToMainBtn": {
        "ru": "Назад в меню",
        "en": "Back to Menu",
        "es": "Volver al menú",
        "zh-CN": "返回菜单",
        "fr": "Retour au menu",
        "de": "Zurück zum Menü",
        "ja": "メニューに戻る",
        "pt-BR": "Voltar ao menu",
        "ar": "العودة إلى القائمة",
        "tr": "Menüye Dön",
        "udm": "Меню вылын"
    },
    "connectionStatus": {
        "ru": "Локальная игра",
        "en": "Local Game",
        "es": "Juego local",
        "zh-CN": "本地游戏",
        "fr": "Jeu local",
        "de": "Lokales Spiel",
        "ja": "ローカルゲーム",
        "pt-BR": "Jogo local",
        "ar": "لعبة محلية",
        "tr": "Yerel Oyun",
        "udm": "Локальной игра"
    },

    // Хостинг
    "hostingTitle": {
        "ru": "Бесплатные варианты хостинга",
        "en": "Free Hosting Options"
    },

    // Модальные окна (победа/ничья)
    "winModalTitle": {
        "ru": "Победа!",
        "en": "Victory!",
        "es": "¡Victoria!",
        "zh-CN": "胜利！",
        "fr": "Victoire !",
        "de": "Sieg!",
        "ja": "勝利！",
        "pt-BR": "Vitória!",
        "ar": "نصر!",
        "tr": "Zafer!",
        "udm": "Победа!"
    },
    "playAgainBtn": {
        "ru": "Играть снова",
        "en": "Play Again",
        "es": "Jugar de nuevo",
        "zh-CN": "再玩一次",
        "fr": "Rejouer",
        "de": "Nochmal spielen",
        "ja": "もう一度プレイ",
        "pt-BR": "Jogar novamente",
        "ar": "اللعب مرة أخرى",
        "tr": "Tekrar Oyna",
        "udm": "Играть вичы"
    },
    "backToMainFromWin": {
        "ru": "Назад в меню",
        "en": "Back to Menu",
        "es": "Volver al menú",
        "zh-CN": "返回菜单",
        "fr": "Retour au menu",
        "de": "Zurück zum Menü",
        "ja": "メニューに戻る",
        "pt-BR": "Voltar ao menu",
        "ar": "العودة إلى القائمة",
        "tr": "Menüye Dön",
        "udm": "Меню вылын"
    },
    "drawModalTitle": {
        "ru": "Ничья!",
        "en": "Draw!",
        "es": "¡Empate!",
        "zh-CN": "平局！",
        "fr": "Match nul !",
        "de": "Unentschieden!",
        "ja": "引き分け！",
        "pt-BR": "Empate!",
        "ar": "تعادل!",
        "tr": "Berabere!",
        "udm": "Ничья!"
    },
    "drawModalDescription": {
        "ru": "Все ячейки заполнены, но никто не победил.",
        "en": "All cells are filled, but no one won.",
        "es": "Todas las celdas están llenas, pero nadie ganó.",
        "zh-CN": "所有格子都已填满，但没有人获胜。",
        "fr": "Toutes les cases sont remplies, mais personne n'a gagné.",
        "de": "Alle Zellen sind gefüllt, aber niemand hat gewonnen.",
        "ja": "すべてのセルが埋まっていますが、誰も勝ちませんでした。",
        "pt-BR": "Todas as células estão preenchidas, mas ninguém ganhou.",
        "ar": "جميع الخلايا مملوءة، لكن لم يفز أحد.",
        "tr": "Tüm hücreler dolduruldu, ancak kimse kazanmadı.",
        "udm": "Все ячейкаос полны, но никто не победил."
    },
    "playAgainAfterDrawBtn": {
        "ru": "Играть снова",
        "en": "Play Again",
        "es": "Jugar de nuevo",
        "zh-CN": "再玩一次",
        "fr": "Rejouer",
        "de": "Nochmal spielen",
        "ja": "もう一度プレイ",
        "pt-BR": "Jogar novamente",
        "ar": "اللعب مرة أخرى",
        "tr": "Tekrar Oyna",
        "udm": "Играть вичы"
    },
    "backToMainAfterDrawBtn": {
        "ru": "Назад в меню",
        "en": "Back to Menu",
        "es": "Volver al menú",
        "zh-CN": "返回菜单",
        "fr": "Retour au menu",
        "de": "Zurück zum Menü",
        "ja": "メニューに戻る",
        "pt-BR": "Voltar ao menu",
        "ar": "العودة إلى القائمة",
        "tr": "Menüye Dön",
        "udm": "Меню вылын"
    },

    // --- Динамические тексты (произвольные ключи) ---
    "playerName": {
        "ru": "Игрок {{number}}",
        "en": "Player {{number}}",
        "es": "Jugador {{number}}",
        "zh-CN": "玩家{{number}}",
        "fr": "Joueur {{number}}",
        "de": "Spieler {{number}}",
        "ja": "プレイヤー{{number}}",
        "pt-BR": "Jogador {{number}}",
        "ar": "اللاعب {{number}}",
        "tr": "Oyuncu {{number}}",
        "udm": "Игрок {{number}}"
    },
    "playerWithName": {
        "ru": "{{name}}",
        "en": "{{name}}",
        "es": "{{name}}",
        "zh-CN": "{{name}}",
        "fr": "{{name}}",
        "de": "{{name}}",
        "ja": "{{name}}",
        "pt-BR": "{{name}}",
        "ar": "{{name}}",
        "tr": "{{name}}",
        "udm": "{{name}}"
    },
    "statusTurn": {
        "ru": "Ход {{playerName}}...",
        "en": "{{playerName}}'s turn...",
        "es": "Turno de {{playerName}}...",
        "zh-CN": "{{playerName}}的回合...",
        "fr": "Tour de {{playerName}}...",
        "de": "{{playerName}} ist dran...",
        "ja": "{{playerName}}のターン...",
        "pt-BR": "Vez de {{playerName}}...",
        "ar": "دور {{playerName}}...",
        "tr": "{{playerName}} sırası...",
        "udm": "{{playerName}} ходос..."
    },
    "statusBotTurn": {
        "ru": "Ход {{botName}}...",
        "en": "{{botName}}'s turn...",
        "es": "Turno de {{botName}}...",
        "zh-CN": "{{botName}}的回合...",
        "fr": "Tour de {{botName}}...",
        "de": "{{botName}} ist dran...",
        "ja": "{{botName}}のターン...",
        "pt-BR": "Vez de {{botName}}...",
        "ar": "دور {{botName}}...",
        "tr": "{{botName}} sırası...",
        "udm": "{{botName}} ходос..."
    },
    "winDescriptionPlayer": {
        "ru": "{{winnerName}} победил!",
        "en": "{{winnerName}} wins!",
        "es": "¡{{winnerName}} gana!",
        "zh-CN": "{{winnerName}}获胜！",
        "fr": "{{winnerName}} gagne !",
        "de": "{{winnerName}} gewinnt!",
        "ja": "{{winnerName}}の勝利！",
        "pt-BR": "{{winnerName}} vence!",
        "ar": "{{winnerName}} يفوز!",
        "tr": "{{winnerName}} kazandı!",
        "udm": "{{winnerName}} победил!"
    },
    "winDescriptionBot": {
        "ru": "{{winnerBot}} выиграл!",
        "en": "{{winnerBot}} wins!",
        "es": "¡{{winnerBot}} gana!",
        "zh-CN": "{{winnerBot}}获胜！",
        "fr": "{{winnerBot}} gagne !",
        "de": "{{winnerBot}} gewinnt!",
        "ja": "{{winnerBot}}の勝利！",
        "pt-BR": "{{winnerBot}} vence!",
        "ar": "{{winnerBot}} يفوز!",
        "tr": "{{winnerBot}} kazandı!",
        "udm": "{{winnerBot}} выиграл!"
    }
    // ... можно добавить больше ключей по мере необходимости
};

// 2. Функция для определения языка пользователя
function getUserLanguage() {
    // Получаем предпочтительный язык из браузера
    const browserLang = navigator.language || navigator.userLanguage;
    // Берем только код языка (например, 'ru' из 'ru-RU')
    const langCode = browserLang.split('-')[0].toLowerCase();
    // Проверяем, поддерживаем ли мы этот язык, если нет - используем 'ru' по умолчанию
    return translations['gameTitle'] && translations['gameTitle'][langCode] ? langCode : 'ru';
}

// 3. Глобальная переменная для хранения текущего языка
let currentLanguage = getUserLanguage();

// 4. Функция для получения перевода по ключу
function t(key, params = {}) {
    const translationObj = translations[key];
    if (!translationObj) {
        console.warn(`Translation key '${key}' not found.`);
        return key; // Возвращаем ключ, если перевод не найден
    }

    let translatedText = translationObj[currentLanguage];
    if (translatedText === undefined) {
        console.warn(`Translation for key '${key}' not found for language '${currentLanguage}'.`);
        // Попробуем вернуть перевод на языке по умолчанию (русский)
        translatedText = translationObj['ru'] || key;
    }

    // Заменяем плейсхолдеры {{paramName}} на значения из params
    // Например, t('playerName', { number: 1 }) -> "Игрок 1"
    for (const [paramKey, paramValue] of Object.entries(params)) {
        const placeholder = `{{${paramKey}}}`;
        translatedText = translatedText.replace(new RegExp(placeholder, 'g'), paramValue);
    }

    return translatedText;
}

// 5. Функция для применения переводов ко всем элементам с id, совпадающим с ключами
function applyTranslations() {
    for (const key in translations) {
        if (translations.hasOwnProperty(key)) {
            const element = document.getElementById(key);
            if (element) {
                // Проверяем тип элемента для корректной установки текста
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.placeholder = t(key);
                    } else {
                        element.value = t(key);
                    }
                } else if (element.tagName === 'IMG') {
                    element.alt = t(key);
                } else {
                    element.textContent = t(key);
                }
            }
        }
    }
}

// x. Функция для версии
export function updateVersionDisplay(){
    const ver = document.getElementById('ver')
    const versionSpan = document.getElementById('versionSpan')
    if (ver && versionSpan){
        const verText = ver.textContent.trim();
        if (verText){
            versionSpan.textContent = `(${t('versionSpan', {version : verText})})`
        }
    }
}

// 6. (Опционально) Функция для смены языка
function changeLanguage(newLang) {
    if (translations['gameTitle'] && translations['gameTitle'][newLang] !== undefined) {
        currentLanguage = newLang;
        applyTranslations();
        updateVersionDisplay();
        // Если игра запущена, обновляем динамический текст
        if (typeof updateGameLanguage === 'function') {
            updateGameLanguage();
        }
    } else {
        console.warn(`Language '${newLang}' is not supported.`);
    }
}

// 7. Экспортируем необходимые функции (если используете модули ES6)
// export { t, applyTranslations, changeLanguage, currentLanguage };

// 8. Делаем функции доступными глобально (для использования в logic.js)
window.t = t;
window.applyTranslations = applyTranslations;
window.changeLanguage = changeLanguage;
window.currentLanguage = currentLanguage;

console.log(`Translation system initialized. Current language: ${currentLanguage}`);

// --- НОВОЕ: Данные для слайдера языков ---
// Определим список языков для слайдера в нужном порядке
// Коды языков должны совпадать с теми, что используются в функции changeLanguage
export const sliderLanguages = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'zh-CN', name: '中文' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ja', name: '日本語' },
    { code: 'pt-BR', name: 'Português (Brasil)' },
    { code: 'ar', name: 'العربية' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'udm', name: 'Удмурт' }
    // Добавьте больше языков по мере необходимости
];

// Простые SVG-флаги в формате Base64 для примера
// В реальном проекте лучше использовать файлы в папке assets

export const flagImages = {
    'ru': '/assets/flags/svg/myhomeland.svg',
    'en': '/assets/flags/svg/Flag-of-USAXPENP.svg',
    'es': '/assets/flags/svg/Flag-of-Spain.svg',
    'zh-CN': '/assets/flags/svg/Flag-of-China.svg',
    'fr': '/assets/flags/svg/Flag-of-France.svg',
    'de': '/assets/flags/svg/Flag-of-Germany.svg',
    'ja': '/assets/flags/svg/Flag-of-Japan.svg',
    'pt-BR': '/assets/flags/svg/Flag-of-Brazil.svg',
    'ar': '/assets/flags/svg/Flag-of-Saudi_Arabia.svg',
    'tr': '/assets/flags/svg/Flag-of-Turkiye.svg',
    'udm': '/assets/flags/svg/mylittlehomeland.svg',
};

// export const flagImages = {
//     'ru': '/assets/myhomeland.svg',
//     'en': '/assets/flags/svg/Flag-of-USAXPENP.svg',
//     'es': '/assets/flags/svg/Flag-of-Spain.svg',
//     'zh-CN': '/assets/flags/svg/Flag-of-China.svg',
//     'fr': '/assets/flags/svg/Flag-of-France.svg',
//     'de': '/assets/flags/svg/Flag-of-Germany.svg',
//     'ja': '/assets/flags/svg/Flag-of-Japan.svg',
//     'pt-BR': '/assets/flags/svg/Flag-of-Brazil.svg',
//     'ar': '/assets/flags/svg/Flag-of-Saudi_arabia.svg',
//     'tr': '/assets/flags/svg/Flag-of-Turkiye.svg',
//     'udm': '/assets/flags/svg/mylittlehomeland.svg',
// };

// export const flagImages = {
//     'ru': '/static/myhomeland.svg',
//     'en': '/static/Flag-of-USAXPENP.svg',
//     'es': '/static/Flag-of-Spain.svg',
//     'zh-CN': '/static/Flag-of-China.svg',
//     'fr': '/static/Flag-of-France.svg',
//     'de': '/static/Flag-of-Germany.svg',
//     'ja': '/static/Flag-of-Japan.svg',
//     'pt-BR': '/static/Flag-of-Brazil.svg',
//     'ar': '/static/Flag-of-Saudi_arabia.svg',
//     'tr': '/static/Flag-of-Turkiye.svg',
//     'udm': '/static/mylittlehomeland.svg',
// };

export function logicSlider(){
    setTimeout(() => {
        const sliderContainer = document.getElementById('languageSliderContainer');
        const sliderFlagsContainer = document.getElementById('sliderFlags');
        const sliderPrevBtn = document.getElementById('sliderPrev');
        const sliderNextBtn = document.getElementById('sliderNext');
        const currentLang = window.currentLanguage || 'ru'; // Получаем текущий язык

        if (!sliderContainer || !sliderFlagsContainer || !sliderPrevBtn || !sliderNextBtn) {
            console.warn('Элементы слайдера языка не найдены в DOM.');
            return;
        }

        let currentIndex = sliderLanguages.findIndex(lang => lang.code === currentLang);
        if (currentIndex === -1) currentIndex = 0; // Если текущий язык не в списке, выбираем первый

        // Функция для обновления отображения слайдера
        function updateSlider() {
            sliderFlagsContainer.innerHTML = ''; // Очищаем контейнер

            // Определяем индексы предыдущего, текущего и следующего языков
            const prevIndex = (currentIndex - 1 + sliderLanguages.length) % sliderLanguages.length;
            const nextIndex = (currentIndex + 1) % sliderLanguages.length;

            // Создаем кнопки для флагов
            const flagsToDisplay = [prevIndex, currentIndex, nextIndex];
            flagsToDisplay.forEach((index, position) => {
                const langData = sliderLanguages[index];
                const flagBtn = document.createElement('button');
                flagBtn.className = 'lang-flag-btn';
                if (index === currentIndex) {
                    flagBtn.classList.add('active');
                }
                flagBtn.setAttribute('data-lang', langData.code);
                flagBtn.setAttribute('title', langData.name); // Всплывающая подсказка

                const flagImg = document.createElement('img');
                flagImg.className = 'lang-flag-img';
                flagImg.src = flagImages[langData.code] || flagImages.ru; // Заглушка
                
                flagImg.alt = langData.code.toUpperCase();

                flagBtn.appendChild(flagImg);
                sliderFlagsContainer.appendChild(flagBtn);

                // Добавляем обработчик клика
                flagBtn.addEventListener('click', () => {
                    if (typeof window.changeLanguage === 'function') {
                        window.changeLanguage(langData.code);
                        // Обновляем currentIndex и сам слайдер
                        currentIndex = index;
                        updateSlider();
                    }
                });
            });
        }

        // Обработчики для кнопок навигации
        sliderPrevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + sliderLanguages.length) % sliderLanguages.length;
            updateSlider();
        });

        sliderNextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % sliderLanguages.length;
            updateSlider();
        });

        // Инициализируем слайдер
        updateSlider();

        // (Опционально) Скрыть слайдер, если поддерживается только один язык
        // if (sliderLanguages.length <= 1) {
        //     sliderContainer.style.display = 'none';
        // }

    }, 150); // Небольшая задержка для уверенности в загрузке DOM
}

