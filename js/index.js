var music = new Audio('./audio/monster.mp3');
music.loop = true;
var isMusicPlaying = false;
var hasAudioBeenPlayed = false;



const quiz = {
  titles: {
    1: "Загадка первая, исконная",
    2: "Загадка вторая, таинственная",
    3: "Загадка третья, киноведческая",
    4: "Загадка четвёртая, рубиновая",
    5: "Загадка пятая, волшебная",
    6: "Загадка шестая, жутиковая",
    7: "Загадка седьмая, трагическая",
    8: "Загадка восьмая, стимулирующая",
    9: "Загадка девятая, мрачная",
    10: "Загадка десятая, заполярная",
    11: "Загадка одиннадцатая, комическая",
    12: "Загадка двенадцатая, оздоровительная",
    13: "Последняя тайна Древнего Бяо",
  },
  texts: {
    1: "Синташтинские мартыны<br>Здесь катались на повозках.<br>Здесь родился Заратустра,<br>У него был хвост в полоску.<br><br>Говорил он: «Нелюдим<br>Круглый город _____.»",
    2: "Её фамилию любая<br>Мартышка скажет без труда.<br>Герой романов с болторезом<br>Разрежет бомбы провода,<br><br>Раскроет тайну обезьяны<br>И, не забыв про пистолет,<br>Горошка плошкой подкрепится —<br>И новый ждёт тебя сюжет!",
    3: "Ностальгия прошла,<br>Словно и не бывало.<br>И каток проскрипел,<br>Только этого мало.<br><br>Вёл мучений дневник<br>Режиссёр пятипалый.<br>Назовите его.<br>Уже будет немало.",
    4: "Две неразлучные подруги<br>Повсюду носят чемодан.<br>Хранится в нём большая тайна,<br>Что ищёт злобный старикан.<br><br>Им молока лишь предложи ты —<br>Они признаются в любви.<br>Невелики их габариты.<br>Одну хотя бы назови!",
    5: "Есть, как известно, три заклятья,<br>Простить которые нельзя.<br>От первого ты ласты склеишь,<br>Никак его не отразя.<br><br>Второе долго будет мучить,<br>Пощады ты и не проси.<br>А третье попрошу озвучить,<br>Как же его произнести?",
    6: "Наш новый гость —<br>Твой злой близнец,<br>Что в зеркале живёт.<br>Лишь только зазеваешься,<br>Тебя он украдёт,<br><br>Заточит в зазеркалье и, страшно хохоча,<br>С твоим ветпаспортом в руке<br>Злодей даст стрекача.",
    7: "Знакомую мартышку я пригласил на ветку,<br>Под тенью листьев было очень мало света.<br>Злой рок: банан на голову её упал.<br>Мартышку эту я, клянусь, не убивал!<br><br>Невинен совершенно был мой ангажемент,<br>Всего лишь я хотел ей показать свой _____.",
    8: "По две банки дуем разом<br>Чудного нектара с газом,<br>Сам великий Барабим<br>В магазин ходил за ним.<br><br>Чтобы бегать быстро-быстро,<br>Чтобы высоко скакать,<br>Чтобы хвост был шелковистый,<br>И нигде не опоздать.",
    9: "Так и уходим, других не ждя,<br>Лапами глухо топочем.<br>Мы – одинокие псы дождя<br>В сердце субботней ночи.<br><br>Рыбы, тромбоны и мечи,<br>Старый мартын в засаленном фраке<br>Будет звуки дробить, а игрунка Чи-чи<br>Всю себя истерзает во мраке.<br><br>Это хто?",
    10: "ТРЭКОЛ заправлен, стёклы чисты,<br>Сегодня обошла беда.<br>Текут все реки в Саранпауль,<br>Блестит прозрачная вода.<br><br>Подводный мир пусть спит спокойно,<br>На страже друг всех обезьян,<br>Обрадованный красотою,<br>Отважный _______ !",
    11: "Тину, толстую свинью,<br>Кормит десять раз на дню,<br>Льва и тигра совместит,<br>И станцует «Canned Heat».",
    12: "Если лапу повредили,<br>Если хвост вы прищемили,<br>Если чешутся бока,<br>Или просто жизнь горька,<br><br>Не печальтесь, не тужите,<br>Кончились все беды.<br>С зайкой градусник поставят<br>В госпитале «_____».",
    13: "Взгляни-ка на свои ответы:<br>Танцуют буковки фокстрот!<br>Ты прочитать их можешь прямо,<br>А можешь и наоборот.<br><br>Найди, что спрятано доселе,<br>И имя тайное введи.<br><span id='hidden-text'>Тобой доволен Мудрый Ляо,<br>Счастливый год ждёт впереди!</span>",
  },
  images: {
    1: "arkaim.jpg",
    2: "nancy.jpg",
    3: "tarkovsky.jpg",
    4: "vifsla.jpg",
    5: "moody.jpg",
    6: "doppelganger.jpg",
    7: "knyazz.jpg",
    8: "pulseup.gif",
    9: "waits.jpg",
    10: "usik.jpg",
    11: "napoleon.jpg",
    12: "veda.jpg",
    13: "lyao.jpg",
  },
  possibleAnswers: {
    1: ["аркаим"],
    2: ["нэнси дрю", "нэнси дру", "нэнси", "дрю", "дру", "nancy drew", "nancy", "drew"],
    3: ["андрей тарковский", "андрей", "тарковский"],
    4: ["вифсла", "тофсла", "тофсла и вифсла", "вифсла и тофсла", "тофсла вифсла", "вифсла тофсла"],
    5: ["империус", "imperio", "империо", "imperius"],
    6: ["доппельгангер", "допельгангер", "двойник", "doppelganger"],
    7: ["инструмент"],
    8: ["pulse up", "pulse", "pulseup", "пульс ап", "пульс", "пульсап"],
    9: ["том уэйтс", "том вэйтс", "том уейтс", "том", "уэйтс", "вэйтс", "уейтс", "tom waits", "tom", "waits"],
    10: ["усик маркосян", "усик", "маркосян"],
    11: ["наполеон", "динамит", "наполеон динамит", "napoleon", "dynamite", "napoleon dynamite"],
    12: ["веда", "veda"],
    13: ["ляо"],
  },
  correctAnswers: {
    1: "<span>А</span>ркаим",
    2: "<span>Н</span>энси Дру",
    3: "<span>А</span>ндрей Тарковский",
    4: "<span>В</span>ифсла и Тофсла",
    5: "<span>И</span>мпериус",
    6: "<span>Д</span>оппельгангер",
    7: "<span>И</span>нструмент",
    8: "<span>Р</span>ulse Up",
    9: "<span>Т</span>ом Уэйтс",
    10: "<span>У</span>сик Маркосян",
    11: "<span>Н</span>аполеон",
    12: "<span>В</span>еда",
    13: "Ляо",
  },
  taunts: [
    "Ты пишешь какую-то ерунду, мартын! Пиши понятней!",
    "Соберись, обезьяныш!",
    "Нужно ещё немножко почесать мохнатую башку!",
    "Ну что ты такое пишешь, мистер, опомнись!",
    "Нет, это не то! Ну как же ты так, старина...",
  ],
  praises: [
    "Ты прав, маленький умник!",
    "Вот это да, вот это молодец! Правильно!",
    "Ого, похоже, ещё один нейрон закреплён!",
    "Невероятно! Так и победить недолго!",
    "Наверное, ты считаешься большим мудрецом своего племени!"
  ]
};

