const quizSelects = document.querySelector(".quiz__main-selects");
const checkInput = document.querySelector(".quiz__check-circle");
const root = document.querySelector(":root");
const quiz__bg = document.querySelectorAll(".quiz__bg");
const quiz__exercise = document.querySelector(".quiz__exercise");

let quizMainExercise;
let result = 0;
let progress = 0;

let data = [
  {
    id: "1",
    name: "HTML",
    logo: "assets/images/Group 83.svg",
    page: [
      {
        id: "1",
        question:
          "Bu rəng kontrakt nisbətlərindən hansı normal mətn üçün minimum WCAG 2.1 Səviyyə AA tələbini müəyyən edir?",
        trueAnswerId: "1",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "4.5 : 1",
          },
          {
            id: "2",
            logo: "B",
            text: "3:1",
          },
          {
            id: "3",
            logo: "C",
            text: "2.5 : 1",
          },
          {
            id: "4",
            logo: "D",
            text: "5 : 1",
          },
        ],
      },
      {
        id: "2",
        question: "HTML Teqləri hansılardır?",
        trueAnswerId: "1",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "img,a, p, address ",
          },
          {
            id: "2",
            logo: "B",
            text: "id, class, data, value",
          },
          {
            id: "3",
            logo: "C",
            text: "let, const, var",
          },
          {
            id: "4",
            logo: "D",
            text: "aside, article, figure, figcaption",
          },
        ],
      },
      {
        id: "3",
        question: "HTML Teqləri və Elementləri oxşardırlar mı?",
        trueAnswerId: "4",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "Bəli, çünki hər ikisi HTML-in bir parçasıdır.",
          },
          {
            id: "2",
            logo: "B",
            text: "Nisbətən oxşardır",
          },
          {
            id: "3",
            logo: "C",
            text: "Xeyr, Teqlər elementlərin bir parçasıdır.",
          },
          {
            id: "4",
            logo: "D",
            text: "Xeyr, Elementlər teqlərin bir parçasıdır.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "CSS",
    logo: "assets/images/Group 82.svg",
    page: [
      {
        id: "1",
        question: "Bunlardan hansı css-i html-ə bağlamaq üsulu deyil?",
        trueAnswerId: "3",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "<link rel='stylesheet'> href='/styles.css'",
          },
          {
            id: "2",
            logo: "B",
            text: "<style></style>",
          },
          {
            id: "3",
            logo: "C",
            text: "<script src='/main.js'>",
          },
          {
            id: "4",
            logo: "D",
            text: "<p style='color:'red'>",
          },
        ],
      },
      {
        id: "2",
        question: "Bunlardan hansi biri CSS Framework-dür?",
        trueAnswerId: "1",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "Foundation",
          },
          {
            id: "2",
            logo: "B",
            text: "AOS",
          },
          {
            id: "3",
            logo: "C",
            text: "W3Schools",
          },
          {
            id: "4",
            logo: "D",
            text: "Node.js",
          },
        ],
      },
      {
        id: "3",
        question: "Üstünlük cəhətdən daxil edilən CSS ardıcıllığı hansıdır?",
        trueAnswerId: "4",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "id > inline(style) > * > class > !important",
          },
          {
            id: "2",
            logo: "B",
            text: "class > id > inline(style) > * > !important",
          },
          {
            id: "3",
            logo: "C",
            text: "* > id > class > inline(style) > !important",
          },
          {
            id: "4",
            logo: "D",
            text: "!important > inline(style) > id > class > *",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "JavaScript",
    logo: "assets/images/Group 82 (1).svg",
    page: [
      {
        id: "1",
        question: "JavaScript-i kim inkişaf etdirib?",
        trueAnswerId: "2",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "Lütfi Zadə",
          },
          {
            id: "2",
            logo: "B",
            text: "Brendan Eich",
          },
          {
            id: "3",
            logo: "C",
            text: "Albert Einstein",
          },
          {
            id: "4",
            logo: "D",
            text: "İlber Ortaylı",
          },
        ],
      },
      {
        id: "2",
        question: "Hoisting məntiqi: hansı cavabda error vermiyəcəkdir?",
        trueAnswerId: "3",
        answers: [
          {
            id: "1",
            logo: "A",
            text: `carName = "Volvo"
                     let carName;
            `,
          },
          {
            id: "2",
            logo: "B",
            text: `carName = "Volvo"
                     const carName;
          `,
          },
          {
            id: "3",
            logo: "C",
            text: `carName = "Volvo"
                     var carName;
          `,
          },
          {
            id: "4",
            logo: "D",
            text: "Hər üçündə işləyəcəkdir",
          },
        ],
      },
      {
        id: "3",
        question: "JavaScript HTML-ə neçə üsulla qoşulur?",
        trueAnswerId: "2",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "2",
          },
          {
            id: "2",
            logo: "B",
            text: "3",
          },
          {
            id: "3",
            logo: "C",
            text: "4",
          },
          {
            id: "4",
            logo: "D",
            text: "5",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Accessibility",
    logo: "assets/images/Group 83 (1).svg",
    page: [
      {
        id: "1",
        question: "Şəkili görə bilməyən şəxs üçün necə əlçatan edə bilərik?",
        trueAnswerId: "1",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "Ekran oxuyucularına şəkli təsvir edən alternativ (“alt”) mətn əlavə edin.",
          },
          {
            id: "2",
            logo: "B",
            text: "Şəkilsiz səhifənin ayrıca versiyasını yaradın.",
          },
          {
            id: "3",
            logo: "C",
            text: "Şəkillər və fotoşəkillər vizualdır və heç bir halda istifadə edilməməlidir",
          },
          {
            id: "4",
            logo: "D",
            text: "(“src”)-lə şəklin linkini yazdırmalıyıq",
          },
        ],
      },
      {
        id: "2",
        question:
          "Audio məzmun üçün başlıqlar və transkriptlərdən kim faydalanır?",
        trueAnswerId: "3",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "Səs-küylü və ya sakit mühitdə olan insanlar",
          },
          {
            id: "2",
            logo: "B",
            text: "Dinləyərkən ekranda mətni oxumaqdan faydalanan koqnitiv qüsurlu insanlar",
          },
          {
            id: "3",
            logo: "C",
            text: "Kar və ya eşitmə qabiliyyəti zəif olan insanlar.",
          },
          {
            id: "4",
            logo: "D",
            text: "Yuxarıda sadalananların hamısı",
          },
        ],
      },
      {
        id: "3",
        question: "Rəng əlçatanlığı üçün aşağıdakılardan hansı tövsiyə olunur?",
        trueAnswerId: "2",
        answers: [
          {
            id: "1",
            logo: "A",
            text: "Səhifənin ayrıca qara-ağ versiyasını yaradın",
          },
          {
            id: "2",
            logo: "B",
            text: "Mətnin rəngi ilə fon rəngi arasında yüksək kontrast səviyyəsini təmin edin.",
          },
          {
            id: "3",
            logo: "C",
            text: "Nə olursa olsun, canlı, zəngin rəng birləşmələrindən ciddi şəkildə qaçınmaq lazımdır",
          },
          {
            id: "4",
            logo: "D",
            text: "Heç biri",
          },
        ],
      },
    ],
  },
];

