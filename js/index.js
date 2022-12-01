var music = new Audio('./audio/monster.mp3');
music.loop = true;
var isMusicPlaying = false;
var hasAudioBeenPlayed = false;



const quiz = {
  titles: {
    1: "Загадка первая, разминочная",
    2: "Загадка тестовая",
    3: "Загадка",
    4: "Загадка",
    5: "Загадка",
    6: "Загадка",
    7: "Загадка",
    8: "Загадка",
    9: "Загадка",
    10: "Загадка",
    11: "Загадка",
    12: "Загадка",
  },
  texts: {
    1: "Сколько же братьев было у знаменитого<br>гроссмейстера Рундила Уозлика?",
    2: "Текст загадки",
    3: "Текст загадки",
    4: "Текст загадки",
    5: "Текст загадки",
    6: "Текст загадки",
    7: "Текст загадки",
    8: "Текст загадки",
    9: "Текст загадки",
    10: "Текст загадки",
    11: "Текст загадки",
    12: "Текст загадки",
  },
  images: {
    1: "weasley.jpg",
    2: "weasley.jpg",
    3: "weasley.jpg",
    4: "weasley.jpg",
    5: "weasley.jpg",
    6: "weasley.jpg",
    7: "weasley.jpg",
    8: "weasley.jpg",
    9: "weasley.jpg",
    10: "weasley.jpg",
    11: "weasley.jpg",
    12: "weasley.jpg",
  },
  possibleAnswers: {
    1: ["5", "пять", "five"],
    2: ["6"],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
  },
  correctAnswers: {
    1: "Пять",
    2: "Шесть",
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
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
  listItem.innerText = value;
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

  header.style.opacity = 0;
  text.style.opacity = 0;
  image.style.opacity = 0;
  header.style.transition = `opacity 500ms`;
  text.style.transition = `opacity 500ms`;
  image.style.filter = "grayscale(100%) blur(5px)";
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