const header = document.getElementById("main-content__header");
const text = document.getElementById("main-content__text");
const image = document.getElementById("image");
const list = document.getElementById("list-answers");
const tooltip = document.getElementById("text-tooltip");
const input = document.getElementById("input-commit");
const buttonCommit = document.getElementById("button-commit");
const buttonContinue = document.getElementById("button-continue");
const buttonMusic = document.getElementById("button-music");
const hint = document.getElementById("text-hint");

header.innerText = quiz.titles[1];
text.innerHTML = quiz.texts[1];
image.setAttribute("src", `./img/${quiz.images[1]}`);



function showTooltipWithSound() {
  if (!hasAudioBeenPlayed) {
    let audio = new Audio('./audio/chirp.mp3');
    audio.play();
    hasAudioBeenPlayed = true;
  }

  const dateBirthdayMin = new Date(2022, 11, 22);
  const dateBirthdayMax = new Date(2022, 11, 23);
  let date = new Date();

  if (date < dateBirthdayMin) {
    tooltip.innerHTML = "Ещё не наступил, рано пришли!";
  } else if (date > dateBirthdayMax) {
    tooltip.innerHTML = "Уже прошёл, приходите через год!";
  } else {
    tooltip.innerHTML = "Это сегодня! Какая удача!";
  }

  tooltip.style.opacity = 1;
  tooltip.style.visibility = "visible";

  setTimeout(() => {
    tooltip.style.opacity = 0;
    tooltip.style.visibility = "hidden";
  }, 3000)
}



