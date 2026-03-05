const questions = [

{
question:" Which language runs in a web browser?",
answers:["Java","C","Python","JavaScript"],
correct:3
},

{
question:"What does CSS stand for?",
answers:[
"Central Style Sheets",
"Cascading Style Sheets",
"Cascading Simple Sheets",
"Cars SUVs Sailboats"
],
correct:1
},

{
question:"What does HTML stand for?",
answers:[
"HyperText Markup Language",
"Hyper Transfer Machine Language",
"Hyper Tool Markup Language",
"Hyperlink Text Machine Language"
],
correct:0
},

{
question:"Which company developed JavaScript?",
answers:[
"Microsoft",
"Netscape",
"Google",
"Oracle"
],
correct:1
},

{
question:"Which tag is used for images in HTML?",
answers:[
"<img>",
"<image>",
"<pic>",
"<src>"
],
correct:0
}

];

let shuffledQuestions = questions.sort(()=>Math.random()-0.5);

let currentQuestion = 0;
let score = 0;

let summary = [];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){

feedbackEl.textContent="";
answersEl.innerHTML="";

let q = shuffledQuestions[currentQuestion];

questionEl.textContent = q.question;

q.answers.forEach((answer,index)=>{

let btn = document.createElement("button");

btn.textContent = answer;

btn.onclick = ()=>selectAnswer(btn,index);

answersEl.appendChild(btn);

});

}

function selectAnswer(button,index){

let q = shuffledQuestions[currentQuestion];

let buttons = answersEl.querySelectorAll("button");

buttons.forEach(btn=>btn.disabled=true);

if(index === q.correct){

button.classList.add("correct");

feedbackEl.textContent="Correct!";

score++;

summary.push("✔ " + q.question);

}else{

button.classList.add("wrong");

buttons[q.correct].classList.add("correct");

feedbackEl.textContent="Wrong!";

summary.push("✖ " + q.question);

}

}

nextBtn.onclick = ()=>{

currentQuestion++;

if(currentQuestion < shuffledQuestions.length){

loadQuestion();

}else{

showResult();

}

};

function showResult(){

document.getElementById("quiz").classList.add("hidden");

document.getElementById("result").classList.remove("hidden");

document.getElementById("score").textContent =
"Score: " + score + " / " + questions.length;

let list="";

summary.forEach(item=>{
list += "<p>" + item + "</p>";
});

document.getElementById("summary").innerHTML=list;

}

loadQuestion();