let params = getCurrentUrl();

function setUrlParams(type, newparams) {
  let url = new URL(window.location.href);

  if (type === "delete") {
    url.search = "";
    generateCategory(data);
    result = 0;
    progress = 0;
  } else if (type === "update") {
    Object.entries(newparams).forEach(([key, value]) =>
      url.searchParams.set(key, value)
    );
    newparams.result
      ? generateResultPage(newparams.categoryID)
      : generateQuestionPage(newparams.categoryID, newparams.questionID);
  }
  window.history.replaceState({}, "", url);
}

function getCurrentUrl() {
  let urlParams = new URLSearchParams(window.location.search);
  let categoryID = urlParams.get("categoryID");
  let questionID = urlParams.get("questionID");
  let quizResult = urlParams.get("result");
  let pathName = window.location.pathname.split("/").pop();

  return {
    categoryID: categoryID,
    questionID: questionID,
    result: quizResult,
    pathName: pathName,
  };
}

function getQuestionId(catID) {
  let category = data.find((item) => item.id === catID);
  if (category && category.page && category.page.length > 0) {
    return category.page[0].id;
  } else {
    return null;
  }
}

function getNextQuestion(catID, currentPageID) {
  let findCurrentData = data.find((item) => item.id === catID);

  if (!findCurrentData || !findCurrentData.page) {
    return null;
  }

  let findCurrentIndex = findCurrentData.page.findIndex(
    (item) => item.id === currentPageID
  );

  if (
    findCurrentIndex == -1 ||
    findCurrentIndex == findCurrentData.page.length - 1
  ) {
    return null;
  }

  return findCurrentData.page[findCurrentIndex + 1];
}