function playMusic() {
  if (!isMusicPlaying) {
    isMusicPlaying = true;
    music.play();
    buttonMusic.innerHTML = "<img src='./img/pause.png' alt=''>";
  } else {
    isMusicPlaying = false;
    music.pause();
    buttonMusic.innerHTML = "<img src='./img/music.png' alt=''>";
  }
}



function fillAnswers(value) {
  let listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.innerHTML = value;
  list.appendChild(listItem);

  setTimeout(function () {
    listItem.style.opacity = 1;
  }, 100);
}



input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let button = buttonCommit.style.display != "none" ? buttonCommit : buttonContinue;
    button.classList.add("button__pressed");
  };
});

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    let button = buttonCommit.style.display != "none" ? buttonCommit : buttonContinue;
    button.classList.remove("button__pressed");
    button.click();
  };
});



let timer;

const runTimer = () => {
  timer = window.setTimeout(
    () => {
      hint.style.opacity = 0;
      hint.style.visibility = "hidden";
      input.style.backgroundColor = "white";
      input.style.boxShadow = "0 0 .3rem .3rem white, .6rem .6rem .2rem gray";
    }, 3000);
}



function loadNext(number) {
  if (number === Object.keys(quiz.titles).length) {
    for (let letter of list.getElementsByTagName("span")) {
      letter.classList.add("shaking-letters");
    };
  }
  header.style.opacity = 0;
  text.style.opacity = 0;
  image.style.opacity = 0;
  header.style.transition = `opacity 500ms`;
  text.style.transition = `opacity 500ms`;
  image.style.filter = "grayscale(100%) blur(0.5rem)";
  setTimeout(() => {
    header.style.opacity = 1;
    text.style.opacity = 1;
    image.style.opacity = 1;
    header.innerText = quiz.titles[number];
    text.innerHTML = quiz.texts[number];
    image.setAttribute("src", `./img/${quiz.images[number]}`);
  }, 500);


  input.value = "";
  input.removeAttribute("disabled");
  buttonCommit.setAttribute("onclick", `checkQuestion(${number})`);

  // initial styling
  hint.style.opacity = 0;
  input.style.backgroundColor = "white";
  input.style.boxShadow = "0 0 .3rem .3rem white, .6rem .6rem .2rem gray";
  buttonContinue.style.display = "none";
  buttonCommit.style.display = "inline-block";

  input.focus();
}



function checkQuestion(number) {
  const value = input.value.toLowerCase()

  if (quiz.possibleAnswers[number].includes(value)) {
    input.style.backgroundColor = "var(--light-green)";
    input.style.boxShadow = "0 0 .3rem .3rem var(--light-green), .6rem .6rem .2rem gray";
    image.style.filter = "none";
    hint.innerText = quiz.praises[Math.floor(Math.random() * quiz.praises.length)];
    buttonCommit.style.display = "none";
    buttonContinue.style.display = "inline-block";

    if (number < Object.keys(quiz.titles).length) {
      fillAnswers(quiz.correctAnswers[number]);
      buttonContinue.setAttribute("onclick", `loadNext(${number + 1})`);
    } else {
      const hiddenText = document.getElementById("hidden-text");
      hiddenText.style.opacity = "1";
      buttonContinue.setAttribute("onclick", "location.href='./congratulations.html'");
    }
  } else {
    input.style.backgroundColor = "var(--light-red)";
    input.style.boxShadow = "0 0 .3rem .3rem var(--light-red), .6rem .6rem .2rem gray";
    if (value === "") {
      hint.innerText = "Не забудь написать ответ, дуралей!";
    } else if (isNaN(value)) {
      hint.innerText = quiz.taunts[Math.floor(Math.random() * quiz.taunts.length)];
    };
  };

  hint.style.opacity = 1;
  hint.style.visibility = "visible";

  clearTimeout(timer);
  runTimer();
}