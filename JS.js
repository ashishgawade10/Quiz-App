let questions=[

{
question:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language"
],
answer:"Hyper Text Markup Language"
},


{
question:"CSS is used for?",
options:[
"Programming",
"Styling",
"Database"
],
answer:"Styling"
},


{
question:"JavaScript is used for?",
options:[
"Adding functionality",
"Creating database",
"Operating system"
],
answer:"Adding functionality"
}

];


let current=0;
let score=0;
let answered=false;


let question=document.getElementById("question");
let options=document.getElementById("options");


function loadQuiz(){

answered=false;

let q=questions[current];

question.innerHTML=q.question;

options.innerHTML="";


q.options.forEach(function(option){


let btn=document.createElement("button");

btn.innerHTML=option;

btn.className="option";


btn.onclick=function(){


if(answered) return;

answered=true;


if(option==q.answer){

btn.style.background="#2ecc71";
btn.style.color="white";

score++;

}

else{

btn.style.background="#e74c3c";
btn.style.color="white";

}


};


options.appendChild(btn);


});


}



function nextQuestion(){


if(!answered){
alert("Select an answer first!");
return;
}


current++;


if(current < questions.length){

loadQuiz();

}

else{

document.querySelector(".container").innerHTML=

"<h1>Quiz Completed 🎉</h1>"+
"<h2>Your Score: "+score+"/"+questions.length+"</h2>";

}

}


loadQuiz();