// scripts/translations.js

let version_game = 'lite'; // lite для эмодзи, full - изображения
// 1. Объект с переводами
// Ключи - это id элементов или произвольные ключи для динамического текста
// Значения - объекты с кодами языков и соответствующими переводами
const translations = {
    // --- Статические тексты из HTML (по id элементов) ---
    // Заголовок и версия
    "gameTitle": {
        "ru": "4 в ряд",
        "sr": "4 у низу",
        "en": "4 in row",
        "es": "4 en una fila",
        "zh-CN": "连续4个",
        "fr": "4 dans une rangée",
        "de": "4 in einer Reihe",
        "ja": "4列に並んでいます。",
        "pt-BR": "4 seguidas",
        "ar": "4 على التوالي",
        "tr": "4 bir sırada",
        "udm": "Радэн-радэн 4"
    },
    "versionSpan": {
        "ru": "ВЕРСИЯ {{version}}",
        "sr": "ВЕРЗИЈА {{version}}",
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
        "sr": "Обична",
        "en": "Normal",
        "es": "Normal",
        "zh-CN": "普通模式",
        "fr": "Normal",
        "de": "Normal",
        "ja": "ノーマル",
        "pt-BR": "Normal",
        "ar": "عادي",
        "tr": "Normal",
        "udm": "Огшоры"
    },
    "creativeMode": {
        "ru": "Творческая",
        "sr": "Креативна",
        "en": "Creative",
        "es": "Creativo",
        "zh-CN": "创造模式",
        "fr": "Créatif",
        "de": "Kreativ",
        "ja": "クリエイティブ",
        "pt-BR": "Criativo",
        "ar": "إبداعي",
        "tr": "Yaratıcı",
        "udm": "Творческая"
    },
    "customizationBtn": {
        "ru": "Настройки внешнего вида",
        "sr": "Подешавања изгледа",
        "en": "Appearance Settings",
        "es": "Configuración de apariencia",
        "zh-CN": "外观设置",
        "fr": "Paramètres d'apparence",
        "de": "Erscheinungsbild-Einstellungen",
        "ja": "外観設定",
        "pt-BR": "Configurações de aparência",
        "ar": "إعدادات المظهر",
        "tr": "Görünüm Ayarları",
        "udm": "Настройка вылтусыз"
    },

    "aboutUsBtn": {
        "ru": "Разработчик",
        "sr": "Развијач",
        "en": "Developer",
        "es": "Desarrollador",
        "zh-CN": "開發者 / 开发人",
        "fr": "Développeur",
        "de": "Entwickler",
        "ja": "開発者",
        "pt-BR": "Desenvolvedor",
        "ar": "المطور",
        "tr": "Geliştirici",
        "udm": "Кылдытӥсь"
    },

    "creativeSettingsTitle": {
        "ru": "Настройки творческого режима",
        "sr": "Подешавања креативног режима",
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
        "sr": "број редова",
        "en": "Number of rows:",
        "es": "Número de filas:",
        "zh-CN": "行数：",
        "fr": "Nombre de lignes :",
        "de": "Anzahl der Zeilen:",
        "ja": "行数：",
        "pt-BR": "Número de linhas:",
        "ar": "عدد الصفوف:",
        "tr": "Satır sayısı:",
        "udm": "Рядъёс количество:"
    },
    "columnsLabel": {
        "ru": "Количество столбцов:",
        "sr": "број колона",
        "en": "Number of columns:",
        "es": "Número de columnas:",
        "zh-CN": "列数：",
        "fr": "Nombre de colonnes :",
        "de": "Anzahl der Spalten:",
        "ja": "列数：",
        "pt-BR": "Número de colunas:",
        "ar": "عدد الأعمدة:",
        "tr": "Sütun sayısı:",
        "udm": "Столбцъёс количество:"
    },
    "playersLabel": {
        "ru": "Количество игроков (1-4):",
        "sr": "број играча (1-4)",
        "en": "Number of players (1-4):",
        "es": "Número de jugadores (1-4):",
        "zh-CN": "玩家数量 (1-4)：",
        "fr": "Nombre de joueurs (1-4) :",
        "de": "Anzahl der Spieler (1-4):",
        "ja": "プレイヤー数 (1-4)：",
        "pt-BR": "Número de jogadores (1-4):",
        "ar": "عدد اللاعبين (1-4):",
        "tr": "Oyuncu sayısı (1-4):",
        "udm": "Игрокъёс количество (1-4):"
    },
    "gameModeLabel": {
        "ru": "Режим игры в одного(режим творчества):",
        "sr": "режим игре у једном (режим креативности)",
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
        "sr": "Играч против бота",
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
        "sr": "Тестирање",
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
        "sr": "Започните игру",
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
        "sr": "Назад у мени",
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
        "sr": "Подешавања изгледа",
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
        "sr": "Изаберите фигуре",
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
        "sr": "Изаберите боje играча",
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
        "sr": "Сачувај",
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
        "sr": "Назад у мени",
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
    "player1ThemeLabel": {
        "ru": "Выберите фигурку:",
        "sr": "Изаберите фигуре",
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
        "sr": "Изаберите боje:",
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
        "sr": "Сачувај",
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
        "sr": "Подешавања играча 2",
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
        "sr": "Ник Играча 2",
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
        "sr": "Изаберите фигуре",
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
        "sr": "Изаберите боje:",
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
        "sr": "Сачувај",
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
        "sr": "Подешавања играча 3",
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
        "sr": "Ник Играча 3",
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
        "sr": "Изаберите фигуре",
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
        "sr": "Изаберите боje:",
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
        "sr": "Сачувај",
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
        "sr": "Подешавања играча 4",
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
        "sr": "Ник Играча 4",
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
        "sr": "Изаберите фигуре",
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
        "sr": "Изаберите боje:",
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
        "sr": "Сачувај",
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
        "sr": "Припрема за игру...",
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
        "sr": "Нова игра",
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
        "sr": "Промени подешавања",
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
        "sr": "Додај играча",
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
        "sr": "Уклони играча",
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
        "sr": "Назад у мени",
        "en": "Back to Menu",
        "es": "Volver al menú",
        "zh-CN": "返回菜单",
        "fr": "Retour au menu",
        "de": "Zurück zum Menü",
        "ja": "メニューに戻る",
        "pt-BR": "Voltar ao menu",
        "ar": "العودة إلى القайمة",
        "tr": "Menüye Dön",
        "udm": "Меню вылын"
    },
    "connectionStatus": {
        "ru": "Локальная игра",
        "sr": "Локална игра",
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
        "sr": "Бесплатне опције хостинга",
        "en": "Free Hosting Options"
    },

    // Модальные окна (победа/ничья)
    "winModalTitle": {
        "ru": "Победа!",
        "sr": "Победа!",
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
        "sr": "Играј поново",
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
        "sr": "Назад у мени",
        "en": "Back to Menu",
        "es": "Volver al menú",
        "zh-CN": "返回菜单",
        "fr": "Retour au menu",
        "de": "Zurück zum Menü",
        "ja": "メニューに戻る",
        "pt-BR": "Voltar ao menu",
        "ar": "العودة إلى القайمة",
        "tr": "Menüye Dön",
        "udm": "Меню вылын"
    },
    "drawModalTitle": {
        "ru": "Ничья!",
        "sr": "Нерешено!",
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
        "sr": "Све ћелије су попуњене, али нико није победио.",
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
        "sr": "Играј поново",
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
        "sr": "Назад у мени",
        "en": "Back to Menu",
        "es": "Volver al menú",
        "zh-CN": "返回菜单",
        "fr": "Retour au menu",
        "de": "Zurück zum Menü",
        "ja": "メニューに戻る",
        "pt-BR": "Voltar ao menu",
        "ar": "العودة إلى القайمة",
        "tr": "Menüye Dön",
        "udm": "Меню вылын"
    },

    // --- Динамические тексты (произвольные ключи) ---
    "playerName": {
        "ru": "Игрок {{number}}",
        "sr": "Играч {{number}}",
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
        "sr": "{{name}}",
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
        "sr": "Потез {{playerName}}...",
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
        "sr": "Потез {{botName}}...",
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
        "sr": "{{winnerName}} је победио!",
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
        "sr": "{{winnerBot}} је победио!",
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
    },
    // ... можно добавить больше ключей по мере необходимости
    // имя игроков default
    "defaultNamePlayer": {
        "ru": "Игрок",
        "sr": "Играч",
        "en": "Player",
        "es": "Jugador",
        "zh-CN": "玩家",
        "fr": "Joueur",
        "de": "Spieler",
        "ja": "プレーヤー",
        "pt-BR": "Jogador",
        "ar": "لاعب",
        "tr": "Oyuncu",
        "udm": "Шудӥсь",
    },

    "difficultyBotMode": {
        "ru": "Сложность бота:",
        "sr": "Тежина бота:",
        "en": "Bot difficulty:",
        "es": "Dificultad del bot:",
        "zh-CN": "AI 玩家",
        "fr": "Difficulté du bot :",
        "de": "Bot-Schwierigkeit:",
        "ja": "ボットの難易度：",
        "pt-BR": "Dificuldade do bot:",
        "ar": "صعوبة الروبوت:",
        "tr": "Bot zorluğu:",
        "udm": "бот сложность:"
    },

    "1stroke": {
        "ru": "Привет! Меня зовут Владимиров Максим, и я разработчик этой игры '4 в ряд'.",
        "sr": "Здраво! Зовем се Владимиров Максим и ја сам развојач ове игре '4 у низу'.",
        "en": "Hi! My name is Vladimirov Maksim, and I'm the developer of this '4 in a Row' game.",
        "es": "¡Hola! Me llamo Vladimirov Maksim y soy el desarrollador de este juego '4 en línea'.",
        "zh-CN": "你好！我叫弗拉季米罗夫·马克西姆，我是这款'4连珠'游戏的开发者。",
        "fr": "Bonjour ! Je m'appelle Vladimirov Maksim et je suis le développeur de ce jeu '4 en ligne'.",
        "de": "Hallo! Ich heiße Vladimirov Maksim und ich bin der Entwickler dieses '4 gewinnt' Spiels.",
        "ja": "こんにちは！私はヴラディミロフ・マキシムと申します。この'4つ並べ'ゲームの開発者です。",
        "pt-BR": "Oi! Meu nome é Vladimirov Maksim e sou o desenvolvedor deste jogo '4 em linha'.",
        "ar": "مرحباً! اسمي فلاديمиров ماكسيم وأنا مطور هذه اللعبة 'أربعة في صف'.",
        "tr": "Merhaba! Adım Vladimirov Maksim ve bu '4 Satırda' oyununun geliştiricisiyim.",
        "udm": "Чырткем! Мон Владимиров Максим 'ньыль радэн-радэн' шудон кылдытӥсь."
    },
    "2stroke": {
        "ru": "Я создал её с использованием HTML, CSS и JavaScript",
        "sr": "Направио сам је коришћењем HTML, CSS и JavaScript технологија",
        "en": "I created it using HTML, CSS and JavaScript",
        "es": "Lo creé usando HTML, CSS y JavaScript",
        "zh-CN": "我使用HTML、CSS和JavaScript创建了它",
        "fr": "Je l'ai créé en utilisant HTML, CSS et JavaScript",
        "de": "Ich habe es mit HTML, CSS und JavaScript erstellt",
        "ja": "HTML、CSS、JavaScriptを使用して作成しました",
        "pt-BR": "Eu criei usando HTML, CSS e JavaScript",
        "ar": "لقد أنشأتها باستخدام HTML وCSS وJavaScript",
        "tr": "HTML, CSS ve JavaScript kullanarak oluşturdum",
        "udm": "МОН СОЕ КЫЛДЫТӤ HTML, CSS но JavaScript уже КУТЫСА."
    },
    "3stroke": {
        "ru": "Если у вас есть вопросы или предложения, вы можете связаться со мной:",
        "sr": "Ако имате питања или сугестије, можете ме контактирати:",
        "en": "If you have any questions or suggestions, you can contact me:",
        "es": "Si tienes alguna pregunta o sugerencia, puedes contactarme:",
        "zh-CN": "如果您有任何问题或建议，可以联系我：",
        "fr": "Si vous avez des questions ou des suggestions, vous pouvez me contacter :",
        "de": "Wenn Sie Fragen oder Vorschläge haben, können Sie mich kontaktieren:",
        "ja": "ご質問やご提案があれば、私までご連絡ください：",
        "pt-BR": "Se você tiver alguma dúvida ou sugestão, pode me contatar:",
        "ar": "إذا كانت لديك أي أسئلة أو اقتراحات، يمكنك الاتصال بي:",
        "tr": "Herhangi bir sorunuz veya öneriniz varsa, benimle iletişime geçebilirsiniz:",
        "udm": "Юанъёсты яке ӵектонъёсты вань ке, монэн герӟаськыны быгатӥськоды:"
    },
    "supportBtn": {
        "ru": "Поддержать автора",
        "sr": "Подржи аутора",
        "en": "Support the author", // Или "Donate to the author"
        "es": "Apoyar al autor",
        "zh-CN": "支持作者",
        "fr": "Soutenir l'auteur",
        "de": "Den Autor unterstützen",
        "ja": "作者を支援する",
        "pt-BR": "Apoiar o autor",
        "ar": "ادعم المؤلف",
        "tr": "Yazarı destekle"
    },
    "supportId": {
        "ru": "ПОДДЕРЖКА АВТОРА",
        "sr": "ПОДРШКА АУТОРА",
        "en": "SUPPORT AUTHOR",
        "es": "SOPORTE AL AUTOR",
        "zh-CN": "支持作者",
        "fr": "SOUTIEN À L'AUTEUR",
        "de": "AUTOR UNTERSTÜTZEN",
        "ja": "著者をサポート",
        "pt-BR": "APOIO AO AUTOR",
        "ar": "دعم المؤلف",
        "tr": "YAZARI DESTEKLE"
    },
    "supportHowHelp": {
        "ru": "Как вы можете поддержать проект:",
        "sr": "Како можете подржати пројекат:",
        "en": "How you can support the project:",
        "es": "Cómo puedes apoyar el proyecto:",
        "zh-CN": "您如何支持项目：",
        "fr": "Comment vous pouvez soutenir le projet :",
        "de": "Wie Sie das Projekt unterstützen können:",
        "ja": "プロジェクトをサポートする方法：",
        "pt-BR": "Como você pode apoiar o projeto:",
        "ar": "كيف يمكنك دعم المشروع:",
        "tr": "Projeyi nasıl destekleyebilirsiniz:"
    },
    "tellUs": {
        "ru": "Рассказать друзьям о приложении! 🗣️",
        "sr": "Реците пријатељима за апликацију! 🗣️",
        "en": "Tell friends about the app! 🗣️",
        "es": "¡Cuéntale a tus amigos sobre la aplicación! 🗣️",
        "zh-CN": "告诉朋友这个应用！ 🗣️",
        "fr": "Parlez-en à vos amis ! 🗣️",
        "de": "Erzähle Freunden von der App! 🗣️",
        "ja": "アプリについて友達に話してください！ 🗣️",
        "pt-BR": "Conte aos amigos sobre o app! 🗣️",
        "ar": "أخبر الأصدقاء عن التطبيق! 🗣️",
        "tr": "Arkadaşlarınıza uygulamadan bahsedin! 🗣️"
    },
    "thanksForSupport": {
        "ru": "Спасибо за использование приложения! Любая поддержка мотивирует на развитие проекта дальше.",
        "sr": "Хвала вам што користите апликацију! Свака подршка мотивише даљи развој пројекта.",
        "en": "Thank you for using the app! Any support motivates further development.",
        "es": "¡Gracias por usar la aplicación! Cualquier apoyo motiva el desarrollo futuro.",
        "zh-CN": "感谢您使用此应用程序！任何支持都会激励我继续开发。",
        "fr": "Merci d'utiliser l'application ! Tout soutien motive le développement futur.",
        "de": "Vielen Dank, dass Sie die App verwenden! Jede Unterstützung motiviert zur Weiterentwicklung.",
        "ja": "アプリをご利用いただきありがとうございます！ご支援は今後の開発の励みになります。",
        "pt-BR": "Obrigado por usar o app! Qualquer apoio motiva o desenvolvimento futuro.",
        "ar": "شكرًا لاستخدامك التطبيق! أي دعم يشجع على تطوير المشروع في المستقبل.",
        "tr": "Uygulamayı kullandığınız için teşekkür ederiz! Herhangi bir destek, gelecekteki gelişimi motive eder."
    },
    // --- Комплексные переводы с HTML ---
    "putStar": {
        "ru": "Поставить звезду на <a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> ⭐",
        "sr": "Дајте звездицу на <a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> ⭐",
        "en": "Star on <a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> ⭐",
        "es": "Dar una estrella en <a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> ⭐",
        "zh-CN": "在 <a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> 上点赞 ⭐",
        "fr": "Donnez une étoile sur <a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> ⭐",
        "de": "Stern auf <a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> geben ⭐",
        "ja": "<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> でスターをつける ⭐",
        "pt-BR": "Dê uma estrela no <a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> ⭐",
        "ar": "ضع نجمة على <a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a> ⭐",
        "tr": "<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io' target='_blank' style='color: #00aaff;'>GitHub</a>'da yıldız ver ⭐"
    },
    "financialHelpWallet": {
        "ru": "Финансовая поддержка через кошелёк (wallet) <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "sr": "Финансијска подршка преко новчаника (wallet) <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "en": "Financial support via wallet <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "es": "Apoyo financiero a través de la billetera <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "zh-CN": "通过钱包提供财务支持 <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "fr": "Soutien financier via le portefeuille <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "de": "Finanzielle Unterstützung über Wallet <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "ja": "ウォレット経由の金銭的支援 <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "pt-BR": "Apoio financeiro via carteira <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "ar": "الدعم المالي عبر المحفظة <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰",
        "tr": "Cüzdan aracılığıyla maddi destek <a href='https://yoomoney.ru/to/410015336126322' target='_blank' rel='noopener noreferrer' style='color: #00aaff;'>YooMoney</a> 💰"
    },
    "financialHelpBoosty": {
        "ru": "Финансовая поддержка: <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "sr": "Финансијска подршка: <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "en": "Financial support: <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "es": "Apoyo financiero: <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "zh-CN": "财务支持： <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "fr": "Soutien financier : <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "de": "Finanzielle Unterstützung: <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "ja": "金銭的支援： <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "pt-BR": "Apoio financeiro: <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "ar": "الدعم المالي: <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰",
        "tr": "Maddi destek: <a href='https://boosty.to/ghostwarriorxz/donate' target='_blank' style='color: #00aaff;'>Boosty</a> 💰"
    },
    "financialHelpDonationAlerts": {
        "ru": "Финансовая поддержка (иностранные пользователи) <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "sr": "Финансијска подршка (корисници из других земаља) <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "en": "Financial support (foreign users) <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "es": "Apoyo financiero (usuarios extranjeros) <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "zh-CN": "财务支持（外国用户） <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "fr": "Soutien financier (utilisateurs étrangers) <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "de": "Finanzielle Unterstützung (ausländische Benutzer) <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "ja": "金銭的支援（海外ユーザー） <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "pt-BR": "Apoio financeiro (usuários estrangeiros) <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "ar": "الدعم المالي (للمستخدمين الأجانب) <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰",
        "tr": "Maddi destek (yabancı kullanıcılar için) <a href='https://www.donationalerts.com/r/ghostwarriorxz' target='_blank' style='color: #FF0FA0;'>donationalerts</a> 💰"
    },
    "reportError": {
        "ru": "Сообщить об ошибках или предложить идеи (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>Issues на GitHub</a>)",
        "sr": "Пријавите грешке или предложите идеје (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>Issues на GitHub</a>)",
        "en": "Report errors or suggest ideas (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>Issues on GitHub</a>)",
        "es": "Reportar errores o sugerir ideas (<a href='https://github.com/Maksim2021-whiteHAKER/Cubik_rubika/issues' target='_blank' style='color: #00aaff;'>Issues en GitHub</a>)",
        "zh-CN": "报告错误或提出建议 (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>GitHub 上的 Issues</a>)",
        "fr": "Signaler des erreurs ou suggérer des idées (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>Issues sur GitHub</a>)",
        "de": "Fehler melden oder Ideen vorschlagen (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>Issues auf GitHub</a>)",
        "ja": "エラーを報告するか、アイデアを提案してください (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>GitHub 上の Issues</a>)",
        "pt-BR": "Relatar erros ou sugerir ideias (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>Issues no GitHub</a>)",
        "ar": "الإبلاغ عن الأخطاء أو اقتراح الأفكار (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>Issues على GitHub</a>)",
        "tr": "Hataları bildirin veya fikir önerin (<a href='https://github.com/Maksim2021-whiteHAKER/connectFour.github.io/issues' target='_blank' style='color: #00aaff;'>GitHub'daki Issues</a>)"
    },
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
    for (const [paramKey, paramValue] of Object.entries(params)) {
        const placeholder = `{{${paramKey}}}`;
        translatedText = translatedText.replace(new RegExp(placeholder, 'g'), paramValue);
    }

    return translatedText;
}

// 5. УЛУЧШЕННАЯ Функция для применения переводов
function applyTranslations() {
    for (const key in translations) {
        if (translations.hasOwnProperty(key)) {
            const element = document.getElementById(key);
            if (element) {
                // Получаем перевод
                const translatedText = t(key);

                // Проверяем, содержит ли перевод HTML-теги (например, <a>)
                // Простая проверка: наличие '<' и '>'
                if (translatedText.includes('<') && translatedText.includes('>')) {
                    // Если содержит HTML, используем innerHTML
                    element.innerHTML = translatedText;
                } else {
                    // Если простой текст, используем textContent
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        if (element.hasAttribute('placeholder')) {
                            element.placeholder = translatedText;
                        } else {
                            element.value = translatedText;
                        }
                    } else if (element.tagName === 'IMG') {
                        element.alt = translatedText;
                    } else {
                        element.textContent = translatedText;
                    }
                }
            }
        }
    }
}

