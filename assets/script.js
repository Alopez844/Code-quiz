let timeEl = document.querySelector("p.time");
let secondsLeft = 75;
let scoreEl = document.querySelector("#score");

// sections
const introEl = document.querySelector("#intro");

// section questions
//question section
const questionsEl = document.querySelector("#questions");
//where question goes
let questionEl = document.querySelector("#question");

let questionCount = 0;
// div yaynay
const yaynayEl = document.querySelector("#yaynay");

// section final
const finalEl = document.querySelector("#final");

let initialsInput = document.querySelector("#initials");

// section highscores
const highscoresEl = document.querySelector("#highscores");

let scoreListEl = document.querySelector("#score-list");
// array of scores
let scoreList = [];

// buttons
// start
const startBtn = document.querySelector("#start");
// answer button class
const ansBtn = document.querySelectorAll("button.ansBtn")
// answer1
const ans1Btn = document.querySelector("#answer1");
// answer2
const ans2Btn = document.querySelector("#answer2");
// answer3
const ans3Btn = document.querySelector("#answer3");
// answer4
const ans4Btn = document.querySelector("#answer4");
// submit-score
const submitScrBtn = document.querySelector("#submit-score");
// goback
const goBackBtn = document.querySelector("#goback");
// clearscores
const clearScrBtn = document.querySelector("#clearscores");
// view-scores
const viewScrBtn = document.querySelector("#view-scores");
