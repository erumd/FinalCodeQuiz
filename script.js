var questions = [{
    title: "What do you use to style your html",
    answers: ["CSS", "JavaScript", "Jquery", "GitHub"],
    correctAnswer: "css"
}, {
    title: "A function is a block of code designed to perform a particular _____?",
    answers:["Data", "Task", "Loop","Condition"],
    correctAnswer: "Task"
}, {
    title: "Which is NOT a semantic element?",
    answers: ["Header", "Navigation", "Aside", "Div"],
    correctAnswer2: "Div" 

}, {
title: "What are variables used to store?",
answers: ["Numbers", "Letters", "Data Values", "Functions"],
correctAnswer:"Data Values"
}, {
    title: "In conditional statements which words are NOT used?",
    answers: ["If", "Else", "Else If", "Than"],
    correctAnswer: "Than"
}, {
}, {
    
    title: "A function is a block of code designed to perform a particular _____?",
    answers:["Data", "Task", "Loop","Condition"],
    correctAnswer: "Task"
}
]








var time = 100;
var timer;
var startButton =  document.getElementById("start")
var seconds = document.getElementById("time")
var index = 0
var answersSection = document.getElementById("answers")


function start() {
    var instructionsDiv = document.getElementById("instructions") 
    instructionsDiv.setAttribute("class", "hide")
    timer = setInterval(countdown, 1000)
    displayQuestions();



}

startButton.onclick = start;

function countdown() {
    time = time-1;
   seconds.textContent = time;
   if (seconds <= 0 ) {
      clearInterval (timer);
   }
}

function displayQuestions() {
    var currentQuestion = questions[index]  
    var questionTitle = document.getElementById("title")
// .title because accessing an object within the array
    questionTitle.textContent = currentQuestion.title; 
    // answersSection.innerHTML = "";
    // looping through every answer of current question
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        var answerButton = document.createElement("button");
        console.log(currentQuestion.answers[i]);

        // "CSS", "JavaScript", "Jquery", "GitHub"
        // answerButton.setAttribute("class", "answers")
        answerButton.setAttribute("value", currentQuestion.answers[i]);
        answersSection.appendChild(answerButton);
    }
}





