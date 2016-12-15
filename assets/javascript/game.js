//variables
//================================================================

//all the questions and their answers
var questions=[{
	question:"Where Does 'The Lion King' Take Place?",
	choices:["Africa","Pallet Town", "Neverland", "Atlantis"],
	correctAnswer:0,
}, {
	question:"What Is The Age Of Ariel In The Little Mermaid?",
	choices:[13,15,16,18],
	correctAnswer:2,
}, {
	question:"Aladdin Is Also Known As...?",
	choices:["Jaffar","The Genie", "Raja", "The Diamond In The Rough"],
	correctAnswer:3,
}, {
	question:"What Is The Name Of The Famous Male Mouse In Disney?",
	choices:["Goofy", "Mickey", "Minnie", "Pluto"],
	correctAnswer:1,
}, {
	question:"Why Does Sebastian Think Ariel Should Stay 'Under The Sea'?",
	choices:["Up on the shore they work all day Out in the sun they slave away", "Down here all the fish is happy. And soft through the waves they roll", "Nobody beat us fry, us and eat us","All Of The Above"],
	correctAnswer:3,
}];

//tracks which question selected on
var currentQuestion=0;
//tracks the number of correct answers
var correctAnswers=0;
//tracks the number of wrong answers
var wrongAnswers=0;
//boullion 
var quizOver=false;

//tracks

//debugging
for(let i=0; i<questions.length; i++){
console.log(questions[i]);
};

var timer= {
	
	time:30,

	start: function(){
		myTimer=setInterval(timer.count,1000)
	
	},

	stop: function(){
		clearInterval(myTimer);
	},
	
	count: function(){
		timer.time--;
		$("#timer").html("00:"+ timer.time);
	},
};


//Functions
//================================================================
function displayCurrentQuestion(){
	var chosenQuestion;
	var choice;
	
	//gets question...!!!!! so I kind of f-ed up this part
	for(i=0; i<questions.length;i++){
		chosenQuestion=questions[i].question;
		$("#questionDisplay").append(chosenQuestion);
	}
	//displays question onto questionDisplay div
	

	for(i=0;i<questions[i].choices.length;i++){
		choice=questions[i].choices[i];
		$('<li><input type="radio" value=' + i + ' name="dynradio"/> &nbsp;' + choice + '</li>').appendTo("#choiceDisplay");
		}

	//debuggin
	console.log(chosenQuestion);
	console.log(choice);
};




//Game Play
//================================================================
$(document).ready(function(){
	//display the first question
	$("#play").on("click", function(){
		displayCurrentQuestion();
		timer.start();
	});

});