function callAnswerOrCategory(type) {
  quizMainExercise = document.querySelectorAll(".quiz__main-exercise");
  quizMainExercise.forEach((item) => {
    if (type === "category") {
      item.addEventListener("click", categoryClick);
    } else if (type === "question") {
      item.addEventListener("click", handleClick);
    }
  });
}

function generateById(catID, questionID) {
  let category = data.find((item) => item.id === catID);
  if (category && category.page && category.page.length > 0) {
    let question = category.page.find((q) => q.id === questionID);
    return question;
  } else {
    return null;
  }
}

function categoryClick(event) {
  let catID = event.target.getAttribute("data-category-id");
  let quesID = getQuestionId(catID);

  let newSetParams = {
    categoryID: catID,
    questionID: quesID,
  };
  setUrlParams("update", newSetParams);
}

function handleClick(event) {
  quizMainExercise.forEach((item) => {
    item.classList.remove("selected");
  });
  event.target.classList.add("selected");
}

function nextBtn(questionCheck, catID) {
  let submitAnswer = document.querySelector("#nextBtn");

  submitAnswer.addEventListener("click", (e) => {
    e.preventDefault();
    let selectElement = document.querySelector(".quiz__main-exercise.selected");
    let selectedID = selectElement?.getAttribute("data-id");

    let rightElement = document.querySelector(
      `.quiz__main-exercise[data-id = "${questionCheck.trueAnswerId}"]`
    );
    let nextQuestion = getNextQuestion(catID, questionCheck.id);

    let rightClassElement = document.querySelector(
      ".quiz__main-exercise.right"
    );

    if (!rightClassElement) {
      if (selectedID) {
        if (selectedID == questionCheck.trueAnswerId) {
          selectElement.classList.add("right");
          e.target.innerText = "Next Question";
          result++;
        } else {
          selectElement.classList.add("wrong");
          e.target.innerText = "Submit Answer";
          rightElement.classList.add("right");
        }
      } else {
        alert("well, u are done!");
      }
    } else {
      if (nextQuestion) {
        setUrlParams("update", {
          categoryID: catID,
          questionID: nextQuestion.id,
        });
      } else {
        setUrlParams("update", {
          categoryID: catID,
          questionID: questionCheck.id,
          result: "true",
        });
      }
    }
  });
}

function generateAnswers(a) {
  let pageData = "";

  a.map((item) => {
    pageData += `
      <div class="quiz__main-exercise cpointer" data-id="${item.id}">
      <div class="quiz__main-exercise-logo">
         <span>${item.logo}</span>
      </div>
      <span class="select__span">${item.text}</span>
      </div>
      `;
  });

  quizSelects.innerHTML = pageData;
  callAnswerOrCategory("question");
}

function generateCategory(data) {
  let quiz__exercise_bg = document.querySelector(".quiz__exercise--bg");

  quiz__exercise_bg.innerHTML = "";

  let quizMainStart = document.querySelector(".quiz__main-start");
  quizMainStart.innerHTML = `
              <div class="main__start">
                  <h2 class="main__start-heading main__start--reg">Welcome to the</h2>
                  <h3 class="main__start-heading main__start--med">Frontend Quiz!</h3>
              </div>
              <p>Pick a subject to get started.</p>
    `;

  let pageData = "";
  data.map((item) => {
    let { id, logo, name } = item;
    pageData += `
        <div class="quiz__main-exercise cpointer" data-category-id="${id}">
            <div class="quiz__main-exercise-logo">
               <img src="${logo}" alt="">
            </div>
            <span>${name}</span>
        </div>
    `;
  });
  quizSelects.innerHTML = pageData;

  let quizMainExercises = document.querySelector(".quiz__main-btn");

  quizMainExercises.innerHTML = "";

  callAnswerOrCategory("category");
}

