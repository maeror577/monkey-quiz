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
    8: "Загадка восьмая, ",
    9: "Загадка девятая, ",
    10: "Загадка десятая, заполярная",
    11: "Загадка одиннадцатая, ",
    12: "Загадка двенадцатая,",
    13: "Последняя тайна Древнего Бяо",
  },
  texts: {
    1: "Синташтинские мартыны<br>Здесь катались на повозках.<br>Здесь родился Заратустра,<br>У него был хвост в полоску.<br><br>Говорил он: «Нелюдим<br>Круглый город _____.»",
    2: "Её фамилию любая<br>Мартышка скажет без труда.<br>Герой романов с болторезом<br>Разрежет бомбы провода,<br><br>Раскроет тайну обезьяны,<br>И башни, и особняка.<br>И главное, прошу заметить,<br>Без поисковика.",
    3: "Ностальгия прошла,<br>Словно и не бывало.<br>И каток проскрипел,<br>Только этого мало.<br><br>Вёл «Мартиролог»<br>Режиссёр пятипалый.<br>Назовите его.<br>Уже будет немало.",
    4: "Две неразлучные подруги<br>Повсюду носят чемодан.<br>Хранится в нём большая тайна,<br>Что ищёт злобный старикан.<br><br>Им молока лишь предложи ты —<br>Они признаются в любви.<br>Невелики их габариты.<br>Одну хотя бы назови!",
    5: "Есть, как известно, три заклятья,<br>Простить которые нельзя.<br>От первого ты ласты склеишь,<br>Никак его не отразя.<br><br>Второе долго будет мучить,<br>Пощады ты и не проси.<br>А третье попрошу озвучить,<br>Как же его произнести?",
    6: "Наш новый гость —<br>Твой злой близнец,<br>Что в зеркале живёт.<br>Лишь только зазеваешься,<br>Тебя он украдёт,<br><br>Заточит в зазеркалье и, страшно хохоча,<br>С твоим ветпаспортом в руке<br>Злодей даст стрекача.",
    7: "Знакомую мартышку я пригласил на ветку,<br>Под тенью листьев было очень мало света.<br>Злой рок: банан на голову её упал.<br>Мартышку эту я, клянусь, не убивал!<br><br>Невинен совершенно был мой ангажемент,<br>Всего лишь я хотел ей показать свой _____.",
    8: "Текст загадки",
    9: "Мой сосед был толстый жутко<br>И с чернушками дружил,<br>На котобусе катался.<br>Он окрестный лес хранил.<br><br>  <br>Узкоглазые мультфильмы.",
    10: "ТРЭКОЛ заправлен, стёклы чисты,<br>Сегодня обошла беда.<br>Текут все реки в Саранпауль,<br>Блестит прозрачная вода.<br><br>Подводный мир пусть спит спокойно,<br>На страже друг всех обезьян,<br>Обрадованный красотою,<br>Отважный _______ !",
    11: "Текст загадки",
    12: "Текст загадки",
    13: "Взгляни-ка на свои ответы:<br>Танцуют буковки фокстрот!<br>Ты прочитать их можешь прямо,<br>А можешь и наоборот.<br><br>Найди, что спрятано доселе,<br>И слово тайное введи.<br>Тобой доволен Мудрый Бяо,<br>Счастливый год ждёт впереди!",
  },
  images: {
    1: "arkaim.jpg",
    2: "nancy.jpg",
    3: "tarkovsky.jpg",
    4: "vifsla.jpg",
    5: "moody.jpg",
    6: "doppelganger.jpg",
    7: "knyazz.jpg",
    8: "weasley.jpg",
    9: "weasley.jpg",
    10: "usik.jpg",
    11: "weasley.jpg",
    12: "weasley.jpg",
    13: "weasley.jpg",
  },
  possibleAnswers: {
    1: ["аркаим"],
    2: ["нэнси дрю", "нэнси дру", "нэнси", "дрю", "дру", "nancy drew", "nancy", "drew"],
    3: ["андрей тарковский", "андрей", "тарковский"],
    4: ["вифсла", "тофсла", "тофсла и вифсла", "вифсла и тофсла", "тофсла вифсла", "вифсла тофсла"],
    5: ["империус", "imperio", "империо", "imperius"],
    6: ["доппельгангер", "допельгангер", "двойник", "doppelganger"],
    7: ["инструмент"],
    8: ["р"],
    9: ["тоторо", "мой сосед тоторо"],
    10: ["усик маркосян", "усик", "маркосян"],
    11: ["н"],
    12: ["в"],
    13: ["0"],
  },
  correctAnswers: {
    1: "<span>А</span>ркаим",
    2: "<span>Н</span>энси Дру",
    3: "<span>А</span>ндрей Тарковский",
    4: "<span>В</span>ифсла и Тофсла",
    5: "<span>И</span>мпериус",
    6: "<span>Д</span>оппельгангер",
    7: "<span>И</span>нструмент",
    8: "<span>Р</span>",
    9: "<span>Т</span>оторо",
    10: "<span>У</span>сик Маркосян",
    11: "<span>Н</span>",
    12: "<span>В</span>",
    13: "0",
  },
  hints: {

  }
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
  if (number > Object.keys(quiz.titles).length) {
    console.log("Done");
  } else {
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
}



function checkQuestion(number) {
  const value = input.value.toLowerCase()

  if (quiz.possibleAnswers[number].includes(value)) {
    input.style.backgroundColor = "var(--light-green)";
    input.style.boxShadow = "0 0 .3rem .3rem var(--light-green), .6rem .6rem .2rem gray";
    image.style.filter = "none";
    hint.innerText = "Ты прав, маленький умник!";
    buttonCommit.style.display = "none";
    buttonContinue.style.display = "inline-block";
    buttonContinue.setAttribute("onclick", `loadNext(${number + 1})`);

    fillAnswers(quiz.correctAnswers[number]);
  } else {
    input.style.backgroundColor = "var(--light-red)";
    input.style.boxShadow = "0 0 .3rem .3rem var(--light-red), .6rem .6rem .2rem gray";
    if (value === "") {
      hint.innerText = "Не забудь написать ответ, дуралей!";
    } else if (isNaN(value)) {
      hint.innerText = "Ты пишешь какую-то ерунду, мартын! Пиши понятней!";
    } else if (Number(value) < 5) {
      hint.innerText = "Похоже, кого-то ты забыл, мой юный друг!";
    } else if (Number(value) > 5) {
      hint.innerText = "Что-то многовато у тебя вышло. Сестры и сам Рундил не считаются!";
    }
  };

  hint.style.opacity = 1;
  hint.style.visibility = "visible";

  clearTimeout(timer);
  runTimer();
}