// x. Функция для версии
export function updateVersionDisplay(){
    const ver = document.getElementById('ver')
    const versionSpan = document.getElementById('versionSpan')
    versionSpan.style.color = '#f03232';
    versionSpan.style.marginTop = '5px';
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
    { code: 'sr', name: 'Српски'},
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

// зависят от version_game, пусты
let flagImages = {};
let flagEmoji = {};
let flagNames = {};

const emoji = [
    {lang: 'Россия', name: 'ru', symbol: '♾'},
    {lang: 'Србија', name: 'sr', symbol: '😇'},
    {lang: 'USA', name: 'en', symbol: '⚠'},
    {lang: 'España', name: 'es', symbol: '🌴'},
    {lang: '中国', name: 'zh-CN', symbol: '🟥🛠'},
    {lang: 'France', name: 'fr', symbol: '🥖'},
    {lang: 'Deutschland', name: 'de', symbol: '🛠'},
    {lang: '日本', name: 'ja', symbol: '🍣'},
    {lang: 'Brasil', name: 'pt-BR', symbol: '☀'},
    {lang: 'المملكة العربية السعودية', name: 'ar', symbol: '⛱'},
    {lang: 'Türkiye', name: 'tr', symbol: '☪'},
    {lang: 'Удмуртия', name: 'udm', symbol: '🌲🌸'},
]

function initializeFlags(){
    if (version_game === 'full'){
        flagImages = {
            'ru': '/assets/flags/svg/myhomeland.svg',
            'sr': '/assets/flags/svg/brotherSerb.svg',
            'en': '/assets/flags/svg/Flag-of-USAXPENP.svg',
            'es': '/assets/flags/svg/Flag-of-Spain.svg',
            'zh-CN': '/assets/flags/svg/Flag-of-China.svg',
            'fr': '/assets/flags/svg/Flag-of-France.svg',
            'de': '/assets/flags/svg/Flag-of-Germany.svg',
            'ja': '/assets/flags/svg/Flag-of-japan.svg',
            'pt-BR': '/assets/flags/svg/Flag-of-Brazil.svg',
            'ar': '/assets/flags/svg/Flag-of-Saudi_Arabia.svg',
            'tr': '/assets/flags/svg/Flag-of-Turkiye.svg',
            'udm': '/assets/flags/svg/mylittlehomeland.svg',
        };
        emoji.forEach(item => {
            flagEmoji[item.name] = item.symbol;
            flagNames[item.name] = item.lang;
        });
        

    } else {
        flagImages = {};
        emoji.forEach(item => {
            flagEmoji[item.name] = item.symbol;
            flagNames[item.name] = item.lang;
        });
    }
}

export function getFlagImages(){
    return flagImages;
}

export function getflagEmoji(){
    return flagEmoji;
}

initializeFlags();

export function logicSlider(){
    setTimeout(() => {
        console.log(flagNames)
        const sliderContainer = document.getElementById('languageSliderContainer');
        const sliderFlagsContainer = document.getElementById('sliderFlags');
        const sliderPrevBtn = document.getElementById('sliderPrev');
        const sliderNextBtn = document.getElementById('sliderNext');
        const currentLang = window.currentLanguage || 'ru'; // Получаем текущий язык
        const typeVersion = document.getElementById('typeVersion');

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

                const flagContent = document.createElement('div');
                flagContent.style.display = 'flex';
                flagContent.style.flexDirection = 'column'; // Элементы будут в столбик
                flagContent.style.alignItems = 'center'; // Центрируем по горизонтали
                flagContent.style.justifyContent = 'center'; // Центрируем по вертикали
                flagContent.style.gap = '0.5px'; // Отступ между флагом и названием

                let flagElement;
                if (version_game === 'full' & flagImages[langData.code]){  

                    const flagImg = document.createElement('img');
                    typeVersion.textContent = 'Full';
                    flagImg.className = 'lang-flag-img';
                    flagImg.src = flagImages[langData.code];
                                
                    flagImg.alt = langData.name || langData.code.toUpperCase();
                    
                    flagImg.onerror = function(){
                        console.log(`[${langData.code}] Эмодзи fallback triggered`);
                        this.style.display = 'none';
                        // const flagContainer = this.parentElement;
                        const emojiSpan = document.createElement('span');
                        emojiSpan.className = 'lang-flag-emoji';
                        emojiSpan.textContent = flagEmoji[langData.code] || langData.code.toUpperCase();
                        flagBtn.appendChild(emojiSpan);
                    }

                    flagElement = flagImg;
                } else {
                    const emojiSpan = document.createElement('span');
                    typeVersion.textContent = 'Lite';
                    emojiSpan.className = 'lang-flag-emoji';
                    emojiSpan.textContent = flagEmoji[langData.code] || langData.code.toUpperCase();
                    flagElement = emojiSpan;
                }

                flagContent.appendChild(flagElement);

                // Создаем элемент для названия языка
                const nameDiv = document.createElement('div');
                nameDiv.className = 'lang-flag-name';
                nameDiv.textContent = flagNames[langData.code] || langData.name; // Используем название страны или имя языка
                nameDiv.style.fontSize = '15px'; // Размер шрифта для названия
                nameDiv.style.textAlign = 'center'; // Центрируем текст
                nameDiv.style.overflow = 'hidden';
                nameDiv.style.textOverflow = 'ellipsis';
                nameDiv.style.whiteSpace = 'nowrap';
                nameDiv.title = flagNames[langData.code] || langData.name; // Всплывающая подсказка для длинных названий
            
                // Добавляем название в контейнер (оно будет под флагом/эмодзи)
                flagContent.appendChild(nameDiv);
            
                // Добавляем контейнер в кнопку
                flagBtn.appendChild(flagContent);
            
                // Добавляем кнопку в слайдер
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

    }, 150); // Небольшая задержка для уверенности в загрузке DOM
}

export function setVersion(newVersion){
    if (version_game === 'lite' || version_game === 'full'){
        version_game = newVersion;
        initializeFlags();
        if (typeof logicSlider === 'function'){
            logicSlider();
        }
    } else {
        console.warn(`Неизвестная версия: ${newVersion}, введите lite || full`);
    }
}