function generateQuestionPage(catID, questionID) {
  let question = generateById(catID, questionID);

  if (question) {
    let dataFind = data.find((item) => {
      return item.id == catID;
    });

    callProgressBar(catID);

    let quiz__exercise_bg = document.querySelector(".quiz__exercise--bg");

    quiz__exercise_bg.innerHTML = `
      <div class="quiz__main-exercise-logo">
        <img src="${dataFind.logo}" alt="">
      </div>
        <p>${dataFind.name}</p>
    `;
    generateAnswers(question.answers);
    let quizMainStart = document.querySelector(".quiz__main-start");
    quizMainStart.innerHTML = `
    <div class="main__start quiz__exercise--start">
              <p>Question ${question.id} of ${dataFind.page.length}</p>
              <h4 class="main__start-heading main__start--sll">${question.question}
              </h4>
           </div>
           <div class="main__start-level">
              <span class="start__degree" style="width:${progress}%"></span>
           </div>
    `;

    let quizMainExercises = document.querySelector(".quiz__main-btn");

    quizMainExercises.innerHTML = `
          <button id="nextBtn" type="button" class="btn__violet" onclick="nextBtn(this)">Submit Answer</button>
           <div class="quiz__error">
              <i class="icon-dismiss-block"></i>
              <span class="quiz__error-message">Please select an answer</span>
           </div>
    `;
    callAnswerOrCategory("question");
    nextBtn(question, catID);
  } else {
    setUrlParams("delete");
  }
}

function callProgressBar(catID) {
  let category = data.find((item) => item.id == catID);
  progress += +(100 / category.page.length);
}

function generateResultPage(catID) {
  let category = data.find((item) => item.id == catID);
  let question = category.page.length;

  let quiz__exercise_bg = document.querySelector(".quiz__exercise--bg");

  quiz__exercise_bg.innerHTML = `
      <div class="quiz__main-exercise-logo">
        <img src="${category.logo}" alt="">
      </div>
        <p>${category.name}</p>
    `;

  let quizMainStart = document.querySelector(".quiz__main-start");
  quizMainStart.innerHTML = `
            <div class="main__start">
                <h2 class="main__start-heading main__start--reg">Quiz completed</h2>
                <h3 class="main__start-heading main__start--med">You scored...</h3>
            </div>
    `;

  let quizMainExercises = document.querySelector(".quiz__main-btn");

  quizMainExercises.innerHTML = `
          <button id="playAgain" type="button" class="btn__violet">Play Again</button>
           <div class="quiz__error">
              <i class="icon-dismiss-block"></i>
              <span class="quiz__error-message">Please select an answer</span>
           </div>
    `;

  againPlay();

  quizSelects.innerHTML = `
          <div class="quiz__main-exercise center" data-category-id="3">
              <div class="quiz__exercise--bg">
                <div class="quiz__main-exercise-logo">
                  <img src="${category.logo}" alt="">
                </div>
                <p>${category.name}</p>
              </div>
              <div class="quiz__header-modes quiz__main-total">
                  <p class="main__start-heading quiz__main-progress">${result}</p>
                  <span class="quiz__main-result">out of ${question}</span>
              </div>
          </div>
    `;
}

function againPlay() {
  let refreshBtn = document.querySelector("#playAgain");
  refreshBtn.addEventListener("click", (e) => {
    setUrlParams("delete");
  });
}

checkInput.addEventListener("click", (e) => {
  if (checkInput.checked) {
    root.style.setProperty("--light-grey", "#313E51");
    root.style.setProperty("--quiz-bg", "#2D3949");
    root.style.setProperty("--pure-white", "#3B4D66");
    root.style.setProperty("--dark-navy", "#FFF");
    quiz__bg.forEach((item) => {
      item.classList.add("filter");
    });
  } else {
    root.style.setProperty("--light-grey", "#F4F6FA");
    root.style.setProperty("--quiz-bg", "#EDF1F9");
    root.style.setProperty("--pure-white", "#FFF");
    root.style.setProperty("--dark-navy", "#313E51");
    quiz__bg.forEach((item) => {
      item.classList.remove("filter");
    });
  }
});

if (params.categoryID && params.questionID && !params.result) {
  generateQuestionPage(params.categoryID, params.questionID);
}

if (!params.categoryID && !params.questionID) {
  generateCategory(data);
}

if (params.categoryID && params.questionID && params.result) {
  generateResultPage(params.categoryID);
}
